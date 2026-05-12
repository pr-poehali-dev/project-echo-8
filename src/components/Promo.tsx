import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Abstract visual"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </div>

      <p className="absolute top-10 left-6 text-white/60 uppercase z-10 text-xs tracking-[0.3em]">
        Наш манифест
      </p>

      <h3 className="absolute top-10 right-6 text-white/60 uppercase z-10 text-xs tracking-[0.3em]">
        2026
      </h3>

      <p className="absolute bottom-12 left-6 right-6 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-4xl z-10 font-light leading-tight">
        Мы верим: каждая большая идея заслуживает воплощения.{" "}
        <span className="font-bold">Сделай первый шаг — остальное сделаем вместе.</span>
      </p>
    </div>
  );
}
