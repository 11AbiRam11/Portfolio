import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cloud, Code2, GitBranch, Workflow, Globe } from 'lucide-react';

const skillCategories = [
  {
    title: "Data Engineering & Cloud",
    icon: Cloud,
    skills: [
      { name: "Azure Data Factory", level: 90 },
      { name: "Azure Databricks", level: 90 },
      { name: "PySpark", level: 85 },
      { name: "Delta Lake", level: 85 },
      { name: "Azure SQL Database", level: 85 }
    ]
  },
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 95 },
      { name: "Java", level: 75 },
      { name: "C/C++", level: 75 },
      { name: "JavaScript", level: 80 }
    ]
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "SQL Database", level: 90 },
      { name: "MongoDB", level: 80 },
      { name: "Data Lake Storage", level: 85 },
      { name: "Database Design", level: 85 },
      { name: "Query Optimization", level: 85 }
    ]
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "React.js", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "HTML/CSS", level: 80 }
    ]
  },
  {
    title: "Tools & Platforms",
    icon: GitBranch,
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Docker", level: 80 },
      { name: "Jupyter Notebook", level: 85 },
      { name: "Linux", level: 80 },
      { name: "AWS", level: 70 }
    ]
  },
  {
    title: "Data Architecture",
    icon: Workflow,
    skills: [
      { name: "Medallion Architecture", level: 90 },
      { name: "CDC Logic", level: 85 },
      { name: "SCD Implementation", level: 85 },
      { name: "ETL Pipelines", level: 90 },
      { name: "Real-time Streaming", level: 80 }
    ]
  }
];

const techStack = [
  "Python", "SQL", "Azure", "PySpark", "Databricks", "Delta Lake", "Data Warehousing",
  "ADF", "MongoDB", "Docker", "Git", "MERN", "Machine Learning", "Deep Learning", "PyTorch", "TensorFlow",
  "word2vec", "Vector DB's", "NLP", "AWS", "Linux", "Power BI", "Jinja2", "Azure Logic Apps",
  "C", "C++", "Java", "REST APIs"
];

export default function SkillsSection() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00D9FF]/50 to-transparent" />
        <h2 className="text-4xl font-bold font-mono">
          <span className="text-[#00D9FF]">05.</span> TECHNICAL SKILLS
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00D9FF]/50 to-transparent" />
      </div>

      {/* Tech Stack Pills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-xl font-mono text-gray-400 mb-6 text-center">TECHNOLOGY STACK</h3>
        <div className="flex flex-wrap gap-3 justify-center max-w-5xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="group px-5 py-2.5 bg-[#1A1A1A] border border-[#00D9FF]/30 rounded-full text-sm font-mono text-gray-300 hover:border-[#00D9FF] hover:text-[#00D9FF] hover:shadow-lg hover:shadow-[#00D9FF]/20 transition-all cursor-default relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-[#00D9FF]/10 translate-y-full group-hover:translate-y-0 transition-transform" />
              <span className="relative">{tech}</span>
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, catIndex) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-[#1A1A1A] border border-[#00D9FF]/20 rounded-xl p-6 hover:border-[#00D9FF]/50 transition-all group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#00D9FF]/10 rounded-lg flex items-center justify-center group-hover:bg-[#00D9FF]/20 transition-colors">
                  <Icon className="w-5 h-5 text-[#00D9FF]" />
                </div>
                <h3 className="font-mono font-semibold text-white text-sm">
                  {category.title.toUpperCase()}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-[#00D9FF] font-mono text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-[#0D0D0D] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.1 + skillIndex * 0.05, duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-[#00D9FF] to-[#00D9FF]/50 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-[#00D9FF] opacity-50 blur-sm" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Core Competencies */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 bg-[#1A1A1A] border border-[#00D9FF]/20 rounded-xl p-8"
      >
        <h3 className="text-2xl font-bold font-mono mb-6 text-center">
          <span className="text-[#00D9FF]">CORE COMPETENCIES</span>
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Pipeline Development",
              items: ["Metadata-Driven ETL", "Incremental Loading", "CDC/SCD Logic", "Automated Backfilling"]
            },
            {
              title: "Data Architecture",
              items: ["Medallion Architecture", "Delta Lake", "Real-time Streaming", "Data Quality Frameworks"]
            },
            {
              title: "Engineering Practices",
              items: ["Dynamic SQL Templates", "Multi-Env Deployment", "Automation & Alerts", "Documentation"]
            }
          ].map((section, index) => (
            <div
              key={section.title}
              className="bg-[#0D0D0D] border border-[#00D9FF]/30 rounded-lg p-6"
            >
              <h4 className="font-mono font-semibold text-[#00D9FF] mb-4 text-sm">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}