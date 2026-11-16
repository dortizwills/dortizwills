import { useState } from "react";

const COLORS = {
  bg: "#0D1117", surface: "#161B22", card: "#1C2330", border: "#2A3441",
  accent: "#FF5D3B", accentSoft: "#FF5D3B22",
  teal: "#2DD4BF", tealSoft: "#2DD4BF18",
  amber: "#F59E0B", amberSoft: "#F59E0B18",
  purple: "#A78BFA", purpleSoft: "#A78BFA18",
  green: "#4ADE80", greenSoft: "#4ADE8018",
  muted: "#6E7F96", text: "#E6EDF3", textSoft: "#9BA8B5",
};

const yt = (label, q) => ({ url: "https://www.youtube.com/results?search_query=" + encodeURIComponent(q), label, search: true });
const VIDEO_LINKS = {
  // Confirmed: the result title matched the exercise
  "Standing quad stretch": { url: "https://www.youtube.com/watch?v=kia2OzZiwqw", label: "Standing Quad Stretch Tutorial - Proper Form" },
  "Quad stretch": { url: "https://www.youtube.com/watch?v=kzAsm4WQqvQ", label: "How To Do A Standing Quad Stretch" },
  "Seated hamstring stretch": { url: "https://www.youtube.com/watch?v=oJX8EKF3TqM", label: "Seated Forward Fold - Beginner Hamstring Stretch" },
  "Standing hamstring": { url: "https://www.youtube.com/watch?v=QZC5kDtZTbc", label: "Hamstring Stretch Tutorial" },
  "Hamstring stretch": { url: "https://www.youtube.com/watch?v=QZC5kDtZTbc", label: "Hamstring Stretch Tutorial" },
  "Foam roll": { url: "https://www.youtube.com/watch?v=vL4hHo7PMp8", label: "15 Minute Guided Foam Rolling for Runners" },
  // Not confirmed: opens YouTube search results for the exact move
  "Pigeon pose": yt("Pigeon pose for runners", "pigeon pose stretch for runners"),
  "IT band stretch": yt("IT band stretch for runners", "IT band stretch for runners"),
  "Hip flexor stretch": yt("Hip flexor stretch for runners", "hip flexor stretch for runners"),
  "Calf stretch on wall": yt("Wall calf stretch", "wall calf stretch runners"),
  "Calf stretch wall": yt("Wall calf stretch", "wall calf stretch runners"),
  "Calf stretch": yt("Calf stretch for runners", "calf stretch for runners"),
  "Figure-four glute stretch": yt("Figure-four glute stretch", "figure four glute stretch"),
  "Figure-four stretch": yt("Figure-four glute stretch", "figure four glute stretch"),
  "Glute stretch": yt("Figure-four glute stretch", "figure four glute stretch"),
  "Ankle circles": yt("Ankle circles", "ankle circles mobility exercise"),
  "Single-leg glute bridge": yt("Single-leg glute bridge", "single leg glute bridge form"),
  "Glute bridges": yt("Glute bridge", "glute bridge form"),
  "Standing calf raise with weights": yt("Dumbbell calf raise", "standing dumbbell calf raise form"),
  "Calf raise": yt("Calf raises for shin splints", "calf raises for shin splints runners"),
  "Goblet squat": yt("Goblet squat", "goblet squat dumbbell form"),
  "Reverse lunge": yt("Reverse lunge", "dumbbell reverse lunge form"),
  "Banded lateral walk": yt("Banded lateral walk", "banded lateral walk form"),
  "Banded toe raise": yt("Banded toe raise (tibialis)", "resistance band tibialis toe raise"),
  "Romanian deadlift": yt("Dumbbell Romanian deadlift", "dumbbell romanian deadlift form"),
  "Bent-over row": yt("Dumbbell bent-over row", "dumbbell bent over row form"),
  "Banded pull-apart": yt("Banded pull-apart", "resistance band pull apart form"),
  "Overhead press": yt("Dumbbell overhead press", "dumbbell overhead press form"),
  "Dead bug": yt("Dead bug", "dead bug exercise form"),
  "Pallof press": yt("Band Pallof press", "resistance band pallof press form"),
  "cycling": yt("Low-impact cross-training", "low impact cross training for runners cycling"),
  "swimming": yt("Swimming for runners", "swimming cross training for runners beginners"),
};

