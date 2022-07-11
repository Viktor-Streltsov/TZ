import style from './Menu.module.css';

const Menu = () => {
    return (
        <>
            <nav className={style.dws_menu}>
                <ul className={style.dws_ul}>
                    <li className={style.dws_li}><a href="/sale">Акция</a></li>
                    <li className={style.dws_li}><a href="/sale">Условия акции</a></li>
                    <li className={style.dws_li}><a href="/ofer">Офер</a></li>
                    <li className={style.dws_li}><a href="/cs50">CS50</a></li>
                    <li className={style.dws_li}><a href="/review">Отзывы</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Menu;