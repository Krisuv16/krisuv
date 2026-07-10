import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Send,
  Server,
  ShieldCheck,
  Smartphone,
  Store,
  X,
  Zap,
} from 'lucide-react';
import './styles.css';

const RESUME_PATH = '/resume/krisuv-bohara-resume.pdf';
const EMAIL = 'kribo2024@gmail.com';

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'System', href: '#system' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const proofPoints = [
  { value: '5+', label: 'years building mobile and web products' },
  { value: '2', label: 'app stores shipped to and maintained' },
  { value: '4', label: 'developers led and mentored' },
];

const featuredProjects = [
  {
    name: 'TwoRow',
    eyebrow: 'Live mobile product',
    meta: 'Toronto · 2023 to present',
    role: 'Full-stack mobile and backend developer',
    summary:
      'Owned production features across mobile, backend, deployment, and app store workflows for a live product. Built notification flows, Stripe payments, location discovery, in-app purchases, and live chat.',
    impact: ['Real-time notification flows', 'Stripe payment workflow improvements', 'Solo ownership across mobile, web, backend, and releases'],
    stack: ['Flutter', 'Node.js', 'Express', 'Firebase', 'Google Maps', 'Stripe', 'Socket.IO'],
    links: [{ label: 'tworow.ai', href: 'https://www.tworow.ai/' }],
  },
  {
    name: 'Renterii',
    eyebrow: 'Rental marketplace',
    meta: 'iOS · Android · Web',
    role: 'Software engineer',
    summary:
      'Shipped renter, lender, and web products for a Canadian startup with clean architecture and MVVM. Supported releases across Vercel, App Store, and Google Play.',
    impact: ['Three connected products shipped', 'Flutter and native iOS delivery', 'Marketplace workflows from UI to API'],
    stack: ['Flutter', 'Swift', 'Next.js', 'Express', 'Vercel'],
    links: [
      { label: 'renterii.com', href: 'https://www.renterii.com/' },
      { label: 'App Store', href: 'https://apps.apple.com/ca/app/renterii/id1532982347' },
    ],
  },
  {
    name: 'Tanisi-Cree Keyboard',
    eyebrow: 'Native iOS keyboard',
    meta: 'Swift · UIKit',
    role: 'iOS developer',
    summary:
      'Built a custom keyboard extension that converts between English, French, and Syllabics with low-latency typing and a native release path.',
    impact: ['Custom iOS extension shipped', 'Translation workflow inside the keyboard', 'Production App Store release'],
    stack: ['Swift', 'UIKit', 'REST APIs', 'iOS extensions'],
    links: [{ label: 'App Store', href: 'https://apps.apple.com/be/app/tanisi-cree-keyboard/id6477305270' }],
  },
];

