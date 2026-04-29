"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

// Bidirectional Arrow with Request/Response Motion
const FlowArrow = ({ direction = "horizontal", length = 80 }) => {
  const isHorizontal = direction === "horizontal";
  return (
    <div className={`relative flex items-center justify-center ${isHorizontal ? 'px-4' : 'py-4'}`}>
      <svg
        width={isHorizontal ? length : 40}
        height={isHorizontal ? 40 : length}
        viewBox={`0 0 ${isHorizontal ? length : 40} ${isHorizontal ? 40 : length}`}
      >
        {/* REQUEST PATH (Forward) */}
        <path
          d={isHorizontal ? `M0 15H${length}` : `M15 0V${length}`}
          stroke="rgba(255,255,255,0.05)" strokeWidth="1"
        />
        <motion.path
          d={isHorizontal ? `M0 15H${length}` : `M15 0V${length}`}
          stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"
          initial={{ pathLength: 0.1, pathOffset: 0 }}
          animate={{ pathOffset: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <path // Forward Arrowhead
          d={isHorizontal ? `M${length-5} 10L${length} 15L${length-5} 20` : `M10 ${length-5}L15 ${length}L20 ${length-5}`}
          stroke="#3b82f6" strokeWidth="1.5" fill="none"
        />
        {/* RESPONSE PATH (Backward) */}
        <path
          d={isHorizontal ? `M${length} 25H0` : `M25 ${length}V0`}
          stroke="rgba(255,255,255,0.05)" strokeWidth="1"
        />
        <motion.path
          d={isHorizontal ? `M${length} 25H0` : `M25 ${length}V0`}
          stroke="#10b981" strokeWidth="2" strokeLinecap="round"
          initial={{ pathLength: 0.1, pathOffset: 0 }}
          animate={{ pathOffset: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
        />
        <path // Backward Arrowhead
          d={isHorizontal ? `M5 20L0 25L5 30` : `M20 5L25 0L30 5`}
          stroke="#10b981" strokeWidth="1.5" fill="none"
        />
      </svg>
    </div>
  );
};

export const SkillsetCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showArchitecture, setShowArchitecture] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const groups = [
    { label: "Frontend", skills: ["React", "Next.js", "Android Studio"], lineColor: "border-blue-500/30" },
    { label: "Backend", skills: ["Java", "PHP", "TypeScript", "REST API"], lineColor: "border-emerald-500/30" },
    { label: "Database", skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase"], lineColor: "border-purple-500/30" },
  ];

  const skillVariant: Variants = {
    hidden: { opacity: 0, x: -30, filter: "blur(8px)" },
    visible: (i: number) => ({
      opacity: 1, x: 0, filter: "blur(0px)",
      transition: { delay: 0.2 + i * 0.08, duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] },
    }),
  };

  return (
    <>
      {/* INITIAL CARD VIEW */}
      <motion.div
        layoutId="skill-container"
        onClick={() => setIsOpen(true)}
        className="relative cursor-pointer overflow-hidden border border-white/10 bg-[#0a0a0a] p-8 rounded-[1.5rem] hover:bg-white/5 transition-all group h-full flex flex-col"
      >
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-6">Skillset</h3>
        <div className="space-y-3">
          {groups.map((group) => (
            <div key={group.label} className="flex flex-wrap gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
              {group.skills.slice(0, 2).map((skill) => (
                <span key={skill} className="text-[9px] text-gray-400 font-mono tracking-tighter">{skill}</span>
              ))}
              <span className="text-[9px] text-blue-500/40">/</span>
            </div>
          ))}
        </div>
        <div className="mt-auto pt-8">
          <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest flex items-center gap-2">
            Initialize Tech <span className="group-hover:translate-x-2 transition-transform">→</span>
          </p>
        </div>
      </motion.div>

      {/* MAIN TECH STACK MODAL */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
            />
            <motion.div
              layoutId="skill-container"
              className="relative w-full max-w-3xl bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-4 sm:p-8 md:p-12 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 md:mb-16">
                <div className="flex items-center gap-6">
                  <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">Tech Stack</h2>
                  <button
                    onClick={(e) => { e.stopPropagation(); setShowArchitecture(true); }}
                    className="relative group/btn cursor-pointer transition-transform active:scale-95"
                  >
                    <div className="absolute -inset-0.5 bg-white/20 rounded-full blur-md group-hover/btn:bg-blue-500/30 transition-all" />
                    <div className="relative flex items-center gap-3 px-4 py-2 md:px-5 md:py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-xl">
                      <span className="text-[10px] font-bold text-gray-200 uppercase tracking-widest">Current Stack</span>
                      <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>
                      </div>
                    </div>
                  </button>
                </div>
                <button onClick={() => setIsOpen(false)} className="fixed top-6 right-6 z-[120] bg-black/60 hover:bg-black/80 border border-white/10 rounded-full w-10 h-10 flex items-center justify-center text-2xl text-gray-300 hover:text-white transition-all md:absolute md:top-8 md:right-8" aria-label="Close">&times;</button>
              </div>

              <div className="space-y-10 md:space-y-16">
                {groups.map((group, gIndex) => (
                  <div key={group.label} className="relative">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 mb-4 md:mb-8 font-mono">{group.label}</h4>
                    <div className="relative flex flex-col gap-4 md:flex-row md:items-center min-h-[50px]">
                      <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1 }}
                        className={`absolute top-1/2 left-0 h-[1px] border-t border-dashed ${group.lineColor}`}
                      />
                      <div className="flex flex-wrap gap-3 md:gap-6 w-full relative z-10">
                        {group.skills.map((skill, sIndex) => (
                          <motion.div key={skill} custom={sIndex + gIndex * 3} variants={skillVariant} initial="hidden" animate="visible"
                            className="bg-[#050505] border border-white/10 px-4 py-2 md:px-6 md:py-2.5 rounded-xl shadow-xl hover:border-white/30 transition-all"
                          >
                            <span className="text-xs font-mono font-bold text-gray-200 uppercase tracking-tighter">{skill}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ARCHITECTURE OVERLAY */}
      <AnimatePresence>
        {showArchitecture && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowArchitecture(false)}
              className="absolute inset-0 bg-blue-950/20 backdrop-blur-3xl"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0d0d0d] border border-blue-500/30 rounded-[2rem] p-10 shadow-2xl"
            >
              <div className="text-center mb-12">
                <p className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-2">Live Architecture</p>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">System Flow</h3>
              </div>
              <div className="flex flex-col items-center">
                {/* Top Row: React, Java, Postgres */}
                <div className="flex items-center justify-center w-full">
                  {/* REACT */}
                  <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-blue-400 font-mono text-xs font-bold">
                    REACT
                  </div>
                  <FlowArrow direction="horizontal" length={100} />
                  {/* JAVA (Center) */}
                  <div className="relative">
                    <div className="absolute -inset-1 bg-orange-500/20 blur-xl rounded-full" />
                    <div className="relative px-8 py-4 bg-[#050505] border-2 border-orange-500/40 rounded-2xl">
                      <span className="text-orange-400 font-black tracking-widest text-lg">API</span>
                    </div>
                  </div>
                  <FlowArrow direction="horizontal" length={100} />
                  {/* POSTGRES */}
                  <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-purple-400 font-mono text-xs font-bold">
                    POSTGRES
                  </div>
                </div>
                {/* Vertical Drop: JAVA to JAVA (as per sketch) */}
                <div className="flex flex-col items-center -mt-2">
                  <FlowArrow direction="vertical" length={80} />
                  <div className="px-10 py-4 bg-white/5 border border-white/10 rounded-xl text-orange-400 font-mono text-xs font-bold">
                    JAVA
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowArchitecture(false)}
                className="mt-12 w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-gray-400 font-mono text-[10px] uppercase tracking-widest transition-all"
              >
                Close Blueprint
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};