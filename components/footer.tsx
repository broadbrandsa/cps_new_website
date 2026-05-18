import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo" aria-label="Cornerstone Performance Solutions home">
              <Image src="/logo.avif" alt="Cornerstone Performance Solutions" width={120} height={32} />
            </Link>
            <p>
              South Africa&apos;s accredited education partner for banking, insurance, investment and leadership.
              Twenty-five years of structured learning, completion and capability development.
            </p>
            <div style={{ marginTop: 24, display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span className="pill">B-BBEE Level 1</span>
              <span className="pill">CHE accredited</span>
              <span className="pill">QCTO accredited</span>
            </div>
          </div>

          <div className="footer-col">
            <h5>Students</h5>
            <Link href="/">Students Home</Link>
            <Link href="/programmes">Programmes</Link>
            <Link href="/cpslearn">CPSLearn</Link>
            <Link href="/contact#admissions">Admissions Contact</Link>
          </div>

          <div className="footer-col">
            <h5>Organisations</h5>
            <Link href="/organisations">Organisations Home</Link>
            <Link href="/organisations/programmes">Workforce Programmes</Link>
            <Link href="/organisations/cpslearn">CPSLearn for Organisations</Link>
            <Link href="/organisations#partnership-model">Partnership Model</Link>
            <Link href="/contact#partnerships">Contact Partnerships</Link>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <Link href="/about">About CPS</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer-col">
            <h5>Get in touch</h5>
            <a href="mailto:applications@cps.co.za">applications@cps.co.za</a>
            <a href="mailto:Lukekah@cps.co.za">Lukekah@cps.co.za</a>
            <a href="tel:+27730629344">+27 73 062 9344</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Cornerstone Performance Solutions (Pty) Ltd. All rights reserved.</div>
          <div className="badge">#ShapeYourFuture</div>
        </div>
      </div>
    </footer>
  );
}
