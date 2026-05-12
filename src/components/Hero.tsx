import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-6 opacity-70">
          Новый уровень
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 leading-none">
          ВЕРШИНА
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto opacity-80 leading-relaxed">
          Создай нечто большее. Мы помогаем амбициозным проектам достигать новых высот.
        </p>
        <button className="mt-10 border border-white text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
          Начать путь
        </button>
      </div>
    </div>
  );
}
