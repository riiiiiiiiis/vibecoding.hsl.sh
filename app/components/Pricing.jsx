export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-apple-gray text-xl mb-2">Тарифы</p>
        <h2 className="text-center text-5xl font-semibold mb-16">Выберите подходящий пакет</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {/* Самостоятельный */}
          <div className="bg-apple-light-gray/60 rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300 border border-gray-100">
            <h3 className="text-2xl font-semibold mb-3 text-apple-black">Самостоятельный</h3>
            <p className="text-apple-gray mb-8 h-12">Доступ к лекциям и общему чату</p>
            <div className="text-5xl font-bold mb-8 text-apple-black">2 990₽</div>
            <ul className="text-left my-8 space-y-3">
              <li className="flex items-center text-apple-black"><span className="text-green-500 mr-3">✓</span>Записи всех лекций</li>
              <li className="flex items-center text-apple-black"><span className="text-green-500 mr-3">✓</span>Закрытый чат участников</li>
              <li className="flex items-center text-apple-black"><span className="text-green-500 mr-3">✓</span>Материалы и шаблоны</li>
            </ul>
            <a href="https://t.me/hashslash_bot" target="_blank" className="w-full block py-3 bg-white border border-apple-blue text-apple-blue rounded-xl text-lg font-medium hover:bg-apple-blue hover:text-white transition-all duration-200">Выбрать</a>
          </div>
          
          {/* Стандартный (Popular) */}
          <div className="bg-apple-black rounded-3xl p-8 text-center text-white relative shadow-2xl scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium">Популярный</div>
            <h3 className="text-2xl font-semibold mb-3">Стандартный</h3>
            <p className="text-white/70 mb-8 h-12">С моей поддержкой и разбором проектов в мини-группе</p>
            <div className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">12 000₽</div>
            <ul className="text-left my-8 space-y-3">
              <li className="flex items-center"><span className="text-green-400 mr-3">✓</span><strong>Всё из тарифа "Самостоятельный"</strong></li>
              <li className="flex items-center"><span className="text-green-400 mr-3">✓</span>Моя личная поддержка в чате</li>
              <li className="flex items-center"><span className="text-green-400 mr-3">✓</span>Разбор ваших проектов в группе</li>
              <li className="flex items-center"><span className="text-green-400 mr-3">✓</span>Дополнительные мастер-классы</li>
            </ul>
            <a href="https://t.me/hashslash_bot" target="_blank" className="w-full block py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-lg font-medium hover:scale-105 transition-transform duration-200">Выбрать стандартный</a>
          </div>
          
          {/* VIP */}
          <div className="bg-apple-light-gray/60 rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300 border border-gray-100">
            <h3 className="text-2xl font-semibold mb-3 text-apple-black">VIP</h3>
            <p className="text-apple-gray mb-8 h-12">Личные созвоны и консультации</p>
            <div className="text-5xl font-bold mb-8 text-apple-black">24 000₽</div>
            <ul className="text-left my-8 space-y-3">
              <li className="flex items-center text-apple-black"><span className="text-green-500 mr-3">✓</span><strong>Всё из тарифа "Стандартный"</strong></li>
              <li className="flex items-center text-apple-black"><span className="text-green-500 mr-3">✓</span>Личные созвоны со мной (2 шт)</li>
              <li className="flex items-center text-apple-black"><span className="text-green-500 mr-3">✓</span>Индивидуальные консультации</li>
              <li className="flex items-center text-apple-black"><span className="text-green-500 mr-3">✓</span>Помощь в реализации вашего проекта</li>
            </ul>
             <a href="https://t.me/hashslash_bot" target="_blank" className="w-full block py-3 bg-white border border-apple-blue text-apple-blue rounded-xl text-lg font-medium hover:bg-apple-blue hover:text-white transition-all duration-200">Выбрать</a>
          </div>
        </div>
      </div>
    </section>
  )
}