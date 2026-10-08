import projectedFinancialImpact from '@/assets/projected-financial-impact.png.asset.json';
import { CaseStudyShell, CaseStudySection, Decision, FinancialImpact, MediaBlock, MetricGrid, ProjectHero, ProjectNavigation } from '@/components/case-study/CaseStudyParts';

const SelfServiceOnboarding = () => (
  <CaseStudyShell>
    <ProjectHero
      eyebrow="Hivey · Product Design"
      title="Self-Service Onboarding & Automated Engagement"
      summary="I redesigned onboarding so new hosts can reach a live event without a support call. A new host set up Stripe, fee structures, and booth templates alone, then launched an event that received 17 applications."
      details={[
        { label: 'Role', value: 'Product Strategy · UX/UI Design · User Flows · Interaction Design · Prototyping' },
        { label: 'Collaborators', value: 'Product · Engineering · Customer Success' },
      ]}
    />
    <MediaBlock />
    <MetricGrid metrics={[
      { value: '$28K', label: 'Modeled annual resource impact', note: 'At 25 self-onboarded customers per quarter' },
      { value: '400 hrs', label: 'Potential annual team capacity recovered', note: 'Modeled' },
      { value: '17', label: 'Applications from a host onboarded without support' },
      { value: '4 hrs', label: 'Manual onboarding per customer before the redesign', note: 'Across two team members' },
    ]} />
    <CaseStudySection title="The Problem">
      <p>Hivey is powerful, but a first-time host faced a blank canvas. They had to connect Stripe, build fee structures, define vendor categories, create booth templates, configure events, and set up communications.</p>
      <p>Existing customers also had established workflows, so a rigid wizard would have disrupted them. The design had to guide without locking users in.</p>
    </CaseStudySection>
    <MediaBlock />
    <CaseStudySection title="What I Did">
      <div className="space-y-10">
        <Decision number="01" title="Guided suggestions instead of a rigid wizard" body="The system recommends categories, fee structures, booth templates, and common event setups that hosts can freely edit." />
        <Decision number="02" title="Progressive configuration and reusable templates" body="Hosts set up the essentials first and add complexity later. Templates remove repeated setup for recurring events." />
        <Decision number="03" title="Automated vendor communication" body="I helped design vendor-controlled SMS settings for fees due, payment reminders, and assignments, with opt-outs built in." />
      </div>
    </CaseStudySection>
    <CaseStudySection title="Results">
      <p>Without a support call, a new host connected Stripe, created fee structures, built booth templates, and launched an event that received 17 applications.</p>
      <p>This is activation, not just feature usage. The question shifted from "How do I set this up?" to "I can figure this out myself."</p>
    </CaseStudySection>
    <MediaBlock />
    <FinancialImpact label="Modeled opportunity. Not measured cash savings." paragraphs={[
      'Before the redesign, onboarding one customer took about 4 hours across two team members. At an estimated $50 per hour, that is about $200 in labor per customer. Marketing acquisition cost an estimated $80 per customer.',
      'At 25 self-onboarded customers per quarter, that is 100 customers per year.',
      '400 team hours potentially recovered. This assumes all four hours of manual onboarding would otherwise have been required.',
      '$20K in potential annual onboarding labor capacity, at $50 per hour.',
      '$8K in annual acquisition spend protected, at $80 per customer. This applies only if those customers would otherwise have been lost before activating.',
      '$28K total modeled resource impact.',
    ]} />
    <MediaBlock src={projectedFinancialImpact.url} alt="Line chart projecting cumulative labor savings and total modeled impact from resolving onboarding friction, Q1 2026 through Q4 2028" />
    <CaseStudySection title="Where the Time Goes Instead">
      <p>Outbound sales: prospecting and developing new host relationships.</p>
      <p>Customer success: supporting complex existing customers instead of repeating initial setup.</p>
      <p>Executive strategy: more leadership time for partnerships and business development.</p>
    </CaseStudySection>
    <CaseStudySection title="Takeaway">
      <p>Good onboarding doesn't just teach the product. It frees the team. Human support is reserved for the moments where expertise adds value.</p>
    </CaseStudySection>
    <CaseStudySection title="What This Means for Your Team">
      <p>I design activation flows that cut support load and acquisition waste while keeping power users in control.</p>
    </CaseStudySection>
    <ProjectNavigation current="/product-designs/hivey/self-service-onboarding" />
  </CaseStudyShell>
);

export default SelfServiceOnboarding;
