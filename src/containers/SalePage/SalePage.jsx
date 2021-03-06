import MenuSearch from "../../components/MenuSearch/MenuSearch";

import style from "./SalePage.module.css"

const SalePage = () => {
    return (
        <div className={style.content_sale}>
            <div>
                <MenuSearch />
            </div>
            <div className={style.sale_end}>
                <img className={style.sale_img} src="https://javarush.ru/sapper/assets/images/site/homepage/BenefitsSectionCase1.webp" />
            </div>
            <span className={style.sale_notsel}>Акций пока нет</span>
            <h2 className={style.ligo_premium}>Подписка Premium</h2>
            <div className={style.premium}>
                <div className={style.premium_item}><h3>Мгновенная проверка задач</h3>
                На очных курсах на преподавателя валится огромное количество студенческих программ. Он физически не успевает внимательно и быстро проверить все. Студентам приходится подолгу ждать! На JavaRush такой проблемы нет: наш валидатор проверяет решение мгновенно. Жмёте на кнопку, и через пару секунд вы уже знаете, правильно ли решили задачу. Если ошиблись, вы получаете список требований и рекомендации, что именно нужно исправить.
                </div>
                <div className={style.premium_item}><h3>Доступ ко всем квестам JavaRush</h3>
                JavaRush состоит из квестов Java Syntax, Java Core, Java Collections и Multithreading. Это хорошо структурированный курс по всем ключевым темам Java. В нём вы найдёте более чем 500 мини-лекций и 1200 практических задач.
                </div>
                <div className={style.premium_item}><h3>Плагин к Intellij IDEA</h3>
                Мы учим студентов работать в IntelliJ IDEA – одной из самых удобных и популярных IDE для Java. Чтобы вам было комфортнее, мы написали плагин JavaRush для IntelliJ IDEA. С его помощью вы сможете получить задачу за два клика мышки, а сдать на проверку – за один!
                </div>
                <div className={style.premium_item}><h3>Мини-проекты</h3>
                Новичку сложно писать большие программы, он не знает, как к ним подступиться. Вот почему мы придумали мини-проекты, которые состоят из 15-20 подзадач. Для каждой подзадачи есть подробная инструкция, что нужно делать. Таким образом, вы получите опыт разработки относительно сложных приложений. Например, вы напишете простые игры, online-чат, систему автоматизации работы ресторана и многое другое.
                </div>
                <div className={style.premium_item}><h3>Требования к задачам</h3>
                Рекомендации к задачам составлены на основе анализа десятков тысяч ошибок предыдущих студентов JavaRush. Когда наша система распознает такую ошибку, вы автоматически получаете заранее подготовленную рекомендацию от программиста — автора задачи. Это практически равносильно работе с персональным ментором.
                </div>
                <div className={style.premium_item}><h3>Рекомендации к задачам</h3>
                Задачи для будущих суперпрограммистов! Они сложнее обычных, и требуют куда больше усилий и времени, даже если у вас обучение идёт, как по маслу. Бонусные задачи посвящены алгоритмам, паттернам и другим темам, с которыми у многих возникают трудности.
                </div>
            </div>
            <div className={style.premium_item__end}>
                    <div className={style.premium_item}><h3>Бонусные задачи</h3>
                    Задачи для будущих суперпрограммистов! Они сложнее обычных, и требуют куда больше усилий и времени, даже если у вас обучение идёт, как по маслу. Бонусные задачи посвящены алгоритмам, паттернам и другим темам, с которыми у многих возникают трудности.
                    </div>
                </div>
            <div className={style.premium_link}>
                <a className={style.premium_link__text}>Купить Premium подписку)</a>
            </div>
        </div>
    )
}

export default SalePage;