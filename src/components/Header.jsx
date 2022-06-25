import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { EffectFade, Pagination, Parallax, Navigation } from "swiper";


const Header = () => {
    return (
        <div className='Header'>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        "background-image":
                            "url(https://swiperjs.com/demos/images/nature-1.jpg)",
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Slide 1
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                            tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Slide 2
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                            tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Slide 3
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                            tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>


            {/* 
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                // navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Pagination]}
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
                                        <h2>Уют начинается с нас! </h2>
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

            </Swiper> */}


        </div>
    )
}

export default Header