'use client';

import { useState } from 'react';
import AccordionItem from './AccordionItem';

export default function Program() {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionData = [
    {
      title: "Модуль 1. Основы вайб-кодинга с AI",
      content: (
        <div>
          <p className="mb-4">Знакомство с AI-инструментами для веб-разработки. Создаем первый сайт за 15 минут.</p>
          <ul className="space-y-2 pl-5">
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Введение в ChatGPT, Claude и Google AI Studio</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Создание первого сайта через чат с AI</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Публикация на Netlify Drop</li>
          </ul>
        </div>
      )
    },
    {
      title: "Модуль 2. Продвинутые техники и стилизация", 
      content: (
        <div>
          <p className="mb-4">Учимся улучшать дизайн, добавлять интерактивность и создавать адаптивные интерфейсы.</p>
          <ul className="space-y-2 pl-5">
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Стилизация с помощью AI</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Добавление JavaScript-функций</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Работа с изображениями и медиа</li>
          </ul>
        </div>
      )
    },
    {
      title: "Модуль 3. Создание Telegram-ботов",
      content: (
        <div>
          <p className="mb-4">Разрабатываем полноценного Telegram-бота с нуля, используя только AI-инструменты.</p>
          <ul className="space-y-2 pl-5">
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Настройка бота в Telegram</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Программирование команд через AI</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Деплой и тестирование</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <section id="program" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-center text-apple-gray text-xl mb-2">Чему ты научишься</p>
        <h2 className="text-center text-5xl font-semibold mb-16">Программа интенсива</h2>
        
        <div className="bg-white rounded-2xl p-2">
          <div className="space-y-0">
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {item.content}
              </AccordionItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}