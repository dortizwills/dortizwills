import { useState } from "react";

// ── COURSE CONTEXT ─────────────────────────────────────────────────────────
// Santa Cruz Half Marathon (Oct 25, 2026)
// Route: Lighthouse Field → East Cliff Dr → Harbor → Pleasure Point → Capitola (out & back)
// Total elevation gain: ~420 ft — rolling coastal bluffs, no major sustained climbs
// Key elevation segments: East Cliff bluff rollers ~30-50 ft each, Capitola loop ~80 ft
// Training elevation targets are scaled proportionally to run distance each week,
// building from ~50 ft (short easy runs) to ~420 ft (race-day simulation), then tapering.

const COLORS = {
  bg: "#0D1117", surface: "#161B22", card: "#1C2330", border: "#2A3441",
  accent: "#FF5D3B", accentSoft: "#FF5D3B22",
  teal: "#2DD4BF", tealSoft: "#2DD4BF18",
  amber: "#F59E0B", amberSoft: "#F59E0B18",
  purple: "#A78BFA", purpleSoft: "#A78BFA18",
  green: "#4ADE80", greenSoft: "#4ADE8018",
  muted: "#6E7F96", text: "#E6EDF3", textSoft: "#9BA8B5",
};

const VIDEO_LINKS = {
  "Pigeon pose": { url: "https://www.youtube.com/watch?v=eEdrVDK8M3U", label: "Pigeon Pose Tutorial (Runna)" },
  "IT band stretch": { url: "https://www.youtube.com/watch?v=MnUHLpvi_Gw", label: "IT Band Stretch Tutorial" },
  "Hip flexor stretch": { url: "https://www.youtube.com/watch?v=EXCIBkqxcYE", label: "Hip Flexor Stretch for Runners" },
  "Standing calf raises": { url: "https://www.youtube.com/watch?v=vL4hHo7PMp8", label: "Calf Raises for Shin Splints" },
  "Calf stretch on wall": { url: "https://www.youtube.com/watch?v=YTYQo4WvJHA", label: "Calf Wall Stretch Tutorial" },
  "Calf stretch wall": { url: "https://www.youtube.com/watch?v=YTYQo4WvJHA", label: "Calf Wall Stretch Tutorial" },
  "Calf stretch": { url: "https://www.youtube.com/watch?v=zGLD19PC_Jg", label: "Calf Stretch for Runners" },
  "Calf raises": { url: "https://www.youtube.com/watch?v=vL4hHo7PMp8", label: "Calf Raises for Shin Splints" },
  "Figure-four glute stretch": { url: "https://www.youtube.com/watch?v=5BqMsUYg_Q8", label: "Figure 4 Glute Stretch Tutorial" },
  "Figure-four stretch": { url: "https://www.youtube.com/watch?v=5BqMsUYg_Q8", label: "Figure 4 Glute Stretch Tutorial" },
  "Seated hamstring stretch": { url: "https://www.youtube.com/watch?v=oJX8EKF3TqM", label: "Seated Hamstring Stretch Tutorial" },
  "Standing hamstring": { url: "https://www.youtube.com/watch?v=oJX8EKF3TqM", label: "Hamstring Stretch Tutorial" },
  "Hamstring stretch": { url: "https://www.youtube.com/watch?v=oJX8EKF3TqM", label: "Hamstring Stretch Tutorial" },
  "Standing quad stretch": { url: "https://www.youtube.com/watch?v=kia2OzZiwqw", label: "Standing Quad Stretch Tutorial (Runna)" },
  "Quad stretch": { url: "https://www.youtube.com/watch?v=kzAsm4WQqvQ", label: "How to Do a Standing Quad Stretch" },
  "Ankle circles": { url: "https://www.youtube.com/watch?v=EXCIBkqxcYE", label: "Ankle & Lower Leg Exercises" },
  "Foam roll": { url: "https://www.youtube.com/watch?v=vL4hHo7PMp8", label: "15-Min Guided Foam Rolling for Runners" },
  "Glute stretch": { url: "https://www.youtube.com/watch?v=2VE_NLcNMvQ", label: "Glute Figure 4 Stretch" },
  "Glute bridges": { url: "https://www.youtube.com/watch?v=EXCIBkqxcYE", label: "Glute Bridge Tutorial" },
  "cycling": { url: "https://www.youtube.com/watch?v=vL4hHo7PMp8", label: "Low-Impact Cross Training for Runners" },
  "swimming": { url: "https://www.youtube.com/watch?v=vL4hHo7PMp8", label: "Low-Impact Cross Training for Runners" },
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

// Elevation gain note per day — based on course profile (~32 ft/mi on rolling coast)
// Easy runs: flat routes ~20-25 ft/mi | Long runs: rolling coastal ~30-35 ft/mi
// Elevation training guidance per day:
function elevNote(type, miles, elevFt, note) {
  return { elevFt, note };
}

function buildSchedule() {
  const weeks = [];
  const start = new Date("2026-06-29");

  // Each day now has an elev object: { elevFt, note }
  const plans = [
    // ── WEEK 1 ─ Base Building
    { phase: "Base Building", days: [
      { label: "Mon", type: "run",   miles: 2,   elev: { ft: 40,  note: "Flat neighborhood loop — avoid hills this week" },
        workout: "Easy run — conversational pace", stretches: ["Hip flexor stretch 60s each","Standing calf raises 3×15","Seated hamstring stretch 60s"], recovery: "Ice shins 10 min post-run if tender" },
      { label: "Wed", type: "cross", miles: 0,   elev: { ft: 0,   note: "No elevation — flat cycling or pool" },
        workout: "30 min low-impact cycling or swimming", stretches: ["Figure-four glute stretch 60s each","Standing quad stretch 45s each","Ankle circles 10 each direction"], recovery: "Rest & hydrate well" },
      { label: "Sat", type: "long",  miles: 3,   elev: { ft: 60,  note: "Seek 1–2 gentle rollers — introduce bluff-style ups" },
        workout: "Long run — slow & steady, walk breaks OK", stretches: ["IT band stretch 60s each","Calf stretch on wall 60s each","Pigeon pose 90s each side"], recovery: "Foam roll legs, elevate feet 20 min" },
    ]},
    // ── WEEK 2
    { phase: "Base Building", days: [
      { label: "Mon", type: "run",   miles: 2,   elev: { ft: 40,  note: "Flat route — keep effort easy" },
        workout: "Easy run", stretches: ["Hip flexor stretch 60s each","Calf stretch on wall 60s each"], recovery: "Ice shins if needed" },
      { label: "Wed", type: "cross", miles: 0,   elev: { ft: 0,   note: "Flat — no elevation needed on cross days" },
        workout: "35 min cycling + glute bridges & bodyweight squats", stretches: ["Quad stretch 45s each","Ankle circles"], recovery: "Rest" },
      { label: "Sat", type: "long",  miles: 3.5, elev: { ft: 75,  note: "Add one ~40 ft hill — walk up it if needed" },
        workout: "Long run — keep heart rate low", stretches: ["Pigeon pose 90s each","IT band stretch","Standing calf raises 3×15"], recovery: "Foam roll quads & calves" },
    ]},
    // ── WEEK 3
    { phase: "Base Building", days: [
      { label: "Mon", type: "run",   miles: 2.5, elev: { ft: 50,  note: "Mostly flat with one small rise" },
        workout: "Easy run — focus on form, short stride", stretches: ["Hip flexor stretch 60s each","Seated hamstring stretch 60s"], recovery: "Ice shins 10 min" },
      { label: "Wed", type: "cross", miles: 0,   elev: { ft: 0,   note: "Flat — pool or stationary bike" },
        workout: "35 min swimming or cycling", stretches: ["Figure-four glute stretch 60s each","Quad stretch 45s each"], recovery: "Rest & sleep 8h" },
      { label: "Sat", type: "long",  miles: 4,   elev: { ft: 100, note: "2–3 rolling hills — practice running up without stopping" },
        workout: "Long run — walk 1 min every 8 min", stretches: ["Pigeon pose 90s each","IT band stretch","Calf stretch wall"], recovery: "Foam roll full legs + ice knees if needed" },
    ]},
    // ── WEEK 4
    { phase: "Base Building", days: [
      { label: "Mon", type: "run",   miles: 2.5, elev: { ft: 50,  note: "Flat loop" },
        workout: "Easy run", stretches: ["Hip flexor stretch 60s each","Standing calf raises 3×15"], recovery: "Ice shins if tender" },
      { label: "Wed", type: "cross", miles: 0,   elev: { ft: 0,   note: "Flat cross-training only" },
        workout: "40 min cycling + glute bridges 3×12", stretches: ["Figure-four glute stretch 60s each","Ankle circles"], recovery: "Rest" },
      { label: "Sat", type: "long",  miles: 4.5, elev: { ft: 120, note: "Coastal-style rollers — run downhills controlled, short stride" },
        workout: "Long run — negative split goal (2nd half faster)", stretches: ["Pigeon pose 90s","Standing hamstring 60s each","Calf stretch wall"], recovery: "Foam roll + elevate legs" },
    ]},
    // ── WEEK 5
    { phase: "Base Building", days: [
      { label: "Mon", type: "run",   miles: 3,   elev: { ft: 65,  note: "One gentle 30 ft rise, otherwise flat" },
        workout: "Easy run — 5 min walk warm-up first", stretches: ["Hip flexor stretch 60s each","Calf stretch on wall"], recovery: "Ice shins 10 min" },
      { label: "Wed", type: "cross", miles: 0,   elev: { ft: 0,   note: "Flat — recovery cross day" },
        workout: "40 min cycling + single-leg balance 3×30s each", stretches: ["Quad stretch 45s each","Figure-four glute stretch 60s each"], recovery: "Rest" },
      { label: "Sat", type: "long",  miles: 5,   elev: { ft: 155, note: "Find a bluff path or park with 3–4 rollers; mimic East Cliff Drive feel" },
        workout: "Long run — aerobic base pace", stretches: ["Pigeon pose 90s","IT band stretch 60s each","Hamstring stretch 60s"], recovery: "Foam roll quads, calves, IT band" },
    ]},
    // ── WEEK 6 — CUT BACK
    { phase: "Base Building", days: [
      { label: "Mon", type: "run",   miles: 2,   elev: { ft: 30,  note: "Flat recovery run — no hills" },
        workout: "Recovery easy run — very slow", stretches: ["Hip flexor stretch 60s each","Calf stretch on wall","Seated hamstring stretch"], recovery: "Extra rest week — no pushing" },
      { label: "Wed", type: "cross", miles: 0,   elev: { ft: 0,   note: "Flat — gentle swim or walk" },
        workout: "30 min gentle swimming or walk", stretches: ["Pigeon pose 90s","Calf stretch","Hip flexor stretch 60s each"], recovery: "Rest" },
      { label: "Sat", type: "long",  miles: 4,   elev: { ft: 80,  note: "Easy rolling route — back off effort this week" },
        workout: "Recovery long run — keep effort low", stretches: ["IT band stretch 60s","Calf stretch wall","Seated hamstring stretch"], recovery: "Foam roll, ice shins 10 min" },
    ]},
    // ── WEEK 7 — Building begins
    { phase: "Building", days: [
      { label: "Mon", type: "run",   miles: 3,   elev: { ft: 75,  note: "Include 1–2 short 20 ft climbs — run them easy" },
        workout: "Easy run + 4×20s strides at end", stretches: ["Hip flexor stretch 60s each","Calf stretch wall"], recovery: "Ice shins if needed" },
      { label: "Wed", type: "tempo", miles: 2.5, elev: { ft: 50,  note: "Flat tempo route — don't add hills to tempo efforts yet" },
        workout: "Tempo: 3×5 min comfortably hard, 2 min walk rest", stretches: ["Quad stretch 45s each","Seated hamstring stretch 60s"], recovery: "Protein within 30 min, rest" },
      { label: "Sat", type: "long",  miles: 6,   elev: { ft: 185, note: "Route with 4–5 rolling hills — practice bluff rhythm" },
        workout: "Long run — maintain 60–70% effort", stretches: ["Pigeon pose 90s","IT band stretch 60s each","Calf stretch on wall"], recovery: "Foam roll full legs + elevate" },
    ]},
    // ── WEEK 8
    { phase: "Building", days: [
      { label: "Mon", type: "run",   miles: 3.5, elev: { ft: 85,  note: "Gentle rolling loop — short controlled hills" },
        workout: "Easy run", stretches: ["Hip flexor stretch 60s each","Standing calf raises 3×15"], recovery: "Ice shins 10 min" },
      { label: "Wed", type: "tempo", miles: 3,   elev: { ft: 55,  note: "Keep tempo on flat ground — save hills for long runs" },
        workout: "Tempo: 2 mi at goal pace + warm/cool mile", stretches: ["Quad stretch 45s each","Hamstring stretch 60s each","Ankle circles"], recovery: "Rest, hydrate" },
      { label: "Sat", type: "long",  miles: 7,   elev: { ft: 220, note: "Coastal bluff route — aim for 5–6 undulations mirroring race course" },
        workout: "Long run — walk breaks every 10 min", stretches: ["Pigeon pose 90s","IT band stretch 60s each","Calf stretch wall"], recovery: "Foam roll + 10 min ice knees" },
    ]},
    // ── WEEK 9
    { phase: "Building", days: [
      { label: "Mon", type: "run",   miles: 3,   elev: { ft: 70,  note: "Easy rolling loop — focus on cadence on uphills" },
        workout: "Easy run — focus on cadence (~170 spm)", stretches: ["Hip flexor stretch 60s each","Calf stretch on wall"], recovery: "Ice shins if needed" },
      { label: "Wed", type: "tempo", miles: 3,   elev: { ft: 60,  note: "Flat tempo — or one ~20 ft hill repeat at the end for variety" },
        workout: "Tempo: 3×8 min hard, 2 min walk rest", stretches: ["Quad stretch 45s each","Figure-four glute stretch 60s each"], recovery: "Rest" },
      { label: "Sat", type: "long",  miles: 7.5, elev: { ft: 240, note: "Practice race nutrition on a rolling route — gel at mile 4" },
        workout: "Long run — practice race-day fueling (gel at mile 4)", stretches: ["Pigeon pose 90s","IT band stretch 60s","Hamstring stretch 60s"], recovery: "Foam roll + elevate 20 min" },
    ]},
    // ── WEEK 10
    { phase: "Building", days: [
      { label: "Mon", type: "run",   miles: 3.5, elev: { ft: 85,  note: "Rolling neighborhood route" },
        workout: "Easy run", stretches: ["Hip flexor stretch 60s each","Standing calf raises 3×15"], recovery: "Ice shins" },
      { label: "Wed", type: "tempo", miles: 3,   elev: { ft: 60,  note: "Flat sustained tempo — build your ability to hold pace on flat" },
        workout: "Tempo: 25 min continuous at half-marathon effort", stretches: ["Quad stretch 45s each","Seated hamstring stretch 60s"], recovery: "Rest, sleep 8h" },
      { label: "Sat", type: "long",  miles: 8,   elev: { ft: 260, note: "Test race shoes on rolling terrain — 6–7 bluff-style hills" },
        workout: "Long run — test race gear & shoes", stretches: ["Pigeon pose 90s","IT band stretch 60s each","Calf stretch wall"], recovery: "Foam roll + ice knees 15 min" },
    ]},
    // ── WEEK 11
    { phase: "Building", days: [
      { label: "Mon", type: "run",   miles: 4,   elev: { ft: 95,  note: "Include 2–3 short hills — run strides on flat at end" },
        workout: "Easy run + 4×30s strides", stretches: ["Hip flexor stretch 60s each","Calf stretch on wall"], recovery: "Ice shins if needed" },
      { label: "Wed", type: "tempo", miles: 3.5, elev: { ft: 70,  note: "Steady race-effort tempo — slightly rolling OK now" },
        workout: "Tempo: 30 min steady race effort", stretches: ["Quad stretch 45s each","Figure-four glute stretch 60s each"], recovery: "Rest" },
      { label: "Sat", type: "long",  miles: 9,   elev: { ft: 290, note: "Your best race-course simulation yet — rolling coastal bluffs" },
        workout: "Long run — focus on even pacing", stretches: ["Pigeon pose 90s","IT band stretch 60s each","Hamstring stretch 60s"], recovery: "Foam roll + 10 min ice shins" },
    ]},
    // ── WEEK 12 — CUT BACK
    { phase: "Building", days: [
      { label: "Mon", type: "run",   miles: 2.5, elev: { ft: 45,  note: "Flat recovery run — rest legs" },
        workout: "Recovery easy run", stretches: ["Hip flexor stretch 60s each","Calf stretch on wall","Seated hamstring stretch"], recovery: "Extra rest — cut back week" },
      { label: "Wed", type: "cross", miles: 0,   elev: { ft: 0,   note: "Flat cycling — active recovery only" },
        workout: "30 min gentle cycling", stretches: ["Pigeon pose 90s","Calf stretch","Hip flexor stretch"], recovery: "Rest" },
      { label: "Sat", type: "long",  miles: 6,   elev: { ft: 155, note: "Easy rolling route — no pushing on uphills" },
        workout: "Recovery long run — very easy effort", stretches: ["IT band stretch 60s each","Calf stretch wall","Seated hamstring stretch 60s"], recovery: "Foam roll + ice shins 15 min" },
    ]},
    // ── WEEK 13 — Peak
    { phase: "Peak", days: [
      { label: "Mon", type: "run",   miles: 4,   elev: { ft: 95,  note: "Rolling loop with 2–3 hills — run strides on flat" },
        workout: "Easy run + 5×30s strides", stretches: ["Hip flexor stretch 60s each","Calf stretch on wall"], recovery: "Ice shins if needed" },
      { label: "Wed", type: "tempo", miles: 4,   elev: { ft: 120, note: "Race simulation on rolling terrain — include 1–2 East Cliff-style hills" },
        workout: "Race simulation: 4 miles at goal pace", stretches: ["Quad stretch 45s each","Hamstring stretch 60s each","Figure-four glute stretch"], recovery: "Rest, protein, hydrate" },
      { label: "Sat", type: "long",  miles: 10,  elev: { ft: 330, note: "Best race-course replica — rolling coastal bluffs 8–9 undulations" },
        workout: "Long run — longest run so far", stretches: ["Pigeon pose 90s","IT band stretch 60s each","Calf stretch wall"], recovery: "Foam roll + elevate + ice knees 15 min" },
    ]},
    // ── WEEK 14
    { phase: "Peak", days: [
      { label: "Mon", type: "run",   miles: 4,   elev: { ft: 95,  note: "Rolling easy loop" },
        workout: "Easy run", stretches: ["Hip flexor stretch 60s each","Standing calf raises 3×15"], recovery: "Ice shins" },
      { label: "Wed", type: "tempo", miles: 4,   elev: { ft: 120, note: "Mental toughness tempo — attack the hills at race effort" },
        workout: "Tempo: 35 min race effort — mental toughness", stretches: ["Quad stretch 45s each","Hamstring stretch 60s"], recovery: "Rest, sleep 8h" },
      { label: "Sat", type: "long",  miles: 11,  elev: { ft: 360, note: "Peak run — closest to full race elevation. Rolling bluff route, ~360 ft gain" },
        workout: "Peak long run — completion over speed", stretches: ["Pigeon pose 90s","IT band stretch 60s each","Hamstring stretch 60s","Calf stretch wall"], recovery: "Foam roll + ice knees 20 min + elevation" },
    ]},
    // ── WEEK 15
    { phase: "Peak", days: [
      { label: "Mon", type: "run",   miles: 4,   elev: { ft: 95,  note: "Rolling loop — enjoy it, legs should feel strong" },
        workout: "Easy run + strides", stretches: ["Hip flexor stretch 60s each","Calf stretch on wall"], recovery: "Ice shins if needed" },
      { label: "Wed", type: "tempo", miles: 3.5, elev: { ft: 100, note: "Slightly easier than race effort — rolling terrain OK" },
        workout: "Tempo: 30 min — slightly easier than race pace", stretches: ["Quad stretch 45s each","Figure-four glute stretch 60s each"], recovery: "Rest" },
      { label: "Sat", type: "long",  miles: 10,  elev: { ft: 330, note: "Controlled long run — rolling bluffs, enjoy the distance" },
        workout: "Long run — controlled, enjoy the distance", stretches: ["Pigeon pose 90s","IT band stretch 60s each","Calf stretch wall"], recovery: "Foam roll + ice + elevate" },
    ]},
    // ── WEEK 16 — Taper
    { phase: "Taper", days: [
      { label: "Mon", type: "run",   miles: 3,   elev: { ft: 65,  note: "Mostly flat — let legs freshen up" },
        workout: "Easy run — fresh legs focus", stretches: ["Hip flexor stretch 60s each","Calf stretch on wall","Quad stretch 45s each"], recovery: "Ice shins, rest well" },
      { label: "Wed", type: "run",   miles: 2.5, elev: { ft: 50,  note: "Flat shakeout — don't stress the legs" },
        workout: "Short easy run — stay loose", stretches: ["Seated hamstring stretch 60s","Calf stretch on wall","Hip flexor stretch"], recovery: "Rest, hydrate, sleep 8h" },
      { label: "Sat", type: "long",  miles: 7,   elev: { ft: 200, note: "Rolling taper run — include a couple race-course hills to stay sharp" },
        workout: "Taper long run — easy pace, no heroics", stretches: ["Pigeon pose 90s","IT band stretch 60s each","Calf stretch wall"], recovery: "Foam roll + rest up" },
    ]},
    // ── WEEK 17 — Race Week
    { phase: "Taper", days: [
      { label: "Mon", type: "run",   miles: 2,   elev: { ft: 30,  note: "Flat — total rest mode" },
        workout: "Short easy shakeout run", stretches: ["Hip flexor stretch 60s each","Calf stretch on wall","Quad stretch 45s each"], recovery: "Full rest after" },
      { label: "Wed", type: "run",   miles: 2,   elev: { ft: 30,  note: "Flat 20 min jog — legs should feel bouncy" },
        workout: "Easy 20 min jog — feel good run", stretches: ["Seated hamstring stretch 60s","Pigeon pose 90s each","Hip flexor stretch"], recovery: "Rest, carb-load begins Thu" },
      { label: "Sat", type: "race",  miles: 13.1,elev: { ft: 420, note: "Race day! ~420 ft total gain — rolling bluffs, Capitola loop. Start conservative on climbs." },
        workout: "🏁 RACE DAY — Half Marathon! Oct 25, 2026", stretches: ["Pre-race: leg swings, hip circles, high knees — 5 min","Post-race: Pigeon pose, IT band, Calf stretch wall — 20 min cool-down"], recovery: "Celebrate! Ice, protein, rest for 1 week" },
    ]},
  ];

  const phaseColors = {
    "Base Building": COLORS.teal, "Building": COLORS.accent,
    "Peak": COLORS.purple, "Taper": COLORS.amber,
  };

  let weekNum = 0;
  for (const plan of plans) {
    weekNum++;
    const weekStart = new Date(start);
    weekStart.setDate(start.getDate() + (weekNum - 1) * 7);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);
    const fmt = (d) => d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    const totalElev = plan.days.reduce((s, d) => s + (d.elev?.ft || 0), 0);
    weeks.push({
      week: weekNum, phase: plan.phase, phaseColor: phaseColors[plan.phase],
      dateRange: `${fmt(weekStart)} – ${fmt(weekEnd)}`,
      totalMiles: plan.days.reduce((s, d) => s + d.miles, 0),
      totalElev,
      days: plan.days,
    });
  }
  return weeks;
}

