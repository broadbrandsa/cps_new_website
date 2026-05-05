import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Spotlight } from "@/components/spotlight";

export const metadata: Metadata = {
  title: "Programmes for Learners",
  description:
    "Explore CPS qualifications and professional development programmes across banking, insurance, investment, leadership and workplace capability.",
};

type Card = {
  slug: string;
  pills: Array<{ label: string; cls?: string }>;
  title: string;
  desc: string;
  meta?: Array<{ val: string; lbl: string }>;
  cta: string;
};

const additionalQualifications: Card[] = [
  {
    slug: "long-term-insurance-advisor",
    pills: [{ label: "Insurance", cls: "pill-blue" }, { label: "NQF 5" }],
    title: "Long-Term Insurance Advisor",
    desc: "A regulated qualification pathway for professionals entering or growing in long-term insurance advice.",
    meta: [
      { val: "NQF 5", lbl: "occupational" },
      { val: "12 months", lbl: "workplace" },
    ],
    cta: "View LTIA",
  },
  {
    slug: "investment-advisor",
    pills: [{ label: "Investment", cls: "pill-blue" }, { label: "NQF 6" }],
    title: "Investment Advisor",
    desc: "A qualification pathway for professionals building advisory capability in investment, wealth and client portfolio environments.",
    meta: [
      { val: "NQF 6", lbl: "occupational" },
      { val: "18 months", lbl: "workplace" },
    ],
    cta: "View Investment Advisor",
  },
  {
    slug: "agile-banking-professional",
    pills: [{ label: "Banking", cls: "pill-blue" }, { label: "Occupational Qualification" }],
    title: "Agile Banking Professional",
    desc: "A banking-focused qualification pathway for professionals developing stronger capability in modern banking environments.",
    meta: [
      { val: "NQF 5", lbl: "occupational" },
      { val: "Workplace", lbl: "integrated" },
    ],
    cta: "View Agile Banking Professional",
  },
  {
    slug: "business-banking-practitioner",
    pills: [{ label: "Business Banking", cls: "pill-blue" }, { label: "NQF 6" }],
    title: "Business Banking Practitioner",
    desc: "A workplace-integrated qualification for professionals developing SME and commercial banking capability.",
    meta: [
      { val: "NQF 6", lbl: "occupational" },
      { val: "18 months", lbl: "workplace" },
      { val: "202", lbl: "credits" },
    ],
    cta: "View Business Banking Practitioner",
  },
  {
    slug: "insurance-underwriter",
    pills: [{ label: "Insurance", cls: "pill-blue" }, { label: "Occupational Qualification" }],
    title: "Insurance Underwriter",
    desc: "A qualification pathway for professionals building underwriting capability in insurance environments.",
    meta: [
      { val: "NQF 5", lbl: "occupational" },
      { val: "Workplace", lbl: "integrated" },
    ],
    cta: "View Insurance Underwriter",
  },
  {
    slug: "organisational-risk-practitioner",
    pills: [{ label: "Risk", cls: "pill-purple" }, { label: "NQF 6" }],
    title: "Organisational Risk Practitioner",
    desc: "A qualification pathway for professionals developing organisational risk capability in regulated business environments.",
    meta: [
      { val: "NQF 6", lbl: "occupational" },
      { val: "Workplace", lbl: "integrated" },
    ],
    cta: "View Organisational Risk Practitioner",
  },
];

const skillsProgrammes: Card[] = [
  {
    slug: "foundations-of-value-selling",
    pills: [{ label: "Sales", cls: "pill-blue" }],
    title: "Foundations of Value Selling",
    desc: "Move from transactional selling to value-led client conversations.",
    cta: "Learn more",
  },
  {
    slug: "relationship-management",
    pills: [{ label: "Banking", cls: "pill-blue" }],
    title: "Relationship Manager Development",
    desc: "Develop the trusted-advisor capability that drives retention and growth.",
    cta: "Learn more",
  },
  {
    slug: "thrive-track-workplace-development",
    pills: [{ label: "Early career" }],
    title: "Thrive Track Workplace Development",
    desc: "Practical workplace skills and confidence for early-career professionals.",
    cta: "Learn more",
  },
  {
    slug: "branch-manager-development",
    pills: [{ label: "Leadership", cls: "pill-purple" }],
    title: "Branch Manager Development",
    desc: "Build branch leadership that supports performance and operational delivery.",
    cta: "Learn more",
  },
  {
    slug: "digital-transformation",
    pills: [{ label: "Digital", cls: "pill-purple" }],
    title: "Digital Transformation Programme",
    desc: "Practical digital transformation capability connected to business results.",
    cta: "Learn more",
  },
  {
    slug: "digital-innovation",
    pills: [{ label: "Innovation", cls: "pill-purple" }],
    title: "Digital Innovation Programme",
    desc: "Move ideas into implementation and operational performance.",
    cta: "Learn more",
  },
  {
    slug: "sales-and-client-experience",
    pills: [{ label: "CX", cls: "pill-blue" }],
    title: "Sales and Client Experience Excellence",
    desc: "Strengthen client experience capability across teams.",
    cta: "Learn more",
  },
  {
    slug: "principles-of-sustainable-investments",
    pills: [{ label: "ESG", cls: "pill-blue" }],
    title: "Principles of Sustainable Investments",
    desc: "Build foundational ESG and sustainable investment capability.",
    cta: "Learn more",
  },
];

