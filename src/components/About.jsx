import React from 'react'
import { getText } from '../locales'

const About = () => {
    return (
        <div className='About'>
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <div className="info">
                            <div className="main-title">
                                <h2>{getText("about")}</h2>
                            </div>
                            <h3>
                                Tincidunt imperdiet sed elementum integer tristique rutrum elit dictum in.
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue ac hendrerit diam gravida laoreet accumsan. Libero condimentum sed tempor et pretium magna. Velit dui bibendum euismod vel velit dignissim nullam gravida id. Auctor ut aliquet felis diam. Fermentum phasellus tellus eu, vitae fermentum ullamcorper est. Viverra id in in sapien ultricies euismod platea. Eros metus quam elit pharetra lorem eget et massa. </p>

                            <div className="card">
                                <div className="desc">
                                    <span>30</span>
                                    <p>ЛЕТ ОПЫТА РАБОТЫ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <img src="./img/about.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About