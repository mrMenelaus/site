import React from 'react';
import Modal from './UI/Modal';
import { NavLink } from 'react-router-dom';

const Nav = ({ visible, setVisible }) => {
    return (
        <Modal visible={visible} setVisible={setVisible} header={"Навигация"}>
            <ol className='methods'>
                <li>
                    <NavLink className="nav_link" to={"/"} onClick={() => setVisible(false)}>
                        Алгебра логики
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav_link" to={"/page2"} onClick={() => setVisible(false)}>
                        Виды логических операций
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav_link" to={"/page3"} onClick={() => setVisible(false)}>
                        Составные логические операции
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav_link" to={"/page4"} onClick={() => setVisible(false)}>
                        Методы решения задач
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav_link" to={"/page5"} onClick={() => setVisible(false)}>
                        Примеры решения задач
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav_link" to={"/page6"} onClick={() => setVisible(false)}>
                        Решение задач
                    </NavLink>
                </li>
            </ol>


        </Modal>
    );
};

export default Nav;