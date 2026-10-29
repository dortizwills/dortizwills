const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const PORT = Number(process.env.PORT || 3000);
const ROOT = __dirname;
const rooms = new Map();
const MIME = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.svg':'image/svg+xml' };

const EXHIBITS = [
  {
    id:'portrait', title:'The Portrait Gallery', eyebrow:'EXHIBIT I · THE CONSERVATOR',
    intro:'The painted conservator has turned toward the empty plinth. Its gilded frame is warm to the touch. Four details refuse to agree.',
    facts:[
      {id:'hand', label:'The hand', truth:'A narrow brass key tied with a white pressed flower.', variants:['A brass key tied with a white flower.','A pressed flower pinned beneath the thumb.','A small mirror catching a strip of gold.','An empty gloved hand, curled around nothing.'], truthy:true},
      {id:'gaze',label:'The gaze',truth:'The painted eyes settle on a hairline seam in the east side of the frame.',variants:['The eyes look toward the eastern frame.','The eyes look down at the empty plinth.','The eyes follow you, wherever you stand.','The eyes are closed; a thin gold tear marks the cheek.'], truthy:true},
      {id:'clock',label:'The clock',truth:'The gallery clock stopped at 11:47, thirteen minutes before the final bell.',variants:['The clock stopped at 11:47.','The clock reads midnight exactly.','The clock has no hands, only a dark circle.','The clock reads 11:13, its minute hand trembling.'], truthy:true},
      {id:'inscription',label:'The inscription',truth:'“What is taken to keep the frame from opening is still inside it.”',variants:['“What is taken to keep the frame from opening is still inside it.”','“The east door opens for the one who leaves no shadow.”','“At the final bell, the keeper becomes the kept.”','“Return the flower to the soil beneath the glass.”'], truthy:true}
    ], answer:{item:'key', place:'frame', time:'11:47'},
    reveal:'Mara used the brass key to open a hidden catch in the east frame at 11:47. She hid the key inside the frame to keep the portrait from opening. The museum’s records call it a staged exit. But the portrait has begun to look out from the inside.'
  },
  {
    id:'doors', title:'The Hall of Doors', eyebrow:'EXHIBIT II · THE UNBUILT WING',
    intro:'A corridor has appeared where the floor plan shows a wall. Four doors carry marks that shift between visitors, but the museum’s old route notation has a rule.',
    facts:[
      {id:'rule',label:'Route notation',truth:'A valid route repeats no symbol and ends at the only door marked with a crescent.',variants:['A route repeats no symbol and ends at the crescent.','Follow the same symbol twice, then choose the brightest door.','Avoid the crescent; it marks a dead end.','The route is the sequence shown in the floor plan margin.'], truthy:true},
      {id:'first',label:'First mark',truth:'The first mark is a split circle.',variants:['A split circle.','A black feather.','A silver fish.','A tiny brass bell.'],truthy:true},
      {id:'middle',label:'Middle mark',truth:'The middle mark is a three-pronged star.',variants:['A three-pronged star.','A closed eye.','A white flower.','A keyhole shaped like a tear.'],truthy:true},
      {id:'last',label:'Last mark',truth:'The final door bears the crescent.',variants:['A crescent.','A split circle.','A three-pronged star.','A blank brass plate.'],truthy:true}
    ], answer:{route:'split circle → three-pronged star → crescent'},
    reveal:'The route notation was a curator’s safeguard: never repeat a mark, and finish at the crescent. Behind that door, the corridor continues into a space absent from every plan.'
  },
  {
    id:'memory', title:'The Room That Remembers', eyebrow:'EXHIBIT III · THE LAST BELL',
    intro:'A room assembles itself around three witness statements. Some details contradict because the room remembers its visitors; the fixed events leave a reliable sequence.',
    facts:[
      {id:'evidence1',label:'Ledger',truth:'Mara signed the bell ledger at 11:42, before the power failed.',variants:['Mara signed the ledger at 11:42, before the lights failed.','The ledger was signed after the final bell.','A visitor signed Mara’s name at midnight.','The ledger has no entry for that night.'],truthy:true},
      {id:'evidence2',label:'Fuse',truth:'The east gallery lights failed at 11:47.',variants:['The east gallery went dark at 11:47.','The bell rang before the lights failed.','Only the west gallery lost power.','The lights never went out.'],truthy:true},
      {id:'evidence3',label:'Bell',truth:'The final bell rang at midnight, after Mara vanished from the staff corridor.',variants:['The bell rang at midnight, after Mara vanished.','Mara vanished after sunrise.','The bell rang at 11:47.','The bell did not ring that night.'],truthy:true},
      {id:'memory',label:'Room memory',truth:'The museum’s clock stopped at 11:47; the accounts about what Mara carried are perception-dependent.',variants:['The clock stopped at 11:47; accounts of what she carried vary.','Every witness remembers the same object.','The clock stopped at midnight.','The room remembers nothing.'],truthy:true}
    ], answer:{sequence:'11:42 ledger → 11:47 lights fail → midnight bell'},
    reveal:'Mara’s disappearance was staged in the records, but not in the room. The museum took her between the power failure and the final bell. The bell has been waiting for someone to put the sequence back together.'
  }
];

