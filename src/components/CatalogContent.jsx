import React from 'react'
import { Link } from 'react-router-dom'

const CatalogContent = () => {
    return (
        <>
            <div className="CatalogContent">
                <div className="container position-relative">
                    <div className="key1"><img src="/img/key1.png" alt="" /></div>
                    <div className="key2"><img src="/img/key2.png" alt="" /></div>
                    <div className="key3"><img src="/img/key1.png" alt="" /></div>
                    <div className="key4"><img src="/img/key2.png" alt="" /></div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="cardsLeft">
                                <div className="searchWrap d-flex align-items-center justify-content-between ">
                                    <input type="text" className='form-control' placeholder='Поск по сайту' />
                                    <span><img src="/icon/zoom.svg" alt="" /></span>
                                </div>
                                <a href="#">Элитный класс</a>
                                <a href="#">Эксклюзивнйы класс</a>
                                <a href="#">Экошпон</a>
                                <a href="#">Премиум класс</a>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="cards">
                                        <img src="/img/catalog/1.png" className='w-100' alt="" />
                                        <h2>ПРЕМИУМ КЛАСС</h2>

                                        <p>Эксклюзивом принято называть то, что доступно не каждому. Вы сделали или планируете сделать интерьер своего жилища выходящим за рамки усредненных требований и стандартов – элитным, престижным, дорогим? Тогда у вас обязательно должны быть установлены эксклюзивные межкомнатные двери.</p>
                                        <Link to='/catalog/by-id'>Ознакомиться с товаром <span><img src="/icon/arrowRight.svg" alt="" /></span></Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 actives">
                                    <div className="cards">
                                        <img src="/img/catalog/4.png" className='w-100' alt="" />
                                        <h2>ЭКСКЛЮЗИВ КЛАСС</h2>

                                        <p>Эксклюзивом принято называть то, что доступно не каждому. Вы сделали или планируете сделать интерьер своего жилища выходящим за рамки усредненных требований и стандартов – элитным, престижным, дорогим? Тогда у вас обязательно должны быть установлены эксклюзивные межкомнатные двери.</p>
                                        <Link to='/catalog/by-id'>Ознакомиться с товаром <span><img src="/icon/arrowRight.svg" alt="" /></span></Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="cards">
                                        <img src="/img/catalog/3.png" className='w-100' alt="" />
                                        <h2>ЭКОШПОН</h2>

                                        <p>Эксклюзивом принято называть то, что доступно не каждому. Вы сделали или планируете сделать интерьер своего жилища выходящим за рамки усредненных требований и стандартов – элитным, престижным, дорогим? Тогда у вас обязательно должны быть установлены эксклюзивные межкомнатные двери.</p>
                                        <Link to='/catalog/by-id'>Ознакомиться с товаром <span><img src="/icon/arrowRight.svg" alt="" /></span></Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 actives">
                                    <div className="cards">
                                        <img src="/img/catalog/2.png" className='w-100' alt="" />
                                        <h2>ЭЛИТ КЛАСС</h2>

                                        <p>Эксклюзивом принято называть то, что доступно не каждому. Вы сделали или планируете сделать интерьер своего жилища выходящим за рамки усредненных требований и стандартов – элитным, престижным, дорогим? Тогда у вас обязательно должны быть установлены эксклюзивные межкомнатные двери.</p>
                                        <Link to='/catalog/by-id'>Ознакомиться с товаром <span><img src="/icon/arrowRight.svg" alt="" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatalogContent