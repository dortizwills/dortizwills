import combinedBusinessImpact from '@/assets/combined-business-impact.png.asset.json';
import { CaseStudyShell, CaseStudySection, Decision, FinancialImpact, MediaBlock, MetricGrid, ProjectHero, ProjectNavigation } from '@/components/case-study/CaseStudyParts';

const EnterpriseCheckout = () => (
  <CaseStudyShell>
    <ProjectHero
      eyebrow="Hivey · Product Strategy & Product Design"
      title="Enterprise Partnership & Checkout Architecture"
      summary="I turned a large enterprise partnership into a chance to rebuild Hivey's checkout as a reusable system instead of a collection of one-off client features. The partnership added $12K in annual recurring revenue increasing ARR by 22%."
      details={[
        { label: 'Role', value: 'Product Strategy · UX/UI Design · Interaction Design · Systems Thinking' },
        { label: 'Collaborators', value: 'Product · Engineering · Business Development' },
      ]}
    />
    <MediaBlock />
    <MetricGrid metrics={[
      { value: '$20K', label: 'Enterprise investment' },
      { value: '+$12K', label: 'New ARR' },
      { value: '22.3%', label: 'Increase on baseline ARR' },
      { value: '4', label: 'New product capabilities' },
    ]} />
    <CaseStudySection title="The Problem">
      <p>The enterprise partner arrived with a long wishlist required to be fulfilled within 60 days including: series-level insurance requirements, flexible subscription passes, more granular inquiry controls, and additional payment capabilities.</p>
      <p>The payment architecture was already inconsistent and building each request separately would have worsened the situation. The question became: what solution can we offer that improves the platform for everyone and solves this customer's problem?</p>
    </CaseStudySection>
    <MediaBlock />
    <CaseStudySection title="What I Did">
      <div className="space-y-10">
        <Decision number="01" title="Separated the requests into three groups" body="Partner-specific needs that closed the deal, reprioritized conflicting priorities to ensure no loss of other commitments, and platform-level patterns worth reusing across Hivey." />
        <Decision number="02" title="Rebuild checkout process and reusable payment patterns" body="I established one consistent transaction experience across multiple locations in the app including restructuring season passes, standardizing booth fees and commission payments, and establishing configurable fee processes utilizing Stripe Embedded Elements. " />
        <Decision number="03" title="Balanced speed with architecture" body="Every design had to answer three questions so we could secure the contract. Does it solve the partner's immediate request? Can Engineering ship it on the agreed upon timeline or should we reduce the scope? How can the revised design pattern best support future customers?" />
      </div>
    </CaseStudySection>
    <CaseStudySection title="Results">
      <p>We secured the partnership that delivered a $20K enterprise investment and $12K in new annual recurring revenue, a 22.3% increase over the $53.9K baseline.</p>
      <p>The partnership delivered a $20K enterprise investment and $12K in new ARR which was a 22.3% increase to the company's existing ARR.</p>
    </CaseStudySection>
    <MediaBlock />
    <FinancialImpact label="Modeled and projected" paragraphs={[
      'Modeled annual recurring revenue: $65.9K. This assumes the $12K is fully incremental to the $53.9K baseline.',
      'Projected event growth: 1,040 additional annual events, based on 20 additional events per week across 52 weeks.',
      'Projected vendor capacity: 1,250 additional vendors on a base of 4,000 or more.',
    ]}>
      <MediaBlock src={combinedBusinessImpact.url} alt="Bar chart comparing baseline and projected annual recurring revenue, events, vendors, and total partnership value" />
      <p>These are projections of capacity, not measured growth.</p>
    </FinancialImpact>
    <CaseStudySection title="Takeaway">
      <p>Enterprise design is systems design. A customer's requirements often expose a weakness in the product, and fixing the system serves that customer and every customer after.</p>
    </CaseStudySection>
    <CaseStudySection title="What This Means for Your Team">
      <p>I take a obscure &amp; demanding customer's requests, find the reusable pattern inside those requests, and collaborate strategically to ship solutions without building one-off features.</p>
    </CaseStudySection>
    <ProjectNavigation current="/product-designs/hivey/enterprise-checkout" />
  </CaseStudyShell>
);

export default EnterpriseCheckout;
