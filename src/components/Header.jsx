import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Autoplay, EffectFade, Pagination, } from "swiper";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='Header'>



            <Swiper
                spaceBetween={30}
                effect={"fade"}
                // navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[EffectFade, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img alt='Rasulov' src="/img/header2.png" />
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="cards">
                                    <span className='bg'><img src="/img/bg.png" alt="" /></span>
                                    <div className="cardsBody">
                                        <h1>Rasulov Gi</h1>
                                        <h2>ОТКРОЙ ДВЕРЬ В НОВУЮ ЖИЗНЬ !</h2>
                                        <Link to='/catalog'>Подробнее <span><img src="/icon/arrowRight.svg" alt="" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt='Rasulov' src="/img/header2.png" />
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="cards">
                                    <span className='bg'><img src="/img/bg.png" alt="" /></span>
                                    <div className="cardsBody">
                                        <h1>Rasulov Gi</h1>
                                        <h2>МЫ ЗАБОТИМСЯ О ВАС !</h2>
                                        <Link to='/catalog'>Подробнее <span><img src="/icon/arrowRight.svg" alt="" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt='Rasulov' src="/img/header2.png" />
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="cards">
                                    <span className='bg'><img src="/img/bg.png" alt="" /></span>
                                    <div className="cardsBody">
                                        <h1>Rasulov Gi</h1>
                                        <h2>Уют начинается с нас!</h2>
                                        <Link to='/catalog'>Подробнее <span><img src="/icon/arrowRight.svg" alt="" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>


        </div>
    )
}

export default Header