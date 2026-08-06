import { motion } from "framer-motion";

function FadeInSection({ children, className = "", delay = 0, ...props }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export default FadeInSection;
