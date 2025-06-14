'use client';

import AccordionItem from './AccordionItem';

export default function Program() {
  return (
    <section id="program" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-center text-apple-gray text-xl mb-2">Чему ты научишься</p>
        <h2 className="text-center text-5xl font-semibold mb-16">Программа интенсива</h2>
        
        <div className="space-y-4">
          <AccordionItem title="Модуль 1. Основы Вайб-кодинга и знакомство с AI">
            <p className="mb-4">Поймёте, что такое генеративный ИИ и как он помогает в разработке. Научитесь быстро создавать базовые сайты и интерактивные элементы с помощью ChatGPT, Claude и Google AI Studio.</p>
            <p className="mb-5"><strong className="text-apple-black">Инструменты:</strong> ChatGPT, Claude, Google AI Studio, Netlify Drop.</p>
            <ul className="space-y-2 pl-5">
              <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Введение в Вайб-кодинг. Эволюция программирования.</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Обзор основных LLM для генерации кода.</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Первый сайт за 5 минут: практика с AI.</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Основы промпт-инжиниринга для веб-разработки.</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Публикация вашего первого AI-сайта.</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="Модуль 2. Итеративная разработка и интерактивность">
            <p className="mb-4">Научитесь дорабатывать и улучшать сгенерированные сайты через диалог с AI. Разберетесь, как добавлять интерактивные элементы, анимации, работать с изображениями и стилями.</p>
            <p className="mb-5"><strong className="text-apple-black">Ключевые навыки:</strong> Уточнение запросов, добавление CSS и JavaScript через AI, работа с SVG и эмодзи.</p>
            <ul className="space-y-2 pl-5">
              <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>"Добавь фишку": итеративное улучшение сайта.</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Работа с изображениями: ссылки, SVG, эмодзи.</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Стилизация через AI: от "стиля Apple" до кастомных тем.</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Добавление JavaScript-интерактивности.</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Разбор кейсов: создание сложных элементов.</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="Модуль 3. Создание Telegram-бота с помощью AI">
            <p className="mb-4">Научитесь создавать полноценного Telegram-бота с помощью AI инструментов. От простых команд до интеллектуального взаимодействия с пользователями — всё без написания кода вручную.</p>
            <p className="mb-5"><strong className="text-apple-black">Инструменты:</strong> ChatGPT/Claude для генерации кода, Telegram Bot API, хостинг-платформы для запуска бота.</p>
            <ul className="space-y-2 pl-5">
              <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Создание бота в Telegram: получение токена и настройка.</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Генерация базового функционала бота с помощью AI.</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Добавление команд, обработка сообщений и inline-кнопок.</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Интеграция с внешними API и сервисами.</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Деплой бота на бесплатные хостинг-платформы.</li>
            </ul>
          </AccordionItem>
        </div>
      </div>
    </section>
  );
}