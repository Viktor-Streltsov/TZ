import MenuSearch from "../../components/MenuSearch/MenuSearch";


import style from "./InfaPage.module.css"

const InfaPage = () => {
    return (
            <div className={style.schedul__coteiner}>
                <MenuSearch />
                <div className={style.schedul}>
                    <a href="/sale"><img className={style.schedul__img} src="https://javarush.ru/assets/images/site/sale/matrix/banner-small-desktop-ru.svg" alt="sale" /></a>
                </div>
                <div className={style.schedul__ul}>
                    <ul className={style.schedul__link}>
                        <li className={style.schedul_li}><a className={style.schedul__a} href="/infa">О JavaRush</a></li>
                        <li className={style.schedul_li}><a className={style.schedul__a} href="/help">Помощ</a></li>
                        <li className={style.schedul_li}><a className={style.schedul__a} href="/review">Отзывы</a></li>
                        <li className={style.schedul_li}><a className={style.schedul__a} href="/contacts">Контакты</a></li>
                    </ul>
                </div>
                <div className={style.schedul_about}>
                    <img className={style.schedul_img__ava} src="https://yt3.ggpht.com/ytc/AKedOLRAjMqVg0s2odOstNNKesaZ0YvfqnpDFNzfw_V2=s900-c-k-c0x00ffffff-no-rj" alt="avatar" />
                    <h2 className={style.schedul_item__h2}>О JavaRush</h2>
                </div>
                <div className={style.schedul_item}>
                    <img className={style.schedul_item__img} src="https://javarush.ru/images/system/dd983558-1303-4950-987c-334ef0c3b29b/original.jpeg" alt="img" />
                    <h2 className={style.schedul_item__h2}>Программистом может стать каждый: нужен только правильный подход к обучению.<br/> И мы его нашли</h2>
                    <h3 className={style.schedul_item__h2}>О проекте</h3>
                </div>
                <div className={style.schedul_item__p}>
                    <div className={style.schedul_item__text}>
                        Привет! Рады видеть вас на JavaRush — онлайн-курсе по изучению Java-программирования с нуля. Вам наверняка интересно, кто мы и чем можем быть вам полезны. Что же, с удовольствием об этом расскажем
                        Идея проекта возникла летом 2012 года. Все началось с публикации этого поста о личном опыте переучивания на Java-девелоперов людей из разных сфер. У некоторых учеников был технический опыт, некоторые учились с чистого листа.
                        На занятия уходило примерно 3 месяца. Из них большая часть уроков состояла из практики написания кода. Все ученики успешно находили любимую работу в Java-программировании, независимо от стартового уровня.
                        Когда желающих стало слишком много для частного преподавания, появилсь мысль: а что если сделать курс, который поможет научиться программировать на Java так же эффективно, как и с ментором, но при этом — в онлайн-формате? Чтобы обучению можно было посвящать столько времени, сколько нужно, и заниматься по удобному для себя графику.
                        <h3 className={style.schedul__item__zag}>Так появился JavaRush.</h3>
                        <h2 className={style.schedul__item__zag}>Наша цель — ваше трудоустройство</h2>
                        Чтобы наработать навык программирования и сформировать «правильное» мышление, понадобится около 500-1000 часов практики. Курс JavaRush разработан так, чтобы вы получили необходимое количество опыта.
                        Курс обучения — это инструмент для достижения главной цели — работы Java-разработчиком. Он поможет вам:
                        Освоить основы Java и почувствовать себя уверенно в программировании, даже если вы в этой сфере новичок.
                        Оставаться мотивированным до конца обучения, ведь иногда так сложно заниматься систематически и не остановиться на полпути.
                        Учиться интересно, если вы уже поняли, что объемные книги и длинные видеокурсы не сделают из вас программиста.
                        <h2 className={style.schedul__item__zag}>JavaRush — это не только обучающий курс, но и крупнейшее Java-сообщество</h2>
                        Сегодня на JavaRush зарегистрировано более 1.6 миллиона пользователей из 106 стран.
                        В нашей группе Вконтакте — 450 тысяч подписчиков, на Facebook — более 45 тысяч.
                        Здесь вы найдете единомышленников:
                        Форум для любых обсуждений об обучении и карьере
                        Чат для живого общения с другими пользователями
                        Группы по интересам для чтения и постинга статей о программировании, поиске работы, специализации, личном опыте
                        <h2 className={style.schedul__item__zag}>О команде</h2>
                        Мы всегда рядом! Наша команда помогает с вопросами по решению задач из курса и участвует в обсуждениях на форуме. А еще вы можете обратиться с любым вопросом по курсу в нашу службу поддержки, которая ответит вам в любой день недели.
                        Мы каждый день работаем над улучшением курса и ставим планы по запуску новых фич на год вперед
                        В JavaRush работают люди, которые верят, что обучение должно быть интересным, мотивирующим и практическим. И, конечно же, среди нас есть те, кто и сам начинал изучение Java с JavaRush.
                    </div>
                </div>
            </div>
    )
}

export default InfaPage;