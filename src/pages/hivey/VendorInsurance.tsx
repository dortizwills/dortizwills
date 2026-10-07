import { CaseStudyShell, CaseStudySection, Decision, FinancialImpact, MediaBlock, MetricGrid, ProjectHero, ProjectNavigation, QuoteBlock } from '@/components/case-study/CaseStudyParts';

const VendorInsurance = () => (
  <CaseStudyShell>
    <ProjectHero
      eyebrow="Hivey · Product Design"
      title="Embedded Vendor Insurance & Compliance"
      summary="I redesigned vendor insurance from a skippable side step into part of event registration. Adoption tripled from 20% to 60% in one month, securing Hivey's 10% revenue share on a 40-day enterprise deadline."
      details={[
        { label: 'Timeline', value: '40 days' },
        { label: 'Role', value: 'Product Strategy · UX/UI Design · Interaction Design · Prototyping' },
        { label: 'Collaborators', value: 'Product · Engineering · Vertical Insure' },
      ]}
    />
    <MediaBlock />
    <MetricGrid metrics={[
      { value: '$12K', label: 'Projected insurance revenue', note: 'Modeled at 60% adoption across 4,000 or more vendors' },
      { value: '10%', label: 'Revenue share secured', note: 'Versus 8% if the deadline was missed' },
      { value: '20% to 60%', label: 'Vendor insurance adoption', note: 'Within one month of launch' },
      { value: '40 days', label: 'Enterprise launch deadline' },
    ]} />
    <CaseStudySection title="The Problem">
      <p>Vendors were expected to provide proof of insurance, but the step lived outside registration and had an easy Skip button. Organizers chased certificates through email and spreadsheets, and only about 20% of vendors complied.</p>
      <p>Hivey also had 40 days to launch an insurance partnership with Vertical Insure. Missing the deadline would cut its revenue share from 10% to 8%.</p>
    </CaseStudySection>
    <MediaBlock />
    <CaseStudySection title="What I Did">
      <div className="space-y-10">
        <Decision number="01" title="Removed the landing page" body="Data showed the biggest drop-off happened before vendors ever requested a quote. I routed vendors straight into the Vertical Insure experience during registration." />
        <Decision number="02" title="Added compliance guardrails" body="Vendors can no longer skip. They either purchase coverage through a quote or upload their existing proof of insurance." />
        <Decision number="03" title="Standardized business data" body="I helped define a consistent business and address structure that works for independent makers, pop-up businesses, and cottage-food vendors." />
      </div>
    </CaseStudySection>
    <CaseStudySection title="Results">
      <p>Insurance adoption rose from 20% to 60% within one month of launch, a 200% relative increase. The flow launched with 25 active hosts and 50 events, earning about $5 per completed insurance transaction.</p>
      <QuoteBlock quote="“Honest to God, this is a game changer for me.”" />
    </CaseStudySection>
    <MediaBlock />
    <FinancialImpact label="Modeled" paragraphs={[
      "Applied to Hivey's base of 4,000 or more vendors, 60% adoption means 2,400 insured vendors. At about $5 per insurance transaction, that projects $12,000 in revenue from one transaction per vendor.",
      'At the previous 20% adoption, the same model projects 800 insured vendors and $4,000. The redesign accounts for a projected $8,000 difference.',
      'The 60% rate was measured on the launch group of 25 hosts and 50 events. Applying it to the full vendor base is a projection.',
      'Separately, a 10% revenue share instead of 8% is worth an additional $20,000 per year for every $1M of annual insurance volume.',
    ]} />
    <CaseStudySection title="Takeaway">
      <p>Removing a decision beat adding information. The problem was never insurance itself. It was fragmented administration. Making compliance the natural next step turned a pain point into a product opportunity.</p>
    </CaseStudySection>
    <CaseStudySection title="What This Means for Your Team">
      <p>I find the drop-off behind a business-critical requirement, redesign the flow around it, and ship against a hard external deadline.</p>
    </CaseStudySection>
    <ProjectNavigation current="/product-designs/hivey/vendor-insurance" />
  </CaseStudyShell>
);

export default VendorInsurance;
