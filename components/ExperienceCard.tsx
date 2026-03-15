"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

//hardcode first, will fetch from CMS later
const history = [
  {
    company: "Ingots Sdn.Bhd",
    role: "Software Engineer",
    period: "SEPT 2025 - PRESENT",
    logoSrc: "/images/ingots-removebg-preview.png",
    desc: "Revamp ingots.io application",
    tech: ["Java", "Docker", "PostgreSQL", "Android Studio"],
  },
  {
    company: "Razer Merchant Payment",
    role: "Software Engineer",
    period: "FEB 2025 - JUL 2025",
    logoSrc: "/images/fiuu.png",
    desc: "Maintaining systems and migrating legacy vanilla PHP to Laravel 8.2 using Docker and PostgreSQL.",
    tech: ["Laravel 8.2", "Docker", "PostgreSQL", "PHP"],
  },
  {
    company: "MyDigital Center Sdn.Bhd",
    role: "Junior Programmer",
    period: "MAR 2024 - FEB 2025",
    logoSrc: "/images/mydc.png",
    desc: "Built and deployed Mycert integrated with LHDN blockchain and API using Solidity and Web3.",
    tech: ["Solidity", "Web3", "Blockchain", "CI4"],
  },
  {
    company: "Synersion Sdn.Bhd",
    role: "Programmer",
    period: "NOV 2023 - MAR 2024",
    logoSrc: "/images/synersion-removebg-preview.png",
    desc: "Developed Autoliv ERP system using Laravel, MVC, and QAD ERP System.",
    tech: ["Laravel", "MVC", "QAD ERP", "SQL"],
  },
];

export const ExperienceCard = ({
  company,
  role,
  description,
  logoSrc,
}: any) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <>
      {/* INITIAL CARD VIEW */}
      <motion.div
        layoutId="exp-container"
        onClick={() => setIsOpen(true)}
        className="relative cursor-pointer overflow-hidden border border-white/10 bg-[#0a0a0a] p-8 rounded-[1.5rem] hover:bg-white/5 transition-colors group h-full flex flex-col"
      >
        <div className="flex items-start gap-6">
          <motion.div
            layoutId="logo-box"
            className="h-20 w-20 flex items-center justify-center overflow-hidden shrink-0 transition-transform group-hover:scale-105"
          >
            <Image
              src={logoSrc}
              alt={company}
              width={80}
              height={80}
              className="w-full h-full object-contain"
              priority
            />
          </motion.div>
          <div className="flex-1">
            <motion.p
              layoutId="label"
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2"
            >
              Experience
            </motion.p>
            <motion.h3
              layoutId="title"
              className="text-2xl font-bold text-white leading-tight"
            >
              {role} <br />
              <span className="text-blue-500/50 text-lg">@ {company}</span>
            </motion.h3>
          </div>
        </div>
        <div className="mt-auto pt-8">
          <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest flex items-center gap-2">
            Click to expand history{" "}
            <span className="group-hover:translate-x-2 transition-transform">
              →
            </span>
          </p>
        </div>
      </motion.div>

      {/* EXPANDED TIMELINE MODAL */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />

            <motion.div
              layoutId="exp-container"
              className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-y-auto max-h-[85vh] shadow-2xl [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              <div className="flex justify-between items-start mb-16">
                <div>
                  <p className="text-blue-500 font-bold uppercase tracking-widest text-[10px] mb-2">
                    Professional History
                  </p>
                  <h2 className="text-4xl font-bold text-white tracking-tight">
                    Timeline
                  </h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-white text-4xl leading-none"
                >
                  &times;
                </button>
              </div>

              <div className="space-y-0">
                {history.map((item, i) => {
                  const isCurrent = item.period.includes("PRESENT");

                  return (
                    <div key={i} className="relative flex gap-8 group">
                      {/* 1. THE LINE & ICONS */}
                      <div className="relative flex flex-col items-center">
                        <div className="relative z-10 flex h-6 w-6 items-center justify-center">
                          {isCurrent ? (
                            <>
                              <motion.span
                                animate={{
                                  scale: [1, 2.5, 1],
                                  opacity: [0.5, 0, 0.5],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute h-full w-full rounded-full bg-blue-500/40"
                              />
                              <div className="h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,1)]" />
                            </>
                          ) : (
                            /* UPDATED SOLID X ICON */
                            <div className="text-red-600 font-black text-lg drop-shadow-[0_0_8px_rgba(220,38,38,0.8)] select-none">
                              ✕
                            </div>
                          )}
                        </div>

                        {i !== history.length - 1 && (
                          <div
                            className={`h-full w-[2px] my-2 bg-gradient-to-b ${
                              isCurrent
                                ? "from-blue-500 via-blue-500/20"
                                : "from-red-600/60 via-white/5"
                            } to-transparent`}
                          />
                        )}
                      </div>

                      {/* 2. THE LOGO BOX */}
                      <div className="flex-shrink-0 pb-16 pt-0.5">
                        <div className="h-16 w-16 flex items-center justify-center overflow-hidden transition-all group-hover:scale-110 bg-[#111] rounded-xl border border-white/5">
                          <Image
                            src={item.logoSrc}
                            alt={item.company}
                            width={48}
                            height={48}
                            className="w-full h-full object-contain p-2 brightness-110 grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                      </div>

                      {/* 3. TEXT CONTENT */}
                      <div className="flex-1 pt-1 pb-16">
                        <span
                          className={`${
                            isCurrent ? "text-blue-500" : "text-red-600"
                          } font-mono text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block`}
                        >
                          {item.period}
                        </span>
                        <h4 className="text-2xl font-bold text-white tracking-tight">
                          {item.role}
                        </h4>
                        <p
                          className={`${
                            isCurrent ? "text-blue-500/80" : "text-gray-400"
                          } font-semibold mb-4`}
                        >
                          @ {item.company}
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-md mb-6">
                          {item.desc}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.tech.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[9px] text-gray-400 font-mono uppercase tracking-tight"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
