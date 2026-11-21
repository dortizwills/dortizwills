import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import TrainingHistory from "./TrainingHistory";
import SantaCruzPriorPlan from "./SantaCruzPriorPlan";
import { Card, getVideo, StridesGuide } from "./TrainingTutorials";
import TrainingPlanCards from "./TrainingPlanCards";
import { toggleTrainingPlan } from "./trainingHistory";

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


const STORE = {
  get(key, fallback) {
    try { return JSON.parse(window.localStorage.getItem(`half-marathon-pr:${key}`) || "null") ?? fallback; }
    catch { return fallback; }
  },
  set(key, value) {
    try { window.localStorage.setItem(`half-marathon-pr:${key}`, JSON.stringify(value)); } catch { /* storage may be unavailable */ }
  },
};

const DAY_OFFSETS = { Mon:0, Tue:1, Wed:2, Thu:3, Fri:4, Sat:5, Sun:6 };
const INITIAL_RACE_DATE = "2027-03-14";
const STYLES = `
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; background: #0D1117; }
  body { margin: 0; }
  .hm-shell { min-height: 100vh; background: radial-gradient(ellipse at 18% 0%, #25150f 0, #0D1117 38rem); color: #E6EDF3; font-family: 'Figtree', 'Segoe UI', system-ui, sans-serif; padding-bottom: 54px; }
  .hm-top { position: sticky; top: 0; z-index: 30; background: rgba(13,17,23,.94); border-bottom: 1px solid #2A3441; backdrop-filter: blur(18px); padding: 12px max(18px, calc((100vw - 1440px)/2)); }
  .hm-toprow { display:flex; align-items:center; justify-content:space-between; gap:16px; margin-bottom:10px; }
  .hm-progress-label { font-size:13px; font-weight:700; color:#E6EDF3; white-space:nowrap; }
  .hm-phase-filters { display:flex; gap:6px; overflow-x:auto; scrollbar-width:none; }
  .hm-phase-filters button { border:1px solid #2A3441; background:#161B22; color:#9BA8B5; padding:6px 12px; border-radius:999px; cursor:pointer; white-space:nowrap; font-size:12px; }
  .hm-phase-filters button[aria-pressed=true] { color:#E6EDF3; border-color:#FF5D3B; background:#FF5D3B22; }
  .hm-segments { display:grid; grid-template-columns:repeat(var(--segment-count), minmax(12px,1fr)); gap:4px; }
  .hm-segment { height:8px; border:0; border-radius:99px; background:#2A3441; padding:0; cursor:pointer; }
  .hm-segment.is-complete { background:#4ADE80; }
  .hm-segment.is-current { background:#FF5D3B; box-shadow:0 0 0 2px #FF5D3B35; }
  .hm-segment.is-filtered { opacity:.18; }
  .hm-layout { max-width:1440px; margin:0 auto; padding:22px 20px; display:grid; grid-template-columns:minmax(0, 3fr) minmax(320px, 2fr); gap:22px; align-items:start; }
  .hm-main { min-width:0; }
  .hm-hero { padding:26px 28px; border:1px solid #FF5D3B35; border-radius:18px; background:linear-gradient(135deg,#20120f,#161B22 60%,#101722); margin-bottom:14px; }
  .hm-eyebrow { text-transform:uppercase; letter-spacing:.18em; color:#FF5D3B; font-size:11px; font-weight:800; }
  .hm-hero h1 { font:800 clamp(30px,4vw,48px)/1.05 'Outfit', sans-serif; margin:8px 0; letter-spacing:-.04em; }
  .hm-subtitle { color:#9BA8B5; font-size:14px; }
  .hm-stats { display:flex; gap:22px; flex-wrap:wrap; margin-top:20px; }
  .hm-stat strong { display:block; font:800 23px 'Outfit',sans-serif; }
  .hm-stat span { color:#6E7F96; text-transform:uppercase; font-size:10px; letter-spacing:.12em; }
  .hm-info { padding:14px 16px; background:#161B22; border:1px solid #2A3441; border-radius:12px; margin-bottom:12px; font-size:12px; color:#9BA8B5; line-height:1.7; }
  .hm-info strong { color:#E6EDF3; }
  .hm-info.goals { border-color:#4ADE8044; }
  .hm-info.rhythm { border-color:#60A5FA44; }
  .hm-knee-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(145px,1fr)); gap:8px; margin-top:10px; }
  .hm-knee-card { background:#1C2330; border-radius:9px; padding:10px; font-size:11px; line-height:1.5; color:#9BA8B5; }
  .hm-knee-card strong { display:block; color:#F59E0B; margin-bottom:4px; }
  .hm-weeks { display:flex; flex-direction:column; gap:12px; }
  .hm-week { scroll-margin-top:112px; }
  .hm-week-heading { position:sticky; top:116px; z-index:10; border:1px solid #2A3441; border-radius:12px; padding:12px 15px; display:flex; align-items:center; gap:12px; background:rgba(22,27,34,.96); backdrop-filter:blur(12px); }
  .hm-week-num { width:36px; height:36px; flex:none; border-radius:10px; display:grid; place-items:center; font-weight:800; }
  .hm-week-meta { flex:1; min-width:0; }
  .hm-week-title { font-size:14px; font-weight:800; }
  .hm-week-range { font-size:11px; color:#6E7F96; margin-top:3px; }
  .hm-week-total { font-size:12px; font-weight:800; white-space:nowrap; }
  .hm-week-progress { width:70px; text-align:right; color:#9BA8B5; font-size:11px; }
  .hm-week-body { padding:10px 0 4px; display:grid; grid-template-columns:minmax(0,1fr); gap:9px; }
  .hm-week, .hm-day, .hm-workout-groups, .hm-activity { min-width:0; max-width:100%; }
  .hm-chevron { flex:none; width:28px; height:28px; border-radius:8px; border:1px solid #2A3441; background:#1C2330; color:#9BA8B5; display:grid; place-items:center; cursor:pointer; padding:0; transition:transform .2s ease; }
  .hm-chevron svg { width:14px; height:14px; }
  .hm-chevron.is-open { transform:rotate(180deg); }
  .hm-week-heading { cursor:pointer; }
  .hm-note { color:#2DD4BF; background:#2DD4BF12; border-radius:9px; padding:10px 12px; font-size:12px; line-height:1.55; }
  .hm-day { scroll-margin-top:180px; border:1px solid #2A3441; border-radius:13px; background:#161B22; overflow:visible; }
  .hm-day.is-today { border-color:#FF5D3B99; box-shadow:0 0 0 1px #FF5D3B33; }
  .hm-day.is-past { opacity:.82; }
  .hm-day-summary { width:100%; border:0; background:transparent; color:#E6EDF3; padding:12px; display:flex; align-items:center; gap:11px; text-align:left; cursor:pointer; }
  .hm-day-date { width:55px; min-height:50px; border-radius:10px; flex:none; background:#1C2330; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#2DD4BF; }
  .hm-day-date b { font-size:11px; }
  .hm-day-date span { font-size:10px; color:#9BA8B5; margin-top:2px; }
  .hm-day-main { min-width:0; flex:1; }
  .hm-day-title { font-size:12px; font-weight:800; }
  .hm-day-summary-text { margin-top:3px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; color:#9BA8B5; font-size:11px; }
  .hm-day-status { font-size:10px; color:#6E7F96; white-space:nowrap; }
  .hm-day-status.done { color:#4ADE80; }
  .hm-day-status.missed { color:#F59E0B; }
  .hm-day-content { border-top:1px solid #2A3441; padding:12px; display:grid; grid-template-columns:minmax(0,1fr); gap:12px; }
  .hm-activity { min-width:0; }
  .hm-activity-head { display:flex; justify-content:space-between; align-items:baseline; gap:12px; margin:0 2px 7px; }
  .hm-activity-title { font-size:11px; font-weight:800; text-transform:uppercase; letter-spacing:.09em; }
  .hm-activity-count { color:#6E7F96; font-size:10px; }
  .hm-carousel { display:flex; overflow-x:auto; gap:9px; padding:2px 2px 9px; scroll-snap-type:x mandatory; scrollbar-color:#384657 transparent; }
  .hm-card { flex:0 0 min(82%, 272px); min-height:143px; scroll-snap-align:start; border:1px solid #2A3441; border-radius:12px; padding:12px; background:linear-gradient(145deg,#202937,#1C2330 75%); display:flex; flex-direction:column; gap:9px; }
  .hm-card.is-checked { border-color:#4ADE8066; background:linear-gradient(145deg,#183027,#1C2330 75%); }
  .hm-card-top { display:flex; align-items:flex-start; gap:9px; }
  .hm-check { width:19px; height:19px; accent-color:#4ADE80; flex:none; margin:1px 0 0; cursor:pointer; }
  .hm-card-heading { flex:1; min-width:0; }
  .hm-card-title { font-size:12px; font-weight:800; line-height:1.35; }
  .hm-card-sub { font-size:10px; color:#6E7F96; margin-top:3px; }
  .hm-card-body { font-size:11px; line-height:1.55; color:#9BA8B5; }
  .hm-card-bottom { cursor:pointer; margin:auto -12px -12px; padding:9px 12px 12px; border-radius:0 0 12px 12px; display:flex; align-items:center; justify-content:space-between; gap:8px; }
  .hm-card-bottom:hover { background:#ffffff08; }
  .hm-watch { border:1px solid #ff5d3b45; background:#ff5d3b12; color:#ff8066; border-radius:8px; text-decoration:none; padding:6px 9px; font-size:10px; font-weight:700; cursor:pointer; }
  .hm-watch.search { color:#ff7373; border-color:#ff000033; background:#ff000010; }
  .hm-card-index { color:#6E7F96; font-size:10px; }
  .hm-menu-wrap { position:relative; }
  .hm-menu-button { border:1px solid #2A3441; border-radius:8px; background:#1C2330; color:#9BA8B5; width:31px; height:31px; font-size:18px; cursor:pointer; }
  .hm-menu { position:absolute; right:0; top:36px; z-index:22; width:min(230px,75vw); padding:6px; border:1px solid #384657; border-radius:10px; background:#101722; box-shadow:0 14px 35px #0008; display:grid; gap:3px; }
  .hm-menu button { text-align:left; border:0; background:transparent; color:#E6EDF3; padding:9px; border-radius:7px; font-size:11px; cursor:pointer; }
  .hm-menu button:hover { background:#1C2330; }
  .hm-video-panel { position:sticky; top:112px; min-height:240px; border:1px solid #2A3441; border-radius:16px; background:#161B22; overflow:hidden; }
  .hm-video-head { display:flex; align-items:center; justify-content:space-between; gap:10px; padding:13px 15px; border-bottom:1px solid #2A3441; }
  .hm-video-title { font-size:13px; font-weight:800; }
  .hm-video-open { color:#ff7373; font-size:11px; text-decoration:none; white-space:nowrap; }
  .hm-video-frame { aspect-ratio:16/9; background:#050607; }
  .hm-video-frame iframe { width:100%; height:100%; border:0; }
  .hm-video-empty { min-height:190px; padding:24px; display:grid; place-items:center; text-align:center; color:#6E7F96; font-size:12px; line-height:1.6; }
  .hm-video-empty span { display:block; font-size:30px; margin-bottom:8px; }
  .hm-video-caption { padding:10px 14px; font-size:11px; color:#9BA8B5; }
  .hm-settings { border:1px solid #2A3441; background:#161B22; border-radius:12px; padding:12px 14px; margin:12px 0; }
  .hm-settings summary { cursor:pointer; font-size:12px; font-weight:800; }
  .hm-settings-row { display:flex; align-items:center; gap:10px; flex-wrap:wrap; margin-top:12px; color:#9BA8B5; font-size:11px; }
  .hm-settings input[type=date], .hm-date-input, .hm-shift-input { background:#0D1117; color:#E6EDF3; border:1px solid #384657; border-radius:8px; padding:7px 9px; }
  .hm-settings button, .hm-dialog button { background:#FF5D3B; border:0; color:white; font-weight:700; padding:8px 11px; border-radius:8px; cursor:pointer; }
  .hm-settings button.secondary, .hm-dialog button.secondary { background:#1C2330; border:1px solid #384657; color:#E6EDF3; }
  .hm-dialog-backdrop { position:fixed; inset:0; z-index:100; background:#000a; display:grid; place-items:center; padding:18px; }
  .hm-dialog { width:min(420px,100%); background:#161B22; border:1px solid #384657; border-radius:16px; padding:18px; box-shadow:0 20px 60px #000a; }
  .hm-dialog h2 { font-size:17px; margin:0 0 5px; }
  .hm-dialog p { color:#9BA8B5; font-size:12px; line-height:1.55; }
  .hm-warning { color:#F59E0B; background:#F59E0B15; border:1px solid #F59E0B44; padding:9px; border-radius:8px; margin:9px 0; font-size:11px; }
  .hm-dialog-actions { display:flex; justify-content:flex-end; gap:8px; margin-top:14px; }
  .hm-start-state, .hm-finished { border:1px solid #2DD4BF55; background:#2DD4BF10; border-radius:14px; padding:19px; margin-bottom:14px; color:#B7F6E9; line-height:1.6; }
  .hm-finished { border-color:#4ADE8055; background:#4ADE8010; color:#BDF5CD; }
  .hm-mobile-video-bar { display:none; }
  @media(max-width:900px) { .hm-layout { grid-template-columns:minmax(0,1fr) minmax(280px, .8fr); gap:14px; padding:14px; } .hm-week-heading { top:105px; } .hm-video-panel { top:104px; } }
  @media(max-width:700px) {
    .hm-top { padding:10px 12px; }
    .hm-toprow { align-items:flex-start; flex-direction:column; gap:9px; margin-bottom:9px; }
    .hm-progress-label { font-size:12px; }
    .hm-segments { gap:3px; }
    .hm-segment { height:6px; }
    .hm-layout { display:block; padding:12px; }
    .hm-hero { padding:22px 18px; }
    .hm-stats { gap:15px 23px; }
    .hm-week-heading { top:90px; padding:10px; }
    .hm-week-progress { width:54px; }
    .hm-day { scroll-margin-top:148px; }
    .hm-day-content { padding:10px; }
    .hm-card { flex-basis:min(280px, calc(100% - 40px)); }
    .hm-week-total { display:none; }
    .hm-video-panel { position:fixed; z-index:50; left:10px; right:10px; bottom:8px; top:auto; min-height:0; max-height:76vh; border-radius:17px; box-shadow:0 10px 40px #000b; transform:translateY(calc(100% - 48px)); transition:transform .28s ease; }
    .hm-video-panel.is-open { transform:translateY(0); }
    .hm-video-head { min-height:48px; cursor:pointer; }
    .hm-video-empty { min-height:100px; }
    .hm-video-frame { aspect-ratio:16/9; }
    .hm-mobile-video-bar { display:block; }
  }
  @media(prefers-reduced-motion:reduce) { *,*::before,*::after { scroll-behavior:auto !important; transition:none !important; } }
`;

