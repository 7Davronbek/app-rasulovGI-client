import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="row">
                <div className="col-12 zed">
                    <h1>Контакты</h1>
                </div>
                <div className="col-4 zed">
                    <div className="cards">
                        <div><img src="/icon/phone.svg" alt="" /></div>
                        <div>
                            <a href="tel: +998943698058">+998(90) 123-45-67</a>
                            <a href="tel: +998943698058">+998(90) 123-45-67</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="blur"></div>
    </div>
  )
}

export default Footer