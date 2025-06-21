import { motion, HTMLMotionProps } from 'framer-motion';

type AnimatedSectionProps = HTMLMotionProps<"section">;

export const AnimatedSection = ({ children, className = '', ...props }: AnimatedSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      {...props}
      className={className}
    >
      {children}
    </motion.section>
  );
};