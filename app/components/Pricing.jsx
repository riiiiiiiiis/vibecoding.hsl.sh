export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-apple-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-apple-gray text-xl mb-2">Тарифы</p>
        <h2 className="text-center text-5xl font-semibold mb-16">Выберите подходящий пакет</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Вуайерист */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center transition-all duration-300 border border-gray-100 hover:scale-[1.02] hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-3 text-apple-black">Вуайерист</h3>
            <p className="text-apple-gray mb-8">Доступ в чат участников</p>
            <div className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">2 990₽</div>
            <ul className="text-left my-8 space-y-3">
              <li className="flex items-center text-apple-black">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-3">✓</span>
                Записи всех лекций
              </li>
              <li className="flex items-center text-apple-black">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-3">✓</span>
                Закрытый чат участников
              </li>
              <li className="flex items-center text-apple-black">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-3">✓</span>
                Материалы и шаблоны
              </li>
            </ul>
            <a href="#apply" className="block w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl text-lg font-medium hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">Выбрать</a>
          </div>
          
          {/* Вайбкодер */}
          <div className="bg-white rounded-3xl p-8 text-center border-2 border-blue-600 relative scale-105 shadow-xl transition-all duration-300 hover:scale-[1.07] hover:shadow-2xl">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium">Популярный</div>
            <h3 className="text-2xl font-semibold mb-3 text-apple-black">Вайбкодер</h3>
            <div className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">11 991₽</div>
            <ul className="text-left my-8 space-y-3">
              <li className="flex items-center text-apple-black">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-3">✓</span>
                Всё из предыдущего пакета
              </li>
              <li className="flex items-center text-apple-black">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-3">✓</span>
                Моя поддержка
              </li>
              <li className="flex items-center text-apple-black">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-3">✓</span>
                Разбор ваших проектов
              </li>
              <li className="flex items-center text-apple-black">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-3">✓</span>
                Дополнительные материалы
              </li>
            </ul>
            <a href="#apply" className="block w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl text-lg font-medium hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">Выбрать</a>
          </div>
          
          {/* Визионер */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center transition-all duration-300 border border-gray-100 hover:scale-[1.02] hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-3 text-apple-black">Визионер</h3>
            <p className="text-apple-gray mb-8">Личные созвоны в удобное время</p>
            <div className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">23 992₽</div>
            <ul className="text-left my-8 space-y-3">
              <li className="flex items-center text-apple-black">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-3">✓</span>
                Всё из предыдущих пакетов
              </li>
              <li className="flex items-center text-apple-black">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-3">✓</span>
                Четыре созвона 1 на 1
              </li>
              <li className="flex items-center text-apple-black">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-3">✓</span>
                Разбираем твою идею и вайбкодим ее вместе
              </li>
              <li className="flex items-center text-apple-black">
                <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs mr-3">✓</span>
                Гибкое расписание
              </li>
            </ul>
            <a href="#apply" className="block w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl text-lg font-medium hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">Выбрать</a>
          </div>
        </div>
      </div>
    </section>
  );
}