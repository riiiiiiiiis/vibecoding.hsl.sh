'use client';

import AccordionItem from './AccordionItem';

export default function FAQ() {
  return (
    <section className="py-20 bg-apple-light-gray">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-center text-apple-gray text-xl mb-2">Вопросы и ответы</p>
        <h2 className="text-center text-5xl font-semibold mb-16">Часто задаваемые вопросы</h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          <AccordionItem title="Сколько длится интенсив?">
            <p>3 недели с тремя практическими онлайн-лекциями. Также будут доступны записи всех занятий и дополнительные материалы.</p>
          </AccordionItem>

          <AccordionItem title="Нужны ли предварительные знания?">
            <p>Нет, курс рассчитан на новичков. Я начну с самых основ и покажу, как создавать веб-сайты, даже если ты никогда не писал код.</p>
          </AccordionItem>

          <AccordionItem title="Какие инструменты мы будем использовать?">
            <p>В основном это ChatGPT, Claude и Google AI Studio. Большинство из них имеют бесплатные версии для начала работы. Мы также покажем, как публиковать сайты с помощью Netlify Drop.</p>
          </AccordionItem>
        </div>
      </div>
    </section>
  );
}