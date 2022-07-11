import HeaderMenu from "./HeaderMenu/HeaderMenu";

import style from "./MenuPage.module.css";

const MenuPage = () => {
    return (
        <div className={style.menu_container}>
            <HeaderMenu />
            <div className={style.menu_header__logo}>
                <div className={style.menu_header__item}>
                    <h1 className={style.menu_header__cap}>Профессия<br/>Java-разработчик<br/><span className={style.menu_header__maun}>за 12 месяцев</span></h1>
                    <p className={style.menu_header__p}>Освойте программирование на Java от уровня “новичок” до Junior-специалиста на курсе от команды JavaRush — главного эксперта по Java в мире.</p>
                    <a className={style.menu_header__link} href="/registrait">Записаться на курс</a>
                </div>
                <div className={style.menu_header__img}>
                    {/* <img src="src/containers/MenuPage/img/pngwing.png" alt="sale"/> */}
                    <img className={style.menu_header__imgwork} src="https://st2.depositphotos.com/4297569/10000/i/450/depositphotos_100000524-stock-photo-self-employed-business-person-working.jpg" alt="work" />
                </div>
            </div>
            <div className={style.memu_list}>
                <ul className={style.menu_list__ul}>
                    <li className={style.menu_list__text}><span>📜</span><h2 className={style.menu_list__h1}>Групповое обучение</h2>
                        Видеоуроки с менторами, практические домашние задания, написание проектов на Java.
                    </li>
                    <li className={style.menu_list__text}><span>🧧</span><h2 className={style.menu_list__h1}>Диплом JavaRush</h2>
                        Научим Java-разработке, подтвердим ваши знания дипломом, поможем подготовиться к собеседованиям.
                    </li>
                    <li className={style.menu_list__text}><span>📅</span><h2 className={style.menu_list__h1}>Программа курса</h2>
                        Обучение состоит из 5 модулей + написание группового проекта, курс рассчитан на год.
                    </li>
                </ul>
            </div>
            <div className={style.menu_colonca}>
                <div className={style.menu_colonca__header}><h2>Курс подойдет вам, если вы:</h2></div>
                <ul className={style.menu_colonca__ul}>
                    <li className={style.menu_colonca__li}>
                        <img className={style.menu_colonca__img} src="https://pbs.twimg.com/media/E4v345ZWYAID2Vk.jpg" alt="" />
                        <h3 className={style.menu_colonca__h}>Новичок<br/>в программировании</h3>
                        <p className={style.menu_colonca__h}>
                            Вы только начинаете попробовать свои силы в разработке. Пошаговое обучение с опытным ментором, с еженедельными “маленькими победами” поможет вам отслеживать результат обучения и стать уверенным специалистом.
                        </p>
                    </li>
                    <li className={style.menu_colonca__li}>
                        <img className={style.menu_colonca__img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQidYtVa2SCTkeERcf4lk7444YLTWrsljiEEg&usqp=CAU" alt="" />
                        <h3 className={style.menu_colonca__h}>Выпускник<br/>технических ВУЗов</h3>
                        <p className={style.menu_colonca__h}>
                            У вас есть база, но мало практического опыта. На курсе вы получите много практики и сами напишете настоящие проекты. Мы сделаем из вас специалиста, который нужен IТ-рынку.
                        </p>
                    </li>
                    <li className={style.menu_colonca__li}>
                        <img className={style.menu_colonca__img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR85-h4WBJc-lQBLDwkIaNvBYoKc4rGxf7W0Q&usqp=CAU" alt="" />
                        <h3 className={style.menu_colonca__h}>Хотите возобновить<br/>обучение</h3>
                        <p className={style.menu_colonca__h}>
                            Вы уже обучались на онлайн-курсе JavaRush или осваивали Java-разработку где-либо, но не довели дело до конца. Системное обучение с четкой датой достижения цели поможет вам сохранить мотивацию.
                        </p>
                    </li>
                    <li className={style.menu_colonca__li}>
                        <img className={style.menu_colonca__img} src="https://yt3.ggpht.com/3pZqNCjdh4ZPHb6nrGJcWoRgOS7Hg-50f4vRe9Sy73EU0QRt9yz25FvSVkoBH4coOQjmCXAN=s900-c-k-c0x00ffffff-no-rj" alt="" />
                        <h3 className={style.menu_colonca__h}>Специалист в IТ,<br/>но не разработчик</h3>
                        <p className={style.menu_colonca__h}>
                            Вы знакомы с требованиями в этой сфере, но знаний и опыта в программировании нет. Мы поможем развить навыки для реальной работы и подготовим к карьерному рывку.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MenuPage;