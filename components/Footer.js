'use client';

import { useState } from 'react';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-teal-700 mb-4">Relax Pro</div>
              <p className="text-sm">Профессиональный массаж в [Город]. Забота о вашем здоровье и хорошем самочувствии.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#benefits" className="hover:text-teal-700 transition">Преимущества</a></li>
                <li><a href="#services" className="hover:text-teal-700 transition">Услуги и цены</a></li>
                <li><a href="#specialists" className="hover:text-teal-700 transition">Специалисты</a></li>
                <li><a href="#reviews" className="hover:text-teal-700 transition">Отзывы</a></li>
                <li><a href="#contact" className="hover:text-teal-700 transition">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:+71234567890" className="hover:text-teal-700 transition">+7 (123) 456-78-90</a></li>
                <li><a href="mailto:info@relaxpro.ru" className="hover:text-teal-700 transition">info@relaxpro.ru</a></li>
                <li>г. [Город], ул. Центральная, д. 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2026 Relax Pro. Все права защищены.</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-teal-500 hover:text-teal-400 mt-2"
            >
              Политика конфиденциальности
            </button>
          </div>
        </div>
      </footer>

      {/* Модальное окно */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" 
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">Политика конфиденциальности</h2>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="text-2xl hover:text-gray-700 transition"
              >
                &times;
              </button>
            </div>
            <div className="p-6 space-y-4 text-gray-600">
              <p>
                <strong>1. Общие положения</strong><br />
                Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных».
              </p>
              <p>
                <strong>2. Какие данные мы собираем</strong><br />
                При заполнении формы на сайте мы собираем: имя, номер телефона, выбранную услугу.
              </p>
              <p>
                <strong>3. Цели обработки данных</strong><br />
                Ваши данные используются для связи с вами для подтверждения записи.
              </p>
              <p>
                <strong>4. Сроки хранения данных</strong><br />
                Ваши данные хранятся не дольше 3 лет с момента последнего обращения.
              </p>
              <p>
                <strong>5. Ваши права</strong><br />
                Вы можете потребовать удалить ваши данные, написав нам на email: <a href="mailto:info@relaxpro.ru" className="text-teal-700 hover:underline">info@relaxpro.ru</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}