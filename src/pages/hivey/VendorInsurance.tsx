import InsuranceGrowthChart from '@/components/case-study/InsuranceGrowthChart';
import { CaseStudyShell, CaseStudySection, Decision, FinancialImpact, MediaBlock, MetricGrid, ProjectHero, ProjectNavigation, QuoteBlock } from '@/components/case-study/CaseStudyParts';

const VendorInsurance = () => (
  <CaseStudyShell>
    <ProjectHero
      eyebrow="Hivey · Product Design"
      title="Embedded Vendor Insurance & Compliance"
      summary="I redesigned vendor insurance from a skippable side step into part of event registration. Adoption tripled from 20% to 60% in one month, secured Hivey's 10% revenue share on a 40-day partnership deadline."
      details={[
        { label: 'Role', value: 'Product Strategy · UX/UI Design · Interaction Design · Prototyping' },
        { label: 'Collaborators', value: 'Product · Engineering · Vertical Insure' },
      ]}
    />
    <MediaBlock />
    <MetricGrid metrics={[
      { value: '$12K', label: 'Projected insurance revenue', note: 'Modeled at 60% adoption across +4,000 vendors' },
      { value: '10%', label: 'Revenue share secured', note: 'Versus 8% if the deadline was missed' },
      { value: '+60%', label: 'Vendor insurance adoption', note: 'Within one month of launch' },
      { value: '40 days', label: 'Partnership launch deadline' },
    ]} />
    <CaseStudySection title="The Problem">
      <p>Vendors were expected to provide proof of insurance, but before events or hosts would assume full responsibility if an accient ocfured. Before this integration hosts would have to manually inspect forms to see if vendors successfully uploaded insurance. Organizers chased certificates through email and spreadsheets, and only about 10% of vendors complied.</p>
      <p>Hivey secured a partnership that needed to be completed within 40 days to the first successfully billed claim through their insurance partnership with Vertical Insure (VI). Missing the deadline would cut Hivey's revenue share from 10% to 8%.</p>
    </CaseStudySection>
    <MediaBlock />
    <CaseStudySection title="What I Did">
      <div className="space-y-10">
        <Decision number="01" title="Standardized business data " body="I helped define a consistent business and address structure that works for independent makers, pop-up businesses, and cottage-food vendors. The nuances of licensing for new pop-up style vendors required us to have a flexible system for business vs personal addresses." />
        <Decision number="02" title="Removed the landing page" body="Data showed the biggest drop-off happened before vendors ever requested a quote due to a skip button before seeing a quote. Vendors opted to supply insurance later but failed to upload documents into Vertical Insure before their event giving our first event only a 20% adoption rate – not very different from before." />
        <Decision number="03" title="Re-evaluated and adjusted compliance guardrails" body="Vendors can no longer skip quotes. They either purchase coverage through a quote or upload their existing proof of insurance – that's it. By forcing vendors to view a claim they quickly began to utilize the VI integration or actually upload their own insurance. " />
      </div>
    </CaseStudySection>
    <CaseStudySection title="Results">
      <p>Insurance adoption rose from 20% to 60% within 3 weeks from launch, a 200% relative increase. The flow launched with 5 active users hosting ~500 vendors, earning about $5 per completed insurance transaction.</p>
      <QuoteBlock quote="“Honest to God, this is a game changer for me.”" />
    </CaseStudySection>
    <MediaBlock />
    <FinancialImpact label="Modeled" paragraphs={[
      "Hivey's testing group of ~500 vendors showed that 60% adoption on the launch group of 5 hosts.",
      'To date, Hivey has over 4000 vendors. This projects that this new integration would insure 2,400 vendors per weekly event. At about $5 per insurance transaction, that projects $12,000 in weekly revenue from this feature alone.',
      'My timely designs also secured a 10% revenue share instead of 8% — worth an additional $20,000 per year for every $1M of annual insurance volume.',
    ]}>
      <InsuranceGrowthChart />
    </FinancialImpact>
    <CaseStudySection title="Takeaway">
      <p>Removing a decision beat adding information. 


The problem was end users only opted into what was mandatory and they were receiving fragmented administration. Compliance was a natural next step that turned a pain point into a product opportunity.</p>
    </CaseStudySection>
    <CaseStudySection title="What This Means for Your Team">
      <p>I find the drop-off behind a business-critical requirement, redesign the flow around it, and ship against a hard external deadline.</p>
    </CaseStudySection>
    <ProjectNavigation current="/product-designs/hivey/vendor-insurance" />
  </CaseStudyShell>
);

export default VendorInsurance;
