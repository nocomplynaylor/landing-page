// Naylor CC — sections

const Placeholder = ({ label, corner, style }) =>
<div className="placeholder" style={style}>
    {corner && <span className="ph-corner">{corner}</span>}
    <span className="ph-label">{label}</span>
  </div>;


function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <div className="states">
          <span>WA</span><span>OR</span><span>ID</span>
        </div>
        <div>PREVAILING WAGE · DAVIS‑BACON · CERTIFIED PAYROLL</div>
      </div>
    </div>);

}

function Nav() {
  return (
    <nav className="nav">
      <div className="wrap" style={{ height: "63px" }}>
        <a href="#" className="logo" style={{ textDecoration: 'none', gap: "8px" }}>
          Naylor<span className="mark" style={{ letterSpacing: "4.2px", lineHeight: "2.15", whiteSpace: "nowrap" }}>CONSTRUCTION CONSULTING</span>
        </a>
        <div className="nav-links">
          <a href="#problem">Risk</a>
          <a href="#approach">Approach</a>
          <a href="#contact" className="btn btn-primary" style={{ padding: '10px 18px' }}>
            Book a Call <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </nav>);

}

// ─────────── HEROES ───────────
const HERO_IMGS = [
'https://static.wixstatic.com/media/def370_8665bf7bd6654bbd80700d9c3016587b~mv2.jpg',
'https://static.wixstatic.com/media/def370_347b59754ba849a696ba9c4862723bed~mv2.jpg',
'https://static.wixstatic.com/media/67fdb2_3ce398bc11184fbab5cbfbe980fcef20~mv2.jpg',
'https://static.wixstatic.com/media/08e7a4_63e2d6d622424974b7ddc46f3497e4fe~mv2.jpg',
'https://static.wixstatic.com/media/08e7a4_4a5499f249f64cbbae383d2bd87a6781~mv2.jpg'];


function HeroA({ cropX = 50, cropY = 40, pan = false, panSpeed = 30 }) {
  const [step, setStep] = React.useState(0);
  const idx = step % HERO_IMGS.length;
  const reverse = step % 2 === 1;
  React.useEffect(() => {
    if (HERO_IMGS.length < 2) return;
    const id = setInterval(
      () => setStep((s) => s + 1),
      panSpeed * 1000
    );
    return () => clearInterval(id);
  }, [panSpeed]);

  // Retrigger the flash + active image's pan WITHOUT remounting any DOM node,
  // so the (sibling) ticker-tape CSS animation is never disturbed on a hero switch.
  const flashRef = React.useRef(null);
  const imgRefs = React.useRef([]);
  React.useEffect(() => {
    const fl = flashRef.current;
    if (fl) { fl.style.animation = 'none'; void fl.offsetWidth; fl.style.animation = ''; }
    const img = imgRefs.current[idx];
    if (img && pan) {
      img.style.animation = 'none'; void img.offsetWidth; img.style.animation = '';
    }
  }, [step, pan, panSpeed]);

  return (
    <section className="hero hero-a-sec">
      <div className="wrap hero-a" style={{ width: "100%" }}>
        <div className="lede">
          <p className="eyebrow">Prevailing Wage Compliance</p>
          <h1>
            Protect your margin from <em>back‑pay</em>, frozen retainage, and audit chaos.
          </h1>
          <p className="hero-sub">
            We run the compliance program at every tier. You run the project.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary btn-lg">
              Book a 30‑min risk assessment <span className="arrow">→</span>
            </a>
          </div>
        </div>
        <div className="visual">
          {HERO_IMGS.map((src, i) => {
            const active = i === idx;
            const imgStyle = {
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              display: 'block',
              opacity: active ? 1 : 0,
              transition: 'opacity 900ms ease',
              '--pan-y': `${cropY}%`,
              '--pan-speed': `${panSpeed}s`
            };
            if (!pan) imgStyle.objectPosition = `${cropX}% ${cropY}%`;
            return (
              <img
                key={src}
                ref={(el) => (imgRefs.current[i] = el)}
                src={src}
                alt="Jobsite — project executive"
                className={active && pan ? reverse ? 'panning rev' : 'panning' : ''}
                style={imgStyle} />);


          })}
          <div style={{ position: 'absolute', inset: 0, border: '1px solid var(--rule)', pointerEvents: 'none' }} />
          <div className="flash" ref={flashRef} />
        </div>
      </div>
    </section>);

}

