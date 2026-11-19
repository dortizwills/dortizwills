export const SUPPLIED_VIDEOS = {
  "Romanian deadlift": { url: "https://www.youtube.com/shorts/hu3jRvTc_po", label: "Romanian deadlift (hand weights)" },
  "Bent-over row": { url: "https://www.youtube.com/shorts/zX3fUdpVytU", label: "Bent-over row (hand weights)" },
  "Banded pull-apart": { url: "https://www.youtube.com/shorts/U2aKexwAWfM", label: "Banded pull-apart" },
  "Overhead press": { url: "https://www.youtube.com/shorts/x07lGDeVlBw", label: "Overhead press (hand weights)" },
  "Dead bug": { url: "https://www.youtube.com/shorts/wCg6qs5L3-U", label: "Dead bug" },
  "Pallof press": { url: "https://www.youtube.com/shorts/FJjzngyrXwY", label: "Banded Pallof press" },
  "Figure-four": { url: "https://www.youtube.com/shorts/YtjfdYDPKlk", label: "Figure-four glute stretch" },
  "Glute stretch": { url: "https://www.youtube.com/shorts/YtjfdYDPKlk", label: "Figure-four glute stretch" },
  "Pigeon pose": { url: "https://www.youtube.com/shorts/UUQtVmzes4k", label: "Pigeon pose" },
  "IT band stretch": { url: "https://www.youtube.com/shorts/ouuRZnHRKus", label: "IT band stretch" },
  "Pre-race: leg swings": { url: "https://www.youtube.com/shorts/Odx8JXVNBdI", label: "Pre-race warm-up (leg swings and hip circles)" },
};

export function suppliedVideo(text: string) {
  return Object.entries(SUPPLIED_VIDEOS).find(([key]) => text.toLowerCase().includes(key.toLowerCase()))?.[1];
}

export type RaceResult = {
  id: string; name: string; date?: string; distance?: string; finish?: string;
  pace?: string; story?: string; plan?: string;
};

export type SavedPlan = {
  id: string; name: string; savedOn: string; raceDate: string;
  workouts: { id: string; date: string; text: string; mi: number; cards: { title: string; completed: boolean }[] }[];
};

export const FIRST_RACE: RaceResult = {
  id: "first-half-marathon", name: "First half marathon", pace: "Under 12:00 / mile",
  story: "From zero running experience to completing a half marathon at under a 12-minute mile, following a completed training plan.",
};

export function resultPace(finish: string, distance: string) {
  if (!/^\d+:\d{2}:\d{2}$/.test(finish)) return null;
  const [hours, minutes, seconds] = finish.split(":").map(Number);
  const miles = Number(distance);
  if (minutes >= 60 || seconds >= 60 || !Number.isFinite(miles) || miles <= 0) return null;
  const total = hours * 3600 + minutes * 60 + seconds;
  if (total <= 0) return null;
  const pace = Math.round(total / miles);
  return `${Math.floor(pace / 60)}:${String(pace % 60).padStart(2, "0")} / mile`;
}