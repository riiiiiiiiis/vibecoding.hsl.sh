export default function Footer() {
  return (
    <footer className="bg-apple-light-gray py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <h5 className="text-sm font-semibold mb-4 text-apple-black">Вайб-кодинг с AI</h5>
            <p className="text-apple-gray text-sm leading-relaxed">Создавай будущее веб-разработки вместе с нами. Изучай современные AI-инструменты и воплощай идеи в жизнь.</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold mb-4 text-apple-black">Навигация</h5>
            <ul className="space-y-3">
              <li><a href="#testimonials" className="text-apple-gray text-sm hover:text-apple-blue transition-colors">Отзывы</a></li>
              <li><a href="#program" className="text-apple-gray text-sm hover:text-apple-blue transition-colors">Программа</a></li>
              <li><a href="#pricing" className="text-apple-gray text-sm hover:text-apple-blue transition-colors">Тарифы</a></li>
              <li><a href="#lead-magnet" className="text-apple-gray text-sm hover:text-apple-blue transition-colors">Бесплатный гайд</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold mb-4 text-apple-black">Мои ресурсы</h5>
            <ul className="space-y-3">
              <li><a href="https://t.me/r1iiis" target="_blank" rel="noopener noreferrer" className="text-apple-gray text-sm hover:text-apple-blue transition-colors">Личный блог в Telegram</a></li>
              <li><a href="https://t.me/hashslash_bot" target="_blank" rel="noopener noreferrer" className="text-apple-gray text-sm hover:text-apple-blue transition-colors">Бот для записи</a></li>
              <li><a href="https://github.com/riiiiiiiiis" target="_blank" rel="noopener noreferrer" className="text-apple-gray text-sm hover:text-apple-blue transition-colors">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold mb-4 text-apple-black">Правовая информация</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-apple-gray text-sm hover:text-apple-blue transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="text-apple-gray text-sm hover:text-apple-blue transition-colors">Пользовательское соглашение</a></li>
              <li><a href="#" className="text-apple-gray text-sm hover:text-apple-blue transition-colors">Публичная оферта</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-gray-200 text-center">
          <p className="text-apple-gray text-sm">© 2025 Вайб-кодинг с AI. Все права защищены.<br />
          Сделано с ❤️ для сообщества разработчиков</p>
        </div>
      </div>
    </footer>
  );
}