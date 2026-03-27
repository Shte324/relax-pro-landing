'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reviews = [
  {
    name: 'Мария Иванова',
    text: 'Отличный массаж! Ходила на классический массаж к Анне. Очень профессиональный подход, приятная атмосфера. После сеанса чувствую себя заново рожденной. Обязательно приду еще!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
  },
  {
    name: 'Алексей Смирнов',
    text: 'Спортивный массаж у Дмитрия — это что-то невероятное! После интенсивных тренировок восстанавливаюсь за один сеанс. Рекомендую всем спортсменам и не только.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    name: 'Екатерина Волкова',
    text: 'Антицеллюлитный массаж — просто бомба! Елена творит чудеса. Уже после 3 сеансов заметила результат. Кожа стала упругой, целлюлит уменьшился. Спасибо огромное!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/89.jpg',
  },
  {
    name: 'Игорь Петров',
    text: 'Очень удобно, что есть выезд на дом. Заказал массаж после рабочего дня, даже выходить не пришлось. Качество на высоте, спасибо Relax Pro!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/41.jpg',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Отзывы наших клиентов</h2>
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="pb-12"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="text-center p-8 bg-gray-50 rounded-2xl">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-teal-700">
                    <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-lg italic text-gray-600 mb-4">"{review.text}"</p>
                  <div className="mt-4">
                    <strong className="block text-gray-900">{review.name}</strong>
                    <span className="text-yellow-500 text-lg">{"★".repeat(review.rating)}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}