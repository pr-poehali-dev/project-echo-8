const features = [
  {
    number: "01",
    title: "Стратегия",
    description: "Глубокий анализ рынка и чёткий вектор развития. Строим путь к цели, а не просто движемся вперёд.",
  },
  {
    number: "02",
    title: "Исполнение",
    description: "Каждая деталь продумана и реализована с точностью. Качество, которое видно с первого взгляда.",
  },
  {
    number: "03",
    title: "Результат",
    description: "Измеримый рост и реальные показатели. Не слова — цифры, которые говорят сами за себя.",
  },
];

export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-20 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-12 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Dynamic movement"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-16 lg:order-1">
        <p className="uppercase mb-6 text-xs tracking-[0.25em] text-neutral-400">
          Как мы работаем
        </p>
        <h2 className="text-3xl lg:text-5xl mb-12 text-neutral-900 leading-tight font-light">
          Три принципа,<br />
          <span className="font-bold">которые меняют всё</span>
        </h2>

        <div className="flex flex-col gap-8">
          {features.map((f) => (
            <div key={f.number} className="flex gap-6 items-start">
              <span className="text-xs text-neutral-300 font-mono mt-1 shrink-0">{f.number}</span>
              <div>
                <h4 className="text-neutral-900 font-semibold mb-1 uppercase tracking-wide text-sm">
                  {f.title}
                </h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-12 bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-widest">
          Узнать больше
        </button>
      </div>
    </div>
  );
}
