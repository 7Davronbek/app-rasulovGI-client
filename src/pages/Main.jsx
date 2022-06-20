import React from 'react'
import About from '../components/About'
import Header from '../components/Header'
import Katalog from '../components/Katalog'
import Navbar from '../components/Navbar'
import Number from '../components/Number'
import YouTube from '../components/YouTube'

const Main = () => {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Katalog />
            <Number />
            <YouTube />
        </>
    )
}

export default Main