const shippedWork = [
  {
    name: 'Smart Health Nepal',
    type: 'Healthcare app',
    detail: 'Local payments, offline storage, and video calling',
    link: { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.smarthealthnepal.customer' },
  },
  {
    name: 'Delivery Management Suite',
    type: 'Operations product',
    detail: 'QR delivery workflows, driver tracking, and POS receipts',
    link: { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.dms.dms_v2' },
  },
  {
    name: 'Containerized Malware Detection',
    type: 'Security research',
    detail: 'Docker, Metasploit, Isolation Forest, and isolated analysis',
    link: null,
  },
];

const capabilities = [
  {
    icon: Smartphone,
    title: 'Mobile product engineering',
    text: 'Flutter, Swift/UIKit, Kotlin, native integrations, app permissions, Shorebird updates, and App Store or Google Play release work.',
  },
  {
    icon: Server,
    title: 'Backend and web systems',
    text: 'Node.js, Express, Django REST, Next.js, React, auth flows, scalable data handling, and Vercel deployment.',
  },
  {
    icon: Zap,
    title: 'Real-time product features',
    text: 'Firebase notifications, Socket.IO chat, geolocation, Google Maps, payments, background tracking, and live user updates.',
  },
  {
    icon: ShieldCheck,
    title: 'Data and security foundation',
    text: 'Firebase, MongoDB, PostgreSQL, SQLite, offline-first storage, caching, encryption, and cybersecurity-aware development.',
  },
];

const stackRows = [
  ['Mobile', 'Flutter, Swift/UIKit, Kotlin, SwiftUI, React Native'],
  ['Frontend', 'React, Next.js, JavaScript, HTML/CSS'],
  ['Backend', 'Node.js, Express, Django REST, REST APIs'],
  ['Data', 'Firebase, MongoDB, PostgreSQL, SQLite'],
  ['Cloud and release', 'AWS, Azure, Docker, Vercel, App Store, Google Play, CI/CD, Shorebird'],
  ['Tools', 'GitHub, Postman, Figma, Adobe XD, Jira, Xcode, Android Studio'],
];

const experience = [
  {
    dates: '2023 to present',
    role: 'Software Developer',
    company: 'Two Row, Toronto',
    bullets: [
      'Solo full-stack developer owning mobile, web, backend, deployment, and app store workflows across multiple product builds.',
      'Shipped REST APIs, offline storage, secure data handling, maps, payments, notifications, and live chat.',
      'Deployed to the App Store and Google Play with clean architecture and MVVM keeping iteration fast.',
    ],
  },
  {
    dates: '2020 to 2023',
    role: 'Software Developer and Flutter Engineer',
    company: 'Product teams, Nepal',
    bullets: [
      'Grew from intern to team lead; led and mentored 4 developers while coordinating with stakeholders and backend engineers.',
      'Delivered apps for health, restaurant, CRM, food ordering, and delivery workflows.',
      'Improved app performance through caching, scalable algorithms, and cleaner data processing.',
    ],
  },
];

const education = [
  {
    dates: '2022 to 2024',
    degree: 'Postgraduate, Cybersecurity and Mobile Application Development',
    school: 'Centennial College, Toronto',
  },
  {
    dates: '2018 to 2021',
    degree: "Bachelor's (Honors) in Computing",
    school: 'Islington College, Kathmandu',
  },
];

const contactLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/krisuv-bohara-3a70451a2/', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/Krisuv16', icon: Github },
  { label: 'Resume', href: RESUME_PATH, icon: FileText, download: true },
];

function useReveal() {
  useEffect(() => {
    document.body.classList.add('reveal-ready');
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.body.classList.remove('reveal-ready');
    };
  }, []);
}

