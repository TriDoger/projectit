import React from 'react'
import './Authorization.css'
import logo from'../resources/Vector.jpg'
const Authorization = () => {
    return (
        <div className="authorization">
            <p><img src={logo} alt="logo"/></p>
            <h1>Авторизация</h1>
            <p>Инвентаризация ИТ активов</p>
            <ul>
                <li><input type="text"></input></li>
                <li><input type="password"></input></li>
            </ul>
            <button className='btn-enter'>Войти</button>
        </div>
    )
}

export default Authorization
