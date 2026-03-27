 'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);
  const [selectedService, setSelectedService] = useState('');

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setMessage(null);

    try {
      const formData = new FormData();
      formData.append('access_key', 'e2ee8902-a299-4354-bbe1-31f60aa47bca');
      formData.append('name', data.name);
      formData.append('phone', data.phone);
      formData.append('service', data.service || 'Не выбрана');
      formData.append('comment', data.comment || '');
      formData.append('_subject', `Новая заявка с сайта Relax Pro от ${data.name}`);
      formData.append('_captcha', 'false');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setMessage({ text: 'Спасибо! Мы свяжемся с вами в ближайшее время', type: 'success' });
        reset();
        setSelectedService('');
      } else {
        throw new Error(result.message || 'Ошибка отправки');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage({ text: 'Произошла ошибка. Пожалуйста, позвоните нам напрямую', type: 'error' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage(null), 5000);
    }
  };

  const handleServiceSelect = (serviceName) => {
    setSelectedService(serviceName);
    const serviceInput = document.querySelector('select[name="service"]');
    if (serviceInput) {
      const option = Array.from(serviceInput.options).find(opt => opt.text.includes(serviceName));
      if (option) serviceInput.value = option.value;
    }
  };

  if (typeof window !== 'undefined') {
    window.selectService = handleServiceSelect;
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <h2 className="section-title">Контакты и запись</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h3>
            <p className="text-gray-600 mb-8">
              Оставьте заявку, и наш администратор свяжется с вами в течение 15 минут
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <strong className="block text-gray-900">Адрес студии:</strong>
                  <span className="text-gray-600">г. [Город], ул. Центральная, д. 15, офис 304</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <strong className="block text-gray-900">Телефон:</strong>
                  <a href="tel:+71234567890" className="text-teal-700 hover:text-teal-800">
                    +7 (123) 456-78-90
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">⏰</span>
                <div>
                  <strong className="block text-gray-900">Режим работы:</strong>
                  <span className="text-gray-600">Ежедневно: 10:00 – 22:00</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="https://wa.me/71234567890" className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
                WhatsApp
              </a>
              <a href="https://t.me/relaxpro" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
                Telegram
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Записаться онлайн</h3>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  {...register('name', { required: 'Имя обязательно' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-teal-700"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  {...register('phone', { required: 'Телефон обязателен' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-teal-700"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>
              <div>
                <select
                  {...register('service')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-teal-700"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  <option value="">Выберите услугу (необязательно)</option>
                  <option value="classic">Классический массаж — 2000₽/60мин</option>
                  <option value="sports">Спортивный массаж — 2500₽/60мин</option>
                  <option value="anticellulite">Антицеллюлитный массаж — 2200₽/60мин</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Ваши пожелания или вопросы..."
                  rows={3}
                  {...register('comment')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-teal-700 resize-none"
                />
              </div>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="consent"
                  {...register('consent', { required: 'Необходимо ваше согласие' })}
                  className="mt-1"
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  Я согласен(на) на обработку персональных данных в соответствии с{' '}
                  <button
                    type="button"
                    onClick={() => document.getElementById('privacy-modal')?.classList?.remove('hidden')}
                    className="text-teal-700 hover:underline"
                  >
                    Политикой конфиденциальности
                  </button>
                </label>
              </div>
              {errors.consent && <p className="text-red-500 text-sm">{errors.consent.message}</p>}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Отправка...' : 'Записаться на массаж'}
              </button>
              {message && (
                <div
                  className={`p-3 rounded-lg text-center ${
                    message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}
                >
                  {message.text}
                </div>
              )}
            </div>
          </form>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Как нас найти</h3>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A1234567890abcdef1234567890abcdef12345678&source=constructor"
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}