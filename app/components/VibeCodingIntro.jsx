export default function VibeCodingIntro() {
  return (
    <section id="intro" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-semibold mb-6">Что такое вайб-кодинг?</h2>
        <p className="text-xl text-apple-gray mb-8 max-w-3xl mx-auto leading-relaxed">
          Это революционный подход к разработке, где вы управляете искусственным интеллектом как дирижер оркестром. Вместо написания каждой строчки кода, вы формулируете идеи и задачи, а AI воплощает их в жизнь. Это не замена разработчика, а его усиление, позволяющее создавать сложные проекты быстрее и с большим удовольствием.
        </p>
        <div className="bg-apple-light-gray rounded-2xl p-6 text-left max-w-2xl mx-auto">
            <p className="font-semibold text-apple-black mb-2">Пример успеха из индустрии:</p>
            <p className="text-apple-gray mb-3">Стартап Vibe Coder Base44, основанный одним человеком, был продан Wix за $80 млн всего через 6 месяцев после запуска. Это доказывает невероятный потенциал подхода.</p>
            <a 
              href="https://techcrunch.com/2025/06/18/6-month-old-solo-owned-vibe-coder-base44-sells-to-wix-for-80m-cash/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-apple-blue font-medium hover:underline"
            >
              Читать историю на TechCrunch →
            </a>
        </div>
      </div>
    </section>
  );
}