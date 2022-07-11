import MenuSearch from "../../components/MenuSearch/MenuSearch";

import style from "./CS50Page.module.css";

const CS50Page = () => {
    return (
        <div className={style.cs50__coteiner}>
            <MenuSearch />
            <div className={style.cs50}>
            </div>
            <div className={style.cs50__ul}>
                <ul className={style.cs50__link}>
                    <li className={style.cs50_li}><a className={style.cs50__a} href="/infa">О JavaRush</a></li>
                    <li className={style.cs50_li}><a className={style.cs50__a} href="/help">Помощ</a></li>
                    <li className={style.cs50_li}><a className={style.cs50__a} href="/searchwork">Поиск работы</a></li>
                    <li className={style.cs50_li}><a className={style.cs50__a} href="/contacts">Контакты</a></li>
                </ul>
            </div>
            <div className={style.cs50_about}>
                <img className={style.cs50_img__ava} src="https://cdn.javarush.ru/images/system/17ad10d1-0a77-4a62-9f7b-f97bc1197e74/1024.jpeg" alt="avatar" />
                <div className={style.cs50_handbutton}>
                    <h2 className={style.cs50_item__h2}>Harvard CS50</h2>
                    <div className={style.cs50_item__text}>
                        Добро пожаловать в Гарвард! Перед вами — легендарный гарвардский курс «CS50. Основы программирования» на русском языке!
                        CS50 подойдет любому человеку, который решил стать «айтишником». Его можно рекомендовать и способным школьникам, и умудренным опытом «перебежчикам» из других профессий. Вы изучите основы программирования и основные концепции компьютерных наук.
                        Курс очень информативен, но при этом подан настолько увлекательно, что лекции смотрятся как любимый сериал.
                    </div>
                    <a className={style.cs50_item__link} href="https://www.youtube.com/playlist?list=PLawfWYMUziZqyUL5QDLVbe3j5BKWj42E5">Онлайн курс JavaRush</a>
                </div>
            </div>
        </div>
)
}

export default CS50Page;