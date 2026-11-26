import { describe, expect, it } from 'vitest';
import { FIRST_RACE, resultPace, suppliedVideo, toggleTrainingPlan } from './trainingHistory';

describe('training plan selection', () => {
  it('keeps only one training plan selected at a time', () => {
    const current = toggleTrainingPlan(null, 'current');
    expect(current).toBe('current');
    expect(toggleTrainingPlan(current, 'santa-cruz')).toBe('santa-cruz');
  });
  it('closes a plan when its selected card is selected again', () => {
    expect(toggleTrainingPlan('current', 'current')).toBeNull();
    expect(toggleTrainingPlan('santa-cruz', 'santa-cruz')).toBeNull();
  });
});

describe('supplied exercise tutorials', () => {
  const cases = [
    ['Romanian deadlift (hand weights)', 'hu3jRvTc_po'],
    ['Bent-over row (hand weights)', 'zX3fUdpVytU'],
    ['Banded pull-apart', 'U2aKexwAWfM'],
    ['Overhead press (hand weights)', 'x07lGDeVlBw'],
    ['Dead bug', 'wCg6qs5L3-U'],
    ['Banded Pallof press', 'FJjzngyrXwY'],
    ['Figure-four glute stretch 60s each', 'YtjfdYDPKlk'],
    ['Pigeon pose 90s each', 'UUQtVmzes4k'],
    ['IT band stretch 60s each', 'ouuRZnHRKus'],
    ['Pre-race: leg swings, hip circles, 5 min', 'Odx8JXVNBdI'],
  ];
  it.each(cases)('maps %s to the supplied video', (exercise, id) => {
    expect(suppliedVideo(exercise)?.url).toBe(`https://www.youtube.com/shorts/${id}`);
  });
});

describe('race history', () => {
  it('uses only the reported sub-12-minute result without inventing dates or finishes', () => {
    expect(FIRST_RACE.pace).toBe('Under 12:00 / mile');
    expect(FIRST_RACE.date).toBeUndefined();
    expect(FIRST_RACE.finish).toBeUndefined();
  });
  it('calculates pace from actual distance instead of assuming 13.1 miles', () => {
    expect(resultPace('2:29:30', '13.3')).toBe('11:14 / mile');
    expect(resultPace('2:29:30', '13.1')).toBe('11:25 / mile');
  });
  it('rejects invalid times and distances', () => {
    expect(resultPace('2:99:00', '13.1')).toBeNull();
    expect(resultPace('2:29:30', '0')).toBeNull();
  });
});