function safeRoom(room, player) {
  const exhibit = EXHIBITS[room.exhibitIndex];
  const me = room.players.get(player.id);
  return {
    code:room.code, phase:room.phase, hostId:room.hostId, exhibitIndex:room.exhibitIndex,
    exhibit:{id:exhibit.id,title:exhibit.title,eyebrow:exhibit.eyebrow,intro:exhibit.intro},
    players:[...room.players.values()].map(p=>({id:p.id,name:p.name,ready:p.ready,distortion:p.id===player.id?p.distortion:undefined,online:p.online})),
    me:{id:me.id,name:me.name,role:me.role,distortion:me.distortion,observations:me.observations.map(o=>({id:o.id,label:o.label,index:o.index,view:o.variants[variantIndex(room,me,o)]}))},
    evidence:room.evidence.map(e=>({...e, own:e.playerId===player.id})), anchors:room.anchors,
    voteCount:Object.keys(room.votes).length, hasVoted:!!room.votes[player.id], total:[...room.players.values()].filter(p=>p.online).length,
    publicReveal:room.publicReveal||{}, publicHint:room.publicHint||null,
    notice:room.notice||null, score:room.score||0, exhibitsSolved:room.exhibitsSolved||0, result:room.result, revealed:room.revealed, startedAt:room.startedAt,
    deadline:room.deadline, version:room.version
  };
}
function emit(room) { room.version++; for (const fn of room.listeners) fn(); }
function roomCode(){ return crypto.randomBytes(3).toString('hex').toUpperCase(); }
function token(){ return crypto.randomBytes(24).toString('hex'); }
function variantIndex(room,p,o){const band=Math.min(3,Math.floor(p.distortion/25));return band===0?0:(band+o.index+p.slot+(room.seed%o.variants.length))%o.variants.length;}
function json(res, status, data){res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});res.end(JSON.stringify(data));}
function readBody(req){return new Promise((resolve,reject)=>{let s='';req.on('data',c=>{s+=c;if(s.length>10000)reject(new Error('Request too large'));});req.on('end',()=>{try{resolve(JSON.parse(s||'{}'));}catch(e){reject(e);}});});}
function playerAuth(room, body){const p=room?.players.get(body.playerId); return p && p.token===body.token ? p : null;}
function publicError(res,code,msg){json(res,code,{error:msg});}
function assign(room){
  const ex=EXHIBITS[room.exhibitIndex]; let slot=0;
  for(const p of room.players.values()){
    p.slot=slot++; p.distortion=room.exhibitIndex===0?14+((room.seed+p.slot*11)%9):Math.min(85,p.distortion+18); p.distortionBand=Math.min(3,Math.floor(p.distortion/25));
    p.role=['The Keeper','The Witness','The Restorer','The Night Clerk'][p.slot%4];
    p.observations=ex.facts.map((f,i)=>({...f,index:i})).filter((_,i)=>i%room.players.size===p.slot%room.players.size);
    if(p.observations.length===0)p.observations=[{...ex.facts[p.slot%ex.facts.length],index:p.slot%ex.facts.length}];
  }
}
function start(room){room.phase='investigating';room.evidence=[];room.sharedClues.clear();room.submissions.clear();room.votes={};room.result=null;room.revealed=null;room.notice=null;room.publicReveal={};room.publicHint=null;room.recoveryUsed=false;room.deadline=Date.now()+170000;room.startedAt=Date.now();assign(room);emit(room);}
function endExhibit(room,success){if(success){const corroborated=new Set(room.evidence.map(e=>e.factId)).size;room.exhibitScore=100+room.anchors*10+Math.min(corroborated,4)*5;room.score=(room.score||0)+room.exhibitScore;room.exhibitsSolved=(room.exhibitsSolved||0)+1;}room.phase=success?(room.exhibitIndex===EXHIBITS.length-1?'won':'solved'):'failed';room.result=success?'The reconstruction holds.':'The reconstruction does not hold.';room.revealed=EXHIBITS[room.exhibitIndex].reveal;emit(room);}
function resolveVotes(room){const active=[...room.players.values()].filter(p=>p.online);if(Object.keys(room.votes).length<active.length){emit(room);return;}const values=Object.values(room.votes),same=(a,b)=>Object.keys(a).length===Object.keys(b).length&&Object.keys(a).every(k=>a[k]===b[k]),unanimous=values.length>0&&values.every(v=>same(v,values[0])),answer=EXHIBITS[room.exhibitIndex].answer;if(unanimous&&same(values[0],answer)){endExhibit(room,true);return;}room.votes={};room.submissions.clear();room.attempts=(room.attempts||0)+1;room.notice='The reconstruction does not hold. Revisit the evidence and discuss what each visitor saw.';if(room.attempts>=2&&!room.recoveryUsed){room.anchors=Math.min(4,room.anchors+1);room.recoveryUsed=true;room.attempts=0;room.publicHint='A fresh Anchor returns. Re-read the shared clues and compare details you have not verified.';}emit(room);}

