import MenuSearch from "../../components/MenuSearch/MenuSearch";

import style from "./QuestsPage.module.css";

const QuestsPage = () => {
    return (
        <div className={style.quests_conteiner}>
                <MenuSearch />
            <div className={style.quests_free}>
                <a href="/sale"><img className={style.quests_free__img} src="https://javarush.ru/assets/images/site/sale/matrix/banner-small-desktop-ru.svg" alt="sale" /></a>
            </div>
            <div className={style.quests_link}>
                <ul className={style.quests_link__ul}>
                    <li className={style.quests_li}><a className={style.quests_a} href="#">Карта квестов</a></li>
                    <li className={style.quests_li}><a className={style.quests_a} href="#">Лекции</a></li>
                    <li className={style.quests_li}><a className={style.quests_a} href="/cs50">CS50</a></li>
                    <li className={style.quests_li}><a className={style.quests_a} href="#">Android</a></li>
                </ul>
            </div>
            <div className={style.quests_game}>
                <div className={style.quests_geme__content}>
                    <img className={style.quests_img} src="https://cdn.javarush.ru/images/system/0c28d392-d8fd-4dfd-9cae-655868b85f61/1024.webp" alt="one-geme" />
                    <h4 className={style.quests_h1}>Java Syntax Pro</h4>
                    <p  className={style.quests_p}>
                        Квест «Java Syntax PRO» разработан в секретном центре JavaRush. Он состоит из 10+ уровней (в зависимости от Вашего стартового уровня), посвященных основам языка Java. Его освоит даже тот, кто никогда не программировал. Вы узнаете, что такое классы, объекты, методы и переменные. Изучите основные типы данных, массивы, условные операторы, циклы и лямбда-функции. Глянете одним глазком на коллекции и основы ООП (серьезное их изучение начнется в Квесте 4).
                    </p>
                    <a className={style.quests_game__a} href="#">НЕДОСТУПЕН</a>
                </div>
                <div className={style.quests_geme__content}>
                    <img className={style.quests_img} src="https://cdn.javarush.ru/images/system/f7658a11-35a6-4ea2-a29a-fd1acfb5b3ed/1024.webp" alt="two-geme" />
                    <h4 className={style.quests_h1}>Java Core</h4>
                    <p className={style.quests_p}>
                        Квест «Java Core» рассчитан на тех, кто уже получил минимальную подготовку по Java (в рамках Квеста «Java Syntax» JavaRush). Здесь вам предстоит пройти 10 увлекательных уровней, в которых вы изучите основы ООП, познакомитесь с потоками, сериализацией, перегрузкой методов, узнаете много нового об интерфейсах и множественном наследовании. Учёба уже не так проста, как на Квесте «Java Syntax», но регулярная практика — решение задач — поможет вам успешно пройти все его 10 уровней и быть готовым к разработке мини-проектов в самом ближайшем будущем.
                    </p>
                    <a className={style.quests_game__a} href="#">НЕДОСТУПЕН</a>
                </div>
                <div className={style.quests_geme__content}>
                    <img className={style.quests_img} src="https://cdn.javarush.ru/images/system/8fcb49cc-7a26-480c-8924-ff4873afa76c/1024.webp" alt="three" />
                    <h4 className={style.quests_h1}>Java Multithreading</h4>
                    <p className={style.quests_p}>
                        Квест «Java Multithreading» познакомит студентов секретного центра JavaRush с многопоточностью. В течение 10 уровней вы будете изучать устройство объекта Object, String, внутренние классы. Узнаете, как создавать и останавливать потоки, что такое DeadLock, Wait, notify, notifyAll, получите опыт работы с Jsoup и Swing, а также узнаете об автоупаковке и особенностях её реализации. На этом квесте вы создадите ваши первые мини-проекты — большие задачи. В обучающих целях их решение будет разбито на этапы. Вам нужно будет написать несколько игр — тетрис, змейку, космическую стрелялку, арканоид. Также вы поработаете над серьезными многоступенчатыми задачами, наподобие чата, эмулятора банкомата и даже парсера сайтов!
                    </p>
                    <a className={style.quests_game__a} href="#">НЕДОСТУПЕН</a>
                </div>
                <div className={style.quests_geme__content}>
                    <img className={style.quests_img} src="https://cdn.javarush.ru/images/system/8fcb49cc-7a26-480c-8924-ff4873afa76c/1024.webp" alt="four" />
                    <h4 className={style.quests_h1}>Java Collections</h4>
                    <p className={style.quests_p}>
                        Квест «Java Collections» посвящен детальному изучению Java-коллекций, но не только их одних. Речь пойдет о том, как работать с файлами и архивами, что такое паттерны проектирования и как их применять. Вы получите опыт работы с JSON, Guava, Apache Commons Collections, JUnit, узнаете подробности о сборке мусора в Java. Помимо продвинутых составляющих Core, вы познакомитесь с необходимыми любому современному разработчику инструментами, узнаете о Git и JAXB, RMI и DynamicProxy, прикоснетесь к другому важному языку программирования — JavaScript. В этом квесте вы создадите мини-проекты — большие задачи. В обучающих целях их решение будет разбито на этапы.
                    </p>
                    <a className={style.quests_game__a} href="#">НЕДОСТУПЕН</a>
                </div>
            </div>
        </div>
    )
}

export default QuestsPage;