function dateFromISO(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day, 12);
}
function dateToISO(date) {
  const y = date.getFullYear(); const m = String(date.getMonth() + 1).padStart(2, "0"); const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
function addDays(date, count) { const next = new Date(date); next.setDate(next.getDate() + count); return next; }
function mondayOf(value) { const d = typeof value === "string" ? dateFromISO(value) : new Date(value); return addDays(d, -((d.getDay() + 6) % 7)); }
function formatDate(value, options = { weekday:"long", month:"short", day:"numeric" }) { return dateFromISO(value).toLocaleDateString("en-US", options); }
function daysBetween(a, b) { return Math.round((dateFromISO(a) - dateFromISO(b)) / 86400000); }
function cardProgressKey(workoutId, cardId) { return `${workoutId}:${cardId}`; }

const ORIGINAL_WORKOUTS = SCHEDULE.flatMap((week) => week.days.map((workout, index) => {
  const date = addDays(addDays(START, (week.n - 1) * 7), DAY_OFFSETS[workout.d]);
  return { ...workout, id:`week-${week.n}-${workout.t}-${index}`, originalWeek:week.n, phase:week.phase, weekNote:week.note, date:dateToISO(date) };
}));

function makeCards(workout) {
  const groups = [];
  if (workout.ex) {
    groups.push({ title:"Strength", color:C.blue, cards:workout.ex.map(([name, reps], index) => ({ id:`exercise-${index}-${name}`, title:name, subtitle:reps, body:`Complete ${reps} with smooth, controlled form.`, video:getVideo(name, "strength") })) });
  } else if (workout.t !== "strength") {
    const runTitle = workout.t === "race" ? "Race day" : TYPES[workout.t].label;
    const runCards = [{ id:"run-workout", title:runTitle, subtitle:workout.mi > 0 ? `${workout.mi} miles` : "Workout", body:workout.text, video:getVideo(workout.text, "run") }];
    if (workout.text.toLowerCase().includes("strides")) runCards.push({ id:"strides-guide", title:"Strides guide", subtitle:"4 × 30 seconds", body:"Use the guide for the build-up, controlled hold, wind-down, and recovery between strides.", guide:true, video:getVideo("running strides", "strides") });
    groups.push({ title:workout.t === "race" ? "Race" : "Run", color:TYPES[workout.t].color, cards:runCards });
  }
  const type = TYPES[workout.t];
  groups.push({ title:"Stretches & Recovery", color:C.teal, cards:[
    ...type.stretch.map((stretch, index) => ({ id:`stretch-${index}-${stretch}`, title:stretch.replace(/\s+\d+×?\d*\s*(s|sec|seconds)?/i, ""), subtitle:stretch.match(/\d+[^ ]*(?:\s+each)?/i)?.[0] || "Stretch", body:stretch, video:getVideo(stretch, "stretch") })),
    { id:"recovery", title:"Recovery", subtitle:"After the workout", body:type.rec, video:getVideo(type.rec, "recovery") },
  ] });
  return groups;
}

function CurrentPRPlan({ onProgress, onPlans }) {
  const [view, setView] = useState("training");
  const [schedule, setSchedule] = useState(() => STORE.get("schedule", {}));
  const [completed, setCompleted] = useState(() => STORE.get("completed", {}));
  const [missed, setMissed] = useState(() => STORE.get("missed", {}));
  const [raceDate, setRaceDate] = useState(() => STORE.get("race-date", INITIAL_RACE_DATE));
  const [filter, setFilter] = useState("All");
  const [activeWeekId, setActiveWeekId] = useState(null);
  const [openDay, setOpenDay] = useState(() => STORE.get("open-day", null));
  const [collapsedWeeks, setCollapsedWeeks] = useState(() => STORE.get("collapsed-weeks", {}));
  const [activeVideo, setActiveVideo] = useState(null);
  const [mobileVideoOpen, setMobileVideoOpen] = useState(false);
  const [dialog, setDialog] = useState(null);
  const [showStrides, setShowStrides] = useState(false);
  const weekRefs = useRef(new Map());
  const dayRefs = useRef(new Map());
  const now = new Date();
  const today = dateToISO(now);
  const planStart = dateToISO(START);
  const todayWeek = dateToISO(mondayOf(today));

  useEffect(() => { STORE.set("schedule", schedule); }, [schedule]);
  useEffect(() => { STORE.set("completed", completed); onProgress?.(completed); }, [completed, onProgress]);
  useEffect(() => { STORE.set("missed", missed); }, [missed]);
  useEffect(() => { STORE.set("race-date", raceDate); }, [raceDate]);
  useEffect(() => { STORE.set("open-day", openDay); }, [openDay]);
  useEffect(() => { STORE.set("collapsed-weeks", collapsedWeeks); }, [collapsedWeeks]);
  useEffect(() => {
    const previousTitle = document.title;
    const meta = document.querySelector('meta[name="robots"]') || document.createElement("meta");
    const created = !meta.parentNode;
    const previousRobots = meta.content;
    meta.name = "robots"; meta.content = "noindex, nofollow";
    if (created) document.head.appendChild(meta);
    document.title = "Half Marathon PR Plan | Private Training Page";
    return () => { document.title = previousTitle; if (created) meta.remove(); else meta.content = previousRobots; };
  }, []);

  const workouts = useMemo(() => ORIGINAL_WORKOUTS.map(workout => ({
    ...workout,
    date: workout.t === "race" ? raceDate : (schedule[workout.id] || workout.date),
  })), [schedule, raceDate]);

  const groupedWeeks = useMemo(() => {
    const dayMap = new Map();
    workouts.forEach(workout => {
      if (!dayMap.has(workout.date)) dayMap.set(workout.date, []);
      dayMap.get(workout.date).push(workout);
    });
    const weekMap = new Map();
    for (const [date, items] of dayMap) {
      const weekStart = dateToISO(mondayOf(date));
      if (!weekMap.has(weekStart)) weekMap.set(weekStart, []);
      weekMap.get(weekStart).push({ date, items });
    }
    return [...weekMap.entries()].sort(([a],[b]) => a.localeCompare(b)).map(([weekStart, days]) => {
      days.sort((a,b) => a.date.localeCompare(b.date));
      const weekItems = days.flatMap(day => day.items);
      const phases = [...new Set(weekItems.map(item => item.phase))];
      const planWeek = Math.max(1, Math.min(SCHEDULE.length, Math.floor(daysBetween(weekStart, planStart) / 7) + 1));
      const done = weekItems.reduce((sum, item) => sum + makeCards(item).flatMap(group => group.cards).filter(card => completed[cardProgressKey(item.id, card.id)]).length, 0);
      const total = weekItems.reduce((sum,item) => sum + makeCards(item).flatMap(group => group.cards).length, 0);
      const miles = weekItems.reduce((sum,item) => sum + (item.mi || 0), 0);
      const notes = [...new Set(weekItems.map(item => item.weekNote).filter(Boolean))];
      return { id:weekStart, weekStart, days, phases, phase:phases.length > 1 ? phases.join(" / ") : phases[0], planWeek, done, total, miles, notes };
    });
  }, [workouts, completed, planStart]);

  const shownWeeks = useMemo(() => groupedWeeks.filter(week => filter === "All" || week.phases.includes(filter)), [groupedWeeks, filter]);
  const currentWeekGroup = groupedWeeks.find(week => week.days.some(day => day.date === today)) || groupedWeeks.find(week => week.weekStart === todayWeek) || groupedWeeks.find(week => week.weekStart >= todayWeek) || groupedWeeks[groupedWeeks.length - 1];
  const displayedWeek = groupedWeeks.find(week => week.id === activeWeekId) || currentWeekGroup;
  const inRange = today >= planStart && today <= raceDate;
  const beforePlan = today < planStart;
  const afterRace = today > raceDate;
  const dayUntilStart = Math.max(0, daysBetween(planStart, today));
  const currentWeekLabel = activeWeekId || currentWeekGroup?.id;
  const totalMiles = Math.round(workouts.reduce((sum, workout) => sum + (workout.mi || 0), 0));
  const planDayCount = workouts.reduce((sum, workout) => sum + makeCards(workout).flatMap(group => group.cards).length, 0);

  useEffect(() => {
    const nodes = [...weekRefs.current.entries()];
    if (!nodes.length) return;
    const observer = new IntersectionObserver(entries => {
      const candidates = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio);
      if (candidates[0]) setActiveWeekId(candidates[0].target.dataset.weekId);
    }, { rootMargin:"-120px 0px -62% 0px", threshold:[0,.15,.35,.6] });
    nodes.forEach(([, node]) => observer.observe(node));
    return () => observer.disconnect();
  }, [shownWeeks]);

  useEffect(() => {
    // Start at the expanded plan header; today remains accessible through the week strip.
  }, []);

  function dateFor(workout) { return workout.t === "race" ? raceDate : (schedule[workout.id] || workout.date); }
  function updateCheck(workoutId, cardId, value) {
    const key = cardProgressKey(workoutId, cardId);
    setCompleted(current => ({ ...current, [key]:value }));
  }
  function setMissedForDay(date, value) { setMissed(current => ({ ...current, [date]:value })); }
  function saveMove(workout, targetDate) {
    const originalDate = dateFor(workout);
    setSchedule(current => ({ ...current, [workout.id]:targetDate }));
    setMissed(current => ({ ...current, [originalDate]:false, [targetDate]:false }));
    setDialog(null);
  }
  function resetWorkout(workout) {
    setSchedule(current => { const next = { ...current }; delete next[workout.id]; return next; });
    setMissedForDay(dateFor(workout), false);
  }
  function shiftRemaining(workout, delta) {
    const base = dateFor(workout);
    setSchedule(current => {
      const next = { ...current };
      for (const item of workouts) {
        const itemDate = item.t === "race" ? raceDate : (current[item.id] || item.date);
        if (item.t !== "race" && itemDate >= base) next[item.id] = dateToISO(addDays(dateFromISO(itemDate), delta));
      }
      return next;
    });
    setDialog(null);
  }
  function resetSchedule() {
    setSchedule({}); setMissed({}); setRaceDate(INITIAL_RACE_DATE);
  }
  function dateWarnings(workout, targetDate) {
    if (!workout || workout.t === "race") return [];
    return workouts.filter(other => other.id !== workout.id && ["quality","long"].includes(other.t) && ["quality","long"].includes(workout.t) && Math.abs(daysBetween(dateFor(other), targetDate)) <= 1)
      .map(other => `${TYPES[other.t].label} is scheduled ${dateFor(other) === targetDate ? "on the same day" : "the day before or after"} (${formatDate(dateFor(other), { month:"short", day:"numeric" })}).`);
  }

  if (view === "history") return <div className="hm-shell"><style>{STYLES}</style><TrainingHistory onBack={() => setView("training")} snapshot={{ raceDate, workouts:workouts.map(workout => ({ id:workout.id, date:workout.date, text:workout.text, mi:workout.mi, cards:makeCards(workout).flatMap(group => group.cards).map(card => ({ title:card.title, completed:Boolean(completed[cardProgressKey(workout.id,card.id)]) })) })) }} /></div>;

  return <div className="hm-shell">
    <style>{STYLES}</style>
    {showStrides && <StridesGuide onClose={() => setShowStrides(false)} />}
    <div className="hm-top">
      <div className="hm-toprow">
        <div className="hm-progress-label">Week {displayedWeek?.planWeek || 1} of {SCHEDULE.length} · {displayedWeek?.phase || "Base"}</div>
        <div className="hm-phase-filters" role="group" aria-label="Filter training plan by phase">
          {["All", ...Object.keys(PH)].map(phase => <button key={phase} type="button" aria-pressed={filter === phase} onClick={() => { setFilter(phase); setActiveWeekId(null); }}>{phase}</button>)}
        </div>
      </div>
      <div className="hm-segments" style={{ "--segment-count":Math.max(1, shownWeeks.length) }} aria-label="Weeks in plan">
        {shownWeeks.map(week => {
          const isCurrent = currentWeekLabel === week.id;
          const isComplete = week.weekStart < todayWeek;
          return <button key={week.id} type="button" title={`Week ${week.planWeek}: ${week.phase}`} aria-label={`Go to week ${week.planWeek}, ${week.phase}`} className={`hm-segment${isComplete ? " is-complete" : ""}${isCurrent ? " is-current" : ""}`} onClick={() => weekRefs.current.get(week.id)?.scrollIntoView({ behavior:"smooth", block:"start" })} />;
        })}
      </div>
    </div>

    <div className="hm-layout" id="hm-current-plan">
      <main className="hm-main">
        <header className="hm-hero">
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}><Button variant="ghost" size="sm" className="hm-history-link" onClick={onPlans}>↑ All training plans</Button><Button variant="ghost" size="sm" className="hm-history-link" onClick={() => setView("history")}><Trophy />Race results</Button></div>
          <div className="hm-eyebrow">Private training plan · 17 weeks</div>
          <h1>Beat 2:29:30</h1>
          <div className="hm-subtitle">{formatDate(planStart, { month:"short", day:"numeric", year:"numeric" })} – <strong style={{color:C.accent}}>{formatDate(raceDate, { month:"short", day:"numeric", year:"numeric" })}</strong></div>
          <div className="hm-stats">{[["Weeks",SCHEDULE.length],["Run Miles",`~${totalMiles}`],["Strength / wk","2"],["Goal Pace","10:40"]].map(([label,value]) => <div className="hm-stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
        </header>

        {beforePlan && <div className="hm-start-state"><strong>Training begins in {dayUntilStart} {dayUntilStart === 1 ? "day" : "days"}.</strong><br />Your first workout is Monday, November 16, 2026.</div>}
        {afterRace && <div className="hm-finished"><strong>Plan complete. Race day was {formatDate(raceDate, { month:"long", day:"numeric", year:"numeric" })}.</strong><br />Your check-offs and training history are saved on this device.</div>}
        {inRange && !afterRace && <div className="hm-info goals"><strong>Goals (by pace, so the 13.3 vs 13.1 mile gap doesn’t matter)</strong><br />Your 2:29:30 over 13.3 mi was about <b>11:14/mi</b> (≈ 2:27:25 over 13.1).<br /><b>Beat it:</b> under 11:14/mi · <b>Goal:</b> 10:40/mi ≈ 2:20 · <b>Stretch:</b> 10:18/mi ≈ 2:15<br /><b>Paces:</b> Easy 12:00–12:45 · Tempo 10:45–10:55 · Goal 10:40 · Intervals ~10:10. Use effort, not pace, on hills and windy days.</div>}
        <div className="hm-info">▶ <strong style={{color:"#ff7373"}}>Video tutorials</strong> — tap Watch to play a confirmed video here. Search-only links open YouTube in a new tab and are labeled “Find video.”</div>
        <div className="hm-info rhythm"><strong style={{color:C.blue}}>Weekly rhythm</strong><br /><b>Mon:</b> easy run + Strength A · <b>Wed:</b> quality run · <b>Thu:</b> Strength B · <b>Sat:</b> long run · Tue/Fri/Sun: rest or walk. Strength is about 20–25 minutes with hand weights and a loop band. Pick a weight where the last 2 reps feel hard but clean.</div>

        <details className="hm-settings">
          <summary>Plan settings & schedule</summary>
          <div className="hm-settings-row"><label htmlFor="hm-race-date">Race day</label><input id="hm-race-date" type="date" value={raceDate} onChange={event => event.target.value && setRaceDate(event.target.value)} /><span>Race date stays fixed while shifting workouts. Change it here when needed.</span></div>
          <div className="hm-settings-row"><button type="button" className="secondary" onClick={resetSchedule}>Reset all workouts to original dates</button></div>
        </details>

        {shownWeeks.length === 0 ? <div className="hm-info">No scheduled weeks in this phase yet.</div> : <div className="hm-weeks">
          {shownWeeks.map(week => {
            const color = PH[week.phases[0]] || C.accent;
            const weekEnd = dateToISO(addDays(dateFromISO(week.weekStart),6));
            const weekOpen = !collapsedWeeks[week.id];
            const toggleWeek = () => setCollapsedWeeks(current => ({ ...current, [week.id]:weekOpen }));
            return <section key={week.id} className="hm-week" data-week-id={week.id} ref={node => node ? weekRefs.current.set(week.id,node) : weekRefs.current.delete(week.id)}>
              <div className="hm-week-heading" onClick={toggleWeek}>
                <div className="hm-week-num" style={{background:`${color}22`,border:`1px solid ${color}66`,color}}>{week.planWeek}</div>
                <div className="hm-week-meta"><div className="hm-week-title">Week {week.planWeek} <span style={{fontSize:10,color,marginLeft:5}}>{week.phase}</span></div><div className="hm-week-range">{formatDate(week.weekStart,{month:"short",day:"numeric"})} – {formatDate(weekEnd,{month:"short",day:"numeric"})}</div></div>
                <div className="hm-week-total">{week.miles.toFixed(1)} mi</div><div className="hm-week-progress">{week.total ? Math.round(week.done / week.total * 100) : 0}% done</div>
                <Chevron open={weekOpen} label={`${weekOpen ? "Collapse" : "Expand"} week ${week.planWeek}`} onClick={toggleWeek} />
              </div>
              {weekOpen && <div className="hm-week-body">
                {week.notes.map(note => <div className="hm-note" key={note}>{note}</div>)}
                {week.days.map(day => {
                  const isToday = day.date === today;
                  const isPast = day.date < today;
                  const allCards = day.items.flatMap(item => makeCards(item).flatMap(group => group.cards.map(card => ({workout:item,card}))));
                  const done = allCards.filter(({workout,card}) => completed[cardProgressKey(workout.id,card.id)]).length;
                  const dayComplete = allCards.length > 0 && done === allCards.length;
                  const isOpen = openDay === day.date || (openDay === null && isToday);
                  const status = dayComplete ? "Done" : isPast || missed[day.date] ? "Missed" : `${done}/${allCards.length} done`;
                  const summary = day.items.map(item => item.t === "strength" ? "Strength" : `${TYPES[item.t].label}${item.mi ? ` · ${item.mi} mi` : ""}`).join(" + ");
                  return <article key={day.date} ref={node => node ? dayRefs.current.set(day.date,node) : dayRefs.current.delete(day.date)} className={`hm-day${isToday ? " is-today" : ""}${isPast ? " is-past" : ""}`}>
                    <div className="hm-day-summary" role="button" tabIndex={0} onClick={() => setOpenDay(isOpen ? (isToday ? "__closed__" : null) : day.date)} onKeyDown={event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setOpenDay(isOpen ? (isToday ? "__closed__" : null) : day.date); } }}>
                      <div className="hm-day-date"><b>{formatDate(day.date,{weekday:"short"})}</b><span>{formatDate(day.date,{month:"short",day:"numeric"})}</span></div>
                      <div className="hm-day-main"><div className="hm-day-title">{isToday ? "Today · " : ""}{summary}</div><div className="hm-day-summary-text">{day.items.map(item => item.text).join(" · ")}</div></div>
                      <span className={`hm-day-status${dayComplete ? " done" : isPast || missed[day.date] ? " missed" : ""}`}>{status}</span>
                      <Chevron open={isOpen} label={`${isOpen ? "Collapse" : "Expand"} ${formatDate(day.date,{weekday:"long"})}`} onClick={() => setOpenDay(isOpen ? (isToday ? "__closed__" : null) : day.date)} />
                      <span className="hm-menu-wrap" onClick={event => event.stopPropagation()}><DayMenu workouts={day.items} missed={missed[day.date]} onMiss={() => setMissedForDay(day.date,true)} onUnmiss={() => setMissedForDay(day.date,false)} onMove={workout => setDialog({type:"move",workout,date:dateFor(workout)})} onShift={workout => setDialog({type:"shift",workout,days:7})} onReset={resetWorkout} /></span>
                    </div>
                    {isOpen && <div className="hm-day-content">
                      {day.items.map(workout => <WorkoutGroups key={workout.id} workout={workout} completed={completed} onCheck={updateCheck} onVideo={video => {setActiveVideo(video); setMobileVideoOpen(true);}} onStrides={() => setShowStrides(true)} />)}
                    </div>}
                  </article>;
                })}
              </div>}
            </section>;
          })}
        </div>}
        <div className="hm-info" style={{marginTop:16,borderColor:`${C.amber}55`}}>
          <strong style={{color:C.amber}}>⚠️ Knee & Shin Care — Daily Habits</strong>
          <div className="hm-knee-grid">
            <div className="hm-knee-card"><strong>Before every run</strong>5 min dynamic warm-up: leg swings, hip circles, high knees</div>
            <div className="hm-knee-card"><strong>After every run</strong>Ice shins/knees 10–15 min if any tenderness</div>
            <div className="hm-knee-card"><strong>Daily</strong>Calf raises 3×15 to build shin & knee resilience <a className="hm-watch search" href={getVideo("Standing calf raises", "strength").url} target="_blank" rel="noreferrer">↗ Find video</a></div>
            <div className="hm-knee-card"><strong>🚨 Red Flags</strong>Sharp pain = stop immediately. Dull ache OK, sharp never.</div>
          </div>
          <div style={{fontSize:11,marginTop:10}}>Tempo and interval days plus strength work add load. If shin pain lingers 2+ days, swap the quality run for an easy one and check in with a sports medicine pro.</div>
        </div>
        <div className="hm-info" style={{fontSize:10}}>Check-offs are saved in this browser on this device. This plan contains {planDayCount} individual activity cards.</div>
      </main>

      <aside className={`hm-video-panel${mobileVideoOpen ? " is-open" : ""}`} aria-label="Exercise video player">
        <div className="hm-video-head" role="button" tabIndex={0} onClick={() => setMobileVideoOpen(value => !value)} onKeyDown={event => {if(event.key === "Enter" || event.key === " ") setMobileVideoOpen(value => !value);}}>
          <div className="hm-video-title">{activeVideo?.exerciseName || "Exercise video"}</div>
          {activeVideo && <a className="hm-video-open" href={activeVideo.url} target="_blank" rel="noreferrer" onClick={event => event.stopPropagation()}>Open on YouTube ↗</a>}
          {!activeVideo && <span className="hm-video-open">Tutorials</span>}
        </div>
        {activeVideo ? <><div className="hm-video-frame"><iframe src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?autoplay=1&rel=0`} title={activeVideo.label} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div><div className="hm-video-caption">{activeVideo.label}</div></> : <div className="hm-video-empty"><div><span>▶</span>Select an exercise to watch the tutorial</div></div>}
      </aside>
    </div>

    {dialog && <ScheduleDialog dialog={dialog} workouts={workouts} raceDate={raceDate} onCancel={() => setDialog(null)} onMove={saveMove} onShift={shiftRemaining} warnings={dateWarnings} />}
    {mobileVideoOpen && <span className="hm-mobile-video-bar" aria-hidden="true" />}
  </div>;
}

function Chevron({ open, label, onClick }) {
  return <button type="button" className={`hm-chevron${open ? " is-open" : ""}`} aria-label={label} aria-expanded={open} onClick={event => { event.stopPropagation(); onClick(); }}>
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6l4 4 4-4" /></svg>
  </button>;
}

function WorkoutGroups({ workout, completed, onCheck, onVideo, onStrides }) {
  return <div className="hm-workout-groups">
    {makeCards(workout).map(group => <section className="hm-activity" key={`${workout.id}-${group.title}`}>
      <div className="hm-activity-head"><div className="hm-activity-title" style={{color:group.color}}>{group.title}</div><div className="hm-activity-count">{group.cards.filter(card => completed[cardProgressKey(workout.id,card.id)]).length}/{group.cards.length} complete</div></div>
      <div className="hm-carousel" aria-label={`${group.title} cards`}>
        {group.cards.map((card,index) => <Card key={card.id} workout={workout} card={card} index={index} count={group.cards.length} checked={Boolean(completed[cardProgressKey(workout.id,card.id)])} onCheck={event => onCheck(workout.id,card.id,event.target.checked)} onVideo={onVideo} onStrides={onStrides} />)}
      </div>
    </section>)}
  </div>;
}

function DayMenu({ workouts, missed, onMiss, onUnmiss, onMove, onShift, onReset }) {
  const [open,setOpen] = useState(false);
  return <div className="hm-menu-wrap"><button className="hm-menu-button" aria-label="Schedule options" aria-expanded={open} onClick={() => setOpen(value => !value)}>⋯</button>{open && <div className="hm-menu" role="menu">
    <button role="menuitem" onClick={() => { missed ? onUnmiss() : onMiss(); setOpen(false); }}>{missed ? "Clear missed status" : "Mark as missed"}</button>
    {workouts.map(workout => <Fragment key={workout.id}><button role="menuitem" onClick={() => {onMove(workout);setOpen(false);}}>Move {workout.t === "strength" ? "strength" : "workout"} to another day</button><button role="menuitem" onClick={() => {onShift(workout);setOpen(false);}}>Shift this and remaining workouts</button><button role="menuitem" onClick={() => {onReset(workout);setOpen(false);}}>Reset this workout to original date</button></Fragment>)}
  </div>}</div>;
}

function ScheduleDialog({ dialog, workouts, raceDate, onCancel, onMove, onShift, warnings }) {
  const [date,setDate] = useState(dialog.date || "");
  const [days,setDays] = useState(dialog.days || 7);
  const workout = dialog.workout;
  const alerts = dialog.type === "move" ? warnings(workout,date) : [];
  const hardRunConflict = workouts.some(item => item.id !== workout.id && ["quality","long"].includes(item.t) && ["quality","long"].includes(workout.t) && Math.abs(daysBetween((item.t === "race" ? raceDate : item.date), date)) <= 1);
  return <div className="hm-dialog-backdrop" role="presentation" onClick={onCancel}><section className="hm-dialog" role="dialog" aria-modal="true" onClick={event => event.stopPropagation()}>
    {dialog.type === "move" ? <><h2>Move workout</h2><p>Choose the new scheduled date. Your original plan content stays the same.</p><input className="hm-date-input" type="date" value={date} onChange={event => setDate(event.target.value)} />{alerts.length > 0 && <div className="hm-warning">Hard-day spacing warning: {alerts.join(" ")}</div>}<div className="hm-dialog-actions"><button className="secondary" type="button" onClick={onCancel}>Cancel</button><button type="button" disabled={!date} onClick={() => onMove(workout,date)}>Save date</button></div></> : <><h2>Shift upcoming workouts</h2><p>Shift this workout and all later workouts by the number of days below. Race day stays fixed; change it in Plan settings.</p><label>Days to shift <input className="hm-shift-input" type="number" value={days} onChange={event => setDays(Number(event.target.value))} min="-90" max="90" /></label>{hardRunConflict && <div className="hm-warning">Review hard-day spacing after shifting. A quality run and long run may land on adjacent days.</div>}<div className="hm-dialog-actions"><button className="secondary" type="button" onClick={onCancel}>Cancel</button><button type="button" onClick={() => onShift(workout,Number(days))}>Shift schedule</button></div></>}
  </section></div>;
}

export default function HalfMarathonPRPlan() {
  const [selected, setSelected] = useState(null);
  const [progress, setProgress] = useState(() => STORE.get("completed", {}));
  const allCards = ORIGINAL_WORKOUTS.flatMap(workout => makeCards(workout).flatMap(group => group.cards.map(card => cardProgressKey(workout.id, card.id))));
  const done = allCards.filter(key => progress[key]).length;
  const returnToPlans = () => document.getElementById("hm-plan-cards")?.scrollIntoView({ behavior:"smooth", block:"start" });
  const select = id => {
    setSelected(current => toggleTrainingPlan(current, id));
  };
  useEffect(() => {
    const previousTitle = document.title;
    const meta = document.querySelector('meta[name="robots"]') || document.createElement("meta");
    const created = !meta.parentNode; const previous = meta.content;
    meta.name = "robots"; meta.content = "noindex, nofollow";
    if (created) document.head.appendChild(meta);
    document.title = "Half Marathon Training Journey";
    return () => { document.title = previousTitle; if (created) meta.remove(); else meta.content = previous; };
  }, []);
  return <div className="hm-shell"><style>{STYLES}</style>
    <TrainingPlanCards selected={selected} onSelect={select} currentMiles={SCHEDULE.reduce((sum, week) => sum + week.total, 0)} currentCompletion={`${done} / ${allCards.length} activities`} currentPercent={allCards.length ? Math.round(done / allCards.length * 100) : 0} />
    <section id="hm-expanded-plan" aria-label="Expanded training plan" aria-live="polite">
      {selected === "current" && <CurrentPRPlan onProgress={setProgress} onPlans={returnToPlans} />}
      {selected === "santa-cruz" && <SantaCruzPriorPlan onPlans={returnToPlans} />}
    </section>
  </div>;
}
