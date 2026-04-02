export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        }}
      />
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Массаж в Москве — дорогая Лора, снимите боль и напряжение за 1 сеанс
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Классический, спортивный, антицеллюлитный массаж от дипломированных специалистов
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Записаться онлайн
          </a>
          <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-500">
            <span>⭐ Опыт 5+ лет</span>
            <span>🏆 500+ довольных клиентов</span>
            <span>💳 Работаем с 2018 года</span>
          </div>
        </div>
      </div>
    </section>
  );
}