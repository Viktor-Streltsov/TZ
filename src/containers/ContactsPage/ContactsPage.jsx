import MenuSearch from "../../components/MenuSearch/MenuSearch";

import style from "./ContactsPage.module.css";

const ContactsPage = () => {
    return (
        <div className={style.contacts__coteiner}>
            <MenuSearch />
            <div className={style.contacts}>
            </div>
            <div className={style.contacts__ul}>
                <ul className={style.contacts__link}>
                    <li className={style.contacts_li}><a className={style.contacts__a} href="/infa">О JavaRush</a></li>
                    <li className={style.contacts_li}><a className={style.contacts__a} href="/help">Помощ</a></li>
                    <li className={style.contacts_li}><a className={style.contacts__a} href="/searchwork">Поиск работы</a></li>
                    <li className={style.contacts_li}><a className={style.contacts__a} href="/contacts">Контакты</a></li>
                </ul>
            </div>
            <div className={style.contacts_about}>
                <img className={style.contacts_img__ava} src="https://yt3.ggpht.com/ytc/AKedOLRAjMqVg0s2odOstNNKesaZ0YvfqnpDFNzfw_V2=s900-c-k-c0x00ffffff-no-rj" alt="avatar" />
                <div className={style.contacts_handbutton}>
                    <h2 className={style.contacts_item__h2}>Свяжитесь с нами</h2>
                </div>
            </div>
            <div className={style.contacts_item__p}>
                <div className={style.contacts_item__text}>
                    <p className={style.contacts_item_p}>Мы всегда готовы помочь. На любой вопрос вам ответит служба поддержки.</p>

                    <p className={style.contacts_item_p}>Для этого обратитесь в нее через чат на сайте (кнопка в правом нижнем углу) или напишите письмо на почту:<a href="#">support@javarush.ru</a>. Вы получите ответ в течение нескольких часов.</p>

                    <p className={style.contacts_item_p}>Отправить сообщение напрямую администрации можно в этом разделе.</p>

                    <p className={style.contacts_item_p}>Задать вопрос также можно на странице курса на <a href="#">Facebook</a> или <a href="#">Вконтакте</a>.</p>

                    <p className={style.contacts_item_p}>Our office</p>

                    <p className={style.contacts_item_p}>HiTech Rush Inc.</p>
                    <p className={style.contacts_item_p}>Address: 1201 N Orange St Suite 7553</p>
                    <p className={style.contacts_item_p}>Wilmington, DE 19801-1186, USA</p>
                    <p className={style.contacts_item_p}>Phone: +16464800563</p>
                </div>
            </div>
        </div>
    )
}

export default ContactsPage;