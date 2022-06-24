import React from 'react'
import { Link } from 'react-router-dom'

const CatalogHeader = () => {
    return (
        <>
            <div className="catalogHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Каталог</h1>
                            <Link to='/'>Главная</Link> <span className="my-2">/</span> <a href="#!">Каталог</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatalogHeader