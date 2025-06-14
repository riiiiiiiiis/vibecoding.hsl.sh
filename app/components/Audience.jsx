export default function Audience() {
  return (
    <section id="audience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-5xl font-semibold mb-16">Для кого этот курс</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-apple-light-gray rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Начинающих без опыта</h3>
            <p className="text-apple-gray leading-relaxed">Если ты всегда хотел создавать сайты или приложения, но боялся сложности программирования.</p>
          </div>
          <div className="bg-apple-light-gray rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Дизайнеров и креаторов</h3>
            <p className="text-apple-gray leading-relaxed">Кто хочет быстро прототипировать свои идеи и оживлять дизайны без привлечения разработчиков.</p>
          </div>
          <div className="bg-apple-light-gray rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Предпринимателей</h3>
            <p className="text-apple-gray leading-relaxed">Кто хочет самостоятельно создавать MVP, лендинги и простые веб-инструменты для своего бизнеса.</p>
          </div>
        </div>
      </div>
    </section>
  );
}