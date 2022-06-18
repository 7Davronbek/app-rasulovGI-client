import React from 'react'

const Number = () => {
    return (
        <>
            <div className="Number">
                <div className="container">
                    <div className="num1">
                        <div className="row justify-content-between">
                            <div className="col-lg-3">
                                <h4>Компания в цифрах</h4>
                            </div>
                            <div className="col-lg-4 d-flex flex-column">
                                <div className="top d-flex">
                                    <p>Лет опыт работы</p>
                                    <h2>30</h2>
                                </div>
                                <div className="bottom d-flex">
                                    <p>Количество наших клиентов</p>
                                    <h2>14 232</h2>
                                </div>
                            </div>
                            <div className="col-lg-4 d-flex flex-column">
                                <div className="top d-flex">
                                    <p>Мы изготовили дверей</p>
                                    <h2>301 567</h2>
                                </div>
                                <div className="bottom d-flex">
                                    <p>Наши специалисты</p>
                                    <h2>500</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="num2">
                        <div className="row">
                            <div className="col-lg-3">
                                <h4>О производстве товара</h4>
                            </div>
                            <div className="col-lg-4 d-flex flex-column">
                                <div className="top d-flex">
                                    <p>Более 25 лет на рынке Узбекистана</p>
                                    <i className=''></i>
                                </div>
                                <div className="bottom d-flex">
                                    <p>Грамотный производственный процесс</p>
                                    <i className=''></i>
                                </div>
                            </div>
                            <div className="col-lg-4 d-flex flex-column">
                                <div className="top d-flex">
                                    <p>Экологически чистая продукция</p>
                                    <i className=''></i>
                                </div>
                                <div className="bottom d-flex">
                                    <p>Гарантийное обслуживание</p>
                                    <i className=''></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Number