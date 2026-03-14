// components/AnimatedSection.tsx
import { motion } from "framer-motion";
import React from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
}

const AnimatedSection = ({ children, className, direction = "up" }: AnimatedSectionProps) => {
  let x = 0, y = 0;

  switch(direction) {
    case "left": x = -50; break;
    case "right": x = 50; break;
    case "up": y = 50; break;
    case "down": y = -50; break;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;