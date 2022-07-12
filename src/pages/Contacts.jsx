import React from 'react'

const Contacts = () => {
    return (
        <div className='Contacts'>
            <div className="container">
                <div className="row">
                    <div className="col-12">


                        <div className={`modals active`}>
                            <div className="close"><img src="/icon/close.svg" alt="" /></div>
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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts