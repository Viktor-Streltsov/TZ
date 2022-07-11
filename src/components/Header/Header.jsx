import { NavLink } from 'react-router-dom';

import style from './Header.module.css';

const Header = () => {
    return (
            <nav className={style.menu}>
                <ul className={style.menu__contein}>
                    <li className={style.menu_link}><NavLink to="/">Дом</NavLink></li>
                    <li className={style.menu_link}><NavLink to="/sale">Акции</NavLink></li>
                    <li className={style.menu_link}><NavLink to="/menu">Меню</NavLink></li>
                    <li className={style.menu_link}><NavLink to="/quests">Курс</NavLink></li>
                    <li className={style.menu_link}><NavLink to="/tasks">Задачи</NavLink></li>
                    <li className={style.menu_link}><NavLink to="/games">Игры</NavLink></li>
                    <li className={style.menu_link}><NavLink to="/quizzes">Опросы</NavLink></li>
                    <li className={style.menu_link}><NavLink to="/help">Помощь</NavLink></li>
                    <li className={style.menu_link}><NavLink to="/infa">О Java</NavLink></li>
                    <li className={style.menu_link}><NavLink to="/inrernship">Трейни</NavLink></li>
                    <li className={style.menu_link}><NavLink to="/searchwork">Работа</NavLink></li>
                    <li className={style.menu_link}><NavLink to="/contacts">Контакты</NavLink></li>
                    <li className={style.menu_link}><NavLink to="/ofer">Офер</NavLink></li>
                    <li className={style.menu_link}><NavLink to="/review">Отзывы</NavLink></li>
                    <li className={style.menu_link}><NavLink to="/cs50">CS50</NavLink></li>
                    <li className={style.menu_link}><NavLink to="/registrait">Юзеры</NavLink></li>
                    <li className={style.menu_link}><NavLink to="/registrait">Календарь</NavLink></li>
                </ul>
            </nav>
    )
}

export default Header;