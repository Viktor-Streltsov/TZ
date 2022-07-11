
import style from './HeaderHome.module.css';

const HeaderHome = () => {
    return (
        <>
            <nav className={style.dws_menu}>
                <ul className={style.dws_ul}>
                    <li className={style.dws_li}><a href="/review">Отзывы</a></li>
                    <li className={style.dws_li}><a href="/infa">О нас</a></li>
                    <li className={style.dws_li}><a href="/cs50">SC50</a></li>
                    <li className={style.dws_li__bottom}><a className={style.dws_bottom} href='/registrait'>Начать обучение</a></li>
                </ul>
            </nav>
        </>
    )
}

export default HeaderHome;