const SCHEDULE = buildSchedule();

const typeConfig = {
  run:   { label: "Easy Run",    color: COLORS.teal,   bg: COLORS.tealSoft   },
  cross: { label: "Cross-Train", color: COLORS.amber,  bg: COLORS.amberSoft  },
  tempo: { label: "Tempo",       color: COLORS.accent, bg: COLORS.accentSoft },
  long:  { label: "Long Run",    color: COLORS.purple, bg: COLORS.purpleSoft },
  race:  { label: "RACE DAY",    color: "#FFD700",     bg: "#FFD70020"        },
};

function VideoLink({ text }) {
  const link = findVideoLink(text);
  if (!link) return null;
  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer"
      style={{ display:"inline-flex", alignItems:"center", gap:4, fontSize:11, color:"#FF0000", background:"#FF000015", border:"1px solid #FF000030", borderRadius:6, padding:"2px 7px", marginLeft:6, textDecoration:"none", fontWeight:600, whiteSpace:"nowrap" }}>
      ▶ Tutorial
    </a>
  );
}

function ElevBadge({ ft }) {
  if (!ft) return null;
  const color = ft < 100 ? COLORS.green : ft < 250 ? COLORS.amber : COLORS.accent;
  return (
    <span style={{ display:"inline-flex", alignItems:"center", gap:3, fontSize:11, color, background:`${color}18`, border:`1px solid ${color}44`, borderRadius:6, padding:"2px 8px", fontWeight:700, whiteSpace:"nowrap" }}>
      ↑ {ft} ft
    </span>
  );
}

