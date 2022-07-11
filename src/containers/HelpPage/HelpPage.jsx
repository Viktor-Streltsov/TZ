import MenuSearch from "../../components/MenuSearch/MenuSearch";

import style from "./HelpPage.module.css";

const HelpPage = () => {
    return (
        <div className={style.help_content}>
            <MenuSearch />
            <div className={style.help}>
                    <a href="/sale"><img className={style.help__img} src="https://javarush.ru/assets/images/site/sale/matrix/banner-small-desktop-ru.svg" alt="sale" /></a>
                </div>
                <div className={style.help__ul}>
                    <ul className={style.help__link}>
                        <li className={style.help_li}><a className={style.help__a} href="/infa">О JavaRush</a></li>
                        <li className={style.help_li}><a className={style.help__a} href="/help">Помощ</a></li>
                        <li className={style.help_li}><a className={style.help__a} href="/review">Отзывы</a></li>
                        <li className={style.help_li}><a className={style.help__a} href="/contacts">Контакты</a></li>
                    </ul>
                </div>
                <h2 className={style.help__h2}>Помощь</h2>
                <div className={style.help_content__text}>
                    <div className={style.help_qweshens}>
                        <img className={style.help_img_ava} src="https://yt3.ggpht.com/ytc/AKedOLRAjMqVg0s2odOstNNKesaZ0YvfqnpDFNzfw_V2=s900-c-k-c0x00ffffff-no-rj" alt="" />
                        <h2 className={style.help_qwesshens__h2}>Как пользоваться JavaRush</h2>
                    </div>
                    <div className={style.help__item}>
                        <div className={style.help_p}>
                            <h2 className={style.help_h}>Цель курса</h2>
                            Цель всего курса – получить удовольствие, хорошее настроение и реальные навыки программирования на Java, чтобы легко устроиться работать программистом.
                            <h2 className={style.help_h}>Устройство игры</h2>
                            Курс состоит из четырех основных квестов, а квест — из десяти уровней. Каждый уровень содержит 10-12 лекций и 20-30 практических задач. За решение задач и некоторые другие активные действия вы получаете очки опыта или «черную материю». С её помощью вы сможете открывать следующие лекции и задачи.
                            Переход на следующий уровень и к следующей лекции<br/>
                            <img className={style.help_img} src="https://cdn.javarush.ru/images/system/f52ef80c-bb9e-46d8-92b4-dfc5fbbcc36d/512.jpeg" alt="infa" />
                            Чтобы перейти к следующей лекции или уровню, нужно собрать достаточное количество «чёрной материи» и «заплатить» ею за переход.
                            Сколько единиц материи ты получишь за решение той или иной задачи, увидишь на карточке задачи и рядом с её условием.<br/>
                            <img className={style.help_img} src="https://cdn.javarush.ru/images/system/e98ff1be-81e1-4996-800e-cdc92fd24c41/512.jpeg" alt="infa" />
                            Например, за решение этой задачи ты получишь 10 единиц «Черной материи».
                            <h2 className={style.help_h}>Практические задания</h2>
                            На JavaRush вас ждет целый ворох разнообразных заданий. Именно за их выполнение вы получаете чёрную материю.
                            Ввод кода по образцу — это самое простое практическое задание. Для его выполнения, нужно в нижней части окна ввести Java-код, идентичный образцу (он в верхней части окна).<br/>
                            <img className={style.help_img} src="https://cdn.javarush.ru/images/system/6185a910-2a65-4fa0-9812-56240b28b16d/1024.jpeg" alt="infa" />
                            Написать программу — это самые важные задания курса. Они могут быть очень разного уровня, от простейших задачек до таких, над которыми придется изрядно помозговать. Ты можешь начать решать любую задачу со статусом «Доступна». Чтобы приняться за неё, жми на кнопку «Открыть» на карточке с описанием.<br/>
                            <img className={style.help_img} src="https://cdn.javarush.ru/images/system/d0709d27-4f7e-44af-92a3-dcba68bb1db1/1024.jpeg" alt="infa" />
                            Перед тобой откроется окошко WebIDE. На первой вкладке можно изучить условие, на второй — окно для ввода кода, а то, что ты видишь слева — это дерево проекта.<br/>
                            <img className={style.help_img} src="https://cdn.javarush.ru/images/system/f8056764-66b7-4982-bff5-78fd36fefae4/1024.jpeg" alt="infa" />
                            Решив задачу, нужно нажать кнопку «Проверка», тогда ты получишь ответ на вопрос, правильно ли решена задача.<br/>
                            <img className={style.help_img} src="https://cdn.javarush.ru/images/system/3de778f0-fb32-495a-9802-fd74fb5cba40/1024.jpeg" alt="infa" />
                            Если ты хочешь просто запустить программу без проверки — жми кнопку «Запуск».<br/>
                            <img className={style.help_img} src="https://cdn.javarush.ru/images/system/9f112c11-f931-4e0c-b5eb-2471b95742f6/1024.jpeg" alt="infa" />
                            На этом же тулбаре, как видишь, можно сбросить решение (на случай, если запутался), проанализировать код (если ты записан к наставнику Дарк Гранд Мастеру) или получить помощь в решении.
                            Создать мини-проект — это самые интересные и сложные задания! Условия мини-проектов разбиты на несколько последовательных связанных между собой подзадач. В результате ты создашь небольшой, но собственный проект. Какую-нибудь игру, например. Но до первых мини-проектов тебе ещё работать и работать, аж до 20 уровня.
                            Айтишный релакс — это самые-самые сложные задания! Шутка. Чаще всего задание «релакса» заключается в просмотре интересного видео на айтишную тему. И да, за это тебе тоже дадут чёрную материю!
                            P.S.: Начиная с третьего уровня, ты сможешь решать задачки в среде разработки IntelliJ IDEA. Из лекции ты узнаешь, как это сделать. Но об этом чуть позже.
                            <h2 className={style.help_h}>Статусы лекций и задач</h2>
                            У задач могут быть такие статусы: «Доступна» — можно решать!<br/>
                            <img className={style.help_img} src="https://cdn.javarush.ru/images/system/0b35e05f-9227-4072-968f-f4c9d1f3da81/1024.jpeg" alt="infa" />
                            «Решена» — ты решил задачу правильно, получил чёрную материю и с этого момента ещё не прошло три дня. Это значит, что ты можешь попробовать решить её еще раз, чтобы улучшить решение.<br/>
                            <img className={style.help_img} src="https://cdn.javarush.ru/images/system/40c12c4f-b6ee-4f4e-a002-d29aada37746/1024.jpeg" alt="infa" />
                            «Закрыта» — ты решил задачу правильно, получил чёрную материю и с этого момента прошло три дня.<br/>
                            <img className={style.help_img} src="https://cdn.javarush.ru/images/system/2c08fd9c-cd9c-4d88-afd2-7eac771dd67a/1024.jpeg" alt="infa" />
                            «Недоступна» — пока за эту задачу браться рано, нужно почитать лекции.<br/>
                            <img className={style.help_img} src="https://cdn.javarush.ru/images/system/ae459d96-517d-4c2c-9d6c-e5d9bb779bca/1024.jpeg" alt="infa" />
                            У лекций есть два статуса: «Открыта» и «Недоступна».<br/>
                            <img className={style.help_img} src="https://cdn.javarush.ru/images/system/793f0fc1-1255-4926-b611-07a09d8d7fe9/1024.jpeg" alt="infa" />
                            Первая «недоступная» лекция после «открытых» — это то, на чём ты остановился. Если вы щелкнете по ней, вам предложат её открыть за определённое количество «Черной материи». На нее можно перейти из предыдущей лекции, а можно просто щёлкнуть по её карточке в списке лекций.
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default HelpPage;