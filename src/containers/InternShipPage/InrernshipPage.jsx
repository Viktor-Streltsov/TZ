import MenuSearch from "../../components/MenuSearch/MenuSearch";

import style from "./InrernshipPage.module.css";

const InrernshipPage = () => {
    return (
        <div className={style.intership__coteiner}>
                <MenuSearch />
                <div className={style.intership}>
                    <a href="/sale"><img className={style.intership__img} src="https://javarush.ru/assets/images/site/banner/university/university-ru.svg" alt="sale" /></a>
                </div>
                <div className={style.intership__ul}>
                    <ul className={style.intership__link}>
                        <li className={style.intership_li}><a className={style.intership__a} href="/infa">О JavaRush</a></li>
                        <li className={style.intership_li}><a className={style.intership__a} href="/help">Помощ</a></li>
                        <li className={style.intership_li}><a className={style.intership__a} href="/searchwork">Поиск работы</a></li>
                        <li className={style.intership_li}><a className={style.intership__a} href="/contacts">Контакты</a></li>
                    </ul>
                </div>
                <div className={style.intership_about}>
                    <img className={style.intership_img__ava} src="https://yt3.ggpht.com/ytc/AKedOLRAjMqVg0s2odOstNNKesaZ0YvfqnpDFNzfw_V2=s900-c-k-c0x00ffffff-no-rj" alt="avatar" />
                    <div className={style.intership_handbutton}>
                        <h2 className={style.intership_item__h2}>Стажировка</h2>
                        <button className={style.intership__bootom}>Отправить звявку</button>
                    </div>
                </div>
                <div className={style.intership_item}>
                    <img className={style.intership_item__img} src="https://hrlider.ru/posts/wp-content/uploads/2021/07/onlajn-ankety-pri-prieme-na-rabotu.jpg" alt="img" />
                    <h2 className={style.intership_item__h2}>Программистом может стать каждый: нужен только правильный подход к обучению.</h2>
                    <h3 className={style.intership_item__h2}>Как получить первую работу</h3>
                </div>
                <div className={style.intership_item__p}>
                    <div className={style.intership_item__text}>
                        Получить первую работу ох как непросто. Даже если вы усердно занимались, прошли все 40 уровней, перешерстили десяток тематических книг и знаете весь Java Core от и до, вы не застрахованы от того, что рекрутер не поверит в ваше резюме. Просто потому, что эти ребята хотят видеть в команде людей с реальным практическим опытом. Что же теперь делать? Как преодолеть ситуацию «чтобы получить опыт, нужен опыт»?<br/>

                        Всё не так плохо: «хакнуть» систему можно! Причём легально, без нарушения законов и общественных норм или лжи. Есть несколько способов это сделать, один из них — пройти стажировку JavaRush, во время которой вы изучите новые технологии и поработаете над настоящим проектом.<br/>

                        В этой статье мы расскажем о том, что представляет собой наша стажировка, как туда попасть и что это даст.<br/>

                        <h3 className={style.intership_item__h2}>Что такое стажировка JavaRush?</h3><br/>
                        По сути, стажировка JavaRush и есть самая настоящая работа программистом, только обучающая. Вы три месяца работаете над серьезным проектом, параллельно получая теоретические сведения. Раз в неделю вам выдают блок, который нужно выполнить. В конце недели вы участвуете в обсуждении этого блока, исправляете, если нужно, ошибки и корявости, после чего получаете следующее задание. И так, пока проект не будет готов.<br/>

                        Набор на стажировку проводится четыре раза в год. Мы публикуем анонс за несколько недель до нового набора в группе Random на сайте JavaRush и наших страницах в соцсетях, чтобы все желающие успели подготовиться.<br/>

                        <h3 className={style.intership_item__h2}>Что изучают?</h3><br/>
                        На выходе вы получите опыт работы с платформой Java Enterprise и полнофункциональное приложение на Spring/JPA Enterprise c авторизацией и правами доступа на основе ролей с использованием наиболее популярных инструментов и технологий Java. А это Maven, Spring MVC, Security, JPA (Hibernate), REST (Jackson), Bootstrap (css,js), datatables, jQuery + plugins, Java 8 Stream and Time API.<br/>
                    </div>
                </div>
            </div>
    )
}

export default InrernshipPage