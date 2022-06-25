import React from 'react'

const Number = () => {
    return (
        <>
            <div className="Number">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-4">
                            <h1>Компания в цифрах</h1>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">

                                <div className="col-lg-6">
                                    <div className="cards mt-2">
                                        <h2>Лет опыт работы</h2>
                                        <h3>30</h3>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="cards mt-2">
                                        <h2>Мы изготовили дверей</h2>
                                        <h3>451 366</h3>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="cards">
                                        <h2>Количество  клиентов</h2>
                                        <h3>75 361</h3>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="cards">
                                        <h2>Наши специалисты</h2>
                                        <h3>400</h3>
                                    </div>
                                </div>

                            </div>

                            <div className="line"></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <h1 className='mt-4'>О производстве товара</h1>
                        </div>
                        <div className="col-lg-8">
                            <div className="row mt-5">

                                <div className="col-lg-6">
                                    <div className="cards mt-2">
                                        <h2>Более 25 лет на рынке Узбекистана</h2>
                                        <h3><span><img src="/icon/product1.png" alt="" /></span></h3>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="cards mt-2">
                                        <h2>Экологически чистая продукция</h2>
                                        <h3><span><img src="/icon/product2.png" alt="" /></span></h3>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="cards">
                                        <h2>Грамотный производственный процесс</h2>
                                        <h3><span><img src="/icon/product3.png" alt="" /></span></h3>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="cards">
                                        <h2>Гарантийное обслуживание</h2>
                                        <h3><span><img src="/icon/product4.png" alt="" /></span></h3>
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

export default Number