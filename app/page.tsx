import Link from "next/link";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Mail,
  Phone,
} from "@/components/icons";
import { CredentialsBand } from "@/components/credentials-band";
import { ClientLogos } from "@/components/client-logos";
import { ExperienceSection } from "@/components/experience-section";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { Spotlight } from "@/components/spotlight";

export default function StudentsHome() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-fallback" />
        <div className="hero-photo" />
        <div className="hero-bg" />

        <div className="container">
          <div className="hero-grid">
            <span className="eyebrow hero-fade-in" style={{ animationDelay: "0ms" }}>
              <span className="dot" /> #ShapeYourFuture &nbsp;//&nbsp; Accredited Qualifications
            </span>
            <h1 className="hero-headline">
              <span className="hero-line">Get the qualification</span>
              <span className="hero-line"><span className="accent-word">that moves your career</span></span>
              <span className="hero-line">forward.</span>
            </h1>
            <p className="hero-sub hero-fade-in">
              Study accredited banking, insurance and leadership programmes designed for South African
              professionals who want recognised credentials, practical knowledge and a clearer path forward.
            </p>

            <div className="hero-cta-row hero-fade-in">
              <Link href="/programmes" className="btn btn-yellow btn-lg" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                Browse student programmes <ArrowRight />
              </Link>
              <Link href="/contact#admissions" className="liquid-glass btn-lg" style={{ borderRadius: 14, padding: "14px 22px", display: "inline-flex", alignItems: "center", gap: 8 }}>
                Talk to admissions
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* CLIENT LOGOS */}
      <ClientLogos label="CPS has worked with students, teams or programmes connected to leading South African and international financial services organisations." />

      {/* SUPPORTING PARAGRAPH BAND — centered, breathing room above + below */}
      <section style={{ padding: "120px 0 120px" }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <Reveal>
            <p style={{
              fontSize: "clamp(20px, 1.6vw, 26px)",
              color: "var(--ink)",
              lineHeight: 1.55,
              fontWeight: 400,
              textAlign: "center",
              letterSpacing: "-0.005em",
            }}>
              Choosing a qualification is a serious decision. You need to know the programme is recognised,
              the learning journey is structured, and there is support to help you complete.
            </p>
            <p style={{
              fontSize: "clamp(20px, 1.6vw, 26px)",
              color: "var(--ink)",
              lineHeight: 1.55,
              fontWeight: 400,
              textAlign: "center",
              letterSpacing: "-0.005em",
              marginTop: 24,
            }}>
              CPS brings those pieces together through accredited programmes, guided learning pathways and
              more than 25 years of experience in financial services education.
            </p>
          </Reveal>
        </div>
      </section>

      <CredentialsBand />

      {/* WHAT TO EXPECT AS A CPS STUDENT */}
      <ExperienceSection variant="students" surface="tinted" />

      {/* CAREER VALUE — image-backed section, blocks pinned to bottom */}
      <section className="career-value">
        <div className="career-value-photo" aria-hidden />
        <div className="career-value-overlay" aria-hidden />
        <div className="container">
          <div className="career-grid">
            <Reveal as="div" className="phase" delay={0}>
              <div className="phase-num">VALUE 01</div>
              <h3>Build credibility</h3>
              <p>Gain a qualification aligned to recognised education and occupational frameworks.</p>
            </Reveal>
            <Reveal as="div" className="phase" delay={100}>
              <div className="phase-num">VALUE 02</div>
              <h3>Build confidence</h3>
              <p>Understand the concepts, language and expectations of financial services roles.</p>
            </Reveal>
            <Reveal as="div" className="phase" delay={200}>
              <div className="phase-num">VALUE 03</div>
              <h3>Build direction</h3>
              <p>Choose a programme linked to a specific career pathway, not a generic study option.</p>
            </Reveal>
            <Reveal as="div" className="phase" delay={300}>
              <div className="phase-num">VALUE 04</div>
              <h3>Build momentum</h3>
              <p>Follow a structured learning journey designed to help you stay on track and complete.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED STUDENT PROGRAMMES — 2 primary equal + 6 secondary */}
      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> Featured student programmes</span>
              <h2>Two primary pathways. Specialist options for your next step.</h2>
              <p>
                Start with one of our two flagship student pathways: banking foundations or leadership
                development. Both are 12-month higher education qualifications designed for working
                South African professionals. Additional qualifications are available for students building
                specialist capability in insurance, investment, business banking and risk.
              </p>
            </div>
            <Link href="/programmes" className="liquid-glass btn-lg" style={{ borderRadius: 14, padding: "14px 22px", display: "inline-flex", alignItems: "center", gap: 8 }}>
              See all programmes <ArrowRight />
            </Link>
          </Reveal>

          {/* Primary pair — equal weight */}
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
                  the foundation employers expect: banking knowledge, client understanding, financial
                  literacy, ethics, compliance and practical problem-solving.
                </p>
                <p className="prog-desc" style={{ fontSize: 14, marginTop: -12, marginBottom: 24 }}>
                  This is the right starting point if you want a recognised banking qualification and a
                  clearer pathway into South Africa&apos;s financial services sector.
                </p>
                <div className="prog-meta">
                  <div><strong>R2,480</strong><span>per month</span></div>
                  <div><strong>12 months</strong><span>blended</span></div>
                  <div><strong>NQF 5</strong><span>202 credits</span></div>
                </div>
                <span className="prog-cta">View HCIB <ArrowRight /></span>
              </Link>
            </Spotlight>

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
                  A 12-month qualification for professionals who are ready to move from experience into
                  recognised leadership capability. ACL6 helps you strengthen decision-making, lead teams
                  with more confidence and prepare for higher-responsibility roles.
                </p>
                <p className="prog-desc" style={{ fontSize: 14, marginTop: -12, marginBottom: 24 }}>
                  This is the right next step if you already have workplace experience and want a
                  qualification that supports leadership progression.
                </p>
                <div className="prog-meta">
                  <div><strong>R2,688</strong><span>per month</span></div>
                  <div><strong>12 months</strong><span>online</span></div>
                  <div><strong>NQF 6</strong><span>CHE accredited</span></div>
                </div>
                <span className="prog-cta">View ACL6 <ArrowRight /></span>
              </Link>
            </Spotlight>
          </div>

        </div>
      </section>

      {/* WHY COMPLETION MATTERS */}
      <section>
        <div className="container">
          <Reveal style={{ maxWidth: 720 }}>
            <span className="eyebrow"><span className="dot" style={{ background: "var(--cps-blue)" }} /> Why completion matters</span>
            <h2 style={{ marginTop: 16 }}>Starting is important. Finishing is what changes your future.</h2>
            <p style={{ marginTop: 16, fontSize: 17 }}>
              A qualification only creates value when students complete it and can apply what they have
              learned. CPS places strong emphasis on structured journeys, support and progress tracking
              because these are the things that help students stay committed through the full programme.
            </p>
          </Reveal>
          <div className="stats-grid">
            <Reveal as="div" className="stat-card" delay={0}>
              <span className="mono">Professionals trained</span>
              <div>
                <div className="big"><CountUp to={29860} /><sup>+</sup></div>
                <div className="desc">Across more than two decades, CPS programmes have supported tens of thousands of South African professionals in building recognised capability.</div>
              </div>
            </Reveal>
            <Reveal as="div" className="stat-card" delay={120}>
              <span className="mono">Programme completion</span>
              <div>
                <div className="big"><CountUp to={85} /><sup>%+</sup></div>
                <div className="desc">CPS programmes achieve completion rates above the industry average through structured journeys, active support and progress monitoring.</div>
              </div>
            </Reveal>
            <Reveal as="div" className="stat-card" delay={240}>
              <span className="mono">In market</span>
              <div>
                <div className="big"><CountUp to={25} /><sup>y</sup></div>
                <div className="desc">More than 25 years of focused experience in financial services education, with deep relationships across the sector.</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CPSLEARN PREVIEW — DARK */}
      <section className="section-dark">
        <div className="container">
          <Reveal as="div" className="section-head">
            <div className="left">
              <span className="eyebrow"><span className="dot" /> CPSLearn preview</span>
              <h2>One place for your learning journey.</h2>
              <p>
                CPSLearn is the platform where your programme is delivered and managed. It brings together
                learning materials, assessments, feedback, progress visibility and support in one structured
                environment.
              </p>
            </div>
            <Link href="/cpslearn" className="liquid-glass btn-lg" style={{ borderRadius: 14, padding: "14px 22px", display: "inline-flex", alignItems: "center", gap: 8 }}>
              Explore CPSLearn for students <ArrowRight />
            </Link>
          </Reveal>

          <div className="platform-grid cols-3">
            <Spotlight as="div"><Reveal as="div" className="feat-card" delay={0}>
              <div><div className="icon"><ClipboardCheck /></div></div>
              <div><h4>Clear programme structure</h4><p>Modules, milestones and expectations laid out clearly.</p></div>
            </Reveal></Spotlight>
            <Spotlight as="div"><Reveal as="div" className="feat-card" delay={80}>
              <div><div className="icon" style={{ background: "rgba(144,19,254,0.22)", color: "#C5A0FF" }}><Check /></div></div>
              <div><h4>Assessment &amp; feedback</h4><p>Submit assessments and receive feedback within the platform.</p></div>
            </Reveal></Spotlight>
            <Spotlight as="div"><Reveal as="div" className="feat-card" delay={160}>
              <div><div className="icon" style={{ background: "rgba(255,255,0,0.18)", color: "var(--cps-yellow)" }}><Check /></div></div>
              <div><h4>Progress visibility</h4><p>See where you are in the journey and what still needs attention.</p></div>
            </Reveal></Spotlight>
            <Spotlight as="div"><Reveal as="div" className="feat-card" delay={240}>
              <div><div className="icon"><ClipboardCheck /></div></div>
              <div><h4>Support tracking</h4><p>Visibility helps CPS identify where students may need extra support.</p></div>
            </Reveal></Spotlight>
            <Spotlight as="div"><Reveal as="div" className="feat-card" delay={320}>
              <div><div className="icon" style={{ background: "rgba(144,19,254,0.22)", color: "#C5A0FF" }}><Check /></div></div>
              <div><h4>Mobile-friendly access</h4><p>CPSLearn works around your schedule and device.</p></div>
            </Reveal></Spotlight>
            <Spotlight as="div"><Reveal as="div" className="feat-card" delay={400}>
              <div><div className="icon" style={{ background: "rgba(255,255,0,0.18)", color: "var(--cps-yellow)" }}><Check /></div></div>
              <div><h4>Exam functionality</h4><p>Exam workflows for higher education programmes, where applicable.</p></div>
            </Reveal></Spotlight>
          </div>
        </div>
      </section>

      {/* BEFORE YOU APPLY — reassurance + checklist (white surface) */}
      <section>
        <div className="container">
          <div className="diff-grid">
            <Reveal as="div">
              <span className="eyebrow"><span className="dot" /> Before you apply</span>
              <h2 style={{ marginTop: 16 }}>We&apos;ll help you understand the next step before you commit.</h2>
              <p style={{ marginTop: 24, fontSize: 17, color: "var(--muted)", lineHeight: 1.6 }}>
                You do not need to have everything figured out before speaking to CPS. If you are unsure
                which programme fits your background, goals or current career stage, the admissions team
                can help you make sense of the options.
              </p>
            </Reveal>
            <Reveal as="div" delay={120}>
              <div style={{ background: "var(--card)", borderRadius: 20, padding: 32, border: "1px solid var(--line)" }}>
                <span className="mono">Things admissions can help you with</span>
                <ul style={{ marginTop: 20, listStyle: "none", display: "flex", flexDirection: "column", gap: 12, padding: 0 }}>
                  {[
                    "Which programme fits your career goal",
                    "What the entry requirements are",
                    "What documents you may need",
                    "What the payment structure looks like",
                    "What happens after your enquiry or application",
                    "Who to contact if you need help",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, lineHeight: 1.45, color: "var(--ink)" }}>
                      <span style={{ display: "grid", placeItems: "center", flexShrink: 0, width: 22, height: 22, borderRadius: 999, background: "rgba(16,185,129,0.18)", color: "#0A6E4B", marginTop: 1 }}>
                        <Check />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="cta-band">
        <div className="cta-band-inner">
          <div className="cta-band-grid">
            <Reveal as="div">
              <span className="mono" style={{ color: "#0B6E94" }}>#ShapeYourFuture</span>
              <h2 style={{ marginTop: 16 }}>Ready to take the next step?</h2>
              <p>
                Tell us what you want to study, and the admissions team will help you understand the right
                programme, requirements and next step.
              </p>
              <div className="cta-band-actions">
                <Link href="/programmes" className="btn btn-yellow btn-lg">Browse student programmes</Link>
              </div>
            </Reveal>
            <Reveal as="div" delay={140}>
              <div className="mono" style={{ marginBottom: 12 }}>Talk to admissions</div>
              <a href="mailto:succeed@cps.co.za" className="contact-link primary" style={{ marginBottom: 8 }}>
                <Mail /> succeed@cps.co.za
              </a>
              <a href="tel:+27117891957" className="contact-link">
                <Phone /> +27 11 789 1957
              </a>
            </Reveal>
          </div>
        </div>
      </div>
      <div style={{ height: 96 }} />
    </main>
  );
}