export default function App() {
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [filter, setFilter] = useState("All");
  const [showStrides, setShowStrides] = useState(false);

  const phases = ["All","Base Building","Building","Peak","Taper"];
  const filtered = filter === "All" ? SCHEDULE : SCHEDULE.filter(w => w.phase === filter);
  const totalMiles = SCHEDULE.reduce((s,w) => s + w.totalMiles, 0);
  const totalElev  = SCHEDULE.reduce((s,w) => s + w.totalElev, 0);

  return (
    <div style={{ minHeight:"100vh", background:COLORS.bg, color:COLORS.text, fontFamily:"'Segoe UI',system-ui,sans-serif", padding:"0 0 60px" }}>
      {showStrides && <StridesGuide onClose={() => setShowStrides(false)} />}
      {/* HERO */}
      <div style={{ background:"linear-gradient(135deg,#1a0e0a 0%,#0D1117 50%,#0a0d1a 100%)", padding:"48px 24px 36px", textAlign:"center", borderBottom:`1px solid ${COLORS.border}`, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, left:0, right:0, bottom:0, background:`radial-gradient(ellipse at 30% 50%,${COLORS.accentSoft},transparent 60%),radial-gradient(ellipse at 70% 50%,${COLORS.purpleSoft},transparent 60%)`, pointerEvents:"none" }} />
        <div style={{ position:"relative" }}>
          <div style={{ fontSize:13, letterSpacing:"0.2em", color:COLORS.accent, fontWeight:700, textTransform:"uppercase", marginBottom:12 }}>
            Santa Cruz Half Marathon — Oct 25, 2026
          </div>
          <h1 style={{ fontSize:"clamp(28px,6vw,52px)", fontWeight:800, margin:"0 0 8px", lineHeight:1.1 }}>Your Training Plan</h1>
          <div style={{ fontSize:"clamp(14px,2.5vw,18px)", color:COLORS.textSoft, marginBottom:6 }}>
            June 29 – <span style={{ color:COLORS.accent, fontWeight:700 }}>Oct 25, 2026</span>
          </div>
          <div style={{ fontSize:12, color:COLORS.muted, marginBottom:24 }}>
            Course: Lighthouse Field → East Cliff → Pleasure Point → Capitola &amp; back · Rolling coastal bluffs · ~420 ft total gain
          </div>
          <div style={{ display:"flex", justifyContent:"center", gap:28, flexWrap:"wrap" }}>
            {[
              { label:"Total Weeks",   value:"18" },
              { label:"Days/Week",     value:"3" },
              { label:"Total Miles",   value:`~${Math.round(totalMiles)}` },
              { label:"Training Elev", value:`~${Math.round(totalElev/1000)}k ft` },
              { label:"Race Gain",     value:"~420 ft" },
            ].map(s => (
              <div key={s.label} style={{ textAlign:"center" }}>
                <div style={{ fontSize:"clamp(20px,3.5vw,32px)", fontWeight:800, color:COLORS.text }}>{s.value}</div>
                <div style={{ fontSize:11, color:COLORS.muted, textTransform:"uppercase", letterSpacing:"0.1em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding:"20px 24px 0", maxWidth:900, margin:"0 auto" }}>
        {/* COURSE ELEVATION CALLOUT */}
        <div style={{ background:`${COLORS.green}0d`, border:`1px solid ${COLORS.green}33`, borderRadius:10, padding:"12px 16px", marginBottom:12 }}>
          <div style={{ fontSize:13, fontWeight:700, color:COLORS.green, marginBottom:4 }}>↑ Course Elevation Guide</div>
          <div style={{ fontSize:12, color:COLORS.textSoft, lineHeight:1.6 }}>
            The Santa Cruz Half Marathon (Boardwalk → East Cliff → Pleasure Point → Capitola loop) has <b style={{color:COLORS.green}}>~420 ft total elevation gain</b> — rolling coastal bluffs with no sustained climbs. Your training builds from <b>flat easy runs (30–65 ft)</b> to <b>full race-elevation long runs (330–360 ft)</b> in Weeks 13–15, then tapers. Each day shows your target elevation and where to find that terrain.
          </div>
        </div>

        {/* VIDEO BANNER */}
        <div style={{ background:"#FF000010", border:"1px solid #FF000033", borderRadius:10, padding:"10px 16px", marginBottom:16, display:"flex", alignItems:"center", gap:10 }}>
          <span style={{ fontSize:16 }}>▶</span>
          <div style={{ fontSize:12, color:COLORS.textSoft }}>
            <span style={{ fontWeight:700, color:"#FF5555" }}>Video Tutorials Included </span>
            — expand any day and tap the red <b>▶ Tutorial</b> buttons next to each stretch.
          </div>
        </div>

        {/* PHASE FILTER */}
        <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:20 }}>
          {phases.map(p => {
            const pc = { "Base Building":COLORS.teal, "Building":COLORS.accent, "Peak":COLORS.purple, "Taper":COLORS.amber };
            const active = filter === p;
            return (
              <button key={p} onClick={() => { setFilter(p); setSelectedWeek(null); setSelectedDay(null); }}
                style={{ padding:"7px 16px", borderRadius:20, border:`1.5px solid ${active?(pc[p]||COLORS.accent):COLORS.border}`, background:active?(pc[p]?`${pc[p]}22`:COLORS.accentSoft):"transparent", color:active?(pc[p]||COLORS.accent):COLORS.textSoft, fontSize:13, fontWeight:600, cursor:"pointer" }}>
                {p}
              </button>
            );
          })}
        </div>

        {/* WEEK LIST */}
        <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          {filtered.map((week) => {
            const isOpen = selectedWeek === week.week;
            return (
              <div key={week.week} style={{ background:COLORS.surface, border:`1px solid ${isOpen?week.phaseColor+"66":COLORS.border}`, borderRadius:12, overflow:"hidden" }}>
                <button onClick={() => { setSelectedWeek(isOpen?null:week.week); setSelectedDay(null); }}
                  style={{ width:"100%", padding:"14px 20px", display:"flex", alignItems:"center", gap:14, background:"none", border:"none", color:COLORS.text, cursor:"pointer", textAlign:"left" }}>
                  <div style={{ width:36, height:36, borderRadius:8, background:`${week.phaseColor}22`, border:`1.5px solid ${week.phaseColor}55`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:800, color:week.phaseColor, flexShrink:0 }}>
                    {week.week}
                  </div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
                      <span style={{ fontWeight:700, fontSize:15 }}>Week {week.week}</span>
                      <span style={{ fontSize:12, padding:"2px 8px", borderRadius:10, background:`${week.phaseColor}22`, color:week.phaseColor, fontWeight:600 }}>{week.phase}</span>
                    </div>
                    <div style={{ fontSize:11, color:COLORS.muted, marginTop:2 }}>{week.dateRange}</div>
                  </div>
                  <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:3, flexShrink:0 }}>
                    <div style={{ fontSize:16, fontWeight:800 }}>{week.totalMiles > 0 ? `${week.totalMiles.toFixed(1)} mi` : "Cross"}</div>
                    <ElevBadge ft={week.totalElev} />
                  </div>
                  <div style={{ color:COLORS.muted, fontSize:18, flexShrink:0, transform:isOpen?"rotate(90deg)":"none", transition:"transform 0.2s" }}>›</div>
                </button>

                {isOpen && (
                  <div style={{ padding:"0 14px 14px", display:"flex", flexDirection:"column", gap:8 }}>
                    {week.days.map((day, di) => {
                      const cfg = typeConfig[day.type];
                      const key = `${week.week}-${di}`;
                      const open = selectedDay === key;
                      return (
                        <div key={di} style={{ background:COLORS.card, border:`1px solid ${open?cfg.color+"88":COLORS.border}`, borderRadius:10, overflow:"hidden" }}>
                          <button onClick={() => setSelectedDay(open?null:key)}
                            style={{ width:"100%", padding:"11px 14px", display:"flex", alignItems:"center", gap:10, background:"none", border:"none", color:COLORS.text, cursor:"pointer", textAlign:"left" }}>
                            <div style={{ width:40, height:40, borderRadius:8, background:cfg.bg, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                              <span style={{ fontSize:11, fontWeight:800, color:cfg.color }}>{day.label}</span>
                              {day.miles > 0 && <span style={{ fontSize:10, color:cfg.color+"cc" }}>{day.miles}mi</span>}
                            </div>
                            <div style={{ flex:1, minWidth:0 }}>
                              <div style={{ display:"flex", alignItems:"center", gap:6, flexWrap:"wrap" }}>
                                <span style={{ fontSize:11, padding:"1px 7px", borderRadius:8, background:cfg.bg, color:cfg.color, fontWeight:700 }}>{cfg.label}</span>
                                {day.elev?.ft > 0 && <ElevBadge ft={day.elev.ft} />}
                              </div>
                              <div style={{ fontSize:12, color:COLORS.textSoft, marginTop:3, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", maxWidth:260 }}>{day.workout}</div>
                            </div>
                            <div style={{ color:COLORS.muted, transform:open?"rotate(90deg)":"none", transition:"transform 0.2s", flexShrink:0 }}>›</div>
                          </button>

                          {open && (
                            <div style={{ padding:"0 14px 12px", display:"grid", gap:10 }}>
                              <Section title="🏃 Workout" color={cfg.color}>
                                <p style={{ margin:0, fontSize:13, color:COLORS.textSoft, lineHeight:1.6 }}>
                                  {day.workout}
                                  {day.type === "cross" && <VideoLink text={day.workout} />}
                                </p>
                                {day.workout.toLowerCase().includes("strides") && (
                                  <button onClick={() => setShowStrides(true)}
                                    style={{ marginTop:8, display:"inline-flex", alignItems:"center", gap:6, fontSize:12, color:COLORS.accent, background:COLORS.accentSoft, border:`1px solid ${COLORS.accent}55`, borderRadius:8, padding:"5px 12px", cursor:"pointer", fontWeight:600 }}>
                                    💡 What are strides? How do I do them?
                                  </button>
                                )}
                              </Section>
                              {day.elev?.ft > 0 && (
                                <Section title="⛰️ Elevation Target" color={COLORS.green}>
                                  <div style={{ display:"flex", alignItems:"center", gap:10, flexWrap:"wrap" }}>
                                    <ElevBadge ft={day.elev.ft} />
                                    <p style={{ margin:0, fontSize:12, color:COLORS.textSoft, lineHeight:1.5 }}>{day.elev.note}</p>
                                  </div>
                                </Section>
                              )}
                              <Section title="🧘 Stretches" color={COLORS.teal}>
                                <ul style={{ margin:0, paddingLeft:0, listStyle:"none", display:"flex", flexDirection:"column", gap:5 }}>
                                  {day.stretches.map((s,i) => (
                                    <li key={i} style={{ fontSize:12, color:COLORS.textSoft, display:"flex", alignItems:"center", flexWrap:"wrap", gap:4 }}>
                                      <span style={{ color:COLORS.teal, marginRight:4 }}>–</span>{s}
                                      <VideoLink text={s} />
                                    </li>
                                  ))}
                                </ul>
                              </Section>
                              <Section title="❄️ Recovery" color={COLORS.purple}>
                                <p style={{ margin:0, fontSize:12, color:COLORS.textSoft, lineHeight:1.5 }}>
                                  {day.recovery}
                                  {day.recovery.toLowerCase().includes("foam roll") && <VideoLink text="Foam roll" />}
                                </p>
                              </Section>
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

        {/* ELEVATION STRATEGY CARD */}
        <div style={{ marginTop:24, background:COLORS.surface, border:`1px solid ${COLORS.green}44`, borderRadius:12, padding:"18px 22px" }}>
          <div style={{ fontSize:14, fontWeight:700, color:COLORS.green, marginBottom:10 }}>⛰️ Race Course Elevation Strategy</div>
          <div style={{ fontSize:12, color:COLORS.textSoft, marginBottom:12, lineHeight:1.6 }}>
            The Santa Cruz Half Marathon runs Lighthouse Field → East Cliff Drive → Pleasure Point → Capitola loop → back. Total gain: <b style={{color:COLORS.green}}>~420 ft</b> across rolling coastal bluffs — no single climb exceeds ~80 ft.
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))", gap:10 }}>
            {[
              { t:"Miles 0–3",    gain:"~80 ft",  desc:"Boardwalk → Harbor → East Cliff bluffs. Rolling ~20–30 ft rises. Start easy." },
              { t:"Miles 3–6",    gain:"~120 ft", desc:"Twin Lakes → Pleasure Point. Most rolling section. Short punchy ups." },
              { t:"Miles 6–7",    gain:"~80 ft",  desc:"Capitola Village loop. Biggest climb of race ~60–80 ft. Walk if needed." },
              { t:"Miles 7–13.1", gain:"~140 ft", desc:"Return leg. Same rolling profile. Conserve energy for final 2 miles." },
            ].map(c => (
              <div key={c.t} style={{ background:COLORS.card, borderRadius:8, padding:"11px 13px" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:4 }}>
                  <span style={{ fontSize:12, fontWeight:700, color:COLORS.text }}>{c.t}</span>
                  <ElevBadge ft={parseInt(c.gain)} />
                </div>
                <div style={{ fontSize:11, color:COLORS.textSoft, lineHeight:1.5 }}>{c.desc}</div>
              </div>
            ))}
          </div>
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
                  {c.t === "Daily" && <VideoLink text="Standing calf raises" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, color, children }) {
  return (
    <div style={{ background:`${color}0d`, border:`1px solid ${color}22`, borderRadius:8, padding:"9px 13px" }}>
      <div style={{ fontSize:11, fontWeight:700, color, marginBottom:5 }}>{title}</div>
      {children}
    </div>
  );
}
