"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Profile Image Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative h-32 w-32 md:h-44 md:w-44 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl shadow-blue-500/10"
      >
        <Image
          src="/images/profile.JPG" // Updated to match your directory structure
          alt="Farhan Hazlan"
          fill
          priority
          className="object-cover transition-transform duration-700 hover:scale-110"
        />
        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </motion.div>

      {/* Name / Brand Text */}
      <div className="text-center">
        <h2 className="text-white text-xl md:text-2xl font-bold tracking-tight">
          Farhan<span className="text-blue-500">Hazlan</span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "2rem" }}
          className="h-1 bg-blue-500 mx-auto mt-1 rounded-full"
        />
      </div>
    </div>
  );
};
