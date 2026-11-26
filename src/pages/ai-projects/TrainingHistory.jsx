import { useEffect, useState } from "react";
import { ArrowLeft, Plus, Archive, ChevronDown, ChevronUp, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FIRST_RACE, resultPace } from "./trainingHistory";

function read(key, fallback) {
  try { return JSON.parse(localStorage.getItem(`half-marathon-pr:${key}`)) ?? fallback; }
  catch { return fallback; }
}

export default function TrainingHistory({ onBack, snapshot }) {
  const [races, setRaces] = useState(() => read("race-history", [FIRST_RACE]));
  const [plans, setPlans] = useState(() => read("plan-history", []));
  const [form, setForm] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const [notice, setNotice] = useState("");
  useEffect(() => {
    try { localStorage.setItem("half-marathon-pr:race-history", JSON.stringify(races)); }
    catch { setNotice("This browser couldn't save your race results. Allow browser storage to keep them."); }
  }, [races]);
  useEffect(() => {
    try { localStorage.setItem("half-marathon-pr:plan-history", JSON.stringify(plans)); }
    catch { setNotice("This browser couldn't save your training plans. Allow browser storage to keep them."); }
  }, [plans]);

  function save(event) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    const id = crypto.randomUUID();
    if (form === "race") {
      const pace = values.finish ? resultPace(values.finish, values.distance) : null;
      if (values.finish && !pace) { setNotice("Enter a valid finish time as hours:minutes:seconds and a distance greater than zero."); return; }
      setRaces(current => [...current, { id, ...values, pace }]);
    } else if (form === "archive") {
      setPlans(current => [...current, { ...snapshot, id, name: values.name, savedOn: new Date().toLocaleDateString("en-US") }]);
    } else {
      setPlans(current => [...current, { id, name: values.name, savedOn: new Date().toLocaleDateString("en-US"), notes: values.notes, completed: true }]);
    }
    setForm(null); setNotice("Saved on this device.");
  }

  return <main className="hm-history">
    <div className="hm-history-toolbar"><Button variant="ghost" onClick={onBack}><ArrowLeft />Current training</Button><span>Training journey</span></div>
    <header className="hm-journey-intro">
      <div className="hm-eyebrow">Half-marathon journey</div>
      <h1>From zero to the finish line.</h1>
      <p>No running experience. One completed training plan. A half marathon at under a 12-minute mile.</p>
      <div className="hm-journey-metrics"><div><strong>Zero</strong><span>Starting running experience</span></div><div><strong>Half marathon</strong><span>First completed race</span></div><div><strong>&lt; 12:00 / mi</strong><span>Reported finishing pace</span></div></div>
    </header>

    <section className="hm-history-section" aria-labelledby="hm-results-heading">
      <div className="hm-history-section-head"><h2 id="hm-results-heading">Completed races</h2><Button variant="outline" size="sm" onClick={() => { setForm("race"); setNotice(""); }}><Plus />Add result</Button></div>
      <div className="hm-history-list">{races.map(race => <article className="hm-history-item" key={race.id}>
        <div className="hm-history-section-head"><h3>{race.name}</h3>{race.id !== FIRST_RACE.id && <Button variant="ghost" size="icon" aria-label={`Delete ${race.name}`} onClick={() => { if (window.confirm("Delete this race result?")) setRaces(current => current.filter(item => item.id !== race.id)); }}><Trash2 /></Button>}</div>
        {race.date && <p>{race.date}</p>}
        <dl className="hm-result-details">{[["Distance", race.distance && `${race.distance} mi`], ["Finish", race.finish], ["Pace", race.pace]].filter(([,value]) => value).map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        {race.story && <p>{race.story}</p>}
        {race.plan && <p>Training plan: {race.plan}</p>}
      </article>)}</div>
    </section>

    <section className="hm-history-section" aria-labelledby="hm-plans-heading">
      <div className="hm-history-section-head"><h2 id="hm-plans-heading">Prior training plans</h2><div className="hm-history-actions"><Button variant="outline" size="sm" onClick={() => { setForm("prior"); setNotice(""); }}><Plus />Add prior plan</Button><Button variant="outline" size="sm" onClick={() => { setForm("archive"); setNotice(""); }}><Archive />Save current plan</Button></div></div>
      {plans.length === 0 && <p className="hm-history-empty">The first training plan is completed; its original workouts haven’t been added yet.</p>}
      <div className="hm-history-list">{plans.map(plan => <article className="hm-history-item" key={plan.id}>
        <div className="hm-history-section-head"><h3>{plan.name}</h3><Button variant="ghost" size="sm" aria-expanded={expanded === plan.id} onClick={() => setExpanded(expanded === plan.id ? null : plan.id)}>{expanded === plan.id ? <ChevronUp /> : <ChevronDown />}{expanded === plan.id ? "Hide plan" : "View plan"}</Button></div>
        <p>{plan.completed ? "Completed prior plan" : "Saved training snapshot"} · Saved {plan.savedOn}</p>
        {expanded === plan.id && <div className="hm-saved-plan">{plan.notes ? <p className="hm-plan-notes">{plan.notes}</p> : <><p>Race day: {plan.raceDate}</p>{plan.workouts.map(workout => <div className="hm-saved-workout" key={workout.id}><strong>{workout.date} · {workout.text}</strong><ul>{workout.cards.map((card,index) => <li key={index}>{card.completed ? "✓" : "○"} {card.title}</li>)}</ul></div>)}</>}
          <Button variant="ghost" size="sm" onClick={() => { if (window.confirm("Delete this saved plan? Current training will not change.")) setPlans(current => current.filter(item => item.id !== plan.id)); }}><Trash2 />Delete saved plan</Button>
        </div>}
      </article>)}</div>
    </section>
    {notice && <p role="status">{notice}</p>}
    {form && <section className="hm-history-section"><h2>{form === "race" ? "Add completed race" : form === "archive" ? "Save current training snapshot" : "Add completed training plan"}</h2><form className="hm-history-form" onSubmit={save}>
      <label>{form === "race" ? "Race name" : "Plan name"}<input name="name" required maxLength={120} /></label>
      {form === "race" && <><label>Race date (optional)<input name="date" type="date" /></label><label>Distance in miles<input name="distance" type="number" min="0.01" step="0.01" required /></label><label>Finish time (optional)<input name="finish" placeholder="2:29:30" pattern="[0-9]+:[0-5][0-9]:[0-5][0-9]" /></label><label>Training plan (optional)<select name="plan"><option value="">Not linked</option>{plans.map(plan => <option key={plan.id} value={plan.name}>{plan.name}</option>)}</select></label><label>Your race story (optional)<textarea name="story" rows={3} maxLength={4000} /></label></>}
      {form === "prior" && <label>Original workouts and training notes<textarea name="notes" rows={8} required maxLength={50000} /></label>}
      {form === "archive" && <p>This saves your actual dates and check-offs without changing the current plan or marking unfinished activities complete.</p>}
      <div className="hm-history-actions"><Button type="submit">Save</Button><Button type="button" variant="ghost" onClick={() => setForm(null)}>Cancel</Button></div>
    </form></section>}
  </main>;
}