function HeroB() {
  return (
    <section className="hero">
      <div className="wrap hero-b">
        <p className="eyebrow">Prevailing Wage Compliance</p>
        <div className="statement">
          <h1>
            Save the margin you<br />already <em>earned</em>.
          </h1>
          <p className="hero-sub" style={{ marginTop: 40, fontSize: 21, maxWidth: 720 }}>
            One missed wage determination can erase a quarter of project profit.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary btn-lg">
              Book a 30‑min risk assessment <span className="arrow">→</span>
            </a>
          </div>
          <div className="meta-row">
            <div className="cell"><div className="k">Coverage</div><div className="v">WA · OR · ID</div></div>
            <div className="cell"><div className="k">Engagement</div><div className="v">Executive‑level</div></div>
            <div className="cell"><div className="k">Specialty</div><div className="v">Public works</div></div>
            <div className="cell"><div className="k">Turnaround</div><div className="v">48 hours</div></div>
          </div>
        </div>
      </div>
    </section>);

}

function HeroC() {
  return (
    <section className="hero">
      <div className="wrap hero-c">
        <div>
          <div className="file-tag">
            <div className="row"><span>FILE №</span><span className="v">NCC‑2026‑01</span></div>
            <div className="row"><span>SUBJECT</span><span className="v">Project margin</span></div>
            <div className="row"><span>EXPOSURE</span><span className="v">Back‑pay</span></div>
            <div className="row"><span>JURISDICTION</span><span className="v">WA · OR · ID</span></div>
            <div className="stamp">▎ASSESSMENT REQUESTED</div>
          </div>
          <div style={{ marginTop: 24 }}>
            <Placeholder label="CERTIFIED PAYROLL" corner="IMG · 4:3" style={{ aspectRatio: '4/3' }} />
          </div>
        </div>
        <div>
          <p className="eyebrow">Prevailing Wage Compliance</p>
          <h1>
            Call us <em>before</em> the audit notice arrives.
          </h1>
          <p className="hero-sub">
            Compliance partner to Project Executives running public works.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary btn-lg">
              Book a 30‑min risk assessment <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>);

}

function Strip({ items: customItems, variant }) {
  const defaultRiskItems = [
  'Wage determinations', 'Sub‑tier risk', 'Audit response',
  'Certified payroll', 'BOLI', 'L&I', 'DOL', 'Executive relief',
  'Back‑pay liability', 'Frozen retainage'];

  const servicesItems = [
  'Prevailing wage payroll', 'Davis‑Bacon compliance', 'Certified payroll',
  'Fringe reconciliation', 'Apprentice ratios', 'Sub‑tier oversight',
  'WH‑347 reporting', 'Conformance requests',
  'CWA compliance', 'PLA compliance'];

  const items = customItems
    || (variant === 'services' ? servicesItems : defaultRiskItems);
  const repeated = [...items, ...items];
  return (
    <div className="strip">
      <div className="strip-inner">
        {repeated.map((it, i) => <span key={i}>{it}</span>)}
      </div>
    </div>);

}

