export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-apple-gray text-xl mb-2">Когда и как проходит</p>
        <h2 className="text-center text-5xl font-semibold mb-14">Практический интенсив</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-apple-light-gray rounded-3xl p-10 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div className="text-6xl font-bold text-apple-gray/20 mb-4">30</div>
            <h3 className="text-2xl font-semibold mb-4">Старт 30 мая</h3>
            <p className="text-apple-gray text-lg leading-relaxed">3 недели интенсивного обучения с практическими заданиями и моей поддержкой.</p>
          </div>
          <div className="bg-apple-light-gray rounded-3xl p-10 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div className="text-6xl font-bold text-apple-gray/20 mb-4">03</div>
            <h3 className="text-2xl font-semibold mb-4">3 практические лекции</h3>
            <p className="text-apple-gray text-lg leading-relaxed">Онлайн-встречи с живой демонстрацией, где ты создашь реальные проекты от сайтов до Telegram-ботов.</p>
          </div>
        </div>
      </div>
    </section>
  );
}