export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold mb-4">Выберите свой путь в вайб-кодинге</h2>
          <p className="text-xl text-apple-gray">Все тарифы включают пожизненный доступ к материалам</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Начинающий */}
          <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-apple-blue/50 transition-all duration-300 hover:shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">Начинающий</h3>
              <p className="text-apple-gray mb-6">Основы вайб-кодинга</p>
              <div className="mb-8">
                <span className="text-5xl font-bold">Бесплатно</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                <span>Бесплатный гайд "15 минут до первого сайта"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                <span>Доступ к чату сообщества</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                <span>Базовые шаблоны проектов</span>
              </li>
            </ul>
            
            <a href="#lead-magnet" className="block w-full py-4 text-center border-2 border-apple-blue text-apple-blue rounded-2xl text-lg font-medium hover:bg-apple-blue hover:text-white transition-all duration-200">
              Начать бесплатно
            </a>
          </div>

          {/* Продвинутый */}
          <div className="bg-apple-blue text-white rounded-3xl p-8 relative scale-105 shadow-2xl">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-apple-blue px-6 py-2 rounded-full text-sm font-medium">
              Рекомендуемый
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">Продвинутый</h3>
              <p className="text-blue-100 mb-6">Полный интенсив</p>
              <div className="mb-8">
                <span className="text-5xl font-bold">9 990₽</span>
                <div className="text-blue-100">
                  <span className="line-through">14 990₽</span> до 31 января
                </div>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                <span>Всё из предыдущего тарифа</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                <span>3 живые лекции с разбором</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                <span>Персональные ответы на вопросы</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                <span>Сертификат о прохождении</span>
              </li>
            </ul>
            
            <a href="https://t.me/hashslash_bot" target="_blank" rel="noopener noreferrer" className="block w-full py-4 text-center bg-white text-apple-blue rounded-2xl text-lg font-medium hover:bg-gray-50 transition-all duration-200">
              Записаться сейчас
            </a>
          </div>

          {/* Эксперт */}
          <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-apple-blue/50 transition-all duration-300 hover:shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">Эксперт</h3>
              <p className="text-apple-gray mb-6">Индивидуальное сопровождение</p>
              <div className="mb-8">
                <span className="text-5xl font-bold">19 990₽</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                <span>Всё из предыдущих тарифов</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                <span>4 персональных созвона 1-на-1</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                <span>Разбор вашей идеи проекта</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                <span>Помощь в запуске проекта</span>
              </li>
            </ul>
            
            <a href="https://t.me/r1iiis" target="_blank" rel="noopener noreferrer" className="block w-full py-4 text-center bg-apple-blue text-white rounded-2xl text-lg font-medium hover:bg-blue-600 transition-all duration-200">
              Обсудить детали
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}