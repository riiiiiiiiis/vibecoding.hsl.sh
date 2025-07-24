export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-apple-gray text-xl mb-2">Тарифы</p>
        <h2 className="text-center text-5xl font-semibold mb-16">Выберите подходящий пакет</h2>
        <div className="flex justify-center">
          {/* Стандартный (единственный вариант) */}
          <div className="bg-apple-black rounded-3xl p-8 text-center text-white relative shadow-2xl max-w-md">
            <h3 className="text-2xl font-semibold mb-3">Стандартный</h3>
            <p className="text-white/70 mb-8">С моей поддержкой и разбором проектов в мини-группе</p>
            <div className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">12 000₽</div>
            <ul className="text-left my-8 space-y-3">
              <li className="flex items-center"><span className="text-green-400 mr-3">✓</span>Записи всех лекций</li>
              <li className="flex items-center"><span className="text-green-400 mr-3">✓</span>Закрытый чат участников</li>
              <li className="flex items-center"><span className="text-green-400 mr-3">✓</span>Материалы и шаблоны</li>
              <li className="flex items-center"><span className="text-green-400 mr-3">✓</span>Моя личная поддержка в чате</li>
              <li className="flex items-center"><span className="text-green-400 mr-3">✓</span>Разбор ваших проектов в группе</li>
              <li className="flex items-center"><span className="text-green-400 mr-3">✓</span>Дополнительные мастер-классы</li>
            </ul>
            <a href="https://t.me/hashslash_bot" target="_blank" className="w-full block py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-lg font-medium hover:scale-105 transition-transform duration-200">Купить курс</a>
          </div>
        </div>
      </div>
    </section>
  )
}