import projectedFinancialImpact from '@/assets/projected-financial-impact-inline.png.asset.json';
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
      { value: '-4 hrs', label: 'Manual onboarding per customer after the redesign', note: 'Across two team members' },
    ]} />
    <CaseStudySection title="The Problem">
      <p>Hivey is robust but a first-time host faces a blank canvas. To be successful customers needed to connect their events to Stripe, build fee structures, define vendor categories, create booth templates, configure events, and set up communications.</p>
      <p>Power users also had established workflows, so a rigid adjustment to their flows would have negatively disrupted. The design had to guide{'\u00a0'} users without locking them in.</p>
    </CaseStudySection>
    <MediaBlock />
    <CaseStudySection title="What I Did">
      <div className="space-y-10">
        <Decision number="01" title="Suggesting needs instead of an open door" body="Previously onboarding had no direction, simply use our platform. The changes I implemented recommends how to create categories, fee structures, booth templates, and common event setups that hosts can edit based on sample data." />
        <Decision number="02" title="Progressive configuration and reusable templates" body="Hosts set up the essentials first and add complexity later. Hosts are also given live templates and can customize or remove them for{'\u00a0'} their own recurring events." />
        <Decision number="03" title="Automated vendor communication" body="I created requirements and designed vendor-controlled SMS settings for fees due, payment reminders, and assignments, with opt-outs built in. This allowed our hosts to avoid any SMS fees associated from improper usage." />
      </div>
    </CaseStudySection>
    <CaseStudySection title="Results">
      <p>Without a support call, a new host connected Stripe, created their own fee structures, built booth templates, and launched an event that received 17 paid applications for their first event — all without a single touchpoint from our staff.</p>
      <p>This proved successful activation, not just feature usage. Now hosts shifted from asking "How do I set this up?" to "I can figure this out myself."</p>
    </CaseStudySection>
    <MediaBlock />
    <FinancialImpact label="Modeled opportunity. Not measured cash savings." paragraphs={[
      'Before the redesign, onboarding one customer cost about $200 in labor per onboarded customer. Marketing acquisition cost an estimated $80 per customer. This would require a minimum of 3 months of membership per onboarded customer.',
      '',
      'At a new baseline of +25 self-onboarded customers per quarter, we predict that in the next year +150 customers would elect self-onboarding.',
      'Over the next year, $25K in potential annual onboarding labor capacity and $8K in annual acquisition spend protected, at $80 per customer.',
      '',
      '$28K total modeled cost saving impact on resources.',
    ]}>
      <MediaBlock src={projectedFinancialImpact.url} alt="Line chart projecting cumulative labor savings and total modeled impact from resolving onboarding friction, Q1 2026 through Q4 2028" />
    </FinancialImpact>
    <CaseStudySection title="Where the Time Goes Instead">
      <p>Outbound Sales: prospecting and developing new enterprise host relationships.</p>
      <p>Customer Success: supporting complex existing customers instead of repeating initial setup.</p>
      <p>Executive Strategy: more leadership time for partnerships, business development, and pursuing venture capitol.</p>
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
