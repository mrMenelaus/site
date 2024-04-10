import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';

const Layout = () => {
    const switchTheme = () => {
        document.body.classList.toggle("another")
    }
    const [visible,setVisible] = useState(false)
    return (
        <div className='wrapper'>
            <Nav visible={visible} setVisible={setVisible}/>
            <header>
                <p className='nav_item' onClick={()=>setVisible(true)}>
                    Навигация
                </p>
                <button onClick={switchTheme} className='nav_button'>
                    Сменить тему
                </button>
            </header>
            <hr className='breaker'/>
                <Outlet />
            <footer>
                <p>Тот который смог</p>
                <p>ИП Алгебра логики</p>
                <p>2024 г</p>
            </footer>
        </div>
    );
};

export default Layout;