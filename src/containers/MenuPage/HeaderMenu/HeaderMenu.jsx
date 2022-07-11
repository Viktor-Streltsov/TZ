
import style from './HeaderMenu.module.css';

const HeaderMenu = () => {
    return (
        <>
            <nav className={style.dws_menu}>
                <ul className={style.dws_ul}>
                    <li className={style.dws_li}><a href="/review">Отзывы</a></li>
                    <li className={style.dws_li}><a href="/infa">О нас</a></li>
                    <li className={style.dws_li}><a href="/cs50">SC50</a></li>
                    <li className={style.dws_li}><a href="/help">Помощь</a></li>
                    <li className={style.dws_li}><a href="/gemas">Игры</a></li>
                    <li className={style.dws_li}><a href="/contacts">Контакты</a></li>
                    {/* <li className={style.dws_li__bottom}><a className={style.dws_bottom} href='#'>Начать обучение</a></li> */}
                </ul>
            </nav>
        </>
    )
}

export default HeaderMenu;