export default function LeadMagnet() {
  return (
    <section id="lead-magnet" className="py-20 bg-gradient-to-b from-apple-light-gray to-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-semibold mb-6">Начни вайб-кодить за 15 минут!</h2>
        <p className="text-xl text-apple-gray mb-8 max-w-2xl mx-auto">
          Скачай бесплатный гайд и создай свой первый сайт с помощью AI уже сегодня. 
          Никаких сложных настроек — только практика и результат.
        </p>
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-md mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Бесплатный гайд</h3>
          <p className="text-apple-gray mb-6">
            «15 минут до первого сайта: пошаговое руководство по вайб-кодингу с AI»
          </p>
          <a 
            href="#pricing" 
            className="block w-full py-4 bg-apple-blue text-white rounded-xl text-lg font-medium hover:bg-blue-600 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Получить бесплатно
          </a>
        </div>
      </div>
    </section>
  );
}