import { CaseStudyShell, CaseStudySection, Decision, FinancialImpact, MediaBlock, MetricGrid, ProjectHero, ProjectNavigation } from '@/components/case-study/CaseStudyParts';

const EnterpriseCheckout = () => (
  <CaseStudyShell>
    <ProjectHero
      eyebrow="Hivey · Product Strategy & Product Design"
      title="Enterprise Partnership & Checkout Architecture"
      summary="I turned a large enterprise partnership into a chance to rebuild Hivey's checkout as a reusable system instead of a collection of one-off client features. The partnership added $12K in annual recurring revenue on a $53.9K baseline."
      details={[
        { label: 'Role', value: 'Product Strategy · UX/UI Design · Interaction Design · Systems Thinking' },
        { label: 'Collaborators', value: 'Product · Engineering · Business Development' },
      ]}
    />
    <MediaBlock />
    <MetricGrid metrics={[
      { value: '$20K', label: 'Enterprise investment' },
      { value: '+$12K', label: 'New annual recurring revenue' },
      { value: '22.3%', label: 'Increase on a $53.9K baseline' },
      { value: '4', label: 'New product capabilities' },
    ]} />
    <CaseStudySection title="The Problem">
      <p>The enterprise partner arrived with a long wishlist: series-level insurance requirements, flexible subscription passes, more granular inquiry controls, and additional payment capabilities.</p>
      <p>Building each request separately would have worsened an already inconsistent payment architecture. The question became: what can we build once that solves this customer's problem and improves the platform for everyone?</p>
    </CaseStudySection>
    <MediaBlock />
    <CaseStudySection title="What I Did">
      <div className="space-y-10">
        <Decision number="01" title="Separated the requests into two groups" body="Partner-specific needs that closed the deal, and platform-level patterns worth reusing across Hivey." />
        <Decision number="02" title="Rebuilt checkout around reusable payment patterns" body="Using Stripe Embedded Elements, I established one consistent transaction experience across booth fees, season passes, commission payments, and other configurable fees." />
        <Decision number="03" title="Balanced speed with architecture" body="Every design had to answer three questions. Does it solve the partner's immediate need? Can Engineering ship it on the commercial timeline? Can the pattern support future customers?" />
      </div>
    </CaseStudySection>
    <CaseStudySection title="Results">
      <p>The partnership delivered a $20K enterprise investment and $12K in new annual recurring revenue, a 22.3% increase over the $53.9K baseline.</p>
    </CaseStudySection>
    <MediaBlock />
    <FinancialImpact label="Modeled and projected" paragraphs={[
      'Modeled annual recurring revenue: $65.9K. This assumes the $12K is fully incremental to the $53.9K baseline.',
      'Projected event growth: 1,040 additional annual events, based on 20 additional events per week across 52 weeks.',
      'Projected vendor capacity: 1,250 additional vendors on a base of 4,000 or more.',
      'These are projections of capacity, not measured growth.',
    ]} />
    <CaseStudySection title="Takeaway">
      <p>Enterprise design is systems design. A customer's requirements often expose a weakness in the product, and fixing the system serves that customer and every customer after.</p>
    </CaseStudySection>
    <CaseStudySection title="What This Means for Your Team">
      <p>I take a demanding customer's requests, find the reusable pattern inside them, and ship it without building one-off features.</p>
    </CaseStudySection>
    <ProjectNavigation current="/product-designs/hivey/enterprise-checkout" />
  </CaseStudyShell>
);

export default EnterpriseCheckout;
