import React from 'react'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getLanguage, getText } from '../locales/index'
import { LANGUAGE } from '../tools/constants';

const Navbar = () => {
    const [burger, setBurger] = useState(false)
    const changeLanguage = (e) => {
        localStorage.setItem(LANGUAGE, e.target.value)
        document.location.reload(true)
    }

    const location = useLocation();

    const [navbar, setNavbar] = useState(false);


    const changeNavbar = () => {
        if (window.scrollY >= 50) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }


    window.addEventListener('scroll', changeNavbar);

    return (
        <>
            <div className={`Navbar ${navbar ? 'active' : ''}`}>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-2 col-6">
                            <div className="logo">
                                <Link to="/"><img className='w-100' src="./img/logo.png" alt="" /></Link>
                            </div>
                        </div>

                        <div onClick={() => setBurger(!burger)} className={`burger ${burger ? 'active' : ''}`} id="burger">
                            <div></div>
                            <div></div>
                        </div>

                        <div className={`col-10 myCol d-flex align-items-center justify-content-between ${burger ? 'active' : ''}`}>
                            <ul className="nav-menu">
                                <li onClick={() => setBurger(false)} className='me-5'><Link className={`${location.pathname === '/' ? 'active' : ''}`} to="/">{getText("about")}</Link></li>
                                <li onClick={() => setBurger(false)} className='me-5'><Link className={`${location.pathname === '/catalog' ? 'active' : ''}`} to="/catalog">{getText("products")}</Link></li>
                                <li onClick={() => setBurger(false)} className='me-5'><a className={`${location.pathname === '/contacts' ? 'active' : ''}`} href="/">{getText("contacts")}</a></li>
                                <li onClick={() => setBurger(false)} className='me-5'><Link className={`${location.pathname === '/gallery' ? 'active' : ''}`} to="/gallery">{getText("portfolio")}</Link></li>
                                <li onClick={() => setBurger(false)} className='me-5 phone'><a href='tel: +998976777727'>+998 97 677 77 27</a></li>
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

            <div className="navbarLine"></div>
        </>
    )
}

export default Navbar