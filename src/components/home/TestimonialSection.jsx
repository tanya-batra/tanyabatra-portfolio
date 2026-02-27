"use client";
import axios from "axios";
import { Code2, MessageSquareQuote, Quote, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import Loader from "../loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/testimonials");
        setTestimonials(res.data);
      } catch (error) {
        console.log("Error while fetching testimonials", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <section
      id="testimonials"
      className="relative py-24 max-sm:py-16 px-4 bg-white dark:bg-[#0b0d14]"
      aria-labelledby="testimonials-heading"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 relative">
        {/* Badge */}
        <div
          className="mx-auto w-fit flex items-center gap-2 px-4 py-1.5 rounded-full
      bg-[#496cbf]/10 backdrop-blur-md ring-1 ring-[#496cbf]/30
      hover:scale-105 transition-transform duration-300 group"
        >
          <MessageSquareQuote className="h-4 w-4 text-[#496cbf] group-hover:text-indigo-500 transition-colors duration-300" />
          <span className="text-xs font-semibold text-[#496cbf] group-hover:text-indigo-500 tracking-tight">
            Client Feedback
          </span>
        </div>

        {/* Title */}
        <h2
          id="testimonials-heading"
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mt-4"
        >
          Trusted by Clients & Teams
          <span className="block h-1 w-24 mx-auto rounded-full bg-[#496cbf]/90 mt-3" />
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          Clients appreciate my clean coding style, scalable solutions, and on-time delivery — a 
          <span className="text-[#496cbf] font-semibold">
            {" "}
           Results-driven and developer-focused approach.
          </span>
        </p>
      </div>

      {/* Testimonials Grid */}
      {loading ? (
        <Loader text="Loading Testimonials..." />
      ) : (
        <div className="max-w-6xl mx-auto ">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <article
                  itemScope
                  itemType="https://schema.org/Review"
                  className="group relative overflow-hidden rounded-2xl
              border border-neutral-200 dark:border-white/10
              bg-white/70 dark:bg-[#0b0f1f]/80
              backdrop-blur-xl p-8
              shadow-[0_10px_20px_rgba(0,0,0,0.12)]
              transition-all duration-500
              hover:-translate-y-2
              hover:shadow-[0_20px_30px_rgba(73,108,191,0.35)]"
                >
                  {/* Header Row */}
                  <div className="relative z-10 flex items-center justify-between mb-6">
                    {/* Quote Icon */}
                    <Quote className="h-10 w-10 text-[#496cbf]/40 group-hover:text-[#496cbf] transition-colors duration-300" />
                  </div>

                  {/* Feedback */}
                  <p
                    itemProp="reviewBody"
                    className="relative z-10 text-gray-700 dark:text-gray-300
                leading-relaxed text-[15.5px] mb-8 italic"
                  >
                    “{testimonial.content}”
                  </p>

                  {/* Divider */}
                  <div className="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-[#496cbf]/40 to-transparent mb-6" />

                  {/* Author Section */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <p
                        itemProp="author"
                        className="font-semibold text-gray-900 dark:text-white tracking-tight"
                      >
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default TestimonialSection;
