const assert = require('node:assert/strict');
const base = 'http://127.0.0.1:3000';
async function post(path, body) {
  const r = await fetch(base + path, {method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(body)});
  const j = await r.json(); assert.equal(r.ok,true,JSON.stringify(j)); return j;
}
async function status(path,body){const r=await fetch(base+path,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(body)});return r.status;}
async function connect(s) {
  const r = await fetch(`${base}/api/events?code=${s.code}&playerId=${s.playerId}&token=${s.token}`);
  assert.equal(r.status,200); return {reader:r.body.getReader(),buffer:''};
}
async function next(c) {
  while(true){
    const {value,done}=await c.reader.read(); if(done)throw Error('stream ended');
    c.buffer+=new TextDecoder().decode(value); const i=c.buffer.indexOf('\n\n');
    if(i>=0){const frame=c.buffer.slice(0,i);c.buffer=c.buffer.slice(i+2);const line=frame.split('\n').find(x=>x.startsWith('data: '));if(line)return JSON.parse(line.slice(6));}
  }
}
async function until(c,predicate){let value;do{value=await next(c);}while(!predicate(value));return value;}
(async()=>{
  const a=await post('/api/rooms',{name:'Ada'}), b=await post('/api/join',{name:'Bram',code:a.code});
  let ca=await connect(a), cb=await connect(b); const initialA=await next(ca), initialB=await next(cb);
  assert.equal('answer' in initialA,false);
  await post('/api/action',{...a,type:'start'});
  const liveA=await until(ca,s=>s.phase==='investigating'),liveB=await until(cb,s=>s.phase==='investigating');assert.equal(liveA.phase,'investigating');assert.equal(liveB.phase,'investigating');
  assert.equal(liveA.me.observations.length,2);assert.equal(liveB.me.observations.length,2);
  assert.notDeepEqual(liveA.me.observations.map(x=>x.id),liveB.me.observations.map(x=>x.id));
  for(const obs of liveA.me.observations)assert.equal('truth' in obs,false);
  assert.equal(liveA.players.some(p=>'observations' in p),false);assert.equal(liveA.players.some(p=>'role' in p&&p.id!==a.playerId),false);
  await cb.reader.cancel();await until(ca,s=>s.players.find(p=>p.id===b.playerId)?.online===false);cb=await connect(b);const refreshed=await next(cb);assert.deepEqual(refreshed.me.observations.map(x=>[x.id,x.view]),liveB.me.observations.map(x=>[x.id,x.view]));await until(ca,s=>s.players.find(p=>p.id===b.playerId)?.online===true);
  const sharedFact=liveB.me.observations[0].id;
  await post('/api/action',{...b,type:'share',factId:sharedFact});
  const sharedA=await next(ca),sharedB=await next(cb);assert.equal(sharedA.evidence.length,1);assert.equal(sharedB.evidence.length,1);
  assert.equal(sharedA.evidence[0].own,false);assert.equal(sharedB.evidence[0].own,true);
  assert.equal(await status('/api/action',{...b,type:'share',factId:sharedFact}),409);
  const ev=sharedA.evidence[0];await post('/api/action',{...a,type:'anchor-verify',evidenceId:ev.id});
  const [verified,verifiedA]=await Promise.all([next(cb),next(ca)]);assert.equal(verified.anchors,2);assert.equal(verified.evidence[0].verified,true);assert.equal(verifiedA.evidence[0].verified,true);
  assert.equal(await status('/api/action',{...a,type:'anchor-verify',evidenceId:ev.id}),409);
  const answer={item:'key',place:'frame',time:'11:47'};
  await post('/api/action',{...a,type:'solve',answer});const [votedA,votedB]=await Promise.all([next(ca),next(cb)]);assert.equal(votedA.hasVoted,true);assert.equal(votedA.phase,'investigating');assert.equal(votedB.voteCount,1);
  await post('/api/action',{...b,type:'solve',answer});const [doneA,doneB]=await Promise.all([next(ca),next(cb)]);assert.equal(doneA.phase,'solved');assert.equal(doneB.phase,'solved');assert.ok(doneA.revealed);
  await post('/api/action',{...a,type:'next'});let [secondA,second]=await Promise.all([next(ca),next(cb)]);assert.equal(second.exhibitIndex,1);assert.equal(second.phase,'investigating');assert.ok(second.me.distortion>liveB.me.distortion);
  const answer2={route:'split circle → three-pronged star → crescent'};
  await post('/api/action',{...a,type:'solve',answer:answer2});[secondA,second]=await Promise.all([next(ca),next(cb)]);assert.equal(second.voteCount,1);
  await post('/api/action',{...b,type:'solve',answer:answer2});[secondA,second]=await Promise.all([next(ca),next(cb)]);assert.equal(second.phase,'solved');
  await post('/api/action',{...a,type:'next'});let [thirdA,third]=await Promise.all([next(ca),next(cb)]);assert.equal(third.exhibitIndex,2);
  const answer3={sequence:'11:42 ledger → 11:47 lights fail → midnight bell'};
  await post('/api/action',{...a,type:'solve',answer:answer3});[thirdA,third]=await Promise.all([next(ca),next(cb)]);assert.equal(third.voteCount,1);
  await post('/api/action',{...b,type:'solve',answer:answer3});[thirdA,third]=await Promise.all([next(ca),next(cb)]);assert.equal(third.phase,'won');assert.ok(third.score>0);assert.equal(third.exhibitsSolved,3);
  await ca.reader.cancel();const transferred=await next(cb);assert.equal(transferred.hostId,b.playerId);
  await post('/api/action',{...b,type:'rematch'});const rematch=await next(cb);assert.equal(rematch.phase,'investigating');assert.equal(rematch.exhibitIndex,0);assert.equal(rematch.anchors,3);assert.equal(rematch.total,1);
  await post('/api/action',{...b,type:'solve',answer});const recovered=await next(cb);assert.equal(recovered.phase,'solved');
  console.log('PASS: room lifecycle, private clue isolation, deterministic reconnect, synchronized decisions, duplicate-action rejection, Anchor verification, all three exhibits, group scoring, host handoff, rematch, and continuing with the remaining online visitor.');
  await cb.reader.cancel();
})().catch(e=>{console.error(e);process.exit(1);});
