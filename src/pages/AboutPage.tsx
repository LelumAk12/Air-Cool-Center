import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import '../styles/pages/AboutPage.css';
export const AboutPage: React.FC = () => {
  return <div className="about-page">
      <Header />

      <div className="about-hero">
        <h1>ABOUT AIR COOL CENTER</h1>
        <p>
          Air Cool Center is your trusted partner for all cooling and electrical
          needs. We provide fast and reliable services including air conditioner
          and refrigerator repairs, CCTV installation, and the supply of
          electrical equipment. Our goal is to make your life easier with quick
          delivery, professional service, and flexible payment options. With a
          team of skilled technicians and friendly support, we are here to keep
          your home or business cool, safe, and running smoothly.
        </p>
      </div>

      <div className="about-content">
        <section className="about-section vision-section">
          <div className="section-image">
            <img src="/Aboutus1.jpg" alt="Our Vision" />
          </div>
          <div className="section-text">
            <h2>Our Vision</h2>
            <p>
              To be the leading provider of reliable, affordable, and innovative
              cooling and electrical solutions in Sri Lanka, delivering comfort
              and peace of mind to every home and business.
            </p>
          </div>
        </section>

        <section className="about-section mission-section">
          <div className="section-text">
            <h2>Our Mission</h2>
            <ul>
              <li>
                To offer high-quality repair, installation, and delivery
                services for cooling and electrical equipment.
              </li>
              <li>
                To ensure fast, reliable, and professional customer service at
                every step.
              </li>
              <li>
                To provide safe and flexible payment options that suit every
                customer.
              </li>
              <li>
                To build long-term trust through honesty, reliability, and
                expert care.
              </li>
            </ul>
          </div>
          <div className="section-image">
            <img src="/Mission.jpg" alt="Our Mission" />
          </div>
        </section>

        <section className="about-section service-section">
          <div className="section-image">
            <img src="/Aboutus2.jpg" alt="Service Priority" />
          </div>
          <div className="section-text">
            <h2>Service is Our Top Priority</h2>
            <p>
              We're available 24/7 — every day of the year to support you! Need
              to supplies a level over Live chat? Every inquiry is treated with
              care and respect. Need spare parts, have questions or need help?
              Our dedicated support team is ready to guide you in choosing the
              perfect product or service.
            </p>
            <p>
              Your time matters — we prioritize your needs and ensure you
              receive more, faster.
            </p>
            <button className="contact-now-button">Contact Now</button>
          </div>
        </section>
      </div>

      <Footer />
    </div>;
};