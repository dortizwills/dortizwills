import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp, ArrowUpRight, Flag, Route, Timer, Trophy } from "lucide-react";
import finishPhoto from "@/assets/santa-cruz-finish.png.asset.json";
import courseMap from "@/assets/santa-cruz-course-map.png.asset.json";
import coursePdf from "@/assets/santa-cruz-course-map.pdf.asset.json";
import { SANTA_CRUZ_SCHEDULE } from "./SantaCruzPriorPlan";

export default function TrainingPlanCards({ selected, onSelect, currentMiles, currentCompletion, currentPercent }) {
  const priorMiles = SANTA_CRUZ_SCHEDULE.reduce((sum, week) => sum + week.totalMiles, 0);
  const plans = [
    { id:"current", name:"Private training plan", heading:"The next personal best.", badge:"Follow along", status:"Training in progress", pace:"10:40 / mi goal", total:currentMiles, completion:currentCompletion, percent:currentPercent, weeks:"17-week PR plan", image:courseMap.url, imageAlt:"Santa Cruz coastal half marathon course map", action:"Open current plan" },
    { id:"santa-cruz", name:"Santa Cruz Half Marathon", heading:"From zero to the finish line.", badge:"Completed", status:"Race completed", pace:"Under 12:00 / mi", total:priorMiles, completion:"Prior plan completed", percent:100, weeks:`${SANTA_CRUZ_SCHEDULE.length} scheduled training weeks`, image:finishPhoto.url, imageAlt:"Smiling runner at the finish of the Santa Cruz race", action:"Explore completed plan" },
  ];
  return <section className="hm-plan-selection" id="hm-plan-cards" aria-label="Choose a training plan">
    <header className="hm-selection-header"><div className="hm-eyebrow">The running journey</div><h1>One finish line.<br />A new personal best ahead.</h1><p>Santa Cruz Half Marathon & the current PR training plan</p></header>
    <div className="hm-plan-grid">{plans.map(plan => {
      const open = selected === plan.id;
      return <article key={plan.id} tabIndex={0} aria-label={`${plan.name} card`} onClick={event => { if (!event.target.closest("button,a")) onSelect(plan.id); }} onKeyDown={event => { if (event.target === event.currentTarget && ["Enter", " "].includes(event.key)) { event.preventDefault(); onSelect(plan.id); } }} className={`hm-plan-project hm-plan-${plan.id}${open ? " is-selected" : ""}`}>
        <div className="hm-plan-art">{plan.id === "santa-cruz" ? <img src={plan.image} alt={plan.imageAlt} /> : <div className="hm-pr-bib"><span>HALF MARATHON / NEXT PR</span><strong>13.1</strong><span>MILES · 10:40 GOAL PACE</span></div>}<div className="hm-plan-art-shade" />{plan.id === "santa-cruz" ? <span className="hm-completed-ribbon">✓ Completed</span> : <span className="hm-follow-badge"><Flag size={13} /> Follow along</span>}<div className="hm-plan-art-caption"><span>{plan.weeks}</span><h2>{plan.name}</h2></div></div>
        <div className="hm-plan-details"><h3>{plan.heading}</h3><dl className="hm-plan-quick-stats"><div><dt><Route size={13} />Plan distance</dt><dd>{plan.total.toFixed(1)} mi</dd></div><div><dt><Flag size={13} />Race length</dt><dd>13.1 mi</dd></div><div><dt><Timer size={13} />{plan.id === "current" ? "Target pace" : "Finish pace"}</dt><dd>{plan.pace}</dd></div><div><dt><Trophy size={13} />Race status</dt><dd>{plan.status}</dd></div></dl>
          <div className="hm-plan-completion"><div><span>Training completed</span><strong>{plan.id === "current" ? `${plan.percent}%` : "Completed"}</strong></div><progress value={plan.percent} max="100" aria-label={`${plan.name} training completion`} /><small>{plan.completion}</small></div>
          {plan.id === "santa-cruz" && <a className="hm-plan-map-link" href={coursePdf.url} target="_blank" rel="noreferrer"><img src={courseMap.url} alt="Santa Cruz Half Marathon course map" /><span>Race course map <ArrowUpRight size={14} /></span></a>}
          <Button variant="outline" className="hm-plan-select" aria-expanded={open} aria-controls="hm-expanded-plan" onClick={() => onSelect(plan.id)}>{open ? "Close plan" : plan.action}{open ? <ArrowUp size={16} /> : <ArrowDown size={16} />}</Button>
        </div>
      </article>;
    })}</div>
    {selected && <div className="hm-selection-jump"><Button variant="ghost" onClick={() => document.getElementById("hm-expanded-plan")?.scrollIntoView({behavior:"smooth", block:"start"})}>View {selected === "current" ? "current PR" : "Santa Cruz"} plan <ArrowDown size={16} /></Button></div>}
  </section>;
}