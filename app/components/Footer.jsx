export default function Footer() {
  return (
    <footer className="bg-apple-light-gray py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <h5 className="text-sm font-semibold mb-4 text-apple-black">Вайб-кодинг с AI</h5>
            <p className="text-apple-gray text-sm leading-relaxed">Создавайте будущее веб-разработки вместе с нами.</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold mb-4 text-apple-black">Навигация</h5>
            <ul className="space-y-3">
              <li><a href="#about" className="text-apple-gray text-sm hover:text-apple-blue transition-colors">О курсе</a></li>
              <li><a href="#program" className="text-apple-gray text-sm hover:text-apple-blue transition-colors">Программа</a></li>
              <li><a href="#pricing" className="text-apple-gray text-sm hover:text-apple-blue transition-colors">Тарифы</a></li>
              <li><a href="#audience" className="text-apple-gray text-sm hover:text-apple-blue transition-colors">Для кого</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold mb-4 text-apple-black">Инструменты</h5>
            <ul className="space-y-3">
              <li><a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer" className="text-apple-gray text-sm hover:text-apple-blue transition-colors">ChatGPT</a></li>
              <li><a href="https://claude.ai/" target="_blank" rel="noopener noreferrer" className="text-apple-gray text-sm hover:text-apple-blue transition-colors">Claude</a></li>
              <li><a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" className="text-apple-gray text-sm hover:text-apple-blue transition-colors">Google AI Studio</a></li>
              <li><a href="https://app.netlify.com/drop" target="_blank" rel="noopener noreferrer" className="text-apple-gray text-sm hover:text-apple-blue transition-colors">Netlify Drop</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold mb-4 text-apple-black">Связь</h5>
            <ul className="space-y-3">
              <li><a href="https://t.me/hashslash_bot" target="_blank" rel="noopener noreferrer" className="text-apple-gray text-sm hover:text-apple-blue transition-colors">Telegram-бот для записи</a></li>
              <li><a href="https://t.me/r1iiis" target="_blank" rel="noopener noreferrer" className="text-apple-gray text-sm hover:text-apple-blue transition-colors">Личка @r1iiis</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-gray-200 text-center">
          <p className="text-apple-gray text-sm">© 2025 хсл щ<br />
          <a href="#" className="text-apple-gray hover:text-apple-blue transition-colors">Политика обработки персональных данных</a> | 
          <a href="#" className="text-apple-gray hover:text-apple-blue transition-colors">Публичная оферта</a></p>
        </div>
      </div>
    </footer>
  );
}