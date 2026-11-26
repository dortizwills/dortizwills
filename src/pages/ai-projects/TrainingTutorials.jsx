import { Button } from "@/components/ui/button";
import { ChevronDown, Play } from "lucide-react";
import { suppliedVideo } from "./trainingHistory";
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
  "Hip flexor stretch": { url: "https://www.youtube.com/watch?v=EXCIBkqxcYE", label: "Hip Flexor Stretch for Runners" },
  "Calf stretch on wall": { url: "https://www.youtube.com/watch?v=y01ri_43G50", label: "Wall Calf Stretch" },
  "Calf stretch wall": { url: "https://www.youtube.com/watch?v=y01ri_43G50", label: "Wall Calf Stretch" },
  "Calf stretch": yt("Calf stretch for runners", "calf stretch for runners"),
  "Figure-four glute stretch": yt("Figure-four glute stretch", "figure four glute stretch"),
  "Figure-four stretch": yt("Figure-four glute stretch", "figure four glute stretch"),
  "Glute stretch": yt("Figure-four glute stretch", "figure four glute stretch"),
  "Ankle circles": yt("Ankle circles", "ankle circles mobility exercise"),
  "Single-leg glute bridge": { url: "https://www.youtube.com/watch?v=ZJodU5OOaiA", label: "Single-Leg Glute Bridge" },
  "Glute bridges": yt("Glute bridge", "glute bridge form"),
  "Standing calf raise with weights": { url: "https://www.youtube.com/watch?v=wxwY7GXxL4k", label: "Standing Dumbbell Calf Raise" },
  "Calf raise": { url: "https://www.youtube.com/shorts/hnzTTsY4thU", label: "Calf Raises for Shin Splints" },
  "Goblet squat": { url: "https://www.youtube.com/watch?v=CkFzgR55gho", label: "Goblet Squat with a Dumbbell" },
  "Reverse lunge": { url: "https://www.youtube.com/watch?v=RZKXLMxPF_I", label: "Reverse Lunge with Weights" },
  "Banded lateral walk": { url: "https://www.youtube.com/watch?v=M5uxEQH5BUM", label: "Banded Lateral Walk" },
  "Banded toe raise": { url: "https://www.youtube.com/watch?v=HNa-n4xq8ro", label: "Banded Toe Raise for Shin Strength" },
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
  const supplied = suppliedVideo(stretchText);
  if (supplied) return supplied;
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

export function StridesGuide({ onClose }) {
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


export function getVideo(text, type) {
  const match = findVideoLink(text);
  if (match) {
    const url = new URL(match.url);
    const pathVideoId = url.pathname.match(/\/(?:shorts|embed)\/([^/]+)/)?.[1];
    const shortVideoId = url.hostname === "youtu.be" ? url.pathname.split("/").filter(Boolean)[0] : null;
    const videoId = match.search ? null : (url.searchParams.get("v") || pathVideoId || shortVideoId);
    return { ...match, videoId };
  }
  const query = type === "strides" ? "how to run strides running drills" : `${text} running exercise tutorial`;
  return yt(text, query);
}

export function Card({ workout, card, index, count, checked, onCheck, onVideo, onStrides, readOnly = false }) {
  function openCard() {
    if (card.guide) return onStrides();
    if (card.video.search) return window.open(card.video.url, "_blank", "noopener");
    onVideo({ ...card.video, workoutId:workout.id, exerciseName:card.title });
  }
  return <article className={`hm-card${checked ? " is-checked" : ""}`}>
    <div className="hm-card-top">
      <input disabled={readOnly} className="hm-check" aria-label={`Mark ${card.title} complete`} type="checkbox" checked={checked} onChange={onCheck} />
      <div className="hm-card-heading"><div className="hm-card-title">{card.title}</div><div className="hm-card-sub">{card.subtitle}</div></div>
    </div>
    <div className="hm-card-body">{card.body}</div>
    <div className="hm-card-bottom" role="button" tabIndex={0} aria-label={`Open ${card.guide ? "how-to guide" : "video"} for ${card.title}`} onClick={event => { if (event.target.closest("a,button")) return; openCard(); }} onKeyDown={event => { if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); openCard(); } }}>
      {card.video.search
        ? <a className="hm-watch search" href={card.video.url} target="_blank" rel="noreferrer">↗ Find video</a>
        : <button type="button" className="hm-watch" onClick={() => onVideo({ ...card.video, workoutId:workout.id, exerciseName:card.title })}>▶ Watch</button>}
      <span className="hm-card-index">{index + 1} / {count}</span>
      {card.guide && <button type="button" className="hm-watch" onClick={onStrides}>How-to guide</button>}
    </div>
  </article>;
}



export function TutorialPlayer({ video, open, onToggle }) {
  return <aside className={`hm-video-panel${open ? " is-open" : ""}`} aria-label="Exercise video player">
    <div className="hm-video-head"><Button variant="ghost" className="hm-tutorial-toggle" onClick={onToggle} aria-expanded={open}>{video?.exerciseName || "Exercise video"}<ChevronDown size={16} /></Button>{video && <a className="hm-video-open" href={video.url} target="_blank" rel="noreferrer">Open on YouTube ↗</a>}</div>
    {video ? <><div className="hm-video-frame"><iframe src={`https://www.youtube-nocookie.com/embed/${video.videoId}?rel=0`} title={video.label} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div><div className="hm-video-caption">{video.label}</div></> : <div className="hm-video-empty"><Play size={28} /><span>Workout tutorials</span></div>}
  </aside>;
}
