export default function Hero() {
  return (
    <section className="pt-32 pb-20 text-center bg-gradient-to-b from-white to-apple-light-gray">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-7xl font-semibold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">Вайб-кодинг с AI</h1>
        <p className="text-2xl md:text-3xl text-apple-gray mb-10 leading-relaxed max-w-3xl mx-auto">Научись создавать сайты и Telegram-ботов через чат с AI. Получи бесплатный гайд и начни кодить уже сегодня!</p>
        <a href="#lead-magnet" className="inline-block bg-apple-blue text-white px-8 py-4 rounded-full text-lg hover:bg-blue-600 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-blue-200 mb-6">Начать бесплатно</a>
        <p className="text-lg text-apple-gray">
          или <a href="#program" className="text-apple-blue hover:underline font-medium">посмотрите программу курса</a>
        </p>
      </div>
    </section>
  );
}