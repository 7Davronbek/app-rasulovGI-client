import React from 'react'

const CatalogContent = () => {
    return (
        <>
            <div className="CatalogContent">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="cards">
                                <div className="searchWrap d-flex align-items-center justify-content-between ">
                                    <input type="text" className='form-control' placeholder='Поск по сайту' />
                                    <span><img src="/icon/zoom.svg" alt="" /></span>
                                </div>
                                <a href="#!">Элитный класс</a>
                                <a href="#!">Эксклюзивнйы класс</a>
                                <a href="#!">Экошпон</a>
                                <a href="#!">Премиум класс</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatalogContent