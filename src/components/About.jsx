import React from 'react'
import { getText } from '../locales'

const About = () => {
    return (
        <div className='About'>
            <div className="key1"><img src="/img/key1.png" alt="" /></div>
            <div className="key2"><img src="/img/key2.png" alt="" /></div>
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <div className="info">
                            <div className="main-title">
                                <h2>{getText("about")}</h2>
                            </div>
                            <h3>
                                Rasulov GI <br />
                                Династия качественных дверей
                            </h3>
                            <p>С 1992 года компания Rasulov GI — это большая, крепко сплоченная семья высококвалифицированных специалистов, начиная от сотрудников офиса и заканчивая работниками цехов. Мы очень дорожим качеством производимой нами продукции, и специалисты-аналитики постоянно работают над повышением качества с учетом вкуса и предпочтений наших клиентов. В настоящий момент компания Rasulov GI предлагает более 300 моделей дверей. Выбирая лучшее от природы, вкладывая душу, мастера превращают свою работу в истинное искусство. В наших дверях сплелись воедино неизменное качество, бесценный опыт, природный материал и полет яркой фантазии. </p>

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