function Problem() {
  const cards = [
  {
    n: '01', tag: 'BACK‑PAY',
    title: 'One missed determination eats the margin.',
    desc: 'Misclassified scopes and sub‑tier oversights surface months later — straight out of profit.',
    stat: 'Six‑figure clawbacks on closed projects.'
  },
  {
    n: '02', tag: 'RETAINAGE',
    title: 'Cash you earned, sitting elsewhere.',
    desc: 'Release stalls when payrolls, fringe statements, and apprentice ratios don\'t reconcile.',
    stat: '60–180 days past substantial completion.'
  },
  {
    n: '03', tag: 'AUDIT CHAOS',
    title: 'A wage investigation puts the team on defense.',
    desc: 'Discovery pulls your PMs off operations. Compliance software is a record, not judgment.',
    stat: 'Disrupts every active project at once.'
  }];

  return (
    <section id="problem" className="prob-sec">
      <div className="wrap" style={{ padding: "0px 32px", width: "100%" }}>
        <p className="eyebrow">The Risk</p>
        <h2 style={{ maxWidth: 880 }}>
          Compliance isn't a paperwork problem. It's a <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>margin</em> problem.
        </h2>
        <p style={{ color: 'var(--fg-soft)', fontSize: 19, maxWidth: 680, marginTop: 28, lineHeight: 1.55 }}>
          Three exposures quietly drain profit on every public works job.
        </p>

        <div className="problem-grid">
          {cards.map((c) =>
          <div className="problem-card" key={c.n}>
              <div className="num"><span>{c.n} / 03</span><span>{c.tag}</span></div>
              <h3>{c.title}</h3>
              <p className="desc">{c.desc}</p>
              <div className="stat"><strong>↳</strong> {c.stat}</div>
            </div>
          )}
        </div>

      </div>
    </section>);

}

