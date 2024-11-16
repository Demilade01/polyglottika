import { useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";

export default function () {
  // State to toggle between monthly and yearly subscription
  const [isYearly, setIsYearly] = useState(false);

  // Define your pricing here for both monthly and yearly options
  const plans = [
    { name: "Free", monthlyPrice: 0, yearlyPrice: 0 },
    { name: "Basic", monthlyPrice: 10, yearlyPrice: 100 },
    { name: "Premium", monthlyPrice: 100, yearlyPrice: 1000 },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center my-12">
      {/* Toggle Switch */}
      <div className="flex mb-6">
        <button
          className={`px-4 py-2 ${!isYearly ? "bg-black text-white" : "bg-gray-300 text-black"}`}
          onClick={() => setIsYearly(false)}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 ${isYearly ? "bg-black text-white" : "bg-gray-300 text-black"}`}
          onClick={() => setIsYearly(true)}
        >
          Yearly
        </button>
      </div>

      {/* Pricing Plans */}
      <div className="w-full hidden h-full max-w-5xl min-[940px]:flex justify-center gap-12 flex-wrap">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="p-6 dark:bg-[#2a2a2a] dark:text-primary bg-[#ffcdc6] h-96 flex flex-col items-center rounded-tr-[36px] rounded-bl-[36px]"
          >
            <p className="text-2xl mb-4 font-primary text-[#fff] font-semibold">
              {plan.name}
            </p>
            <p className="text-xs font-primary my-1">Lorem ipsum dolor sit ametur adipisi</p>
            <p className="text-xs font-primary my-1">Lorem ipsum dolor sit ametur adipisi</p>
            <p className="text-xs font-primary my-1">Lorem ipsum dolor sit ametur adipisi</p>
            <p className="mt-28 text-3xl font-primary text-[#fff] font-bold">
              ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}/
              <span className="text-lg font-semibold">{isYearly ? "Yr" : "Mo"}</span>
            </p>
            <button className="my-4 bg-black text-white px-10 py-2 rounded-xl">
              Choose Plan
            </button>
          </div>
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="w-full block min-[940px]:hidden">
        <Swiper
          className="mySwiper"
          slidesPerView={3}
          spaceBetween={24}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            200: { slidesPerView: 1 },
            520: { slidesPerView: 2, spaceBetween: 12 },
            600: { slidesPerView: 2, spaceBetween: 48 },
            840: { slidesPerView: 3 },
          }}
        >
          {plans.map((plan, index) => (
            <SwiperSlide key={index}>
              <div className="dark:bg-[#2a2a2a] w-full pt-4 dark:text-primary bg-[#ffcdc6] h-96 flex flex-col items-center rounded-tr-[36px] rounded-bl-[36px]">
                <p className="text-2xl mb-4 font-primary text-[#fff] font-semibold">
                  {plan.name}
                </p>
                <p className="text-xs font-primary my-1">Lorem ipsum dolor sit ametur adipisi</p>
                <p className="text-xs font-primary my-1">Lorem ipsum dolor sit ametur adipisi</p>
                <p className="text-xs font-primary my-1">Lorem ipsum dolor sit ametur adipisi</p>
                <p className="mt-28 text-3xl font-primary text-[#fff] font-bold">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}/
                  <span className="text-lg font-semibold">{isYearly ? "Yr" : "Mo"}</span>
                </p>
                <button className="my-4 bg-black text-white px-10 py-2 rounded-xl">
                  Choose Plan
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