function findVideoLink(stretchText) {
  for (const [key, val] of Object.entries(VIDEO_LINKS)) {
    if (stretchText.toLowerCase().includes(key.toLowerCase())) return val;
  }
  return null;
}

const STRIDES_STEPS = [
  { num: 1, phase: "Build-up", duration: "0–10s", detail: "Start from a jog, gradually accelerate over 10 seconds to about 85–90% of your top speed. Focus on smooth, relaxed form — don't sprint from the gun.", color: "#2DD4BF" },
  { num: 2, phase: "Hold",     duration: "10–20s", detail: "Maintain that fast-but-controlled speed for the middle 10 seconds. You should feel quick and light — fast turnover, tall posture, arms driving forward and back (not crossing your body).", color: "#A78BFA" },
  { num: 3, phase: "Wind-down",duration: "20–30s", detail: "Gradually decelerate over the final 10 seconds back to an easy jog. Don't slam the brakes — let your speed bleed off naturally.", color: "#F59E0B" },
  { num: 4, phase: "Rest",     duration: "60–90s walk/jog", detail: "Walk or jog slowly between each stride to fully recover. You should feel ready to go again before starting the next one. Do this 4 times total.", color: "#6E7F96" },
];

const STRIDES_TIPS = [
  { icon: "📍", tip: "Find a flat, straight stretch of road or path — about 80–100 meters long." },
  { icon: "🏃", tip: "Stay relaxed. Your jaw, shoulders and hands should be loose — imagine holding potato chips without crushing them." },
  { icon: "⏱️", tip: "Do strides at the END of your easy run, never at the start when cold." },
  { icon: "👁️", tip: "Look ahead, not down. Keep your gaze about 20 meters in front of you." },
  { icon: "💨", tip: "Aim for a fast, light footstrike — land under your hips, not out in front." },
];

function StridesGuide({ onClose }) {
  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.75)", zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}
      onClick={onClose}>
      <div style={{ background:COLORS.surface, border:`1px solid ${COLORS.border}`, borderRadius:16, maxWidth:520, width:"100%", maxHeight:"85vh", overflowY:"auto", padding:24 }}
        onClick={e => e.stopPropagation()}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
          <div>
            <div style={{ fontSize:18, fontWeight:800, color:COLORS.text }}>How to Run Strides</div>
            <div style={{ fontSize:12, color:COLORS.muted, marginTop:2 }}>4×30 seconds — step by step</div>
          </div>
          <button onClick={onClose} style={{ background:COLORS.card, border:`1px solid ${COLORS.border}`, borderRadius:8, color:COLORS.muted, fontSize:18, width:32, height:32, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>×</button>
        </div>

        <div style={{ background:COLORS.card, borderRadius:10, padding:"12px 14px", marginBottom:16, fontSize:12, color:COLORS.textSoft, lineHeight:1.6 }}>
          <b style={{color:COLORS.text}}>What are strides?</b> Short, controlled accelerations done at the end of an easy run. They wake up your fast-twitch muscles, improve running form, and build speed without tiring you out. Think of them as a gentle preview of faster running — not an all-out sprint.
        </div>

        {/* Step-by-step timeline */}
        <div style={{ fontSize:12, fontWeight:700, color:COLORS.muted, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:10 }}>One Stride (30 seconds)</div>
        <div style={{ display:"flex", flexDirection:"column", gap:0, marginBottom:18, position:"relative" }}>
          {STRIDES_STEPS.map((s, i) => (
            <div key={i} style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", flexShrink:0 }}>
                <div style={{ width:32, height:32, borderRadius:"50%", background:`${s.color}22`, border:`2px solid ${s.color}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:800, color:s.color }}>
                  {s.num === 4 ? "↺" : s.num}
                </div>
                {i < STRIDES_STEPS.length - 1 && <div style={{ width:2, height:28, background:`${s.color}44`, margin:"2px 0" }} />}
              </div>
              <div style={{ paddingBottom:i < STRIDES_STEPS.length - 1 ? 0 : 0, marginBottom: i < STRIDES_STEPS.length - 1 ? 0 : 0 }}>
                <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:3 }}>
                  <span style={{ fontSize:13, fontWeight:700, color:s.color }}>{s.phase}</span>
                  <span style={{ fontSize:11, color:COLORS.muted, background:COLORS.card, border:`1px solid ${COLORS.border}`, borderRadius:6, padding:"1px 7px" }}>{s.duration}</span>
                </div>
                <div style={{ fontSize:12, color:COLORS.textSoft, lineHeight:1.55, paddingBottom:14 }}>{s.detail}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual speed bar */}
        <div style={{ marginBottom:18 }}>
          <div style={{ fontSize:11, fontWeight:700, color:COLORS.muted, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:8 }}>Speed Profile (one stride)</div>
          <div style={{ background:COLORS.card, borderRadius:8, padding:"12px 14px" }}>
            <div style={{ display:"flex", alignItems:"flex-end", gap:2, height:48, marginBottom:6 }}>
              {[15,30,50,70,88,95,90,88,85,70,50,30,15].map((h,i) => {
                const hue = h < 40 ? COLORS.teal : h < 75 ? COLORS.purple : COLORS.accent;
                return <div key={i} style={{ flex:1, height:`${h}%`, background:hue, borderRadius:"3px 3px 0 0", opacity:0.8 }} />;
              })}
            </div>
            <div style={{ display:"flex", justifyContent:"space-between", fontSize:10, color:COLORS.muted }}>
              <span style={{color:COLORS.teal}}>Build-up</span>
              <span style={{color:COLORS.purple}}>Hold fast</span>
              <span style={{color:COLORS.amber}}>Wind-down</span>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div style={{ fontSize:12, fontWeight:700, color:COLORS.muted, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:8 }}>Form Tips</div>
        <div style={{ display:"flex", flexDirection:"column", gap:6, marginBottom:18 }}>
          {STRIDES_TIPS.map((t, i) => (
            <div key={i} style={{ display:"flex", gap:10, alignItems:"flex-start", background:COLORS.card, borderRadius:8, padding:"9px 12px" }}>
              <span style={{ fontSize:16, flexShrink:0 }}>{t.icon}</span>
              <span style={{ fontSize:12, color:COLORS.textSoft, lineHeight:1.5 }}>{t.tip}</span>
            </div>
          ))}
        </div>

        {/* Full workout example */}
        <div style={{ background:`${COLORS.accent}0d`, border:`1px solid ${COLORS.accent}33`, borderRadius:10, padding:"12px 14px" }}>
          <div style={{ fontSize:12, fontWeight:700, color:COLORS.accent, marginBottom:8 }}>Full 4×30s Workout Example</div>
          {[
            { step:"Easy run",          time:"~20–30 min", note:"Conversational pace the whole way" },
            { step:"Stride 1",          time:"30 sec fast", note:"Build → hold → wind-down on flat stretch" },
            { step:"Recovery jog/walk", time:"60–90 sec", note:"Catch your breath fully" },
            { step:"Stride 2",          time:"30 sec fast", note:"Same effort as stride 1" },
            { step:"Recovery jog/walk", time:"60–90 sec", note:"" },
            { step:"Stride 3",          time:"30 sec fast", note:"" },
            { step:"Recovery jog/walk", time:"60–90 sec", note:"" },
            { step:"Stride 4",          time:"30 sec fast", note:"Last one — make it count!" },
            { step:"Cool-down walk",    time:"3–5 min", note:"Then stretch" },
          ].map((r, i) => (
            <div key={i} style={{ display:"flex", gap:10, padding:"5px 0", borderBottom: i < 8 ? `1px solid ${COLORS.border}` : "none" }}>
              <span style={{ fontSize:12, fontWeight:600, color: r.step.includes("Stride") ? COLORS.accent : COLORS.text, minWidth:130 }}>{r.step}</span>
              <span style={{ fontSize:11, color:COLORS.muted, minWidth:80 }}>{r.time}</span>
              {r.note && <span style={{ fontSize:11, color:COLORS.textSoft }}>{r.note}</span>}
            </div>
          ))}
        </div>

        <button onClick={onClose} style={{ marginTop:16, width:"100%", padding:"11px", background:COLORS.accent, border:"none", borderRadius:10, color:"white", fontWeight:700, fontSize:14, cursor:"pointer" }}>
          Got it — back to training plan
        </button>
      </div>
    </div>
  );
}


function VideoLink({ text, onPlay }) {
  const link = findVideoLink(text);
  if (!link) return null;
  if (!link.search) {
    const videoId = new URL(link.url).searchParams.get("v");
    return (
      <button type="button" onClick={() => onPlay({ ...link, videoId })}
        style={{ display:"inline-flex", alignItems:"center", gap:4, fontSize:11, color:"#FF0000", background:"#FF000015", border:"1px solid #FF000030", borderRadius:6, padding:"2px 7px", marginLeft:6, textDecoration:"none", fontWeight:600, whiteSpace:"nowrap", cursor:"pointer" }}>
        ▶ Watch here
      </button>
    );
  }
  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer"
      style={{ display:"inline-flex", alignItems:"center", gap:4, fontSize:11, color:"#FF0000", background:"#FF000015", border:"1px solid #FF000030", borderRadius:6, padding:"2px 7px", marginLeft:6, textDecoration:"none", fontWeight:600, whiteSpace:"nowrap" }}>
      {link.search ? "▶ Find video" : "▶ Tutorial"}
    </a>
  );
}

const C = { bg:"#0D1117", surface:"#161B22", card:"#1C2330", border:"#2A3441", accent:"#FF5D3B", teal:"#2DD4BF", amber:"#F59E0B", purple:"#A78BFA", green:"#4ADE80", blue:"#60A5FA", muted:"#6E7F96", text:"#E6EDF3", soft:"#9BA8B5" };
const PH = { Base:C.teal, Build:C.accent, Peak:C.purple, Taper:C.amber };
const SETS = { Base:"2×12", Build:"3×10", Peak:"3×8 (heavier)", Taper:"2×8 (light)" };

// [phase, [easy, quality, long], quality workout, long-run note, week note]
const W = [
  ["Base",[3,3,5],"Easy + 6×20s strides","Easy, relaxed","Ease back in. Learn the strength moves with light weight."],
  ["Base",[3,3,6],"Easy + 6×20s strides","Easy",""],
  ["Base",[3.5,3.5,7],"Easy + 6×30s strides","Easy",""],
  ["Base",[3,3,5],"Easy + 4×30s strides","Easy","Cut-back week."],
  ["Build",[3.5,4,8],"Tempo: 1 mi warm-up, 15 min @ 10:55, 1 mi cool-down","Easy",""],
  ["Build",[4,4,9],"Tempo: 1 mi warm-up, 20 min @ 10:55, cool-down","Easy, gel at mile 5",""],
  ["Build",[4,4.5,10],"Intervals: 1 mi warm-up, 5×3 min @ 10:10, 2 min jog between","Easy, gel at mile 5",""],
  ["Build",[3.5,3.5,7],"Easy + 6×30s strides","Easy","Cut-back week."],
  ["Build",[4,5,11],"Tempo: 1 mi warm-up, 25 min @ 10:50, cool-down","Easy, last mile @ 10:40","First goal-pace finish miles."],
  ["Build",[4,5,11],"Intervals: 1 mi warm-up, 6×3 min @ 10:10, 2 min jog","Easy, last 2 mi @ 10:40",""],
  ["Build",[4.5,5,12],"Mile repeats: 3×1 mi @ 10:25, 2 min jog between","Easy, last 2 mi @ 10:40",""],
  ["Build",[3.5,4,8],"Easy + 6×30s strides","Easy","Cut-back week."],
  ["Peak",[4.5,5.5,12],"Tempo: 1 mi warm-up, 30 min @ 10:45, cool-down","Last 3 mi @ 10:40 goal pace","Biggest weeks start."],
  ["Peak",[4.5,6,13],"Race-pace: 3×1.5 mi @ 10:35, 3 min jog between","Last 4 mi @ 10:40. Longest run.","Longest run of the plan."],
  ["Peak",[4,5,10],"Tempo: 1 mi warm-up, 20 min @ 10:45, cool-down","Easy, last 2 mi @ 10:40","Step down."],
  ["Taper",[3.5,4,8],"4×1 min @ 10:15 with 90s jog, easy otherwise","Easy","Taper: stay sharp, stay fresh. Strength goes light."],
  ["Taper",[3,2,13.1],"Easy 2-mile shakeout + 4×20s strides","","Race week. No strength. Sleep and carbs."],
];

const START = new Date(2026, 10, 16); // Mon Nov 16, 2026
const fmt = d => d.toLocaleDateString("en-US", { month:"short", day:"numeric" });

const STR = {
  A: { title:"Strength A: Legs & Glutes", ex:[
    ["Goblet squat (hand weight)","S"],["Reverse lunge with hand weights","S each leg"],
    ["Single-leg glute bridge, band above knees","S each leg"],["Banded lateral walk","2×12 steps each way"],
    ["Standing calf raise with weights","3×15"],["Banded toe raise (shin builder)","2×15"] ] },
  B: { title:"Strength B: Back, Core & Hips", ex:[
    ["Romanian deadlift (hand weights)","S"],["Bent-over row (hand weights)","S"],
    ["Banded pull-apart","2×15"],["Overhead press (hand weights)","S"],
    ["Dead bug","2×10 each side"],["Banded Pallof press","2×10 each side"] ] },
};

const TYPES = {
  easy: { label:"Easy Run", color:C.teal, stretch:["Hip flexor stretch 60s each","Calf stretch on wall 60s each","Standing calf raises 3×15"], rec:"Ice shins 10 min if tender." },
  quality: { label:"Quality Run", color:C.accent, stretch:["Quad stretch 45s each","Seated hamstring stretch 60s","Figure-four glute stretch 60s each"], rec:"Hydrate, protein within 30 min. Easy day tomorrow." },
  long: { label:"Long Run", color:C.purple, stretch:["Pigeon pose 90s each","IT band stretch 60s each","Calf stretch on wall 60s each"], rec:"Foam roll quads, calves, IT band. Elevate feet 20 min." },
  strength: { label:"Strength", color:C.blue, stretch:["Hip flexor stretch 60s each","Figure-four glute stretch 60s each"], rec:"Easy walk, hydrate. If knees/shins are sore, drop the weight and skip lunges." },
  race: { label:"RACE DAY", color:"#FFD700", stretch:["Pre-race: leg swings, hip circles, 5 min","Post-race: walk 10 min, gentle pigeon pose and calf stretch"], rec:"Eat, hydrate, rest. Take a full week off." },
};

const SCHEDULE = W.map(([phase, m, q, ln, note], i) => {
  const s = new Date(START); s.setDate(s.getDate() + i * 7);
  const e = new Date(s); e.setDate(e.getDate() + 6);
  const race = i === W.length - 1;
  const sets = SETS[phase];
  const fill = ex => ex.map(([n, r]) => [n, r.replace("S", sets)]);
  const days = [
    { d:"Mon", t:"easy", mi:m[0], text:`Easy ${m[0]} mi @ 12:00-12:45/mi, conversational.` },
    { d:"Mon", t:"strength", mi:0, text:`${STR.A.title} (~25 min)`, ex:fill(STR.A.ex) },
    { d:"Wed", t:"quality", mi:m[1], text:`${m[1]} mi total. ${q}` },
    ...(race ? [] : [{ d:"Thu", t:"strength", mi:0, text:`${STR.B.title} (~20 min)`, ex:fill(STR.B.ex) }]),
    race ? { d:"Sun", t:"race", mi:13.1, text:"🏁 HALF MARATHON. Miles 1-3 @ 10:55 (hold back), miles 4-10 @ 10:40, then empty the tank. Gel at mile 6." }
         : { d:"Sat", t:"long", mi:m[2], text:`Long run ${m[2]} mi. ${ln}.` },
  ];
  if (race) days.splice(1, 1); // no strength in race week
  return { n:i + 1, phase, note, range:`${fmt(s)} – ${fmt(e)}`, days, total:days.reduce((a, d) => a + d.mi, 0) };
});

const totalMiles = Math.round(SCHEDULE.reduce((a, w) => a + w.total, 0));

function Box({ title, color, children }) {
  return (
    <div style={{ background:`${color}0d`, border:`1px solid ${color}33`, borderRadius:8, padding:"9px 13px" }}>
      <div style={{ fontSize:11, fontWeight:700, color, marginBottom:5 }}>{title}</div>
      {children}
    </div>
  );
}

export default function App() {
  const [wk, setWk] = useState(null);
  const [day, setDay] = useState(null);
  const [filter, setFilter] = useState("All");
  const [showStrides, setShowStrides] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const shown = filter === "All" ? SCHEDULE : SCHEDULE.filter(w => w.phase === filter);

  return (
    <div style={{ minHeight:"100vh", background:C.bg, color:C.text, fontFamily:"'Segoe UI',system-ui,sans-serif", paddingBottom:60 }}>
      {showStrides && <StridesGuide onClose={() => setShowStrides(false)} />}
      {activeVideo && (
        <div role="dialog" aria-modal="true" aria-label={activeVideo.label}
          onClick={() => setActiveVideo(null)}
          style={{ position:"fixed", inset:0, zIndex:1100, background:"rgba(0,0,0,.82)", display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}>
          <div onClick={e => e.stopPropagation()} style={{ width:"min(900px, 100%)", background:C.surface, border:`1px solid ${C.border}`, borderRadius:14, overflow:"hidden" }}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, padding:"12px 16px" }}>
              <div style={{ color:C.text, fontWeight:700, fontSize:14 }}>{activeVideo.label}</div>
              <button type="button" onClick={() => setActiveVideo(null)} aria-label="Close video" style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:8, color:C.text, fontSize:18, width:34, height:34, cursor:"pointer" }}>×</button>
            </div>
            <div style={{ position:"relative", paddingTop:"56.25%", background:"#000" }}>
              <iframe src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?autoplay=1&rel=0`}
                title={activeVideo.label} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
                style={{ position:"absolute", inset:0, width:"100%", height:"100%", border:0 }} />
            </div>
          </div>
        </div>
      )}
      <div style={{ padding:"44px 24px 30px", textAlign:"center", borderBottom:`1px solid ${C.border}`, background:"linear-gradient(135deg,#1a0e0a,#0D1117 50%,#0a0d1a)" }}>
        <div style={{ fontSize:13, letterSpacing:"0.2em", color:C.accent, fontWeight:700, textTransform:"uppercase", marginBottom:10 }}>Half Marathon PR Plan</div>
        <h1 style={{ fontSize:"clamp(28px,6vw,48px)", fontWeight:800, margin:"0 0 6px" }}>Beat 2:29:30</h1>
        <div style={{ color:C.soft, marginBottom:22 }}>Nov 16, 2026 – <span style={{ color:C.accent, fontWeight:700 }}>Mar 14, 2027</span></div>
        <div style={{ display:"flex", justifyContent:"center", gap:28, flexWrap:"wrap" }}>
          {[["Weeks", SCHEDULE.length], ["Run Miles", `~${totalMiles}`], ["Strength/Wk", "2"], ["Goal Pace", "10:40"]].map(([l, v]) => (
            <div key={l}><div style={{ fontSize:26, fontWeight:800 }}>{v}</div><div style={{ fontSize:11, color:C.muted, textTransform:"uppercase", letterSpacing:"0.1em" }}>{l}</div></div>
          ))}
        </div>
      </div>

      <div style={{ padding:"20px 20px 0", maxWidth:900, margin:"0 auto" }}>
        <div style={{ background:C.surface, border:`1px solid ${C.green}44`, borderRadius:12, padding:"14px 18px", marginBottom:12 }}>
          <div style={{ fontSize:13, fontWeight:700, color:C.green, marginBottom:8 }}>Goals (by pace, so the 13.3 vs 13.1 mile gap doesn't matter)</div>
          <div style={{ fontSize:12, color:C.soft, lineHeight:1.7 }}>
            Your 2:29:30 over 13.3 mi was about <b style={{ color:C.text }}>11:14/mi</b> (≈ 2:27:25 over 13.1).<br />
            <b style={{ color:C.text }}>Beat it:</b> under 11:14/mi · <b style={{ color:C.text }}>Goal:</b> 10:40/mi ≈ 2:20 · <b style={{ color:C.text }}>Stretch:</b> 10:18/mi ≈ 2:15
          </div>
          <div style={{ fontSize:12, color:C.soft, lineHeight:1.7, marginTop:8 }}>
            <b style={{ color:C.text }}>Paces:</b> Easy 12:00-12:45 · Tempo 10:45-10:55 · Goal 10:40 · Intervals ~10:10. Use effort, not pace, on hills and windy days.
          </div>
        </div>

        {/* VIDEO BANNER */}
        <div style={{ background:"#FF000010", border:"1px solid #FF000033", borderRadius:10, padding:"10px 16px", marginBottom:16, display:"flex", alignItems:"center", gap:10 }}>
          <span style={{ fontSize:16 }}>▶</span>
          <div style={{ fontSize:12, color:COLORS.textSoft }}>
            <span style={{ fontWeight:700, color:"#FF5555" }}>Video Tutorials Included </span>
            — expand any day and tap <b>▶ Watch here</b> to play a tutorial in this page. Some moves open YouTube search results.
          </div>
        </div>

        <div style={{ background:`${C.blue}0d`, border:`1px solid ${C.blue}33`, borderRadius:10, padding:"12px 16px", marginBottom:12 }}>
          <div style={{ fontSize:13, fontWeight:700, color:C.blue, marginBottom:4 }}>Weekly rhythm</div>
          <div style={{ fontSize:12, color:C.soft, lineHeight:1.6 }}>
            <b>Mon:</b> easy run + Strength A · <b>Wed:</b> quality run · <b>Thu:</b> Strength B · <b>Sat:</b> long run · Tue/Fri/Sun: rest or walk. Strength is about 20-25 minutes with hand weights and a loop band. Pick a weight where the last 2 reps feel hard but clean.
          </div>
        </div>

        <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:16 }}>
          {["All", ...Object.keys(PH)].map(p => {
            const on = filter === p, col = PH[p] || C.accent;
            return <button key={p} onClick={() => { setFilter(p); setWk(null); setDay(null); }}
              style={{ padding:"6px 14px", borderRadius:20, border:`1.5px solid ${on ? col : C.border}`, background:on ? `${col}22` : "transparent", color:on ? col : C.soft, fontSize:12, fontWeight:600, cursor:"pointer" }}>{p}</button>;
          })}
        </div>

        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {shown.map(w => {
            const open = wk === w.n, pc = PH[w.phase];
            return (
              <div key={w.n} style={{ background:C.surface, border:`1px solid ${open ? pc + "66" : C.border}`, borderRadius:12, overflow:"hidden" }}>
                <button onClick={() => { setWk(open ? null : w.n); setDay(null); }}
                  style={{ width:"100%", padding:"13px 18px", display:"flex", alignItems:"center", gap:14, background:"none", border:"none", color:C.text, cursor:"pointer", textAlign:"left" }}>
                  <div style={{ width:36, height:36, borderRadius:8, background:`${pc}22`, border:`1.5px solid ${pc}55`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:800, color:pc }}>{w.n}</div>
                  <div style={{ flex:1 }}>
                    <span style={{ fontWeight:700, fontSize:15 }}>Week {w.n} </span>
                    <span style={{ fontSize:11, padding:"2px 8px", borderRadius:10, background:`${pc}22`, color:pc, fontWeight:600 }}>{w.phase}</span>
                    <div style={{ fontSize:11, color:C.muted, marginTop:2 }}>{w.range}</div>
                  </div>
                  <div style={{ fontSize:17, fontWeight:800 }}>{w.total.toFixed(1)} mi</div>
                  <div style={{ color:C.muted, fontSize:18, transform:open ? "rotate(90deg)" : "none" }}>›</div>
                </button>

                {open && (
                  <div style={{ padding:"0 14px 14px", display:"flex", flexDirection:"column", gap:8 }}>
                    {w.note && <div style={{ fontSize:12, color:pc, background:`${pc}12`, borderRadius:8, padding:"8px 12px", lineHeight:1.5 }}>{w.note}</div>}
                    {w.days.map((d, i) => {
                      const t = TYPES[d.t], key = `${w.n}-${i}`, dopen = day === key;
                      return (
                        <div key={i} style={{ background:C.card, border:`1px solid ${dopen ? t.color + "88" : C.border}`, borderRadius:10 }}>
                          <button onClick={() => setDay(dopen ? null : key)}
                            style={{ width:"100%", padding:"11px 14px", display:"flex", alignItems:"center", gap:10, background:"none", border:"none", color:C.text, cursor:"pointer", textAlign:"left" }}>
                            <div style={{ width:44, height:40, borderRadius:8, background:`${t.color}18`, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
                              <span style={{ fontSize:11, fontWeight:800, color:t.color }}>{d.d}</span>
                              {d.mi > 0 && <span style={{ fontSize:10, color:t.color }}>{d.mi}mi</span>}
                            </div>
                            <div style={{ flex:1, minWidth:0 }}>
                              <span style={{ fontSize:11, padding:"1px 7px", borderRadius:8, background:`${t.color}18`, color:t.color, fontWeight:700 }}>{t.label}</span>
                              <div style={{ fontSize:12, color:C.soft, marginTop:3, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{d.text}</div>
                            </div>
                            <div style={{ color:C.muted, transform:dopen ? "rotate(90deg)" : "none" }}>›</div>
                          </button>
                          {dopen && (
                            <div style={{ padding:"0 14px 12px", display:"grid", gap:8 }}>
                              <Box title={d.ex ? "💪 Workout" : "🏃 Workout"} color={t.color}>
                                <div style={{ fontSize:13, color:C.soft, lineHeight:1.6 }}>{d.text}</div>
                                {d.text.toLowerCase().includes("strides") && (
                                  <button onClick={() => setShowStrides(true)} style={{ marginTop:8, fontSize:12, color:C.accent, background:"#FF5D3B22", border:`1px solid ${C.accent}55`, borderRadius:8, padding:"5px 12px", cursor:"pointer", fontWeight:600 }}>💡 What are strides? How do I do them?</button>
                                )}
                                {d.ex && d.ex.map(([n, r]) => (
                                  <div key={n} style={{ display:"flex", justifyContent:"space-between", gap:10, fontSize:12, color:C.soft, padding:"4px 0", borderTop:`1px solid ${C.border}` }}>
                                    <span>{n}<VideoLink text={n} onPlay={setActiveVideo} /></span><b style={{ color:C.text, whiteSpace:"nowrap" }}>{r}</b>
                                  </div>
                                ))}
                              </Box>
                              <Box title="🧘 Stretches" color={C.teal}>
                                {t.stretch.map(s => <div key={s} style={{ fontSize:12, color:C.soft, padding:"2px 0" }}>– {s}<VideoLink text={s} onPlay={setActiveVideo} /></div>)}
                              </Box>
                              <Box title="❄️ Recovery" color={C.purple}><div style={{ fontSize:12, color:C.soft }}>{t.rec}{t.rec.toLowerCase().includes("foam roll") && <VideoLink text="Foam roll" onPlay={setActiveVideo} />}</div></Box>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* KNEE/SHIN CARE */}
        <div style={{ marginTop:16, background:COLORS.surface, border:`1px solid ${COLORS.amber}44`, borderRadius:12, padding:"18px 22px" }}>
          <div style={{ fontSize:14, fontWeight:700, color:COLORS.amber, marginBottom:10 }}>⚠️ Knee & Shin Care — Daily Habits</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))", gap:10 }}>
            {[
              { t:"Before every run", b:"5 min dynamic warm-up: leg swings, hip circles, high knees" },
              { t:"After every run",  b:"Ice shins/knees 10–15 min if any tenderness" },
              { t:"Daily",           b:"Calf raises 3×15 to build shin & knee resilience" },
              { t:"🚨 Red Flags",    b:"Sharp pain = stop immediately. Dull ache OK, sharp never." },
            ].map(c => (
              <div key={c.t} style={{ background:COLORS.card, borderRadius:8, padding:"11px 13px" }}>
                <div style={{ fontSize:11, fontWeight:700, color:COLORS.amber, marginBottom:4 }}>{c.t}</div>
                <div style={{ fontSize:11, color:COLORS.textSoft, lineHeight:1.5 }}>
                  {c.b}
                  {c.t === "Daily" && <VideoLink text="Standing calf raises" onPlay={setActiveVideo} />}
                </div>
              </div>
            ))}
          </div>
            <div style={{ fontSize:11, color:COLORS.textSoft, lineHeight:1.5, marginTop:10 }}>Tempo and interval days plus strength work add load. If shin pain lingers 2+ days, swap the quality run for an easy one and check in with a sports medicine pro.</div>
        </div>
      </div>
    </div>
  );
}