function Approach() {
  const items = [
  { t: 'Sub‑tier payroll review', d: 'Every certified payroll reviewed for base rates, fringe, deductions, and trade classification — before it becomes a deficiency.' },
  { t: 'Deficiency remediation', d: 'We work directly with subs at every tier to correct errors, calculate restitution, and manage resubmission. You don’t chase your own subcontractors.' },
  { t: 'Apprentice tracking', d: 'Utilization rates, ratio compliance, and apprenticeship reporting — managed and documented throughout the project.' },
  { t: 'Audit‑ready documentation', d: 'Records assembled and vaulted weekly. If a notice lands, we have the file — not you.' },
  { t: 'Compliance reporting', d: 'Monthly report to GC or owner on compliance status, open deficiencies, and corrective actions by tier.' }];

  return (
    <section id="approach" className="tight">
      <div className="wrap twocol">
        <div className="lhs">
          <p className="eyebrow">Approach</p>
          <h2>We don't process forms. We <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>own the outcome.</em></h2>
          <p>
            Setup. Ongoing oversight. Deficiency remediation. Closeout. NCC manages the full compliance program — every tier, every submission, every correction — so your team doesn't inherit a problem six months after the job ends.
          </p>
          <p className="approach-stat">
            $14B under management · Trusted by the country's largest GCs · WA, OR, and federal
          </p>
          <div style={{ marginTop: 36 }}>
            <a href="#contact" className="btn btn-ghost">
              Book your 30‑min risk assessment <span className="arrow">→</span>
            </a>
          </div>
        </div>
        <div className="rhs">
          {items.map((it, i) =>
          <div className="checklist-item" key={i}>
              <div className="check">✓</div>
              <div className="ci-body">
                <strong>{it.t}</strong>
                <span>{it.d}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function WhoWeServe() {
  const cols = [
  {
    k: '01 / 02', t: 'General Contractors',
    d: 'You’re liable for every sub below you — including ones you’ve never met. NCC manages that exposure from the first onboarding call to the final closeout audit.'
  },
  {
    k: '02 / 02', t: 'Owners & Agencies',
    d: 'Your funding sources require it. Your public record depends on it. NCC builds and runs the compliance program from day one — so it satisfies both.'
  }];

  return (
    <section className="serve">
      <div className="wrap">
        <p className="eyebrow">Who We Serve</p>
        <h2 className="serve-head">
          Built for the contractors and agencies who can't afford a compliance failure.
        </h2>
        <div className="serve-grid">
          {cols.map((c) =>
          <div className="serve-cell" key={c.k}>
              <div className="k">{c.k}</div>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function Logos() {
  const logos = [
  { src: 'logos/atkinson.jpg', name: 'Atkinson Construction' },
  { src: 'logos/clark.jpg', name: 'Clark Construction' },
  { src: 'logos/hoffman.png', name: 'Hoffman Construction Company' },
  { src: 'logos/walsh.webp', name: 'Walsh Construction Co.' },
  { src: 'logos/veca.png', name: 'VECA Electric & Technologies', scale: 1.35 }];

  return (
    <section className="tight" style={{ paddingTop: 64, paddingBottom: 64 }}>
      <div className="wrap">
        <div className="logos-label">Trusted across WA · OR · ID</div>
        <div className="logos-row">
          {logos.map((l, i) =>
          <div className="logo-cell" key={i}>
              {l.src ?
            <img
              src={l.src}
              alt={l.name}
              title={l.name}
              style={{ ...{ maxWidth: '82%', maxHeight: `${64 * (l.scale || 1)}px`, display: 'block', width: `${128 * (l.scale || 1)}px`, objectFit: "scale-down" }, height: "165px", width: "230px" }} /> :


            <span style={{ fontStyle: 'italic' }}>{l.name} · placeholder</span>
            }
            </div>
          )}
        </div>
      </div>
    </section>);

}

function CTA() {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', company: '', phone: '' });

  const onSubmit = (e) => {e.preventDefault();setSubmitted(true);};
  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <section id="contact" className="cta-section">
      <div className="wrap cta-grid">
        <div className="lhs">
          <p className="eyebrow">30‑Minute Risk Assessment</p>
          <h2>
            One call. We tell you what's at risk — <em>before it's at stake.</em>
          </h2>
          <p className="sub">
            You walk away with a written risk register — whether or not we work together.
          </p>
          <div className="promises">
            <div className="p">No pitch. We either find something worth acting on, or we don't.</div>
            <div className="p">Scheduled within 48 hours.</div>
            <div className="p">Mutual NDA before specifics.</div>
          </div>
        </div>
        <div className="form-card">
          {!submitted ?
          <form onSubmit={onSubmit}>
              <div className="ftitle">Request your assessment</div>
              <div className="fsub">4 fields · 30 seconds</div>
              <div className="field-row">
                <div className="field">
                  <label>Name</label>
                  <input required type="text" placeholder="Jane Doe" value={form.name} onChange={upd('name')} />
                </div>
                <div className="field">
                  <label>Company</label>
                  <input required type="text" placeholder="Doe Construction" value={form.company} onChange={upd('company')} />
                </div>
              </div>
              <div className="field">
                <label>Work email</label>
                <input required type="email" placeholder="jane@doeconstruction.com" value={form.email} onChange={upd('email')} />
              </div>
              <div className="field">
                <label>Phone</label>
                <input required type="tel" placeholder="(555) 555‑0123" value={form.phone} onChange={upd('phone')} />
              </div>
              <div className="submit-row">
                <button type="submit" className="btn btn-primary btn-lg">
                  Request assessment <span className="arrow">→</span>
                </button>
                <div className="fineprint">
                  One‑time outreach to schedule. Never shared or sold.
                </div>
              </div>
            </form> :

          <div className="form-success">
              <div className="check-big">✓</div>
              <div className="ftitle">Request received.</div>
              <div className="fsub" style={{ marginTop: 12 }}>REPLY WITHIN 48 HOURS</div>
              <p style={{ color: 'var(--fg-soft)', marginTop: 16, fontSize: 15 }}>
                We'll reach out to {form.email || 'you'} directly.
              </p>
            </div>
          }
        </div>
      </div>
    </section>);

}

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>© 2026 NAYLOR CC · WA · OR · ID</div>
        <div className="links">
          <span>PRIVACY</span>
          <span>TERMS</span>
          <span>OFFICE@NAYLORCC.COM</span>
        </div>
      </div>
    </footer>);

}

Object.assign(window, {
  TopBar, Nav, HeroA, HeroB, HeroC, Strip, Problem, Approach, WhoWeServe, Logos, CTA, Footer
});