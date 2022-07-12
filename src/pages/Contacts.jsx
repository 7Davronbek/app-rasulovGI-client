import axios from 'axios'
import React, { useState } from 'react'

const Contacts = () => {
    const [name, setName] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [message, setMessage] = useState('')
    const [type_flat, setType_flat] = useState('Квартира')
    const [count, setCount] = useState('')
    const [request, setRequest] = useState(false)
    const send = (e) => {
        e.preventDefault()
        axios.post("https://rasulovdveri.uz/bot/", { name, phone_number, message, type_flat, count })
            .then((res) => {
                setName("")
                setPhone_number("")
                setMessage("")
                setType_flat("Квартира")
                setCount("")
                setRequest(true)
                setTimeout(() => { setRequest(false) }, 2000)
            })
            .catch((err) => console.log(err))
    }
    return (
        <>
            <div className='Contacts'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">


                            <div className={`modals active`}>
                                <div className="close"><img src="/icon/close.svg" alt="" /></div>
                                <div className="container">
                                    <form onSubmit={send} className="row">
                                        <div className="col-12">
                                            <div className="content">
                                                <h1>Оставить заявку</h1>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <input onChange={e => setName(e.target.value)} value={name} required type="text" placeholder='Имя' className='form-control' />
                                            <input onChange={e => setPhone_number(e.target.value)} value={phone_number} required type="number" placeholder='Номер телефона' className='form-control ' />
                                            <div className="myWrap ">
                                                <select onChange={e => setType_flat(e.target.value)} name="type_flat">
                                                    <option value="Квартира" >Квартира</option>
                                                    <option value="Дом">Дом</option>
                                                </select>
                                                <input className='form-control' placeholder='Число дверей' onChange={e => setCount(e.target.value)} value={count} type="number" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <textarea onChange={e => setMessage(e.target.value)} value={message} name="" cols="20" placeholder='Сообщение' className=' mb-0' ></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button type='submit' className="btn">Отправить</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className={`Request ${request ? 'active' : ''}`}>
                <div className="cards">
                    <h2>Ваша заяка принята</h2>
                </div>
            </div>
        </>
    )
}

export default Contacts