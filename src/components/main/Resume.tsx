'use client';

import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const ResumeSection = () => {
  return (
    <section id="resume" className="pt-8 pb-8 bg-background text-foreground px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">My Resume</h2>
        <p className="mt-2 text-muted-foreground text-sm italic">
          Download my resume to explore my qualifications and experience.
        </p>
      </motion.div>

      <motion.a
        href="/resume.pdf"
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mx-auto flex w-max items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium shadow-md hover:shadow-lg transition-all"
      >
        <FaDownload className="text-base" />
        Download Resume
      </motion.a>
    </section>
  );
};

export default ResumeSection;
