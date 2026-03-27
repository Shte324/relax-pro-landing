const benefits = [
  { icon: '🏆', title: 'Опыт 5+ лет', text: 'Сертифицированные специалисты с медицинским образованием' },
  { icon: '🏠', title: 'Выезд на дом', text: 'Работаем в студии и с выездом по городу' },
  { icon: '🌿', title: 'Натуральные масла', text: 'Используем только гипоаллергенные средства' },
  { icon: '📍', title: 'Удобное расположение', text: 'м. [Станция], 3 минуты пешком' },
  { icon: '⏰', title: 'Гибкий график', text: 'Ежедневно с 10:00 до 22:00' },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Почему выбирают нас</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}