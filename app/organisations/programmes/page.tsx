import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "@/components/icons";
import { ExperienceSection } from "@/components/experience-section";
import { Reveal } from "@/components/reveal";
import { Spotlight } from "@/components/spotlight";

export const metadata: Metadata = {
  title: "Workforce Programmes",
  description:
    "Workforce programmes for regulated, performance-driven teams across banking, insurance, investment, sales, leadership and client experience.",
};

type Card = {
  slug: string;
  pills: Array<{ label: string; cls?: string }>;
  title: string;
  desc: string;
  audience?: string;
  meta?: Array<{ val: string; lbl: string }>;
  cta: string;
};

const skillsProgrammes: Card[] = [
  {
    slug: "foundations-of-value-selling",
    pills: [{ label: "Sales", cls: "pill-blue" }],
    title: "Foundations of Value Selling",
    desc: "Help client-facing teams shift from transactional selling to value-led client conversations.",
    audience: "Sales and client-facing teams",
    cta: "Discuss programme",
  },
  {
    slug: "relationship-management",
    pills: [{ label: "Banking", cls: "pill-blue" }],
    title: "Relationship Manager Development Programme",
    desc: "Develop the capability to build trusted client relationships and support business growth.",
    audience: "Relationship managers and client portfolio teams",
    cta: "Discuss programme",
  },
  {
    slug: "branch-manager-development",
    pills: [{ label: "Leadership / Operations", cls: "pill-purple" }],
    title: "Branch Manager Development Programme",
    desc: "Strengthen people leadership, performance management and operational delivery for branch leaders.",
    audience: "Branch leaders and operational managers",
    cta: "Discuss programme",
  },
  {
    slug: "thrive-track-workplace-development",
    pills: [{ label: "Early career" }],
    title: "Thrive Track Workplace Development",
    desc: "Workplace readiness, confidence and practical capability for early-career hires.",
    audience: "Early-career professionals and workplace entrants",
    cta: "Discuss programme",
  },
  {
    slug: "digital-transformation",
    pills: [{ label: "Digital", cls: "pill-purple" }],
    title: "Digital Transformation Programme",
    desc: "Practical digital transformation capability connected to business results and operational change.",
    audience: "Teams adapting to digital change",
    cta: "Discuss programme",
  },
  {
    slug: "digital-innovation",
    pills: [{ label: "Innovation", cls: "pill-purple" }],
    title: "Digital Innovation Programme",
    desc: "Capability for moving ideas into implementation and operational performance.",
    audience: "Teams responsible for innovation and implementation",
    cta: "Discuss programme",
  },
  {
    slug: "sales-and-client-experience",
    pills: [{ label: "CX", cls: "pill-blue" }],
    title: "Sales and Client Experience Excellence",
    desc: "Strengthen client experience capability and create more consistent, valuable client interactions.",
    audience: "Client-facing and service teams",
    cta: "Discuss programme",
  },
  {
    slug: "principles-of-sustainable-investments",
    pills: [{ label: "ESG", cls: "pill-blue" }],
    title: "Principles of Sustainable Investments",
    desc: "Build foundational ESG and sustainable investment capability for advisory and investment teams.",
    audience: "Investment and advisory teams",
    cta: "Discuss programme",
  },
];

// Additional occupational (QCTO + legacy) qualifications beyond the primary
// three (BBP, IA, LTIA). Rendered as a secondary grid beneath the featured
// trio in the Occupational qualifications section.
const additionalOccupational: Card[] = [
  {
    slug: "agile-banking-professional",
    pills: [{ label: "Banking", cls: "pill-blue" }, { label: "Occupational" }],
    title: "Agile Banking Professional",
    desc: "A workplace-integrated occupational qualification for active banking employees.",
    audience: "Active banking employees",
    meta: [
      { val: "NQF 5", lbl: "occupational" },
      { val: "Workplace", lbl: "integrated" },
    ],
    cta: "View programme",
  },
  {
    slug: "insurance-underwriter",
    pills: [{ label: "Insurance", cls: "pill-blue" }, { label: "Occupational" }],
    title: "Insurance Underwriter",
    desc: "A qualification pathway for underwriting capability in short-term and long-term insurance environments.",
    audience: "Underwriting teams",
    meta: [
      { val: "NQF 5", lbl: "occupational" },
      { val: "Workplace", lbl: "integrated" },
    ],
    cta: "View programme",
  },
  {
    slug: "organisational-risk-practitioner",
    pills: [{ label: "Risk", cls: "pill-purple" }, { label: "NQF 6" }],
    title: "Organisational Risk Practitioner",
    desc: "An occupational qualification for risk practitioners in financial services and regulated industries.",
    audience: "Risk and compliance teams",
    meta: [
      { val: "NQF 6", lbl: "occupational" },
      { val: "Workplace", lbl: "integrated" },
    ],
    cta: "View programme",
  },
];