function ExternalLink({ link }) {
  return (
    <a className="text-link" href={link.href} target="_blank" rel="noreferrer">
      {link.label}
      <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" onClick={close} aria-label="Krisuv Bohara home">
        <span>KB</span>
        <strong>Krisuv Bohara</strong>
      </a>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={close}>{item.label}</a>
        ))}
      </nav>
      <a className="header-resume" href={RESUME_PATH} download>
        <FileText size={17} aria-hidden="true" />
        Resume
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy" data-reveal>
        <p className="eyebrow">
          <MapPin size={16} aria-hidden="true" />
          Toronto based full-stack mobile and web developer
        </p>
        <h1>Production apps, from the first screen to the store release.</h1>
        <p className="hero-sub">
          I build mobile-first products across Flutter, Swift, Kotlin, Node.js, Next.js,
          Firebase, maps, payments, chat, offline storage, and cloud deployment.
        </p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button primary" href="#work">
            Selected work
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="button secondary" href={`mailto:${EMAIL}`}>
            <Mail size={18} aria-hidden="true" />
            Email Krisuv
          </a>
        </div>
      </div>

      <aside className="hero-panel" data-reveal aria-label="Profile snapshot">
        <img src="/images/profile.jpg" alt="Krisuv Bohara" />
        <div className="status-strip">
          <span>Available for roles and product builds</span>
          <Store size={17} aria-hidden="true" />
        </div>
        <dl className="proof-grid">
          {proofPoints.map((item) => (
            <div key={item.label}>
              <dt>{item.value}</dt>
              <dd>{item.label}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </section>
  );
}

function Section({ id, label, title, intro, children }) {
  return (
    <section className="section" id={id}>
      <div className="section-heading" data-reveal>
        <p className="section-label">{label}</p>
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
      <div className="section-content">{children}</div>
    </section>
  );
}

function Work() {
  return (
    <Section
      id="work"
      label="Selected work"
      title="Proof that shipped"
      intro="The strongest projects are framed around ownership, product complexity, and the release path, not just technology names."
    >
      <div className="project-list">
        {featuredProjects.map((project, index) => (
          <article className="project" key={project.name} data-reveal>
            <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
            <div className="project-main">
              <p className="project-eyebrow">{project.eyebrow}</p>
              <h3>{project.name}</h3>
              <p className="project-role">{project.role} · {project.meta}</p>
              <p className="project-summary">{project.summary}</p>
              <ul className="impact-list" aria-label={`${project.name} outcomes`}>
                {project.impact.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="project-side">
              <div className="stack-tags" aria-label={`${project.name} technology stack`}>
                {project.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
              <div className="project-links">
                {project.links.map((link) => <ExternalLink key={link.href} link={link} />)}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="shipped-board" data-reveal>
        <p className="board-title">Also shipped</p>
        {shippedWork.map((project) => (
          <div className="shipped-row" key={project.name}>
            <div>
              <strong>{project.name}</strong>
              <span>{project.type}</span>
            </div>
            <p>{project.detail}</p>
            {project.link ? <ExternalLink link={project.link} /> : <span className="quiet">Write-up on request</span>}
          </div>
        ))}
      </div>
    </Section>
  );
}

function System() {
  return (
    <Section
      id="system"
      label="Capability system"
      title="Useful across the whole product"
      intro="The pattern in the work is range with ownership: native details, backend glue, release pressure, and product judgment."
    >
      <div className="capability-grid">
        {capabilities.map((item) => {
          const Icon = item.icon;
          return (
            <article className="capability" key={item.title} data-reveal>
              <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>
      <dl className="stack-table" data-reveal>
        {stackRows.map(([label, skills]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{skills}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="From team lead to solo product owner"
      intro="Krisuv has worked inside startups and product teams where the job was not only to code, but to keep the release moving."
    >
      <div className="timeline">
        {experience.map((item) => (
          <article className="xp" key={item.company} data-reveal>
            <div>
              <p className="xp-date">{item.dates}</p>
              <h3>{item.role}</h3>
              <p className="xp-company">{item.company}</p>
            </div>
            <ul>
              {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          </article>
        ))}
      </div>

      <div className="education" data-reveal>
        {education.map((item) => (
          <div key={item.school}>
            <p>{item.dates}</p>
            <strong>{item.degree}</strong>
            <span>{item.school}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section
      id="about"
      label="About"
      title="Builder energy, release discipline"
      intro="The throughline is practical: understand the product, build the system, ship the app, support what happens after launch."
    >
      <div className="about-layout">
        <div className="about-copy" data-reveal>
          <p>
            I am a Toronto-based software developer with a background in computing,
            mobile application development, and cybersecurity. I have worked as a solo
            developer, collaborated directly with founders and CTOs, led small teams,
            mentored junior developers, and shipped apps to both major app stores.
          </p>
          <p>
            I care about clean architecture, practical user experience, and releases
            that hold up after the demo: payments, maps, offline storage, notifications,
            live chat, and the backend work that keeps them reliable.
          </p>
        </div>
        <div className="availability-note" data-reveal>
          <p>Current focus</p>
          <strong>Full-time software developer roles, mobile-first product work, and contract builds that need end-to-end ownership.</strong>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="contact-inner">
        <div data-reveal>
          <p className="section-label">Contact</p>
          <h2>Have a product that needs to become real?</h2>
        </div>
        <div className="contact-actions" data-reveal>
          <a className="contact-email" href={`mailto:${EMAIL}`}>
            <Send size={26} aria-hidden="true" />
            {EMAIL}
          </a>
          <div className="contact-links">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  download={link.download}
                >
                  <Icon size={18} aria-hidden="true" />
                  {link.label}
                </a>
              );
            })}
          </div>
          <p className="footer-line">© 2026 Krisuv Bohara · Toronto, Canada</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  useReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <System />
        <Experience />
        <About />
      </main>
      <Contact />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
