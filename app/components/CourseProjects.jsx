export default function CourseProjects() {
  return (
    <section className="py-20 bg-apple-light-gray">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-5xl font-semibold mb-16">Проекты, которые вы создадите на курсе</h2>
        
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
      </div>
    </section>
  );
}