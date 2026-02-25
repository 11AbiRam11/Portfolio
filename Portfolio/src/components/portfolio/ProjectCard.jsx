import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronUp, Activity, CheckCircle2 } from 'lucide-react';
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export default function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      {/* Glowing Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00D9FF]/20 via-[#00D9FF]/10 to-[#00D9FF]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
      
      <div className="relative bg-[#1A1A1A] border border-[#00D9FF]/20 rounded-xl overflow-hidden hover:border-[#00D9FF]/50 transition-all">
        {/* Project Header */}
        <div className="p-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#00D9FF] font-mono text-sm">PROJECT_{String(index + 1).padStart(2, '0')}</span>
                <div className="h-px flex-1 bg-gradient-to-r from-[#00D9FF]/50 to-transparent max-w-[100px]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#00D9FF] transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, idx) => (
              <Badge
                key={idx}
                className="bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30 hover:bg-[#00D9FF]/20 hover:border-[#00D9FF]/50 font-mono text-xs px-3 py-1 transition-all"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-[#0D0D0D] border border-[#00D9FF]/20 rounded-lg p-4 text-center hover:border-[#00D9FF]/50 transition-all"
              >
                <div className="text-2xl font-bold text-[#00D9FF] mb-1 font-mono">
                  {metric.value}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-mono">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Expand/Collapse for Details */}
          <Button
            variant="ghost"
            onClick={() => setExpanded(!expanded)}
            className="w-full text-[#00D9FF] hover:bg-[#00D9FF]/10 font-mono text-sm"
          >
            {expanded ? (
              <>
                <ChevronUp className="w-4 h-4 mr-2" />
                HIDE TECHNICAL DETAILS
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-2" />
                VIEW TECHNICAL DEEP DIVE
              </>
            )}
          </Button>
        </div>

        {/* Expanded Content */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[#00D9FF]/20 bg-[#0D0D0D] p-8"
          >
            <h4 className="text-lg font-semibold text-[#00D9FF] mb-4 font-mono flex items-center gap-2">
              <Activity className="w-5 h-5" />
              KEY HIGHLIGHTS
            </h4>
            <ul className="space-y-3">
              {project.keyHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#00D9FF] mt-0.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Architecture Diagram Placeholder */}
            {index < 2 && (
              <div className="mt-6 p-6 bg-[#1A1A1A] border border-[#00D9FF]/20 rounded-lg">
                <div className="flex items-center justify-between text-xs font-mono text-gray-500 mb-4">
                  <span>DATA FLOW ARCHITECTURE</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>PRODUCTION</span>
                  </div>
                </div>
                <div className="flex items-center justify-around py-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#00D9FF]/20 border border-[#00D9FF] rounded-lg flex items-center justify-center mb-2">
                      <span className="text-[#00D9FF] text-xs font-mono">SOURCE</span>
                    </div>
                    <span className="text-xs text-gray-500">Raw Data</span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#00D9FF]" />
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#00D9FF]/20 border border-[#00D9FF] rounded-lg flex items-center justify-center mb-2">
                      <span className="text-[#00D9FF] text-xs font-mono">PROCESS</span>
                    </div>
                    <span className="text-xs text-gray-500">Transform</span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#00D9FF]" />
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#00D9FF]/20 border border-[#00D9FF] rounded-lg flex items-center justify-center mb-2">
                      <span className="text-[#00D9FF] text-xs font-mono">SERVE</span>
                    </div>
                    <span className="text-xs text-gray-500">Analytics</span>
                  </div>
                </div>
              </div>
            )}

            {project.caseStudyUrl && (
              <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  className="w-full mt-6 bg-[#00D9FF] hover:bg-[#00D9FF]/80 text-black font-mono font-semibold"
                >
                  VIEW FULL CASE STUDY
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            )}
          </motion.div>
        )}

        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <div className="absolute top-4 right-4 w-16 h-px bg-[#00D9FF]" />
          <div className="absolute top-4 right-4 w-px h-16 bg-[#00D9FF]" />
        </div>
      </div>
    </motion.div>
  );
}