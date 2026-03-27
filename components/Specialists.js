const specialists = [
  {
    name: 'Анна Петрова',
    position: 'Ведущий массажист',
    experience: 'Стаж: 7 лет',
    education: 'Медицинское образование',
    specialization: 'Классический, спортивный',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Дмитрий Волков',
    position: 'Массажист-реабилитолог',
    experience: 'Стаж: 5 лет',
    education: 'Сертифицированный специалист',
    specialization: 'Спортивный, лечебный',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Елена Соколова',
    position: 'Специалист по антицеллюлитному массажу',
    experience: 'Стаж: 6 лет',
    education: 'Авторская методика',
    specialization: 'Антицеллюлитный, лимфодренажный',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
];

export default function Specialists() {
  return (
    <section id="specialists" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Наши специалисты</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialists.map((spec, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-32 h-32 mx-auto mt-8 rounded-full overflow-hidden border-4 border-teal-700 shadow-lg">
                <img src={spec.image} alt={spec.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{spec.name}</h3>
                <p className="text-teal-700 font-semibold text-sm mb-4">{spec.position}</p>
                <div className="bg-gray-50 rounded-xl p-4 text-left space-y-2">
                  <p className="text-sm text-gray-600">🎓 {spec.experience}</p>
                  <p className="text-sm text-gray-600">🏆 {spec.education}</p>
                  <p className="text-sm text-gray-600">💆 {spec.specialization}</p>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  <a href="#" className="text-2xl hover:text-teal-700 transition-colors">📷</a>
                  <a href="#" className="text-2xl hover:text-teal-700 transition-colors">💬</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}