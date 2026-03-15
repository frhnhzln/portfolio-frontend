"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description?: string;
  imageSrc: string;
  accentColor: "blue" | "purple" | "green";
  stats?: { label: string; value: string }[];
}

export const ProjectCard = ({ title, description, imageSrc, accentColor, stats }: ProjectCardProps) => {
  const themes = {
    blue: { border: "border-cyan-500/30", glow: "shadow-cyan-500/20", text: "text-cyan-400", bg: "from-cyan-500/10" },
    purple: { border: "border-purple-500/30", glow: "shadow-purple-500/20", text: "text-purple-400", bg: "from-purple-500/10" },
    green: { border: "border-emerald-500/30", glow: "shadow-emerald-500/20", text: "text-emerald-400", bg: "from-emerald-500/10" },
  };

  const theme = themes[accentColor];

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className={`group relative overflow-hidden rounded-[32px] border ${theme.border} bg-[#0A0A0A] p-[2px] transition-all duration-500 hover:${theme.glow} hover:shadow-2xl`}
    >
      {/* Inner Glass Container */}
      <div className="relative h-full w-full overflow-hidden rounded-[30px] bg-gradient-to-br from-white/5 to-transparent p-6 md:p-8 backdrop-blur-3xl">
        
        {/* Decorative background glow */}
        <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${theme.bg} blur-[80px] opacity-50 transition-opacity group-hover:opacity-80`} />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* Content Side */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className={`h-2 w-2 rounded-full animate-pulse bg-current ${theme.text}`} />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">System Live</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
                {title.split(' ').map((word, i) => i === 0 ? <span key={i}>{word} </span> : <span key={i} className="text-gray-400">{word} </span>)}
              </h3>
              <p className="max-w-[280px] text-sm leading-relaxed text-gray-500">
                {description || "High-performance digital ecosystem built for scale and precision."}
              </p>
            </div>

            {/* Stats / Metadata */}
            <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
              {stats?.map((stat, i) => (
                <div key={i}>
                  <p className="text-[10px] uppercase tracking-widest text-gray-600">{stat.label}</p>
                  <p className="text-sm font-medium text-gray-300">{stat.value}</p>
                </div>
              )) || (
                <>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-600">Total Volume</p>
                    <p className="text-sm font-medium text-gray-300">$1.2M USD</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-600">Uptime</p>
                    <p className="text-sm font-medium text-gray-300">99.9%</p>
                  </div>
                </>
              )}
            </div>

            <button className={`mt-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs font-bold text-white transition-all hover:bg-white hover:text-black`}>
              View Case Study <span className="text-lg">→</span>
            </button>
          </div>

          {/* Image/Asset Side */}
          <div className="relative aspect-square w-full">
             <div className="absolute inset-0 flex items-center justify-center">
                {/* The "Floating" Card Image */}
                <motion.div 
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative h-[80%] w-[90%] rounded-xl border border-white/10 shadow-2xl overflow-hidden"
                >
                  <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                  {/* Glass overlay on the inner image */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
                </motion.div>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};