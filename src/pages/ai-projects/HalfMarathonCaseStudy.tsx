import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import finish from '@/assets/santa-cruz-finish.png.asset.json';
import courseMap from '@/assets/santa-cruz-course-map.png.asset.json';
import { CaseStudyShell, CaseStudySection, Decision, MediaBlock, MetricGrid, ProjectHero, ProjectNavigation } from '@/components/case-study/CaseStudyParts';

const HalfMarathonCaseStudy = () => (
  <CaseStudyShell>
    <ProjectHero
      eyebrow="Personal Project · AI Tools"
      title="Zero to Half Marathon with an AI Training Plan"
      summary="With no running experience, I used AI tools to design, build, and follow an 18-week training plan for the Santa Cruz Half Marathon. I finished the race under a 12-minute mile, then used the same system to build my next plan for a faster personal record."
      details={[
        { label: 'Role', value: 'Designer, builder & athlete' },
        { label: 'Tools', value: 'AI planning, Lovable, React' },
        { label: 'Timeline', value: '18 weeks of training' },
      ]}
    />
    <MediaBlock src={finish.url} alt="Daniel crossing the finish line at the Santa Cruz Half Marathon" />
    <div className="mt-16">
      <MetricGrid metrics={[
        { value: '0', label: 'Prior running experience', note: 'Started from scratch' },
        { value: '18', label: 'Weeks of training', note: 'Base, build, peak, taper' },
        { value: '13.1', label: 'Miles completed', note: 'Santa Cruz Half Marathon' },
        { value: '<12:00', label: 'Pace per mile', note: 'Race-day finish pace' },
      ]} />
    </div>
    <CaseStudySection title="The Problem">
      <p>Most beginner plans are generic PDFs. They don't adapt to a real course, a busy schedule, or the aches that show up when you've never run before, and they make it hard to see what to do today.</p>
    </CaseStudySection>
    <CaseStudySection title="What I Did">
      <div className="space-y-10">
        <Decision number="01" title="Used AI as a coach, not a template" body="I gave AI my starting point, race date, and the course's ~420 ft of elevation, then refined the advice into phases: base building, building, peak, and taper." />
        <Decision number="02" title="Turned the plan into a product" body="I designed and built the plan as an app with week-by-week workouts, check-offs, and a video panel for each exercise, stretch, and recovery routine so I always knew how to do the work." />
        <Decision number="03" title="Built in injury prevention" body="Knee and shin care habits, strength sessions, and stretches were scheduled alongside runs, which kept me healthy enough to reach the start line." />
      </div>
    </CaseStudySection>
    <CaseStudySection title="Results">
      <p>I went from zero running experience to completing the Santa Cruz Half Marathon under a 12-minute mile, following the plan's advice the whole way.</p>
    </CaseStudySection>
    <MediaBlock src={courseMap.url} alt="Santa Cruz Half Marathon course map" />
    <CaseStudySection title="What's Next">
      <p>I archived the completed plan and built a new 17-week plan targeting a 10:40 per mile personal record, with both plans side by side so the progress is easy to compare.</p>
      <Link to="/ai-projects/half-marathon-pr" className="inline-flex items-center gap-2 font-medium text-editorial-fg hover:text-editorial-accent">
        Explore the interactive training plans <ArrowUpRight size={18} />
      </Link>
    </CaseStudySection>
    <ProjectNavigation current="/ai-projects/half-marathon-case-study" />
  </CaseStudyShell>
);

export default HalfMarathonCaseStudy;
