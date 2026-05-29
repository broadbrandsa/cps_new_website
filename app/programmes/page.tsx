import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Spotlight } from "@/components/spotlight";

export const metadata: Metadata = {
  title: "Programmes for Students",
  description:
    "Explore CPS qualifications and professional development programmes across banking, insurance, investment, leadership and workplace capability.",
};

export default function StudentsProgrammes() {
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
            <Link href="/">Students</Link><span className="sep">/</span><span style={{ color: "var(--cps-blue)" }}>Programmes</span>
          </div>
          <div style={{ marginTop: 24, maxWidth: 880 }}>
            <span className="eyebrow"><span className="dot" /> Student Programmes</span>
            <h1>Find the programme that fits your next career move.</h1>
            <p style={{ marginTop: 24, fontSize: 18 }}>
              Explore CPS qualifications and professional development programmes across banking, insurance,
              investment, leadership and workplace capability. Start with one of our primary student
              pathways, or browse additional qualifications designed for specific career directions.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: PRIMARY STUDENT PROGRAMMES - programme + audience-fit pairs */}
      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> Primary Student Programmes</span>
              <h2>Two flagship pathways - equal weight, different directions.</h2>
              <p>
                Our two primary student programmes serve different career goals: a banking foundation, and a
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
                <li>Students wanting an NQF Level 5 banking qualification</li>
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
                <li>Students wanting an NQF Level 6 leadership qualification</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* YOUR STUDENT JOURNEY - horizontal timeline (dark surface, mirrors CPSLearn preview) */}
      <section className="section-dark">
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> Your student journey</span>
              <h2>From enquiry to enrolment, know what happens next.</h2>
              <p>
                A clear process reduces uncertainty. CPS helps students understand the programme,
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
              <p>Apply directly or request information first - move forward with clarity, not pressure.</p>
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
