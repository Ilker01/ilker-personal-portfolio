import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id={id} ref={ref} className={`min-h-screen ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};
