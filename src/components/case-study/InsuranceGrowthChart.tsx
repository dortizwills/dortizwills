const quarters = ['Q3 2026', 'Q4 2026', 'Q1 2027', 'Q2 2027', 'Q3 2027', 'Q4 2027', 'Q1 2028', 'Q2 2028'];
const revenue = [1.5, 9.7, 23.4, 33, 45, 64.5, 90, 126];
const vendors = [500, 3240, 7800, 11000, 15000, 21500, 30000, 42000];

const W = 1200, H = 440, L = 90, R = 100, T = 40, B = 60;
const pw = W - L - R, ph = H - T - B;
const REV_MAX = 130, VEN_MAX = 50000;
const step = pw / quarters.length;
const barW = step * 0.66;
const x = (i: number) => L + step * i + step / 2;
const yRev = (v: number) => T + ph - (v / REV_MAX) * ph;
const yVen = (v: number) => T + ph - (v / VEN_MAX) * ph;

const GREEN = '#2F9A6E';
const NAVY = '#1F3A68';

const InsuranceGrowthChart = () => (
  <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Chart projecting incremental insurance revenue and total vendors per quarter, Q3 2026 through Q4 2028" className="h-auto w-full" style={{ fontFamily: 'Figtree, sans-serif' }}>
    {[0, 30, 60, 90, 120, 150].map((v) => (
      <g key={v}>
        <line x1={L} x2={W - R} y1={yRev(v)} y2={yRev(v)} stroke="#E3E8EC" />
        <text x={L - 12} y={yRev(v) + 5} textAnchor="end" fontSize="16" fontWeight="700" fill={GREEN}>${v}K</text>
      </g>
    ))}
    {[0, 10000, 20000, 30000, 40000, 50000].map((v) => (
      <text key={v} x={W - R + 12} y={yVen(v) + 5} fontSize="16" fontWeight="700" fill={NAVY}>{v.toLocaleString()}</text>
    ))}
    <line x1={L} x2={L} y1={T} y2={T + ph} stroke={GREEN} strokeWidth="2" />
    <line x1={W - R} x2={W - R} y1={T} y2={T + ph} stroke={NAVY} strokeWidth="2" />
    <text transform={`translate(24 ${T + ph / 2}) rotate(-90)`} textAnchor="middle" fontSize="16" fontWeight="700" fill={GREEN}>Incremental Weekly Revenue</text>
    <text transform={`translate(${W - 20} ${T + ph / 2}) rotate(90)`} textAnchor="middle" fontSize="16" fontWeight="700" fill={NAVY}>Total Vendors (projected)</text>

    {revenue.map((v, i) => (
      <g key={i}>
        <rect x={x(i) - barW / 2} y={yRev(v)} width={barW} height={T + ph - yRev(v)} rx="3" fill={GREEN} />
        <text x={x(i)} y={yRev(v) + 22} textAnchor="middle" fontSize="16" fontWeight="700" fill="#FFFFFF">${v}K</text>
        <text x={x(i)} y={T + ph + 28} textAnchor="middle" fontSize="16" fontWeight="700" fill={NAVY}>{quarters[i]}</text>
      </g>
    ))}

    <polyline points={vendors.map((v, i) => `${x(i)},${yVen(v)}`).join(' ')} fill="none" stroke={NAVY} strokeWidth="3" />
    {vendors.map((v, i) => (
      <g key={i}>
        <circle cx={x(i)} cy={yVen(v)} r="6" fill={NAVY} />
        <text x={x(i)} y={yVen(v) - 14} textAnchor="middle" fontSize="15" fontWeight="700" fill={NAVY}>{v.toLocaleString()}</text>
      </g>
    ))}
  </svg>
);

export default InsuranceGrowthChart;
