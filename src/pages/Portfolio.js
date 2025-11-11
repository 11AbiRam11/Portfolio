import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Database, Zap, Code2, Download, GraduationCap } from 'lucide-react';
import { Button } from "../components/ui/button";
import { motion } from 'framer-motion';

import HeroSection from '../components/portfolio/HeroSection';
import ProjectCard from '../components/portfolio/ProjectCard';
import SkillsSection from '../components/portfolio/SkillsSection';

const projects = [
  {
    title: "End-to-End Azure ETL Data Engineering Project",
    description: "Built a metadata-driven ETL pipeline on Azure to automate ingestion, transformation, and loading across Bronze, Silver, and Gold layers (Medallion architecture).",
    technologies: ["Azure Data Factory", "Databricks", "Data Lake", "SQL Database", "PySpark", "Delta Lake", "Logic Apps"],
    metrics: [
      { label: "Architecture", value: "Medallion" },
      { label: "Automation", value: "CDC Logic" },
      { label: "Deployment", value: "Multi-Env" }
    ],
    keyHighlights: [
      "Developed incremental ADF pipelines with CDC logic and automated backfilling",
      "Created Databricks PySpark notebooks for scalable transformations",
      "Built Jinja2-based SQL templates for dynamic, reusable queries",
      "Implemented real-time streaming and SCD logic using Delta Lake for accurate, incremental updates",
      "Integrated Azure Logic Apps for automated email alerts",
      "Configured Databricks bundles for seamless multi-environment deployments"
    ],
    date: "Oct 2025",
    caseStudyUrl: "https://github.com/11AbiRam11/DE-Azure-project"
  },
  {
    title: "Automated Financial Data Pipeline & Analysis System",
    description: "Designed and implemented an automated ETL pipeline for stock data, programmatically extracting datasets from the AlphaVantage API with zero manual intervention.",
    technologies: ["Python", "SQL", "AlphaVantage API", "ETL", "Data Standardization"],
    metrics: [
      { label: "Automation", value: "100%" },
      { label: "Update Frequency", value: "Daily" },
      { label: "Data Quality", value: "Rigorous" }
    ],
    keyHighlights: [
      "Programmatically extracted datasets from AlphaVantage API",
      "Conducted rigorous data standardization (time/date, symbols, pricing)",
      "Ensured data quality before loading into Local SQL Database",
      "Enabled fully automated daily stock updates with zero manual intervention",
      "Implemented error handling and data validation mechanisms"
    ],
    date: "Oct 2025",
    caseStudyUrl: "https://github.com/11AbiRam11/ETL_Py-to-Sql"
  },
  {
    title: "Large Language Model (LLM) from Scratch",
    description: "Implemented core Transformer components in PyTorch, including tokenization, attention, positional encoding, and feed-forward networks for next-token prediction.",
    technologies: ["PyTorch", "Python", "Transformers", "Deep Learning", "NLP"],
    metrics: [
      { label: "Architecture", value: "Transformer" },
      { label: "Training", value: "Custom Dataset" },
      { label: "Components", value: "PyTorch" }
    ],
    keyHighlights: [
      "Implemented core Transformer components (attention, positional encoding, feed-forward networks)",
      "Designed causal masking for next-token prediction",
      "Trained on custom datasets with gradient clipping and learning-rate scheduling",
      "Gained deep understanding of ML lifecycle — preprocessing, training, evaluation, and deployment",
      "Experimented with different hyperparameters and optimization techniques"
    ],
    date: "Aug 2025",
    caseStudyUrl: "https://github.com/11AbiRam11/LLM"
  },
  {
    title: "Web-Security CTF Series",
    description: "Developed a CTF platform hosting challenges with dynamic scoring and user analytics dashboard, covering various web security vulnerabilities.",
    technologies: ["Node.js", "Express.js", "Docker", "Docker Compose", "JWT", "Security"],
    metrics: [
      { label: "Challenges", value: "5+" },
      { label: "Deployment Time", value: "-30%" },
      { label: "Engagement", value: "+20%" }
    ],
    keyHighlights: [
      "Developed 5+ CTF challenges covering JWT forgery, session hijacking, SSRF, and CSRF",
      "Containerized sandboxed environments with Docker Compose",
      "Automated flag validation in Node.js and Express, reducing deployment time by 30%",
      "Authored detailed walkthroughs and hint tiers",
      "Cut average solve-time variance by 20%, improving overall learner engagement"
    ],
    date: "Feb 2025",
    caseStudyUrl: "https://github.com/11AbiRam11/node_jsExpress"
  }
];