const server=http.createServer(async(req,res)=>{
  const url=new URL(req.url,'http://localhost');
  if(req.method==='OPTIONS'){res.writeHead(204);return res.end();}
  try{
    if(req.method==='GET'&&url.pathname==='/api/health')return json(res,200,{ok:true,rooms:rooms.size});
    if(req.method==='POST'&&url.pathname==='/api/rooms'){
      const body=await readBody(req);const name=String(body.name||'Night Guest').trim().slice(0,24)||'Night Guest';let code;do{code=roomCode()}while(rooms.has(code));
      const id=crypto.randomUUID(),secret=token();const p={id,token:secret,name,ready:true,online:true,distortion:0,slot:0,role:'Host',observations:[]};
      const room={code,hostId:id,players:new Map([[id,p]]),phase:'lobby',exhibitIndex:0,anchors:3,evidence:[],sharedClues:new Set(),submissions:new Set(),votes:{},listeners:new Set(),seed:crypto.randomInt(1,1000000),version:0,result:null,revealed:null,deadline:null,startedAt:null,recoveryUsed:false,score:0,exhibitsSolved:0,createdAt:Date.now()};rooms.set(code,room);return json(res,201,{code,playerId:id,token:secret});
    }
    if(req.method==='POST'&&url.pathname==='/api/join'){
      const body=await readBody(req),code=String(body.code||'').toUpperCase().replace(/[^A-Z0-9]/g,'');const room=rooms.get(code);if(!room)return publicError(res,404,'That room code was not found.');if(room.phase!=='lobby')return publicError(res,409,'This investigation is already underway.');if(room.players.size>=4)return publicError(res,409,'This room is full.');
      const id=crypto.randomUUID(),secret=token(),name=String(body.name||'Night Guest').trim().slice(0,24)||'Night Guest';room.players.set(id,{id,token:secret,name,ready:true,online:true,distortion:0,slot:room.players.size,role:'Visitor',observations:[]});emit(room);return json(res,201,{code,playerId:id,token:secret});
    }
    if(req.method==='GET'&&url.pathname==='/api/events'){
      const code=(url.searchParams.get('code')||'').toUpperCase(),room=rooms.get(code),id=url.searchParams.get('playerId'),secret=url.searchParams.get('token'),p=room?.players.get(id);if(!p||p.token!==secret)return publicError(res,401,'Reconnect details are invalid.');
      p.online=true;res.writeHead(200,{'Content-Type':'text/event-stream','Cache-Control':'no-cache, no-transform','Connection':'keep-alive'});res.write('retry: 2000\n');const push=()=>res.write(`data: ${JSON.stringify(safeRoom(room,p))}\n\n`);room.listeners.add(push);emit(room);const heartbeat=setInterval(()=>res.write(':keepalive\n\n'),20000);req.on('close',()=>{clearInterval(heartbeat);room.listeners.delete(push);p.online=false;delete room.votes[p.id];room.submissions.delete('answer:'+p.id);if(room.hostId===p.id){const replacement=[...room.players.values()].find(other=>other.online);if(replacement)room.hostId=replacement.id;}if(room.phase==='investigating')resolveVotes(room);else emit(room);});return;
    }
    if(req.method==='POST'&&url.pathname==='/api/action'){
      const b=await readBody(req),room=rooms.get(String(b.code||'').toUpperCase()),p=playerAuth(room,b);if(!p)return publicError(res,401,'Your room session expired. Rejoin with your room code.');if(room.phase==='lobby'){
        if(b.type==='start'){if(p.id!==room.hostId)return publicError(res,403,'Only the host can begin.');if(room.players.size<2)return publicError(res,409,'Invite at least one more visitor before starting.');start(room);return json(res,200,{ok:true});}
        if(b.type==='leave'){room.players.delete(p.id);if(room.players.size===0)rooms.delete(room.code);else{if(room.hostId===p.id)room.hostId=room.players.keys().next().value;emit(room);}return json(res,200,{ok:true});}
        return publicError(res,409,'That action is not available in the lobby.');
      }
      if(b.type==='share'){
        if(room.phase!=='investigating')return publicError(res,409,'This exhibit is not accepting evidence.');
        const ex=EXHIBITS[room.exhibitIndex],fact=ex.facts.find(x=>x.id===b.factId);if(!fact||!p.observations.some(o=>o.id===fact.id))return publicError(res,403,'That observation is not in your private notes.');if(room.sharedClues.has(p.id+':'+fact.id))return publicError(res,409,'You already shared that observation.');room.sharedClues.add(p.id+':'+fact.id);room.evidence.push({id:crypto.randomUUID(),factId:fact.id,label:fact.label,text:fact.variants[variantIndex(room,p,fact)],playerId:p.id,playerName:p.name});room.notice=null;emit(room);return json(res,200,{ok:true});
      }
      if(b.type==='anchor-verify'||b.type==='anchor-reveal'||b.type==='anchor-stabilize'){
        if(room.anchors<1)return publicError(res,409,'The group has no Anchors left.');if(room.phase!=='investigating')return publicError(res,409,'Anchors can only be used during an investigation.');
        if(b.type==='anchor-verify'){const ev=room.evidence.find(e=>e.id===b.evidenceId);if(!ev)return publicError(res,404,'Share the observation first.');if(ev.verified)return publicError(res,409,'That observation is already verified.');room.anchors--;ev.verified=true;ev.matchesTruth=exTruth(room,ev.factId,ev.text);ev.canonical=EXHIBITS[room.exhibitIndex].facts.find(f=>f.id===ev.factId).truth;}
        if(b.type==='anchor-reveal'){if(!['item','place','time','route','sequence'].includes(b.field))return publicError(res,400,'Choose an available reliable fragment.');if(room.publicReveal?.[b.field])return publicError(res,409,'That reliable fact is already revealed.');room.anchors--;room.publicReveal=room.publicReveal||{};room.publicReveal[b.field]=EXHIBITS[room.exhibitIndex].answer[b.field];}
        if(b.type==='anchor-stabilize'){const target=room.players.get(b.targetId);if(!target)return publicError(res,404,'Visitor not found.');if(target.distortion===0)return publicError(res,409,'That visitor is already steady.');room.anchors--;target.distortion=Math.max(0,target.distortion-16);target.distortionBand=Math.floor(target.distortion/25);}
        emit(room);return json(res,200,{ok:true});
      }
      if(b.type==='solve'){
        if(room.phase!=='investigating')return publicError(res,409,'This exhibit is not accepting answers.');if(Object.keys(b.answer||{}).length!==Object.keys(EXHIBITS[room.exhibitIndex].answer).length)return publicError(res,400,'Complete each part of the reconstruction.');
        if(room.submissions.has('answer:'+p.id))return publicError(res,409,'Your group answer has already been recorded.');room.submissions.add('answer:'+p.id);room.votes[p.id]=b.answer;
        resolveVotes(room);return json(res,200,{ok:true,waiting:room.phase==='investigating'&&!room.votes[p.id]});
      }
      if(b.type==='next') {if(p.id!==room.hostId)return publicError(res,403,'The host advances the investigation.');if(room.phase!=='solved')return publicError(res,409,'Finish the exhibit first.');room.exhibitIndex++;room.anchors=Math.max(1,room.anchors);room.attempts=0;start(room);return json(res,200,{ok:true});}
      if(b.type==='rematch'){if(p.id!==room.hostId)return publicError(res,403,'The host begins a rematch.');if(!['won','failed'].includes(room.phase))return publicError(res,409,'Complete the mystery before starting a rematch.');room.exhibitIndex=0;room.anchors=3;room.score=0;room.exhibitsSolved=0;room.publicReveal={};room.publicHint=null;room.attempts=0;start(room);return json(res,200,{ok:true});}
      if(b.type==='hint'){if(room.phase!=='investigating')return publicError(res,409,'The recovery option is available during an investigation.');if(!room.recoveryUsed){room.anchors=Math.min(4,room.anchors+1);room.recoveryUsed=true;room.publicHint='Recovery Anchor restored. Compare at least one observation from each visitor before submitting again.';}emit(room);return json(res,200,{ok:true});}
      return publicError(res,400,'Unknown action.');
    }
    const rel=url.pathname==='/'?'index.html':decodeURIComponent(url.pathname.slice(1));const file=path.resolve(ROOT,'public',rel);if(!file.startsWith(path.resolve(ROOT,'public')+path.sep)&&file!==path.resolve(ROOT,'public','index.html'))return publicError(res,403,'Forbidden');fs.readFile(file,(err,data)=>{if(err)return publicError(res,404,'Not found');res.writeHead(200,{'Content-Type':MIME[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(data);});
  }catch(e){publicError(res,400,e.message||'Invalid request.');}
});
setInterval(()=>{for(const room of rooms.values()){if(room.phase==='investigating'&&room.deadline<=Date.now()){room.result='The final bell has rung. The museum keeps the unanswered question.';endExhibit(room,false);}else if(room.phase==='lobby'&&Date.now()-room.createdAt>30*60*1000&&room.listeners.size===0)rooms.delete(room.code);}},1000).unref();
function exTruth(room,id,text){const fact=EXHIBITS[room.exhibitIndex].facts.find(x=>x.id===id);return !!fact&&fact.variants.includes(text)&&fact.variants.indexOf(text)===0;}
server.listen(PORT,'0.0.0.0',()=>console.log(`AFTERHOURS listening on ${PORT}`));
