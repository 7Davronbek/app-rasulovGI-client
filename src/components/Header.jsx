import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { EffectFade, Pagination } from "swiper";


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
                modules={[EffectFade,  Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img alt='Rasulov' src="/img/header.png" />
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="cards">
                                    <span className='bg'><img src="/img/bg.png" alt="" /></span>
                                    <div className="cardsBody">
                                        <h1>Orci nullam aliquet.</h1>
                                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                                        <a href="#!">Orci nullam aliquet. <span><img src="/icon/arrowRight.svg" alt="" /></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt='Rasulov' src="/img/header.png" />
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="cards">
                                    <span className='bg'><img src="/img/bg.png" alt="" /></span>
                                    <div className="cardsBody">
                                        <h1>Orci nullam aliquet.</h1>
                                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                                        <a href="#!">Orci nullam aliquet. <span><img src="/icon/arrowRight.svg" alt="" /></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt='Rasulov' src="/img/header.png" />
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="cards">
                                    <span className='bg'><img src="/img/bg.png" alt="" /></span>
                                    <div className="cardsBody">
                                        <h1>Orci nullam aliquet.</h1>
                                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                                        <a href="#!">Orci nullam aliquet. <span><img src="/icon/arrowRight.svg" alt="" /></span></a>
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