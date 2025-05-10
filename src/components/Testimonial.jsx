import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
    {
        name: 'Jane Doe',
        role: 'Happy Customer',
        message: 'HillBasket has amazing fresh products and timely delivery. Highly recommended!',
    },
    {
        name: 'John Smith',
        role: 'Verified Buyer',
        message: 'I love the user-friendly design and great discounts!',
    },
    {
        name: 'Sarah Johnson',
        role: 'Loyal Customer',
        message: 'I’ve been using HillBasket for months. The quality never disappoints.',
    },
];

const Testimonial = () => {
    return (
        <section className="bg-[#1E293B] py-16 px-4" id='testimonial'>
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-amber-400 mb-10">
                    What Our Customers Say
                </h2>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2500 }}
                    loop
                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-[#3e4a5e] bg-opacity-10 text-[#F1F5F9] rounded-2xl shadow-lg p-8">
                                <p className="italic text-lg mb-4">"{t.message}"</p>
                                <p className="font-semibold text-amber-400">{t.name}</p>
                                <p className="text-sm text-cyan-400">{t.role}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>

    );
}

export default Testimonial