// Higher-education (CHE-accredited) qualifications - available for cohort
// delivery via organisational sponsorship.
const heQualifications: Card[] = [
  {
    slug: "higher-certificate-banking",
    pills: [{ label: "Banking", cls: "pill-blue" }, { label: "NQF 5" }, { label: "Higher Education" }],
    title: "Higher Certificate in Banking",
    desc: "A 12-month, CHE-accredited foundation for banking careers. Relevant for entry-level banking cohorts and graduate intake programmes.",
    audience: "Entry-level banking cohorts",
    meta: [
      { val: "NQF 5", lbl: "CHE accredited" },
      { val: "12 months", lbl: "blended" },
      { val: "120", lbl: "credits" },
    ],
    cta: "View programme",
  },
  {
    slug: "advanced-certificate-leadership",
    pills: [{ label: "Leadership", cls: "pill-purple" }, { label: "NQF 6" }, { label: "Higher Education" }],
    title: "Advanced Certificate in Leadership",
    desc: "A 12-month, CHE-accredited leadership credential. Suitable for emerging-leader cohorts, succession pipelines and high-potential talent.",
    audience: "Leadership development cohorts",
    meta: [
      { val: "NQF 6", lbl: "CHE accredited" },
      { val: "12 months", lbl: "online" },
      { val: "120", lbl: "credits" },
    ],
    cta: "View programme",
  },
];

export default function OrganisationsProgrammes() {
  return (
    <main>
      <section className="page-hero has-photo">
        <div
          className="page-hero-photo"
          aria-hidden
          style={{ backgroundImage: "url('/linkedin-sales-solutions-EI50ZDA-l8Y-unsplash.jpg')" }}
        />
        <div className="page-hero-overlay" aria-hidden />
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/organisations">Organisations</Link><span className="sep">/</span><span style={{ color: "var(--cps-purple)" }}>Workforce Programmes</span>
          </div>
          <div style={{ marginTop: 24, maxWidth: 880 }}>
            <span className="eyebrow"><span className="dot" style={{ background: "var(--cps-purple)" }} /> Workforce Programmes</span>
            <h1>Workforce programmes for regulated, performance-driven teams.</h1>
            <p style={{ marginTop: 24, fontSize: 18 }}>
              Explore occupational qualifications and skills programmes designed for organisations that
              need stronger capability in banking, insurance, investment, sales, leadership and client
              experience.
            </p>
            <p style={{ marginTop: 16, fontSize: 16, maxWidth: 720 }}>
              These programmes are built for teams, cohorts and regulated environments where completion,
              workplace application and measurable progress matter.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOUR STAFF CAN EXPECT - moved from /organisations/cpslearn */}
      <ExperienceSection variant="organisations" surface="tinted" />

      {/* SECTION 1: OCCUPATIONAL QUALIFICATIONS - QCTO-aligned, workplace-integrated */}
      <section id="occupational">
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" style={{ background: "var(--cps-purple)" }} /> Occupational qualifications</span>
              <h2>Workplace-integrated qualifications built around real capability.</h2>
              <p>
                QCTO-aligned occupational qualifications (current and legacy) designed around the kind of
                capability organisations actually need to build: business banking, investment advisory,
                long-term insurance, and specialist pathways.
              </p>
            </div>
          </Reveal>

          <div className="prog-grid">
            <Spotlight as="div">
              <Link href="/programmes/business-banking-practitioner" className="prog-card featured" style={{ display: "flex" }}>
                <div className="prog-card-top">
                  <div className="pill-row">
                    <span className="pill pill-blue">Business Banking</span>
                    <span className="pill">NQF 6</span>
                    <span className="pill">QCTO</span>
                  </div>
                </div>
                <h3 className="prog-title">Business Banking Practitioner</h3>
                <p className="prog-desc">
                  Develop business banking professionals who can understand client needs, support business
                  growth conversations and build stronger client relationships.
                </p>
                <div className="prog-meta">
                  <div><strong>NQF 6</strong><span>QCTO</span></div>
                  <div><strong>18 months</strong><span>workplace</span></div>
                  <div><strong>202</strong><span>credits</span></div>
                </div>
                <span className="prog-cta">View programme <ArrowRight width={14} height={14} /></span>
              </Link>
            </Spotlight>
            <Spotlight as="div">
              <Link href="/programmes/investment-advisor" className="prog-card featured" style={{ display: "flex" }}>
                <div className="prog-card-top">
                  <div className="pill-row">
                    <span className="pill pill-blue">Investment</span>
                    <span className="pill">NQF 6</span>
                    <span className="pill">QCTO</span>
                  </div>
                </div>
                <h3 className="prog-title">Investment Advisor</h3>
                <p className="prog-desc">
                  Build technical and professional advisory capability for teams working with investment
                  and client portfolio environments.
                </p>
                <div className="prog-meta">
                  <div><strong>NQF 6</strong><span>QCTO</span></div>
                  <div><strong>18 months</strong><span>workplace</span></div>
                  <div><strong>213</strong><span>credits</span></div>
                </div>
                <span className="prog-cta">View programme <ArrowRight width={14} height={14} /></span>
              </Link>
            </Spotlight>
            <Spotlight as="div">
              <Link href="/programmes/long-term-insurance-advisor" className="prog-card featured" style={{ display: "flex" }}>
                <div className="prog-card-top">
                  <div className="pill-row">
                    <span className="pill pill-blue">Insurance</span>
                    <span className="pill">NQF 5</span>
                    <span className="pill">QCTO</span>
                  </div>
                </div>
                <h3 className="prog-title">Long-Term Insurance Advisor</h3>
                <p className="prog-desc">
                  Support long-term insurance advisor capability through a structured occupational
                  qualification pathway.
                </p>
                <div className="prog-meta">
                  <div><strong>NQF 5</strong><span>QCTO</span></div>
                  <div><strong>12 months</strong><span>workplace</span></div>
                  <div><strong>180</strong><span>credits</span></div>
                </div>
                <span className="prog-cta">View programme <ArrowRight width={14} height={14} /></span>
              </Link>
            </Spotlight>
          </div>

          {/* Additional occupational qualifications - QCTO + legacy */}
          <div className="prog-grid" style={{ marginTop: 32 }}>
            {additionalOccupational.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <Link href={`/programmes/${c.slug}`} className="prog-card secondary">
                  <div className="prog-card-top">
                    <div className="pill-row">
                      {c.pills.map((p, j) => (
                        <span key={j} className={`pill ${p.cls ?? ""}`.trim()}>{p.label}</span>
                      ))}
                    </div>
                  </div>
                  {c.audience && (
                    <div className="prog-audience"><span className="mono">For: {c.audience}</span></div>
                  )}
                  <h3 className="prog-title">{c.title}</h3>
                  <p className="prog-desc">{c.desc}</p>
                  {c.meta && (
                    <div className="prog-meta">
                      {c.meta.map((m, j) => (
                        <div key={j}><strong>{m.val}</strong><span>{m.lbl}</span></div>
                      ))}
                    </div>
                  )}
                  <span className="prog-cta">{c.cta} <ArrowRight width={12} height={12} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: HIGHER EDUCATION QUALIFICATIONS - HCIB + ACL for cohorts */}
      <section id="higher-education">
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" style={{ background: "var(--cps-blue)" }} /> Higher Education qualifications</span>
              <h2>CHE-accredited credentials for cohort delivery.</h2>
              <p>
                CHE-accredited higher-education qualifications. Available for cohort delivery in support
                of strategic capability and leadership development, often via employer sponsorship of
                early-career or high-potential talent.
              </p>
            </div>
          </Reveal>

          <div className="prog-grid">
            {heQualifications.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <Link href={`/programmes/${c.slug}`} className="prog-card secondary">
                  <div className="prog-card-top">
                    <div className="pill-row">
                      {c.pills.map((p, j) => (
                        <span key={j} className={`pill ${p.cls ?? ""}`.trim()}>{p.label}</span>
                      ))}
                    </div>
                  </div>
                  {c.audience && (
                    <div className="prog-audience"><span className="mono">For: {c.audience}</span></div>
                  )}
                  <h3 className="prog-title">{c.title}</h3>
                  <p className="prog-desc">{c.desc}</p>
                  {c.meta && (
                    <div className="prog-meta">
                      {c.meta.map((m, j) => (
                        <div key={j}><strong>{m.val}</strong><span>{m.lbl}</span></div>
                      ))}
                    </div>
                  )}
                  <span className="prog-cta">{c.cta} <ArrowRight width={12} height={12} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SKILLS PROGRAMMES */}
      <section id="skills" className="section-tinted">
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" style={{ background: "var(--cps-purple)" }} /> Skills and Capability Programmes</span>
              <h2>Focused 3–6 month programmes for team and capability shifts.</h2>
              <p>
                Skills programmes are typically delivered for organisational cohorts. Designed and deployed
                in weeks rather than quarters, they target specific capability shifts in sales, leadership,
                client experience and digital change.
              </p>
            </div>
          </Reveal>

          <div className="prog-grid cols-4">
            {skillsProgrammes.map((c, i) => (
              <Reveal key={c.slug} delay={i * 60}>
                <Link href={`/programmes/${c.slug}`} className="prog-card secondary" style={{ minHeight: 260 }}>
                  <div className="prog-card-top">
                    <div className="pill-row">
                      <span className="pill">Skills</span>
                      {c.pills.map((p, j) => (
                        <span key={j} className={`pill ${p.cls ?? ""}`.trim()}>{p.label}</span>
                      ))}
                    </div>
                  </div>
                  {c.audience && (
                    <div className="prog-audience"><span className="mono">For: {c.audience}</span></div>
                  )}
                  <h3 className="prog-title" style={{ fontSize: 15 }}>{c.title}</h3>
                  <p className="prog-desc" style={{ fontSize: 13 }}>{c.desc}</p>
                  <span className="prog-cta">{c.cta} <ArrowRight width={12} height={12} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-tinted">
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> Need a team or cohort programme?</span>
              <h2>Need a programme for a team or cohort?</h2>
              <p>
                CPS can help you match the right qualification or skills programme to your business need,
                student group and delivery context.
              </p>
            </div>
            <Link href="/contact#partnerships" className="btn btn-yellow btn-lg" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              Request a conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
