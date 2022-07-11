import MenuSearch from "../../components/MenuSearch/MenuSearch";

import style from "./CalendarPage.module.css";

const CalendarPage = () => {
    return (
        <div className={style.calendar_content}>
            <MenuSearch />
            <div className={style.calendar}>
                <a href="/sale"><img className={style.calendar__img} src="https://javarush.ru/assets/images/site/sale/matrix/banner-small-desktop-ru.svg" alt="sale" /></a>
            </div>
            <div className={style.calendar__ul}>
                <ul className={style.calendar__link}>
                    <li className={style.calendar_li}><a className={style.calendar__a} href="/infa">О JavaRush</a></li>
                    <li className={style.calendar_li}><a className={style.calendar__a} href="/calendar">Помощ</a></li>
                    <li className={style.calendar_li}><a className={style.calendar__a} href="/review">Отзывы</a></li>
                    <li className={style.calendar_li}><a className={style.calendar__a} href="/contacts">Контакты</a></li>
                </ul>
            </div>
            <div className={style.calendar_content__text}>
                <div className={style.calendar_qweshens}>
                    <img className={style.calendar_img_ava} src="https://yt3.ggpht.com/ytc/AKedOLRAjMqVg0s2odOstNNKesaZ0YvfqnpDFNzfw_V2=s900-c-k-c0x00ffffff-no-rj" alt="" />
                    <h2 className={style.calendar_qwesshens__h2}>Календарь брони</h2>
                </div>
            </div>
     </div>
    )
}

export default CalendarPage;