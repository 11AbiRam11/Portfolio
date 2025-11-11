import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ChevronDown } from 'lucide-react';
import { Button } from "../ui/button";

export default function HeroSection() {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Analytical Data Engineer';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto w-full">
      {/* Floating Data Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00D9FF] rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="text-center space-y-8">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] border border-[#00D9FF]/30 rounded-full"
        >
          <Terminal className="w-4 h-4 text-[#00D9FF]" />
          <span className="text-xs font-mono text-gray-400">CGPA_9.0 · PRODUCTION_READY</span>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        </motion.div>

        {/* Main Title with Typing Effect */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-8xl font-bold font-mono tracking-tight"
          >
            <span className="text-[#00D9FF]">{text}</span>
            <span className={`inline-block w-1 h-12 md:h-24 bg-[#00D9FF] ml-2 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            Building <span className="text-white font-semibold">scalable, production-ready data solutions</span> with 
            expertise in <span className="text-[#00D9FF] font-semibold">full-cycle pipeline development</span>. 
            Specialized in <span className="text-[#00D9FF] font-semibold">Azure, PySpark, Delta Lake</span>, 
            and engineering rigor with <span className="text-[#00D9FF] font-semibold">CDC/SCD automation</span>.
          </motion.p>
        </div>

        {/* Tech Stack Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-4"
        >
          {['Azure ADF', 'Databricks', 'PySpark', 'Delta Lake', 'Python', 'SQL'].map((tech, index) => (
            <span
              key={tech}
              className="px-4 py-2 bg-[#1A1A1A] border border-[#00D9FF]/30 rounded-lg text-sm font-mono text-gray-300 hover:border-[#00D9FF] hover:shadow-lg hover:shadow-[#00D9FF]/20 transition-all cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap gap-4 justify-center pt-8"
        >
          <Button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#00D9FF] hover:bg-[#00D9FF]/80 text-black font-mono font-semibold px-8 py-6 text-lg rounded-lg shadow-xl shadow-[#00D9FF]/30 transition-all hover:shadow-[#00D9FF]/50 hover:scale-105"
          >
            VIEW PROJECTS
          </Button>
          <Button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline"
            className="border-[#00D9FF]/50 hover:border-[#00D9FF] text-[#00D9FF] font-mono font-semibold px-8 py-6 text-lg rounded-lg hover:bg-[#00D9FF]/10 transition-all"
          >
            LET'S CONNECT
          </Button>
        </motion.div>

        {/* Data Flow Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="pt-16"
        >
          <div className="flex items-center justify-center gap-4 text-xs font-mono text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00D9FF] rounded-full animate-pulse" />
              <span>INGESTION</span>
            </div>
            <div className="w-12 h-px bg-gradient-to-r from-[#00D9FF] to-transparent" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00D9FF] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span>TRANSFORMATION</span>
            </div>
            <div className="w-12 h-px bg-gradient-to-r from-[#00D9FF] to-transparent" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00D9FF] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <span>ANALYTICS</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 2 },
            y: { repeat: Infinity, duration: 1.5 }
          }}
          className="pt-12"
        >
          <ChevronDown className="w-8 h-8 text-[#00D9FF] mx-auto" />
        </motion.div>
      </div>

      {/* Glowing Orb Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D9FF] rounded-full opacity-5 blur-3xl pointer-events-none" />
    </div>
  );
}