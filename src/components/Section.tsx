"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  delay?: number;
}

export default function Section({ children, delay = 0 }: SectionProps) {
  return (
    <motion.section
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.section>
  );
}
