import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-12 zed">
                        <h1>Контакты</h1>
                    </div>
                </div>

                <div className="row myRow justify-content-between">

                    <div className="col-lg-3 zed">
                        <div className="cards">
                            <div><img src="/icon/phone.svg" alt="" /></div>
                            <div>
                                <a href="tel: +998978777727">+998 97 877 77 27</a>
                                {/* <a href="tel: +998943698058">+998(90) 123-45-67</a> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 zed ">
                        <div className="cards justify-content-center">
                            <div><img src="/icon/world.svg" alt="" /></div>
                            <div>
                                <a href="tel: +998 97 877 77 27">www.website.uz</a>
                                <a href="info@rasulov.uz">info@rasulov.uz</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 zed">
                        <div className="cards">
                            <div><img src="/icon/location.svg" alt="" /></div>
                            <div>
                                <a href="tel: +998943698058">обл.Ташкент, Янгиюлский район, ул.Самаркандская</a>
                                {/* <a href="tel: +998943698058">East Carolyne, DC 94879</a> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 map zed">
                        <iframe title="Rasulov GI" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d374.7734390913016!2d69.2514262!3d41.2830233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b19f3e4ca73%3A0xca6529f22162405b!2zUmFzdWxvdiBHSSDQk9C70LDQstC90YvQuQ!5e0!3m2!1sru!2s!4v1656417794070!5m2!1sru!2s" width="100%" height="400" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        {/* <iframe title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.7354827754243!2d69.24301835118635!3d41.27109497917322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a861acf7eab%3A0x2a483b5df56482d3!2zMTgg0YPQu9C40YbQsCDQmtGD0YjQsdC10LPQuCwg0KLQsNGI0LrQtdC90YIgMTAwMDIyLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2sus!4v1650360998815!5m2!1sru!2sus" width="100%" height="400" loading="lazy"></iframe> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 zed">
                        <div className="socials">
                            <span><img src="/icon/insta.svg" alt="" /></span>
                            <span><img src="/icon/tg.svg" alt="" /></span>
                            <span><img src="/icon/youtube.svg" alt="" /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blur"></div>
        </div>
    )
}

export default Footer