import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#top"
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          transition={{ duration: 0.25 }}
          whileHover={{ y: -3 }}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-11 w-11 rounded-full focus-ring shadow-lg"
          style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}
        >
          <ArrowUp size={18} strokeWidth={2.5} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
