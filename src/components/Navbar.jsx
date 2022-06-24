import React from 'react'
import { Link } from 'react-router-dom';
import { getLanguage, getText } from '../locales/index'
import { LANGUAGE } from '../tools/constants';

const Navbar = () => {
    const changeLanguage = (e) => {
        localStorage.setItem(LANGUAGE, e.target.value)
        document.location.reload(true)
    }
    return (
        <>
            <div className='Navbar'>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-2">
                            <div className="logo">
                                <a href="/"><img className='w-100' src="./img/logo.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-8 d-flex align-items-center justify-content-between">
                            <ul className="nav-menu">
                                <li className='me-5'><a href="/">{getText("about")}</a></li>
                                <li className='me-5'><Link to="/catalog">{getText("products")}</Link></li>
                                <li className='me-5'><a href="/">{getText("contacts")}</a></li>
                                <li className='me-5'><a href="/">{getText("portfolio")}</a></li>
                            </ul>

                            <div className="language">
                                <select className='siteLang' onChange={changeLanguage}>
                                    <option value="ru" selected={getLanguage() === "ru"} >Ру</option>
                                    <option value="uz" selected={getLanguage() === "uz"} >Uz</option>
                                </select>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar