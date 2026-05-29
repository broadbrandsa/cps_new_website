export type ProgrammeCategory =
  | "banking"
  | "insurance"
  | "investment"
  | "leadership"
  | "risk"
  | "sales"
  | "skills";

export type ProgrammeKind = "qualification" | "skills-programme";

export type ProgrammePill = { label: string; cls?: string };

export type ProgrammeMeta = {
  lbl: string;
  val: string;
  big?: boolean;
  yellow?: boolean;
  suffix?: string;
};

export type ProgrammeFAQ = { q: string; a: string };

export type Programme = {
  slug: string;
  cat: ProgrammeCategory;
  kind: ProgrammeKind;
  title: string;
  shortTitle?: string;
  pills: ProgrammePill[];
  lede: string;
  meta: ProgrammeMeta[];
  about: string;
  benefits?: string[];
  modules?: string[];
  modulesNote?: string;
  pathways?: string[];
  audience?: string[];
  outcomes?: string[];
  /** Marks flagship programmes that render with the richer detail template. */
  flagship?: boolean;
  /** Hero background image path (used by the flagship template). */
  heroImage?: string;
  /** Brand accent for the flagship template - blue, purple, or green. */
  accent?: "blue" | "purple" | "green";
  /** FAQ data for the flagship template. */
  faqs?: ProgrammeFAQ[];
};

/**
 * Authoritative programme data, sourced from cps.co.za/qualifications.
 * Five accredited qualifications + eight skills programmes.
 */
export const PROGRAMMES: Record<string, Programme> = {
  // ---------- HIGHER EDUCATION QUALIFICATIONS ----------
  "higher-certificate-banking": {
    slug: "higher-certificate-banking",
    cat: "banking",
    kind: "qualification",
    title: "Higher Certificate in Banking",
    shortTitle: "HCIB",
    pills: [
      { label: "Most popular", cls: "pill-yellow" },
      { label: "NQF 5" },
      { label: "Higher Education" },
      { label: "202 credits" },
    ],
    lede:
      "A 12-month qualification designed as a gateway into banking careers. The programme helps students build foundational banking knowledge, practical financial services understanding and a recognised qualification.",
    meta: [
      { lbl: "Monthly", val: "R2,480", big: true, yellow: true },
      { lbl: "Duration", val: "12 months" },
      { lbl: "NQF Level", val: "5" },
      { lbl: "Credits", val: "202" },
      { lbl: "SAQA ID", val: "111129" },
      { lbl: "Awarded by", val: "Higher Education (CHE)" },
    ],
    about:
      "The Higher Certificate in Banking is a 12-month, NQF Level 5 higher education qualification designed to launch banking careers with strong, comprehensive foundations. Practical banking knowledge is taught alongside applied client-solutioning, ethics and compliance - by people who actually work in the sector.",
    benefits: [
      "<strong>Recognised by SA's biggest banks</strong> for entry-level recruitment",
      "<strong>Study while you work</strong> - flexible blended delivery",
      "<strong>Mobile-friendly platform</strong> - CPSLearn adapts to your schedule and device",
      "<strong>Industry practitioner teaching</strong> - not just textbook theory",
    ],
    modules: [
      "Academic Literacy",
      "Economics 1",
      "Foundational Banking Practice",
      "Financial Accounting 1",
      "Ethics and Compliance in Banking",
      "Client Solutioning in Banking",
      "Banking specialisation pathway",
    ],
    modulesNote: "Seven modules build foundational banking competence over 12 months.",
    pathways: ["Personal Banking", "Business Banking", "Banking Operations", "Business Management"],
    audience: [
      "<strong>Matric graduates</strong> looking for a clear path into banking",
      "<strong>Career changers</strong> moving into financial services from another sector",
      "<strong>Junior banking staff</strong> needing a formal qualification to progress",
    ],
    outcomes: [
      "Bank consultant roles",
      "Branch and customer-service banking",
      "Junior banking professional positions",
      "Progression into specialist banking functions",
    ],
    flagship: true,
    heroImage: "/brooke-cagle-JBwcenOuRCg-unsplash.jpg",
    accent: "blue",
    faqs: [
      {
        q: "Do I need to be working in a bank already to apply?",
        a: "No. HCIB is designed both as a gateway for matric graduates and career-changers, and as a formal credential for junior banking staff already in the sector. Anyone with matric (or equivalent) can apply.",
      },
      {
        q: "Is there an upfront fee?",
        a: "There is no upfront fee. A R300 application fee is payable upon completing your application - not after acceptance. Tuition is billed monthly at R2,480 over the 12-month duration.",
      },
      {
        q: "Will I be able to study while I work?",
        a: "Yes - HCIB is delivered through CPSLearn with flexible, mobile-friendly access. The programme is designed for working professionals, so you can log in around your schedule and pick up where you left off.",
      },
      {
        q: "How is the programme assessed?",
        a: "Assessments are integrated throughout each module - not stacked at the end. Most assessments are returned with feedback within minutes through CPSLearn so the learning loop stays tight.",
      },
      {
        q: "Is HCIB recognised by the major South African banks?",
        a: "Yes. HCIB is an NQF Level 5 higher-education qualification accredited through the CHE and registered on the SAQA framework (SAQA ID 111129). It is recognised by South Africa's major banks for entry-level recruitment.",
      },
      {
        q: "What happens after I apply?",
        a: "Our admissions team will be in touch within 3 business days to confirm your application, walk you through the requirements, and answer any questions before you commit.",
      },
    ],
  },

  "advanced-certificate-leadership": {
    slug: "advanced-certificate-leadership",
    cat: "leadership",
    kind: "qualification",
    title: "Advanced Certificate in Leadership",
    shortTitle: "ACL6",
    pills: [
      { label: "Leadership", cls: "pill-purple" },
      { label: "NQF 6" },
      { label: "Higher Education" },
      { label: "120 credits" },
    ],
    lede:
      "Develop leaders who consistently deliver strategic outcomes. The next-step credential for ambitious professionals - built on Brandon Hall award-winning methodology.",
    meta: [
      { lbl: "Monthly", val: "R2,688", big: true, yellow: true },
      { lbl: "Duration", val: "12 months" },
      { lbl: "NQF Level", val: "6" },
      { lbl: "Credits", val: "120" },
      { lbl: "SAQA ID", val: "120160" },
      { lbl: "Awarded by", val: "Higher Education (CHE)" },
    ],
    about:
      "Leadership Agility in the Financial Markets is the flagship next-step qualification for professionals who have outgrown technical mastery and are now leading teams, projects or change. Built on the methodology that won Brandon Hall recognition, it develops decision-making, paradigm shifts and applied leadership behaviour.",
    benefits: [
      "<strong>Brandon Hall award-winning methodology</strong> - internationally recognised approach",
      "<strong>Built for working leaders</strong> - fully online, study in evenings and weekends",
      "<strong>Direct application</strong> - every module ends in workplace-applied competency",
      "<strong>NQF 6 credential</strong> recognised across financial services",
    ],
    modules: [
      "Self as Leader",
      "Leading People",
      "Leading Performance",
      "Leading Strategy",
      "Leading Change",
      "Applied Leadership Project",
    ],
    modulesNote: "Six modules across leadership agility, decision making and applied behaviour.",
    audience: [
      "<strong>Mid-career professionals</strong> 3–7 years into financial services",
      "<strong>Newly promoted team leads</strong> stepping into formal management",
      "<strong>High-potential employees</strong> on succession or talent pipelines",
    ],
    outcomes: [
      "Team lead and middle-management roles",
      "Project and programme leadership",
      "Change and transformation positions",
      "Pipeline into senior leadership development",
    ],
    flagship: true,
    heroImage: "/microsoft-365-kTFmwxkF5bQ-unsplash.jpg",
    accent: "purple",
    faqs: [
      {
        q: "Do I need prior leadership experience?",
        a: "ACL is designed for professionals 3–7 years into their career - typically newly promoted team leads, mid-career professionals, or high-potential employees on a succession track. Formal leadership experience helps, but the programme is built to formalise emerging leadership capability, not to require it upfront.",
      },
      {
        q: "Is there an upfront fee?",
        a: "There is no upfront fee. A R300 application fee is payable upon completing your application - not after acceptance. Tuition is billed monthly at R2,688 over the 12-month duration.",
      },
      {
        q: "How is ACL delivered?",
        a: "Fully online through CPSLearn. The programme is designed for working leaders - you can study in the evenings and on weekends, log in from any device, and pick up where you left off without re-orienting.",
      },
      {
        q: "What makes ACL different from a generic leadership course?",
        a: "ACL is built on Brandon Hall award-winning methodology and is an NQF Level 6 higher-education qualification (CHE accredited, SAQA ID 120160) - not a short course. Every module ends in workplace-applied competency, so you leave with behaviour change, not just theory.",
      },
      {
        q: "Will ACL help me get promoted?",
        a: "ACL is positioned for professionals stepping into formal team leadership, project leadership, or change roles. The programme develops the decision-making, paradigm-shift and applied leadership behaviour those roles require - and provides a recognised NQF 6 credential to back it up.",
      },
      {
        q: "Can my employer pay for it?",
        a: "Yes - many organisations sponsor ACL for high-potential employees. Speak to admissions if your employer would like to sponsor your enrolment, or if you'd like an info pack to present internally.",
      },
    ],
  },

  // ---------- OCCUPATIONAL QUALIFICATIONS (QCTO) ----------
  "business-banking-practitioner": {
    slug: "business-banking-practitioner",
    cat: "banking",
    kind: "qualification",
    title: "Business Banking Practitioner",
    shortTitle: "BBP",
    pills: [
      { label: "Business Banking", cls: "pill-blue" },
      { label: "NQF 6" },
      { label: "QCTO" },
      { label: "202 credits" },
    ],
    lede:
      "Build business banking professionals who win relationships through insight. An 18-month occupational qualification grounded in real business banking practice.",
    meta: [
      { lbl: "Pricing", val: "Enquire", yellow: true },
      { lbl: "Duration", val: "18 months" },
      { lbl: "NQF Level", val: "6" },
      { lbl: "Credits", val: "202" },
      { lbl: "SAQA ID", val: "120117" },
      { lbl: "Awarded by", val: "QCTO" },
      { lbl: "Format", val: "Workplace-integrated" },
    ],
    about:
      "The Business Banking Practitioner qualification is for bankers working with SME, commercial and mid-market clients. It develops the credit, risk, advisory and relationship capability needed to handle business portfolios with confidence. Workplace evidence is integrated into the qualification through a structured logbook.",
    benefits: [
      "<strong>Built for working business bankers</strong> with active client portfolios",
      "<strong>Credit and risk fundamentals</strong> applied to SA SME context",
      "<strong>Relationship-led advisory</strong> at the heart of the curriculum",
      "<strong>QCTO occupational qualification</strong> - recognised pathway into senior commercial banking",
    ],
    modules: [
      "Business Banking Fundamentals",
      "Credit Analysis & Risk",
      "SME & Commercial Lending",
      "Relationship Management",
      "Compliance & Regulatory Environment",
      "Applied Portfolio Project",
    ],
    audience: [
      "<strong>Business bankers</strong> managing SME and commercial portfolios",
      "<strong>Relationship managers</strong> in business and commercial banking",
      "<strong>Credit analysts</strong> moving into client-facing roles",
    ],
    outcomes: [
      "Senior business banker positions",
      "Relationship manager roles in commercial banking",
      "Pathway to corporate banking and credit specialisations",
    ],
  },

  "investment-advisor": {
    slug: "investment-advisor",
    cat: "investment",
    kind: "qualification",
    title: "Investment Advisor",
    shortTitle: "IA",
    pills: [
      { label: "Investment", cls: "pill-blue" },
      { label: "NQF 6" },
      { label: "QCTO" },
      { label: "213 credits" },
    ],
    lede:
      "Develop strategic investment partners your clients trust through volatility. An 18-month occupational qualification for wealth and investment professionals.",
    meta: [
      { lbl: "Pricing", val: "Enquire", yellow: true },
      { lbl: "Duration", val: "18 months" },
      { lbl: "NQF Level", val: "6" },
      { lbl: "Credits", val: "213" },
      { lbl: "SAQA ID", val: "105021" },
      { lbl: "Awarded by", val: "QCTO" },
      { lbl: "Format", val: "Workplace-integrated" },
    ],
    about:
      "The Investment Advisor qualification is for professionals working with wealth, investment portfolios and structured products. It builds on prior advisory experience and develops the technical and ethical capability needed for higher-stakes client conversations - with workplace evidence carrying real weight in the assessment.",
    benefits: [
      "<strong>NQF 6 credential</strong> recognised in wealth and investment",
      "<strong>Designed for working professionals</strong> already in advisory roles",
      "<strong>Practical case-based learning</strong> grounded in SA market context",
      "<strong>Pathway into specialist designations</strong> in wealth management",
    ],
    modules: [
      "Investment Theory & Markets",
      "Portfolio Construction",
      "Tax & Estate Planning Foundations",
      "Behavioural Finance",
      "Regulatory & Ethical Practice",
      "Client Advisory Process",
    ],
    audience: [
      "<strong>Practising investment advisors</strong> seeking formal qualification",
      "<strong>Wealth managers</strong> at independent and tied firms",
      "<strong>Bankers</strong> moving into investment-side roles",
    ],
    outcomes: [
      "Investment advisor positions at wealth firms",
      "Wealth manager and portfolio analyst roles",
      "Bank investment-advisory roles",
      "Pathway to CFP and other specialist designations",
    ],
  },

  "long-term-insurance-advisor": {
    slug: "long-term-insurance-advisor",
    cat: "insurance",
    kind: "qualification",
    title: "Long-Term Insurance Advisor",
    shortTitle: "LTIA",
    pills: [
      { label: "Insurance", cls: "pill-blue" },
      { label: "NQF 5" },
      { label: "QCTO" },
      { label: "180 credits" },
    ],
    lede:
      "Develop trusted advisors who win clients and grow books sustainably. A 12-month occupational qualification for advisors entering long-term insurance.",
    meta: [
      { lbl: "Pricing", val: "Enquire", yellow: true },
      { lbl: "Duration", val: "12 months" },
      { lbl: "NQF Level", val: "5" },
      { lbl: "Credits", val: "180" },
      { lbl: "SAQA ID", val: "105022" },
      { lbl: "Awarded by", val: "QCTO" },
      { lbl: "Format", val: "Workplace-integrated" },
    ],
    about:
      "The Long-Term Insurance Advisor qualification gives you the regulated credential and practical capability to advise clients on long-term insurance products. Workplace-integrated delivery means your day job becomes part of your evidence portfolio.",
    benefits: [
      "<strong>Regulator-recognised</strong> credential for long-term insurance advisors",
      "<strong>Workplace-integrated</strong> - your live work counts as evidence",
      "<strong>Industry-experienced facilitators</strong> who have sold the product themselves",
      "<strong>QCTO occupational qualification</strong> - formal credibility across SA insurance",
    ],
    modules: [
      "Insurance Principles",
      "Long-term Insurance Products",
      "Regulatory Environment (FAIS, FICA, POPIA)",
      "Needs Analysis & Client Advice",
      "Underwriting Fundamentals",
      "Claims & Policy Lifecycle",
    ],
    audience: [
      "<strong>New advisors</strong> entering long-term insurance",
      "<strong>Existing advisors</strong> needing the regulated qualification",
      "<strong>Career changers</strong> moving into insurance from banking or sales",
    ],
    outcomes: [
      "Long-term insurance advisor roles",
      "Independent broker positions",
      "Bancassurance advisory roles",
      "Foundation for further insurance specialisations",
    ],
  },

  "agile-banking-professional": {
    slug: "agile-banking-professional",
    cat: "banking",
    kind: "qualification",
    title: "Agile Banking Professional",
    shortTitle: "ABP",
    pills: [
      { label: "Banking", cls: "pill-blue" },
      { label: "NQF 5" },
      { label: "Occupational Qualification" },
    ],
    lede:
      "A banking-focused qualification pathway for professionals developing stronger capability in modern banking environments.",
    meta: [
      { lbl: "Pricing", val: "Enquire", yellow: true },
      { lbl: "NQF Level", val: "5" },
      { lbl: "Format", val: "Workplace-integrated" },
      { lbl: "Awarded by", val: "QCTO" },
    ],
    about:
      "The Agile Banking Professional qualification is a workplace-integrated occupational pathway. It is designed for active banking employees who want to formalise their experience, develop stronger banking capability and earn a recognised NQF Level 5 credential - typically supported by their employer.",
    benefits: [
      "<strong>Workplace-integrated</strong> - your day-to-day work counts as evidence",
      "<strong>Employer-led enrolment</strong> - typically supported by your bank",
      "<strong>Recognised credential</strong> - a formal NQF Level 5 banking qualification",
      "<strong>Designed for working professionals</strong> who want to keep moving while studying",
    ],
    modules: [
      "Banking Operations Fundamentals",
      "Customer Service in Banking",
      "Compliance & Risk in Practice",
      "Digital Banking Channels",
      "Workplace Project Portfolio",
    ],
    audience: [
      "<strong>Active banking employees</strong> in operations and customer-facing roles",
      "<strong>Branch and contact-centre staff</strong> needing formal credentials",
      "<strong>Employer-sponsored students</strong> on bank skills programmes",
    ],
    outcomes: [
      "Formal NQF 5 banking credential",
      "Progression into specialist banking roles",
      "Foundation for further qualifications",
    ],
  },

  "insurance-underwriter": {
    slug: "insurance-underwriter",
    cat: "insurance",
    kind: "qualification",
    title: "Insurance Underwriter",
    shortTitle: "IU",
    pills: [
      { label: "Insurance", cls: "pill-blue" },
      { label: "NQF 5" },
      { label: "Occupational Qualification" },
    ],
    lede:
      "A qualification pathway for professionals building underwriting capability in insurance environments.",
    meta: [
      { lbl: "Pricing", val: "Enquire", yellow: true },
      { lbl: "NQF Level", val: "5" },
      { lbl: "Format", val: "Workplace-integrated" },
      { lbl: "Awarded by", val: "QCTO" },
    ],
    about:
      "The Insurance Underwriter qualification develops the technical and judgement capability that underwriting demands. It blends product knowledge, regulatory grounding and risk assessment into a coherent qualification recognised across South African insurance.",
    benefits: [
      "<strong>Technical depth</strong> in product, regulation and risk",
      "<strong>Judgement-focused</strong> - case-based learning, not rote",
      "<strong>Designed for working underwriters</strong> with active books",
      "<strong>Recognised pathway</strong> into senior underwriting roles",
    ],
    modules: [
      "Insurance Principles & Markets",
      "Underwriting Fundamentals",
      "Risk Assessment & Pricing",
      "Regulatory Environment",
      "Reinsurance Basics",
      "Applied Underwriting Practice",
    ],
    audience: [
      "<strong>Working underwriters</strong> in short-term or long-term insurance",
      "<strong>Insurance graduates</strong> entering underwriting careers",
      "<strong>Claims professionals</strong> moving into underwriting",
    ],
    outcomes: [
      "Senior underwriter positions",
      "Specialist underwriting in commercial lines",
      "Pathway to underwriting management",
    ],
  },

  "organisational-risk-practitioner": {
    slug: "organisational-risk-practitioner",
    cat: "risk",
    kind: "qualification",
    title: "Organisational Risk Practitioner",
    shortTitle: "ORP",
    pills: [
      { label: "Risk", cls: "pill-purple" },
      { label: "NQF 6" },
      { label: "Occupational Qualification" },
    ],
    lede:
      "A qualification pathway for professionals developing organisational risk capability in regulated business environments.",
    meta: [
      { lbl: "Pricing", val: "Employer-led", yellow: true },
      { lbl: "NQF Level", val: "6" },
      { lbl: "Format", val: "Workplace-integrated" },
      { lbl: "Awarded by", val: "QCTO" },
    ],
    about:
      "The Organisational Risk Practitioner qualification develops the formal capability that today's risk landscape demands. Designed for practitioners in banking, insurance and regulated industries, it integrates workplace evidence with structured learning into a single QCTO-awarded credential.",
    benefits: [
      "<strong>NQF 6 occupational qualification</strong> - recognised in regulated industries",
      "<strong>Workplace logbook</strong> integration - your live work is your evidence",
      "<strong>Cross-domain</strong> - operational, compliance, conduct and enterprise risk",
      "<strong>Pathway into</strong> senior risk and compliance leadership",
    ],
    modules: [
      "Risk Frameworks & Standards (ISO 31000)",
      "Operational & Compliance Risk",
      "Conduct & Market Risk",
      "Enterprise Risk Management",
      "Risk Reporting & Governance",
      "Workplace Risk Project",
    ],
    audience: [
      "<strong>Active risk practitioners</strong> in banking and insurance",
      "<strong>Compliance officers</strong> broadening into enterprise risk",
      "<strong>Internal audit staff</strong> moving into risk management",
    ],
    outcomes: [
      "Senior risk and compliance positions",
      "Risk specialist roles in financial services",
      "Pathway into risk leadership and governance",
    ],
  },

  // ---------- SKILLS PROGRAMMES (3–6 months, no NQF / no published price) ----------
  "foundations-of-value-selling": {
    slug: "foundations-of-value-selling",
    cat: "sales",
    kind: "skills-programme",
    title: "Foundations of Value Selling",
    pills: [
      { label: "Skills Programme" },
      { label: "3–6 months" },
      { label: "Sales", cls: "pill-blue" },
    ],
    lede:
      "Transform sales approaches to create lasting client relationships. A short, applied programme for client-facing teams ready to move from transactional to consultative.",
    meta: [
      { lbl: "Format", val: "Skills Programme" },
      { lbl: "Duration", val: "3–6 months" },
      { lbl: "Pricing", val: "Enquire", yellow: true },
      { lbl: "Designed for", val: "Client-facing teams" },
    ],
    about:
      "Foundations of Value Selling shifts client-facing teams from transactional engagement to consultative selling. Designed and deployed in weeks rather than quarters, it builds the conversational and discovery competencies required to grow share-of-wallet sustainably.",
  },
  "relationship-management": {
    slug: "relationship-management",
    cat: "skills",
    kind: "skills-programme",
    title: "Relationship Manager Development Programme",
    pills: [
      { label: "Skills Programme" },
      { label: "3–6 months" },
      { label: "Banking", cls: "pill-blue" },
    ],
    lede:
      "Develop trusted advisors your clients depend on for business growth. Built for RMs handling portfolios where retention and depth-of-relationship are the metric.",
    meta: [
      { lbl: "Format", val: "Skills Programme" },
      { lbl: "Duration", val: "3–6 months" },
      { lbl: "Pricing", val: "Enquire", yellow: true },
      { lbl: "Designed for", val: "Relationship managers" },
    ],
    about:
      "The Relationship Manager Development Programme strengthens the advisory and behavioural skills that move RMs from product-pushers to genuine business partners - measured by client retention, account depth and net-new revenue.",
  },
  "thrive-track-workplace-development": {
    slug: "thrive-track-workplace-development",
    cat: "skills",
    kind: "skills-programme",
    title: "Thrive Track Workplace Development",
    pills: [
      { label: "Skills Programme" },
      { label: "3–6 months" },
      { label: "Early career" },
    ],
    lede:
      "Launch careers with practical skills and workplace confidence. An entry-level programme that turns potential into performance - fast.",
    meta: [
      { lbl: "Format", val: "Skills Programme" },
      { lbl: "Duration", val: "3–6 months" },
      { lbl: "Pricing", val: "Enquire", yellow: true },
      { lbl: "Designed for", val: "Early-career hires" },
    ],
    about:
      "Thrive Track is a workplace-integrated development programme for early-career hires. It bridges the gap between academic theory and the day-to-day skills, behaviours and confidence required to add value in week one.",
  },
  "branch-manager-development": {
    slug: "branch-manager-development",
    cat: "skills",
    kind: "skills-programme",
    title: "Branch Manager Development Programme",
    pills: [
      { label: "Skills Programme" },
      { label: "3–6 months" },
      { label: "Leadership", cls: "pill-purple" },
    ],
    lede:
      "Build branch leadership that drives performance through disruption. For new and experienced branch managers leading teams in volatile retail-banking conditions.",
    meta: [
      { lbl: "Format", val: "Skills Programme" },
      { lbl: "Duration", val: "3–6 months" },
      { lbl: "Pricing", val: "Enquire", yellow: true },
      { lbl: "Designed for", val: "Branch leaders" },
    ],
    about:
      "The Branch Manager Development Programme equips frontline retail-banking leaders with the operational, performance-management and people-leadership skills required to deliver consistently - even under pressure from digital transformation, channel shift and changing customer expectations.",
  },
  "digital-transformation": {
    slug: "digital-transformation",
    cat: "skills",
    kind: "skills-programme",
    title: "Digital Transformation Programme",
    pills: [
      { label: "Skills Programme" },
      { label: "3–6 months" },
      { label: "Digital", cls: "pill-purple" },
    ],
    lede:
      "Build digital transformation capability that delivers business results. For teams running operating-model change in financial services.",
    meta: [
      { lbl: "Format", val: "Skills Programme" },
      { lbl: "Duration", val: "3–6 months" },
      { lbl: "Pricing", val: "Enquire", yellow: true },
      { lbl: "Designed for", val: "Transformation teams" },
    ],
    about:
      "The Digital Transformation Programme is for cross-functional teams responsible for redesigning how an organisation operates - replatforming, channel modernisation, data uplift and digital capability. It focuses on the disciplines that turn slideware into measurable outcomes.",
  },
  "digital-innovation": {
    slug: "digital-innovation",
    cat: "skills",
    kind: "skills-programme",
    title: "Digital Innovation Programme",
    pills: [
      { label: "Skills Programme" },
      { label: "3–6 months" },
      { label: "Innovation", cls: "pill-purple" },
    ],
    lede:
      "Build implementation capability that transforms operational performance. Practical innovation methods for product, ops and tech leaders.",
    meta: [
      { lbl: "Format", val: "Skills Programme" },
      { lbl: "Duration", val: "3–6 months" },
      { lbl: "Pricing", val: "Enquire", yellow: true },
      { lbl: "Designed for", val: "Product, ops and tech leaders" },
    ],
    about:
      "The Digital Innovation Programme equips product, operations and technology leaders with applied methods for testing, validating and scaling new propositions - without losing the discipline that financial services demands.",
  },
  "sales-and-client-experience": {
    slug: "sales-and-client-experience",
    cat: "sales",
    kind: "skills-programme",
    title: "Sales and Client Experience Excellence",
    pills: [
      { label: "Skills Programme" },
      { label: "3–6 months" },
      { label: "CX", cls: "pill-blue" },
    ],
    lede:
      "Develop client experience capability that differentiates your organisation. For service-driven businesses where CX is the competitive edge.",
    meta: [
      { lbl: "Format", val: "Skills Programme" },
      { lbl: "Duration", val: "3–6 months" },
      { lbl: "Pricing", val: "Enquire", yellow: true },
      { lbl: "Designed for", val: "Service & sales teams" },
    ],
    about:
      "Sales and Client Experience Excellence builds the cultural and behavioural fabric required to deliver consistently differentiated CX - from first contact through resolution. Aligned to the metrics your executives care about.",
  },
  "principles-of-sustainable-investments": {
    slug: "principles-of-sustainable-investments",
    cat: "skills",
    kind: "skills-programme",
    title: "Principles of Sustainable Investments",
    pills: [
      { label: "Skills Programme" },
      { label: "3–6 months" },
      { label: "ESG", cls: "pill-blue" },
    ],
    lede:
      "Build ESG advisory capability across your investment team. Practical sustainable-finance grounding for advisors and analysts.",
    meta: [
      { lbl: "Format", val: "Skills Programme" },
      { lbl: "Duration", val: "3–6 months" },
      { lbl: "Pricing", val: "Enquire", yellow: true },
      { lbl: "Designed for", val: "Advisors & analysts" },
    ],
    about:
      "Principles of Sustainable Investments equips advisors and analysts with the frameworks, regulatory grounding and client-conversation skills required to integrate ESG considerations into wealth and investment portfolios.",
  },
};

export const PROGRAMME_SLUGS = Object.keys(PROGRAMMES);

export function getProgramme(slug: string): Programme | undefined {
  return PROGRAMMES[slug];
}

export function getRelatedProgrammes(slug: string, n = 3): Programme[] {
  const current = PROGRAMMES[slug];
  if (!current) return [];
  const others = Object.values(PROGRAMMES).filter((p) => p.slug !== slug);
  // Prefer same kind first (qualification ↔ qualification, skills ↔ skills),
  // then same category, then anything else.
  const sameKind = others.filter((p) => p.kind === current.kind && p.cat === current.cat);
  const sameKindOtherCat = others.filter((p) => p.kind === current.kind && p.cat !== current.cat);
  const rest = others.filter((p) => p.kind !== current.kind);
  return [...sameKind, ...sameKindOtherCat, ...rest].slice(0, n);
}
