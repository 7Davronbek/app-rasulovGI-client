import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { Link } from 'react-router-dom';

const Katalog = () => {
    return (
        <div className='Katalog'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Каталог</h1>
                    </div>
                    <div className="col-12">
                        <Swiper
                            slidesPerView={3}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 15,
                                },
                                768: {
                                    slidesPerView: 2.2,
                                    spaceBetween: 25,
                                },
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="cards">
                                    <img src="/img/catalog/1.png" className='w-100' alt="" />
                                    <h2>Эксклюзивный класс</h2>

                                    <p>Эксклюзивом принято называть то, что доступно не каждому. Вы сделали или планируете сделать интерьер своего жилища выходящим за рамки усредненных требований и стандартов – элитным, престижным, дорогим? Тогда у вас обязательно должны быть установлены эксклюзивные межкомнатные двери.</p>
                                    <Link to='/catalog' >Ознакомиться с товаром <span><img src="/icon/arrowRight.svg" alt="" /></span></Link>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="cards">
                                    <img src="/img/catalog/2.png" className='w-100' alt="" />
                                    <h2>Элитный класс</h2>

                                    <p>Эксклюзивом принято называть то, что доступно не каждому. Вы сделали или планируете сделать интерьер своего жилища выходящим за рамки усредненных требований и стандартов – элитным, престижным, дорогим? Тогда у вас обязательно должны быть установлены эксклюзивные межкомнатные двери.</p>
                                    <Link to='/catalog' >Ознакомиться с товаром <span><img src="/icon/arrowRight.svg" alt="" /></span></Link>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="cards">
                                    <img src="/img/catalog/3.png" className='w-100' alt="" />
                                    <h2>Экошпон</h2>

                                    <p>Эксклюзивом принято называть то, что доступно не каждому. Вы сделали или планируете сделать интерьер своего жилища выходящим за рамки усредненных требований и стандартов – элитным, престижным, дорогим? Тогда у вас обязательно должны быть установлены эксклюзивные межкомнатные двери.</p>
                                    <Link to='/catalog' >Ознакомиться с товаром <span><img src="/icon/arrowRight.svg" alt="" /></span></Link>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="cards">
                                    <img src="/img/catalog/1.png" className='w-100' alt="" />
                                    <h2>Экошпон</h2>

                                    <p>Эксклюзивом принято называть то, что доступно не каждому. Вы сделали или планируете сделать интерьер своего жилища выходящим за рамки усредненных требований и стандартов – элитным, престижным, дорогим? Тогда у вас обязательно должны быть установлены эксклюзивные межкомнатные двери.</p>
                                    <Link to='/catalog' >Ознакомиться с товаром <span><img src="/icon/arrowRight.svg" alt="" /></span></Link>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Katalog