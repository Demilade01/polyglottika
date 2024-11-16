import book from '../../assets/images/book_image.png'
import next from '../../assets/images/next.png'
import star from '../../assets/images/star.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

export default function () {

    const arr = [1, 2, 3, 4, 5, 6]

    return (
        <div className='w-full max-w-7xl overflow-x-hidden'>
            <div className='my-8'>
                <div className='w-full flex justify-between px-4'>
                    <p className="text-2xl font-primary font-semibold dark:text-primary text-white">NEW BOOKS</p>
                    <div className='flex items-center gap-4'>
                        <p className="font-primary dark:text-primary text-white">Show more</p>
                        <img className='w-4 h-4' src={next} alt="next" />
                    </div>
                </div>
                <div className='flex min-[1290px]:hidden mt-8 m-auto w-full justify-center'>
                    <Swiper
                        className="mySwiper flex justify-center"
                        slidesPerView={5}
                        spaceBetween={32}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        breakpoints={{
                            200: {
                                slidesPerView: 1,
                            },
                            360: {
                                slidesPerView: 2,
                                spaceBetween: 12
                            },
                            600: {
                                slidesPerView: 3,
                                spaceBetween: 24
                            },
                            840: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                        }}
                    >
                        <div className='flex gap-5 flex-wrap justify-center'>
                            {arr?.map(item => {
                                return (
                                    <SwiperSlide key={item}>
                                        <div key={item} className='mb-12 mt-12 min-[1283px]:mb-0 w-full h-64 dark:bg-[#2a2a2a]  bg-[#ffdbd6] flex flex-col items-center rounded-2xl'>
                                            <div className=' relative z-10 -top-12'>
                                                <img className='w-40 h-56' src={book} alt="book" />
                                                <p className='font-primary text-black dark:text-primary font-semibold text-sm text-start'>The Queen's Gambit</p>
                                                <p className='text-xs font-primary dark:text-primary text-gray-500'>By Waller Tavis</p>
                                                <div className='my-2 flex justify-between items-center'>
                                                    <div className='flex items-center gap-1'>
                                                        <img className='w-4 h-4' src={star} alt="star" />
                                                        <p className='text-xs dark:text-primary font-primary'>4.9</p>
                                                    </div>
                                                    <button className='px-6 py-1 font-primary text-sm rounded-2xl bg-[#45AAF2] text-white'>Buy</button>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                )
                            })}
                        </div>
                    </Swiper>
                </div>
                <div className='mt-20 hidden min-[1290px]:block'>
                    <div className='flex gap-5 flex-wrap justify-center'>
                        {arr?.map(item => {
                            return (
                                <div key={item} className='mb-12 min-[1283px]:mb-0 w-48 h-64 dark:bg-[#2a2a2a]  bg-[#ffdbd6] flex flex-col items-center rounded-2xl'>
                                    <div className=' relative -top-12'>
                                        <img className='w-40 h-56' src={book} alt="book" />
                                        <p className='font-primary text-black dark:text-primary font-semibold text-sm text-start'>The Queen's Gambit</p>
                                        <p className='text-xs font-primary dark:text-primary text-gray-500'>By Waller Tavis</p>
                                        <div className='my-2 flex justify-between items-center'>
                                            <div className='flex items-center gap-1'>
                                                <img className='w-4 h-4' src={star} alt="star" />
                                                <p className='text-xs dark:text-primary font-primary'>4.9</p>
                                            </div>
                                            <button className='px-6 py-1 font-primary text-sm rounded-2xl bg-[#45AAF2] text-white'>Buy</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='my-8'>
                <div className='w-full flex justify-between px-4'>
                    <p className="text-2xl font-primary dark:text-primary font-semibold text-white">TOP RATED BOOKS</p>
                    <div className='flex items-center gap-4'>
                        <p className="font-primary dark:text-primary text-white">Show more</p>
                        <img className='w-4 h-4' src={next} alt="next" />
                    </div>
                </div>
                <div className='flex min-[1290px]:hidden mt-8 m-auto w-full justify-center'>
                    <Swiper
                        className="mySwiper flex justify-center"
                        slidesPerView={5}
                        spaceBetween={32}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        breakpoints={{
                            200: {
                                slidesPerView: 1,
                            },
                            360: {
                                slidesPerView: 2,
                                spaceBetween: 12
                            },
                            600: {
                                slidesPerView: 3,
                                spaceBetween: 24
                            },
                            840: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                        }}
                    >
                        <div className='flex gap-5 flex-wrap justify-center'>
                            {arr?.map(item => {
                                return (
                                    <SwiperSlide style={{ innerWidth: 120 }}>
                                        <div key={item} className='mb-12 mt-12 min-[1283px]:mb-0 w-full h-64 dark:bg-[#2a2a2a]  bg-[#ffdbd6] flex flex-col items-center rounded-2xl'>
                                            <div className=' relative z-10 -top-12'>
                                                <img className='w-40 h-56' src={book} alt="book" />
                                                <p className='font-primary text-black dark:text-primary font-semibold text-sm text-start'>The Queen's Gambit</p>
                                                <p className='text-xs font-primary dark:text-primary text-gray-500'>By Waller Tavis</p>
                                                <div className='my-2 flex justify-between items-center'>
                                                    <div className='flex items-center gap-1'>
                                                        <img className='w-4 h-4' src={star} alt="star" />
                                                        <p className='text-xs dark:text-primary font-primary'>4.9</p>
                                                    </div>
                                                    <button className='px-6 py-1 font-primary text-sm rounded-2xl bg-[#45AAF2] text-white'>Buy</button>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                )
                            })}
                        </div>
                    </Swiper>
                </div>
                <div className='mt-20 hidden min-[1290px]:block'>
                    <div className='flex gap-5 flex-wrap justify-center'>
                        {arr?.map(item => {
                            return (
                                <div key={item} className='mb-12 min-[1283px]:mb-0 w-48 h-64 dark:bg-[#2a2a2a]  bg-[#ffdbd6] flex flex-col items-center rounded-2xl'>
                                    <div className=' relative -top-12'>
                                        <img className='w-40 h-56' src={book} alt="book" />
                                        <p className='font-primary text-black dark:text-primary font-semibold text-sm text-start'>The Queen's Gambit</p>
                                        <p className='text-xs font-primary dark:text-primary text-gray-500'>By Waller Tavis</p>
                                        <div className='my-2 flex justify-between items-center'>
                                            <div className='flex items-center gap-1'>
                                                <img className='w-4 h-4' src={star} alt="star" />
                                                <p className='text-xs dark:text-primary font-primary'>4.9</p>
                                            </div>
                                            <button className='px-6 py-1 font-primary text-sm rounded-2xl bg-[#45AAF2] text-white'>Buy</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='my-8'>
                <div className='w-full flex justify-between px-4'>
                    <p className="text-2xl font-primary font-semibold dark:text-primary text-white">POPULAR BOOKS</p>
                    <div className='flex items-center gap-4'>
                        <p className="font-primary dark:text-primary text-white">Show more</p>
                        <img className='w-4 h-4' src={next} alt="next" />
                    </div>
                </div>
                <div className='flex min-[1290px]:hidden mt-8 m-auto w-full justify-center'>
                    <Swiper
                        className="mySwiper flex justify-center"
                        slidesPerView={5}
                        spaceBetween={32}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        breakpoints={{
                            200: {
                                slidesPerView: 1,
                            },
                            360: {
                                slidesPerView: 2,
                                spaceBetween: 12
                            },
                            600: {
                                slidesPerView: 3,
                                spaceBetween: 24
                            },
                            840: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                        }}
                    >
                        <div className='flex gap-5 flex-wrap justify-center'>
                            {arr?.map(item => {
                                return (
                                    <SwiperSlide style={{ innerWidth: 120 }}>
                                        <div key={item} className='mb-12 mt-12 min-[1283px]:mb-0 w-full h-64 dark:bg-[#2a2a2a]  bg-[#ffdbd6] flex flex-col items-center rounded-2xl'>
                                            <div className=' relative z-10 -top-12'>
                                                <img className='w-40 h-56' src={book} alt="book" />
                                                <p className='font-primary text-black dark:text-primary font-semibold text-sm text-start'>The Queen's Gambit</p>
                                                <p className='text-xs font-primary dark:text-primary text-gray-500'>By Waller Tavis</p>
                                                <div className='my-2 flex justify-between items-center'>
                                                    <div className='flex items-center gap-1'>
                                                        <img className='w-4 h-4' src={star} alt="star" />
                                                        <p className='text-xs dark:text-primary font-primary'>4.9</p>
                                                    </div>
                                                    <button className='px-6 py-1 font-primary text-sm rounded-2xl bg-[#45AAF2] text-white'>Buy</button>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                )
                            })}
                        </div>
                    </Swiper>
                </div>
                <div className='mt-20 hidden min-[1290px]:block'>
                    <div className='flex gap-5 flex-wrap justify-center'>
                        {arr?.map(item => {
                            return (
                                <div key={item} className='mb-12 min-[1283px]:mb-0 w-48 h-64 dark:bg-[#2a2a2a]  bg-[#ffdbd6] flex flex-col items-center rounded-2xl'>
                                    <div className=' relative -top-12'>
                                        <img className='w-40 h-56' src={book} alt="book" />
                                        <p className='font-primary text-black dark:text-primary font-semibold text-sm text-start'>The Queen's Gambit</p>
                                        <p className='text-xs font-primary dark:text-primary text-gray-500'>By Waller Tavis</p>
                                        <div className='my-2 flex justify-between items-center'>
                                            <div className='flex items-center gap-1'>
                                                <img className='w-4 h-4' src={star} alt="star" />
                                                <p className='text-xs dark:text-primary font-primary'>4.9</p>
                                            </div>
                                            <button className='px-6 py-1 font-primary text-sm rounded-2xl bg-[#45AAF2] text-white'>Buy</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}