export default function CTA() {
  return (
    <section id="apply" className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-semibold mb-6">Готовы начать творить с AI?</h2>
        <p className="text-2xl mb-10 opacity-90">Забронируй место через Telegram-бот или напиши мне в личку, если остались вопросы.</p>
        
        <div className="space-y-6">
          <a href="https://t.me/hashslash_bot" target="_blank" rel="noopener noreferrer" className="block max-w-md mx-auto py-4 px-8 bg-apple-black text-white rounded-2xl text-lg font-medium hover:-translate-y-1 transition-all hover:shadow-2xl text-center">Забронировать в Telegram-боте</a>
          <p className="text-lg opacity-90">
            Есть вопросы? Пиши мне в личку: <a href="https://t.me/r1iiis" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline font-medium">@r1iiis</a>
          </p>
        </div>
      </div>
    </section>
  );
}