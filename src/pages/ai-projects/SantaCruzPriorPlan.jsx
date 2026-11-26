import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Card, getVideo, StridesGuide, TutorialPlayer } from "./TrainingTutorials";
const COLORS = { teal:"var(--journey-teal)", accent:"var(--journey-accent)", purple:"var(--journey-purple)", amber:"var(--journey-amber)", green:"var(--journey-success)" };
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

export const SANTA_CRUZ_SCHEDULE = buildSchedule();

const typeConfig = {
  run:   { label: "Easy Run",    color: COLORS.teal,   bg: COLORS.tealSoft   },
  cross: { label: "Cross-Train", color: COLORS.amber,  bg: COLORS.amberSoft  },
  tempo: { label: "Tempo",       color: COLORS.accent, bg: COLORS.accentSoft },
  long:  { label: "Long Run",    color: COLORS.purple, bg: COLORS.purpleSoft },
  race:  { label: "RACE DAY",    color: "#FFD700",     bg: "#FFD70020"        },
};


function activityGroups(day) {
  const workoutCards = [{ id:"workout", title:typeConfig[day.type].label, subtitle:day.miles ? `${day.miles} miles` : "Cross-training", body:day.workout, video:getVideo(day.workout, "run") }];
  if (day.workout.toLowerCase().includes("strides")) workoutCards.push({ id:"strides", title:"Strides guide", subtitle:"How-to guide", body:day.workout, guide:true, video:getVideo("running strides", "strides") });
  return [
    { title:day.type === "cross" ? "Cross-training" : "Run", cards:workoutCards },
    { title:"Stretches", cards:day.stretches.map((text, i) => ({ id:`stretch-${i}`, title:text, subtitle:"After your workout", body:text, video:getVideo(text, "stretch") })) },
    { title:"Recovery", cards:[{ id:"recovery", title:"Recovery", subtitle:"After your workout", body:day.recovery, video:getVideo(day.recovery, "recovery") }] }
  ];
}
export default function SantaCruzPriorPlan({ onPlans }) {
  const [weekId, setWeekId] = useState(1);
  const [dayId, setDayId] = useState(null);
  const [filter, setFilter] = useState("All");
  const [video, setVideo] = useState(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const [strides, setStrides] = useState(false);
  const weeks = SANTA_CRUZ_SCHEDULE.filter(week => filter === "All" || week.phase === filter);
  const miles = SANTA_CRUZ_SCHEDULE.reduce((sum, week) => sum + week.totalMiles, 0);
  return <div className="hm-santa-plan">
    {strides && <StridesGuide onClose={() => setStrides(false)} />}
    <div className="hm-top"><div className="hm-toprow"><div className="hm-progress-label">Santa Cruz · Completed plan</div><div className="hm-phase-filters">{["All", "Base Building", "Building", "Peak", "Taper"].map(phase => <Button variant="ghost" key={phase} aria-pressed={filter === phase} onClick={() => setFilter(phase)}>{phase}</Button>)}</div></div></div>
    <div className="hm-layout"><main className="hm-main">
      <header className="hm-hero"><Button variant="ghost" size="sm" className="hm-history-link" onClick={onPlans}>↑ All training plans</Button><div className="hm-eyebrow">Completed training plan</div><h1>Santa Cruz Half Marathon</h1><div className="hm-subtitle">June 29 – October 25, 2026</div><div className="hm-stats">{[["Scheduled weeks", SANTA_CRUZ_SCHEDULE.length], ["Plan miles", miles.toFixed(1)], ["Race length", "13.1 mi"], ["Finish pace", "Under 12:00/mi"]].map(([label, value]) => <div className="hm-stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></header>
      <div className="hm-info goals"><strong>From zero running experience to the finish line</strong><br />Completed a half marathon at under a 12-minute mile, following this training plan.</div>
      <div className="hm-info"><strong>Course Elevation Guide</strong><br />Lighthouse Field → East Cliff Drive → Pleasure Point → Capitola & back. Rolling coastal bluffs, ~420 ft total gain. Training builds from flat easy runs (30–65 ft) to race-elevation long runs (330–360 ft) in Weeks 13–15, then tapers.</div>
      <div className="hm-weeks">{weeks.map(week => {
        const open = weekId === week.week;
        return <section className="hm-week" key={week.week}>
          <Button variant="ghost" className="hm-week-heading hm-santa-heading" aria-expanded={open} aria-label={`${open ? "Collapse" : "Expand"} Santa Cruz week ${week.week}`} onClick={() => setWeekId(open ? null : week.week)}><div className="hm-week-num">{week.week}</div><div className="hm-week-meta"><div className="hm-week-title">Week {week.week} · {week.phase}</div><div className="hm-week-range">{week.dateRange}</div></div><div className="hm-week-total">{week.totalMiles.toFixed(1)} mi</div><ChevronDown className={open ? "hm-rotate" : ""} size={16} /></Button>
          {open && <div className="hm-week-body">{week.days.map((day, i) => {
            const id = `${week.week}-${i}`; const expanded = dayId === id;
            return <article className="hm-day" key={id}><Button variant="ghost" className="hm-day-summary hm-santa-heading" aria-expanded={expanded} aria-label={`${expanded ? "Collapse" : "Expand"} Santa Cruz ${day.label} week ${week.week}`} onClick={() => setDayId(expanded ? null : id)}><div className="hm-day-date"><b>{day.label}</b><span>{day.miles ? `${day.miles} mi` : "Cross"}</span></div><div className="hm-day-main"><div className="hm-day-title">{typeConfig[day.type].label}</div><div className="hm-day-summary-text">{day.workout}</div></div><ChevronDown className={expanded ? "hm-rotate" : ""} size={16} /></Button>
              {expanded && <div className="hm-day-content">{day.elev.ft > 0 && <div className="hm-note">↑ {day.elev.ft} ft · {day.elev.note}</div>}{activityGroups(day).map(group => <section className="hm-activity" key={group.title}><div className="hm-activity-head"><div className="hm-activity-title">{group.title}</div><div className="hm-activity-count">Archived plan</div></div><div className="hm-carousel" aria-label={`${group.title} cards`}>{group.cards.map((card, index) => <Card key={card.id} workout={{id}} card={card} index={index} count={group.cards.length} checked={false} readOnly onCheck={() => {}} onVideo={next => { setVideo(next); setVideoOpen(true); }} onStrides={() => setStrides(true)} />)}</div></section>)}</div>}
            </article>;
          })}</div>}
        </section>;
      })}</div>
      <div className="hm-info hm-santa-care"><strong>Knee & Shin Care — Daily Habits</strong><div className="hm-knee-grid">{[["Before every run", "5 min dynamic warm-up: leg swings, hip circles, high knees"], ["After every run", "Ice shins/knees 10–15 min if any tenderness"], ["Daily", "Calf raises 3×15 to build shin & knee resilience"], ["Red Flags", "Sharp pain = stop immediately. Dull ache OK, sharp never."]].map(([title, text]) => <div className="hm-knee-card" key={title}><strong>{title}</strong>{text}</div>)}</div></div>
    </main><TutorialPlayer video={video} open={videoOpen} onToggle={() => setVideoOpen(current => !current)} /></div>
  </div>;
}
