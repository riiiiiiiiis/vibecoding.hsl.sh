export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-5xl font-semibold mb-16">Что говорят вайб-кодеры</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-apple-light-gray rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">
            <div className="mb-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-apple-gray leading-relaxed mb-4">
                "За неделю создал свой первый лендинг и Telegram-бота! Раньше думал, что программирование — это слишком сложно."
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                А
              </div>
              <div>
                <p className="font-semibold">Алексей</p>
                <p className="text-sm text-apple-gray">Предприниматель</p>
              </div>
            </div>
          </div>

          <div className="bg-apple-light-gray rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">
            <div className="mb-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-apple-gray leading-relaxed mb-4">
                "Сережа объясняет так просто! Теперь я могу создавать прототипы для своих дизайнов без помощи разработчиков."
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                М
              </div>
              <div>
                <p className="font-semibold">Мария</p>
                <p className="text-sm text-apple-gray">UX/UI дизайнер</p>
              </div>
            </div>
          </div>

          <div className="bg-apple-light-gray rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">
            <div className="mb-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-apple-gray leading-relaxed mb-4">
                "Интенсив полностью изменил мое представление о разработке. Вайб-кодинг — это будущее!"
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                Д
              </div>
              <div>
                <p className="font-semibold">Дмитрий</p>
                <p className="text-sm text-apple-gray">Маркетолог</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}