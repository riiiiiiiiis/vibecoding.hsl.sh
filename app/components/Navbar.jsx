export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-white/80 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold text-apple-black">Вайб-кодинг</a>
        <ul className="hidden md:flex space-x-8">
          <li><a href="#about" className="text-sm text-apple-black/80 hover:text-apple-black transition-colors">О курсе</a></li>
          <li><a href="#program" className="text-sm text-apple-black/80 hover:text-apple-black transition-colors">Программа</a></li>
          <li><a href="#pricing" className="text-sm text-apple-black/80 hover:text-apple-black transition-colors">Тарифы</a></li>
          <li><a href="#audience" className="text-sm text-apple-black/80 hover:text-apple-black transition-colors">Для кого</a></li>
        </ul>
        <a href="#apply" className="bg-apple-blue text-white px-5 py-2 rounded-full text-sm hover:bg-blue-600 transition-all hover:scale-105">Записаться</a>
      </div>
    </nav>
  );
}