const education = [
  {
    degree: "Bachelor of Computer Applications",
    institution: "Karnataka College of Management and Science, Bangalore",
    period: "Sept 2022 - Jul 2025",
    cgpa: "9.0 / 10.0",
    highlights: [
      "Relevant Coursework: Data Structures & Algorithms, AI, ML, Web Development, Database Management Systems",
      "Consistently maintained 9.0 CGPA throughout the program",
      "Active participation in technical clubs and data engineering communities"
    ]
  }
];

const certifications = [
  {
    name: "Azure Data Engineering",
    issuer: "Self-Learning & Projects",
    date: "2025"
  },
  {
    name: "PySpark & Big Data",
    issuer: "Databricks Platform",
    date: "2025"
  },
  {
    name: "Web Security & CTF",
    issuer: "Practical Experience",
    date: "2025"
  }
];

const experience = [
  {
    role: "CTF Developer",
    company: "Durbhasi Gurukulam PVT Ltd",
    period: "Feb 2025 - Apr 2025",
    highlights: [
      "Developed and deployed 5+ Capture-the-Flag (CTF) challenges using Node.js/Express",
      "Covered vulnerabilities such as JWT forgery, session hijacking, SSRF, and CSRF",
      "Containerized sandboxed environments with Docker Compose",
      "Automated flag validation in Node.js and Express, reducing deployment time by 30%",
      "Authored detailed walkthroughs and hint tiers that cut average solve-time variance by 20%",
      "Improved overall learner engagement through comprehensive documentation"
    ]
  }
];

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ['hero', 'about', 'education', 'experience', 'projects', 'skills', 'certifications', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-gray-100 overflow-x-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #00D9FF 1px, transparent 1px),
            linear-gradient(to bottom, #00D9FF 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          opacity: 0.05
        }} />
      </div>

      {/* Floating Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0D0D0D]/80 backdrop-blur-xl border border-[#00D9FF]/20 rounded-full px-6 py-3 flex items-center justify-between shadow-lg shadow-[#00D9FF]/10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
              <span className="font-mono font-semibold text-sm tracking-wider">DATA_ENGINEER</span>
            </div>

            <div className="hidden md:flex items-center gap-6 text-sm font-mono">
              {['about', 'education', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`hover:text-[#00D9FF] transition-colors ${activeSection === section ? 'text-[#00D9FF]' : 'text-gray-400'
                    }`}
                >
                  {section.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a href="https://github.com/11Abiram11" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00D9FF] transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/in/11Abhi-ram" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00D9FF] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00D9FF]/50 to-transparent" />
              <h2 className="text-4xl font-bold font-mono">
                <span className="text-[#00D9FF]">01.</span> ABOUT ME
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00D9FF]/50 to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  <span className="text-[#00D9FF] font-semibold">Analytical Data Engineer</span> (9.0 CGPA) focused on
                  building scalable, production-ready data solutions. I specialize in full-cycle pipeline development using
                  Azure, PySpark, and Delta Lake with proven ability to leverage engineering rigor and automation.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  My expertise spans from <span className="text-white font-semibold">CDC/SCD implementation</span> to
                  advanced analytics, transforming complex data into actionable business value. Currently completing my
                  Bachelor's degree with a strong focus on data engineering and cloud technologies.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-[#1A1A1A] border border-[#00D9FF]/20 rounded-lg p-6 hover:border-[#00D9FF]/50 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <Database className="w-5 h-5 text-[#00D9FF]" />
                    <h3 className="font-mono font-semibold">Metadata-Driven Pipelines</h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    Medallion architecture, CDC logic, incremental loading, and automated backfilling strategies
                  </p>
                </div>

                <div className="bg-[#1A1A1A] border border-[#00D9FF]/20 rounded-lg p-6 hover:border-[#00D9FF]/50 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-5 h-5 text-[#00D9FF]" />
                    <h3 className="font-mono font-semibold">Cloud & Big Data</h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    Azure Data Factory, Databricks, PySpark, Delta Lake, and real-time streaming solutions
                  </p>
                </div>

                <div className="bg-[#1A1A1A] border border-[#00D9FF]/20 rounded-lg p-6 hover:border-[#00D9FF]/50 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <Code2 className="w-5 h-5 text-[#00D9FF]" />
                    <h3 className="font-mono font-semibold">Engineering Rigor</h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    Dynamic SQL templates, data quality frameworks, and multi-environment deployment automation
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-32 px-6 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00D9FF]/50 to-transparent" />
            <h2 className="text-4xl font-bold font-mono">
              <span className="text-[#00D9FF]">02.</span> EDUCATION
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00D9FF]/50 to-transparent" />
          </div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A] border border-[#00D9FF]/20 rounded-xl p-8 hover:border-[#00D9FF]/50 transition-all"
            >
              <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00D9FF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-[#00D9FF]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#00D9FF] mb-2">{edu.degree}</h3>
                    <p className="text-gray-400 font-mono text-sm">{edu.institution}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 font-mono text-sm">{edu.period}</span>
                  <p className="text-[#00D9FF] font-mono font-semibold mt-1 text-xl">CGPA: {edu.cgpa}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {edu.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <ArrowRight className="w-4 h-4 text-[#00D9FF] mt-1 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00D9FF]/50 to-transparent" />
            <h2 className="text-4xl font-bold font-mono">
              <span className="text-[#00D9FF]">03.</span> EXPERIENCE
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00D9FF]/50 to-transparent" />
          </div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-[#00D9FF]/30"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#00D9FF] shadow-lg shadow-[#00D9FF]/50" />

                <div className="bg-[#1A1A1A] border border-[#00D9FF]/20 rounded-lg p-8 hover:border-[#00D9FF]/50 transition-all">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#00D9FF] mb-1">{exp.role}</h3>
                      <p className="text-gray-400 font-mono text-sm">{exp.company}</p>
                    </div>
                    <span className="text-gray-500 font-mono text-sm">{exp.period}</span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <ArrowRight className="w-4 h-4 text-[#00D9FF] mt-1 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00D9FF]/50 to-transparent" />
            <h2 className="text-4xl font-bold font-mono">
              <span className="text-[#00D9FF]">04.</span> PROJECTS
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00D9FF]/50 to-transparent" />
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6">
        <SkillsSection />
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="relative py-32 px-6 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00D9FF]/50 to-transparent" />
            <h2 className="text-4xl font-bold font-mono">
              <span className="text-[#00D9FF]">06.</span> LEARNING & DEVELOPMENT
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00D9FF]/50 to-transparent" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A1A1A] border border-[#00D9FF]/20 rounded-xl p-6 hover:border-[#00D9FF]/50 transition-all text-center"
              >
                <div className="w-16 h-16 bg-[#00D9FF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-[#00D9FF]" />
                </div>
                <h3 className="font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                <p className="text-[#00D9FF] font-mono text-xs">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center gap-4 mb-12 justify-center">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00D9FF]/50 to-transparent" />
            <h2 className="text-4xl font-bold font-mono">
              <span className="text-[#00D9FF]">07.</span> LET'S CONNECT
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00D9FF]/50 to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I'm actively seeking <span className="text-[#00D9FF] font-semibold">Data Engineering opportunities</span> where
              I can apply my expertise in Azure, PySpark, and production-ready pipeline development.
              Let's discuss how I can contribute to your team!
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                className="bg-[#00D9FF] hover:bg-[#00D9FF]/80 text-black font-mono font-semibold px-8 py-6 text-lg rounded-lg shadow-lg shadow-[#00D9FF]/30 transition-all hover:shadow-[#00D9FF]/50"
                onClick={() =>
                  window.location.href =
                  'mailto:1mail4dev@gmail.com?subject=Regarding%20Data%20Engineering%20Opportunity&body=Hi,%20I%20saw%20your%20portfolio%20and...'
                }
              >
                <Mail className="w-5 h-5 mr-2" />
                GET IN TOUCH
              </Button>

              <Button
                variant="outline"
                className="border-[#00D9FF]/50 hover:border-[#00D9FF] text-[#00D9FF] font-mono font-semibold px-8 py-6 text-lg rounded-lg hover:bg-[#00D9FF]/10 transition-all"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/abhiram.pdf"; // ← file inside public
                  link.download = "Abhiram_Resume.pdf"; // file name user sees
                  link.click();
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                DOWNLOAD RESUME
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 pt-8">
              <a
                href="https://github.com/11Abiram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00D9FF] transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/11abhi-ram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00D9FF] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#00D9FF]/20 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 font-mono text-sm">
            Built with engineering rigor · React · Tailwind CSS · Framer Motion
          </p>
          <p className="text-gray-600 font-mono text-xs mt-2">
            © 2025 · Data Engineer Portfolio
          </p>
        </div>
      </footer>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#00D9FF] origin-left z-50"
        style={{ scaleX: scrollY / (document.documentElement.scrollHeight - window.innerHeight) }}
      />
    </div>
  );
}