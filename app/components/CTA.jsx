export default function CTA() {
  return (
    <section id="apply" className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-6xl font-semibold mb-6">Начни создавать с AI уже сегодня</h2>
        <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
          Тысячи людей уже изменили свою жизнь с помощью вайб-кодинга. 
          Присоединяйся к революции в разработке и создавай проекты мечты с помощью искусственного интеллекта.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <a 
            href="https://t.me/hashslash_bot" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-apple-blue px-8 py-4 rounded-2xl text-lg font-semibold hover:-translate-y-1 transition-all hover:shadow-2xl hover:shadow-white/25"
          >
            Записаться на интенсив
          </a>
          <a 
            href="#lead-magnet" 
            className="border-2 border-white/50 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/10 transition-all"
          >
            Получить бесплатный гайд
          </a>
        </div>
        
        <div className="text-center">
          <p className="text-lg opacity-75 mb-4">Есть вопросы?</p>
          <a 
            href="https://t.me/r1iiis" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xl font-semibold hover:underline transition-all"
          >
            Напиши мне в Telegram @r1iiis
          </a>
        </div>
      </div>
    </section>
  );
}