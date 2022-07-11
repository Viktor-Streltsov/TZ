import MenuSearch from "../../components/MenuSearch/MenuSearch";

import style from "./UserPage.module.css";

const UserPage = () => {
    return (
        <div className={style.user_content}>
            <MenuSearch />
            <div className={style.user}>
                <a href="/sale"><img className={style.user__img} src="https://javarush.ru/assets/images/site/sale/matrix/banner-small-desktop-ru.svg" alt="sale" /></a>
            </div>
            <div className={style.user__ul}>
                <ul className={style.user__link}>
                    <li className={style.user_li}><a className={style.user__a} href="/infa">О JavaRush</a></li>
                    <li className={style.user_li}><a className={style.user__a} href="/user">Помощ</a></li>
                    <li className={style.user_li}><a className={style.user__a} href="/review">Отзывы</a></li>
                    <li className={style.user_li}><a className={style.user__a} href="/contacts">Контакты</a></li>
                </ul>
            </div>
            <div className={style.user_content__text}>
                <div className={style.user_qweshens}>
                    <img className={style.user_img_ava} src="https://yt3.ggpht.com/ytc/AKedOLRAjMqVg0s2odOstNNKesaZ0YvfqnpDFNzfw_V2=s900-c-k-c0x00ffffff-no-rj" alt="" />
                    <h2 className={style.user_qwesshens__h2}>Пользователи</h2>
                </div>
            </div>
            <div className={style.user_colonci}>
                <ul className={style.user_colonci__ul}>
                    <li className={style.user_colonci__li}>
                        <h2 className={style.user_colonci__h}>имя</h2>
                        <h2 className={style.user_colonci__tel}>телефон</h2>
                        <p className={style.user_colonci__p}>дата</p>
                        <p className={style.user_colonci_p}>статус</p>
                    </li>
                </ul>
            </div>
     </div>
    )
}

export default UserPage;