import React from 'react'
import { useState } from 'react'

const CatalogById = () => {
    const [modal, setModal] = useState(false)
    return (
        <>
            <div className="CatalogById">
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
                                    <div onClick={() => setModal(true)} className="cards">
                                        <img src="/img/catalogId/1.png" className='w-100' alt="" />
                                        <h3>Модель №1</h3>
                                        <p>
                                            <div className="under">Параметры:</div>
                                            <div className="d-flex align-items-center">
                                                <span>Колекция</span>
                                                <span>Элит</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span>Шпон</span>
                                                <span>Американский орех</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span>Цвет</span>
                                                <span>На выбор заказчика</span>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 actives">
                                    <div onClick={() => setModal(true)} className="cards">
                                        <img src="/img/catalogId/2.png" className='w-100' alt="" />
                                        <h3>Модель №1</h3>
                                        <p>
                                            <div className="under">Параметры:</div>
                                            <div className="d-flex align-items-center">
                                                <span>Колекция</span>
                                                <span>Элит</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span>Шпон</span>
                                                <span>Американский орех</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span>Цвет</span>
                                                <span>На выбор заказчика</span>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 ">
                                    <div onClick={() => setModal(true)} className="cards">
                                        <img src="/img/catalogId/3.png" className='w-100' alt="" />
                                        <h3>Модель №1</h3>
                                        <p>
                                            <div className="under">Параметры:</div>
                                            <div className="d-flex align-items-center">
                                                <span>Колекция</span>
                                                <span>Элит</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span>Шпон</span>
                                                <span>Американский орех</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span>Цвет</span>
                                                <span>На выбор заказчика</span>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 actives">
                                    <div onClick={() => setModal(true)} className="cards">
                                        <img src="/img/catalogId/4.png" className='w-100' alt="" />
                                        <h3>Модель №1</h3>
                                        <p>
                                            <div className="under">Параметры:</div>
                                            <div className="d-flex align-items-center">
                                                <span>Колекция</span>
                                                <span>Элит</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span>Шпон</span>
                                                <span>Американский орех</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span>Цвет</span>
                                                <span>На выбор заказчика</span>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                                {/* <div className="col-lg-6 actives">
                                    <div className="cards">
                                        <img src="/img/catalogId/4.png" className='w-100' alt="" />
                                        <h2>Эксклюзивный класс</h2>

                                        <p>Эксклюзивом принято называть то, что доступно не каждому. Вы сделали или планируете сделать интерьер своего жилища выходящим за рамки усредненных требований и стандартов – элитным, престижным, дорогим? Тогда у вас обязательно должны быть установлены эксклюзивные межкомнатные двери.</p>
                                        <Link to='/catalog/by-id'>Ознакомиться с товаром <span><img src="/icon/arrowRight.svg" alt="" /></span></Link>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="cards">
                                        <img src="/img/catalogId/3.png" className='w-100' alt="" />
                                        <h2>Эксклюзивный класс</h2>

                                        <p>Эксклюзивом принято называть то, что доступно не каждому. Вы сделали или планируете сделать интерьер своего жилища выходящим за рамки усредненных требований и стандартов – элитным, престижным, дорогим? Тогда у вас обязательно должны быть установлены эксклюзивные межкомнатные двери.</p>
                                        <Link to='/catalog/by-id'>Ознакомиться с товаром <span><img src="/icon/arrowRight.svg" alt="" /></span></Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 actives">
                                    <div className="cards">
                                        <img src="/img/catalogId/2.png" className='w-100' alt="" />
                                        <h2>Эксклюзивный класс</h2>

                                        <p>Эксклюзивом принято называть то, что доступно не каждому. Вы сделали или планируете сделать интерьер своего жилища выходящим за рамки усредненных требований и стандартов – элитным, престижным, дорогим? Тогда у вас обязательно должны быть установлены эксклюзивные межкомнатные двери.</p>
                                        <Link to='/catalog/by-id'>Ознакомиться с товаром <span><img src="/icon/arrowRight.svg" alt="" /></span></Link>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`modals  ${modal ? 'active' : ''}`}>
                <div onClick={() => setModal(false)} className="close"><img src="/icon/close.svg" alt="" /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="content">
                                <h1>Оставить заявку</h1>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <input type="text" placeholder='Имя' className='form-control' />
                            <input type="text" placeholder='Номер телефона' className='form-control mb-0' />
                        </div>
                        <div className="col-lg-6">
                            <textarea name="" cols="20" placeholder='Сообщение' className=' mb-0' ></textarea>
                        </div>
                        <div className="col-12">
                            <button className="btn">Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatalogById