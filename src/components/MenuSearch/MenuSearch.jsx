import Search from '../Search/Search';

import style from './MenuSearch.module.css';

const MenuSearch = () => {
    return (
        <>
            <nav className={style.dws_menu}>
                <h1 className={style.dws_logo}>JavaRush</h1>
                <ul className={style.dws_ul}>
                    <li className={style.dws_li}><Search /></li>
                    <li className={style.dws_li}><a href="/review">Отзывы</a></li>
                    <li className={style.dws_li}><a href="/infa">О нас</a></li>
                    <li className={style.dws_li}><a href="/cs50">CS50</a></li>
                    <li className={style.dws_li__bottom}><a className={style.dws_bottom} href="/registrait">Начать обучение</a></li>
                </ul>
            </nav>
        </>
    )
}

export default MenuSearch;