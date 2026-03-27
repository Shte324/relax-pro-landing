'use client';

const services = [
  {
    id: 'classic',
    icon: '💆‍♂️',
    title: 'Классический массаж',
    description: 'Расслабляющий массаж всего тела. Снимает напряжение, улучшает кровообращение.',
    prices: [
      { duration: '30 мин', price: '1 500 ₽' },
      { duration: '60 мин', price: '2 000 ₽' },
      { duration: '90 мин', price: '2 800 ₽' },
    ],
  },
  {
    id: 'sports',
    icon: '🏃‍♂️',
    title: 'Спортивный массаж',
    description: 'Для спортсменов и активных людей. Восстанавливает мышцы после тренировок.',
    prices: [
      { duration: '30 мин', price: '1 800 ₽' },
      { duration: '60 мин', price: '2 500 ₽' },
      { duration: '90 мин', price: '3 500 ₽' },
    ],
  },
  {
    id: 'anticellulite',
    icon: '🌸',
    title: 'Антицеллюлитный массаж',
    description: 'Интенсивная проработка проблемных зон. Уменьшает целлюлит, улучшает тонус кожи.',
    prices: [
      { duration: '30 мин', price: '1 600 ₽' },
      { duration: '60 мин', price: '2 200 ₽' },
      { duration: '90 мин', price: '3 000 ₽' },
    ],
  },
];

export default function Services({ onSelectService }) {
  const handleSelect = (serviceName) => {
    if (onSelectService) {
      onSelectService(serviceName);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Виды массажа и цены</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center text-sm mb-6">{service.description}</p>
              <div className="border-t border-gray-200 pt-4 mb-6">
                {service.prices.map((price, idx) => (
                  <div key={idx} className="flex justify-between py-2 border-b border-gray-200 last:border-0">
                    <span className="text-gray-600">{price.duration}</span>
                    <span className="font-bold text-teal-700">{price.price}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => handleSelect(service.title)}
                className="w-full bg-transparent border-2 border-teal-700 text-teal-700 py-3 rounded-full font-semibold hover:bg-teal-700 hover:text-white transition-all duration-300"
              >
                Выбрать
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}