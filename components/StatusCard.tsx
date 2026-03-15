"use client";
import { motion } from "framer-motion";

export const StatusCard = () => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 backdrop-blur-xl flex flex-col justify-center w-full md:w-auto md:min-w-[240px]">
      <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
        Current Status
      </h3>
      
      <div className="flex items-center gap-3">
        {/* Pulsing Dot Container */}
        <div className="relative flex h-3 w-3 flex-shrink-0">
          <motion.span 
            animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"
          />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
        </div>

        {/* text-xs on mobile, text-[11px] on desktop to prevent overflow */}
        <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-emerald-400/90 whitespace-nowrap">
          Open for Projects
        </span>
      </div>
    </div>
  );
};