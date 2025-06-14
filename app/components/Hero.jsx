export default function Hero() {
  return (
    <section className="pt-32 pb-20 text-center bg-gradient-to-b from-white to-apple-light-gray">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-apple-gray text-lg mb-2">Практический курс-интенсив</p>
        <h1 className="text-6xl md:text-7xl font-semibold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">Вайб-кодинг с AI</h1>
        <p className="text-2xl md:text-3xl text-apple-gray mb-10 leading-relaxed max-w-3xl mx-auto">Создавайте сайты и приложения в чате с искусственным интеллектом. Просто опишите идею — ИИ напишет код, настроит дизайн и поможет опубликовать результат</p>
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          <span className="bg-black/5 px-4 py-2 rounded-full text-sm backdrop-blur-sm">Для начинающих</span>
          <span className="bg-black/5 px-4 py-2 rounded-full text-sm backdrop-blur-sm">Быстрый старт</span>
          <span className="bg-black/5 px-4 py-2 rounded-full text-sm backdrop-blur-sm">AI-инструменты</span>
        </div>
        <a href="#apply" className="inline-block bg-apple-blue text-white px-8 py-4 rounded-full text-lg hover:bg-blue-600 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-blue-200">Узнать больше и записаться</a>
      </div>
    </section>
  );
}