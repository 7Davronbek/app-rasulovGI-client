import React from 'react'
import About from '../components/About'
import Header from '../components/Header'
import Katalog from '../components/Katalog'
import Navbar from '../components/Navbar'
import Number from '../components/Number'

const Main = () => {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Katalog />
            <Number />
        </>
    )
}

export default Main