export default function LearnersProgrammes() {
  return (
    <main>
      <section className="page-hero has-photo">
        <div
          className="page-hero-photo"
          aria-hidden
          style={{ backgroundImage: "url('/brooke-cagle-JBwcenOuRCg-unsplash.jpg')" }}
        />
        <div className="page-hero-overlay" aria-hidden />
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Learners</Link><span className="sep">/</span><span style={{ color: "var(--cps-blue)" }}>Programmes</span>
          </div>
          <div style={{ marginTop: 24, maxWidth: 880 }}>
            <span className="eyebrow"><span className="dot" /> Learner Programmes</span>
            <h1>Find the programme that fits your next career move.</h1>
            <p style={{ marginTop: 24, fontSize: 18 }}>
              Explore CPS qualifications and professional development programmes across banking, insurance,
              investment, leadership and workplace capability. Start with one of our primary learner
              pathways, or browse additional qualifications designed for specific career directions.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: PRIMARY LEARNER PROGRAMMES — programme + audience-fit pairs */}
      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> Primary Learner Programmes</span>
              <h2>Two flagship pathways — equal weight, different directions.</h2>
              <p>
                Our two primary learner programmes serve different career goals: a banking foundation, and a
                leadership credential. Both are 12 months, both are higher-education qualifications, and both
                are designed for working South African professionals. Each programme sits next to a quick
                guide to help you decide where to start.
              </p>
            </div>
          </Reveal>

          <div className="prog-featured-pair">
            <Spotlight as="div">
              <Link href="/programmes/higher-certificate-banking" className="prog-card hero-card" style={{ display: "flex" }}>
                <div className="prog-card-top">
                  <div className="pill-row">
                    <span className="pill pill-yellow">Primary programme</span>
                    <span className="pill">Banking</span>
                    <span className="pill">NQF 5</span>
                  </div>
                </div>
                <h3 className="prog-title">Higher Certificate in Banking</h3>
                <p className="prog-desc">
                  A 12-month qualification for people who want to enter or grow in banking. HCIB builds
                  foundational banking knowledge, practical financial services understanding and a
                  recognised qualification pathway.
                </p>
                <div className="prog-meta">
                  <div><strong>R2,480</strong><span>per month</span></div>
                  <div><strong>12 months</strong><span>blended</span></div>
                  <div><strong>NQF 5</strong><span>202 credits</span></div>
                </div>
                <span className="prog-cta">View HCIB <ArrowRight /></span>
              </Link>
            </Spotlight>

            <Reveal as="div" className="audience-card pathway-card" delay={120}>
              <div className="head-row">
                <h3>Choose HCIB if&hellip;</h3>
                <span className="tag pill pill-blue">Banking · NQF 5</span>
              </div>
              <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 16 }}>
                You want to enter banking, formalise your banking knowledge, or build a recognised
                foundation in financial services.
              </p>
              <span className="mono" style={{ marginBottom: 8, display: "block" }}>Best for</span>
              <ul>
                <li>Banking career starters</li>
                <li>Junior banking professionals</li>
                <li>Career changers entering financial services</li>
                <li>Learners wanting an NQF Level 5 banking qualification</li>
              </ul>
            </Reveal>

            <Spotlight as="div">
              <Link href="/programmes/advanced-certificate-leadership" className="prog-card companion-card" style={{ display: "flex" }}>
                <div className="prog-card-top">
                  <div className="pill-row">
                    <span className="pill pill-yellow">Primary programme</span>
                    <span className="pill">Leadership</span>
                    <span className="pill">NQF 6</span>
                  </div>
                </div>
                <h3 className="prog-title">Advanced Certificate in Leadership</h3>
                <p className="prog-desc">
                  A 12-month qualification for professionals who want to strengthen leadership capability,
                  formalise experience and move toward higher-responsibility roles.
                </p>
                <div className="prog-meta">
                  <div><strong>R2,688</strong><span>per month</span></div>
                  <div><strong>12 months</strong><span>online</span></div>
                  <div><strong>NQF 6</strong><span>CHE accredited</span></div>
                </div>
                <span className="prog-cta">View ACL6 <ArrowRight /></span>
              </Link>
            </Spotlight>

            <Reveal as="div" className="audience-card pathway-card" delay={240}>
              <div className="head-row">
                <h3>Choose ACL6 if&hellip;</h3>
                <span className="tag pill pill-purple">Leadership · NQF 6</span>
              </div>
              <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 16 }}>
                You already have workplace experience and want to strengthen your leadership capability,
                improve decision-making and prepare for more senior responsibility.
              </p>
              <span className="mono" style={{ marginBottom: 8, display: "block" }}>Best for</span>
              <ul>
                <li>Emerging leaders</li>
                <li>Team leaders</li>
                <li>Professionals preparing for management growth</li>
                <li>Learners wanting an NQF Level 6 leadership qualification</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2: ADDITIONAL QUALIFICATIONS */}
      <section className="section-tinted">
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> Additional Qualifications</span>
              <h2>Specialist qualifications for specific career directions.</h2>
              <p>
                These programmes serve specific career pathways across insurance, investment, business
                banking and risk. Most are workplace-integrated occupational qualifications.
              </p>
            </div>
          </Reveal>

          <div className="prog-grid">
            {additionalQualifications.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <Link href={`/programmes/${c.slug}`} className="prog-card secondary">
                  <div className="prog-card-top">
                    <div className="pill-row">
                      {c.pills.map((p, j) => (
                        <span key={j} className={`pill ${p.cls ?? ""}`.trim()}>{p.label}</span>
                      ))}
                    </div>
                  </div>
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
      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> Skills Programmes</span>
              <h2>Additional professional development options.</h2>
              <p>
                Short, focused programmes (3–6 months) that build specific capability — useful as
                supplementary professional development alongside or after a qualification. Skills programmes
                are typically delivered for organisational cohorts; speak to admissions if you are
                interested as an individual.
              </p>
            </div>
          </Reveal>

          <div className="prog-grid cols-4">
            {skillsProgrammes.map((c, i) => (
              <Reveal key={c.slug} delay={i * 60}>
                <Link href={`/programmes/${c.slug}`} className="prog-card secondary" style={{ minHeight: 240 }}>
                  <div className="prog-card-top">
                    <div className="pill-row">
                      <span className="pill">Skills</span>
                      {c.pills.map((p, j) => (
                        <span key={j} className={`pill ${p.cls ?? ""}`.trim()}>{p.label}</span>
                      ))}
                    </div>
                  </div>
                  <h3 className="prog-title" style={{ fontSize: 15 }}>{c.title}</h3>
                  <p className="prog-desc" style={{ fontSize: 13 }}>{c.desc}</p>
                  <span className="prog-cta">{c.cta} <ArrowRight width={12} height={12} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* YOUR LEARNER JOURNEY — horizontal timeline (dark surface, mirrors CPSLearn preview) */}
      <section className="section-dark">
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> Your learner journey</span>
              <h2>From enquiry to enrolment, know what happens next.</h2>
              <p>
                A clear process reduces uncertainty. CPS helps learners understand the programme,
                requirements and next step before they commit.
              </p>
            </div>
          </Reveal>

          <div className="timeline">
            <Reveal as="div" className="timeline-step" delay={0}>
              <div className="marker">01</div>
              <h3>Choose your programme</h3>
              <p>Find the qualification that fits your current position and your career goal.</p>
            </Reveal>
            <Reveal as="div" className="timeline-step" delay={120}>
              <div className="marker">02</div>
              <h3>Check the requirements</h3>
              <p>Understand what documents, prior qualifications or workplace context may be needed.</p>
            </Reveal>
            <Reveal as="div" className="timeline-step" delay={240}>
              <div className="marker">03</div>
              <h3>Apply or enquire</h3>
              <p>Apply directly or request information first — move forward with clarity, not pressure.</p>
            </Reveal>
            <Reveal as="div" className="timeline-step" delay={360}>
              <div className="marker">04</div>
              <h3>Start the journey</h3>
              <p>Once enrolled, your programme is delivered and managed through CPSLearn.</p>
            </Reveal>
            <Reveal as="div" className="timeline-step" delay={480}>
              <div className="marker">05</div>
              <h3>Stay supported</h3>
              <p>Progress is visible throughout, helping CPS identify where support may be needed.</p>
            </Reveal>
            <Reveal as="div" className="timeline-step" delay={600}>
              <div className="marker">06</div>
              <h3>Complete with confidence</h3>
              <p>Build competence and move forward with a recognised qualification.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> Need help choosing?</span>
              <h2>Not sure which programme is right for you?</h2>
              <p>
                If you are unsure which qualification fits your background, career stage or goals, speak to
                admissions. They can help you understand requirements, programme differences and the most
                relevant next step.
              </p>
            </div>
            <Link href="/contact#admissions" className="btn btn-yellow btn-lg" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              Talk to admissions
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
