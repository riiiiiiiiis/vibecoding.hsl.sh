export default function StudentProjects() {
  return (
    <section className="py-20 bg-apple-light-gray">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-5xl font-semibold mb-16">Реальные проекты наших учеников</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-48 mb-6 flex items-center justify-center">
              <span className="text-4xl">🏪</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Интернет-магазин одежды</h3>
            <p className="text-apple-gray mb-4">Полноценный e-commerce с корзиной, каталогом товаров и интеграцией с платежами.</p>
            <div className="flex items-center gap-2">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">ChatGPT</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg">
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl h-48 mb-6 flex items-center justify-center">
              <span className="text-4xl">🤖</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Telegram-бот для записи</h3>
            <p className="text-apple-gray mb-4">Автоматизированная система записи клиентов с календарем и напоминаниями.</p>
            <div className="flex items-center gap-2">
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Claude</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg">
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl h-48 mb-6 flex items-center justify-center">
              <span className="text-4xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Портфолио-сайт</h3>
            <p className="text-apple-gray mb-4">Современный адаптивный сайт-портфолио с анимациями и контактной формой.</p>
            <div className="flex items-center gap-2">
              <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">Next.js</span>
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">AI Studio</span>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl text-apple-gray mb-6">Все эти проекты созданы за время интенсива!</p>
          <a href="#program" className="inline-block bg-apple-blue text-white px-8 py-4 rounded-full text-lg hover:bg-blue-600 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl">
            Посмотреть программу
          </a>
        </div>
      </div>
    </section>
  );
}