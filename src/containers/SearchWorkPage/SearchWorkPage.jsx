import MenuSearch from "../../components/MenuSearch/MenuSearch";

import style from "./SearchWorkPage.module.css";

const SearchWorkPage = () => {
    return (
            <div className={style.work__coteiner}>
                <MenuSearch />
                <div className={style.work}>
                    <a href="/sale"><img className={style.work__img} src="https://javarush.ru/assets/images/site/banner/university/university-ru.svg" alt="sale" /></a>
                </div>
                <div className={style.work__ul}>
                    <ul className={style.work__link}>
                        <li className={style.work_li}><a className={style.work__a} href="/infa">О JavaRush</a></li>
                        <li className={style.work_li}><a className={style.work__a} href="/infa">Помощ</a></li>
                        <li className={style.work_li}><a className={style.work__a} href="/searchwork">Поиск работы</a></li>
                        <li className={style.work_li}><a className={style.work__a} href="/contacts">Контакты</a></li>
                    </ul>
                </div>
                <div className={style.work_about}>
                    <img className={style.work_img__ava} src="https://yt3.ggpht.com/ytc/AKedOLRAjMqVg0s2odOstNNKesaZ0YvfqnpDFNzfw_V2=s900-c-k-c0x00ffffff-no-rj" alt="avatar" />
                    <div className={style.work_handbutton}>
                        <h2 className={style.work_item__h2}>Поиск работы: руководство к действию, «хинты» и нюансы</h2>
                    </div>
                </div>
                <div className={style.work_item}>
                    <img className={style.work_item__img} src="https://avatars.mds.yandex.net/get-zen_doc/3644482/pub_5faa4dc49c3dc81f906bacc6_5faa4e303b7ff25f3016385d/scale_1200" alt="img" />
                    <h2 className={style.work_item__h2}>Программистом может стать каждый: нужен только правильный подход к обучению.</h2>
                    <h3 className={style.work_item__h2}>Как получить первую работу</h3>
                </div>
                <div className={style.work_item__p}>
                    <div className={style.work_item__text}>
                    Как-то раз, рыская в интернете в поисках всевозможной информации по трудоустройству, мы наткнулись на форум «Говорим о США», где обнаружили очень интересные размышления на тему грамотного поиска работы. Автор — Михаил Портнов уже много лет живет в США, в Кремниевой Долине. Там он создал школу, которая обучает людей тестированию ПО, и эти записи оказались конспектом авторских лекций. Невзирая на то, что там шла речь о США, мы нашли их крайне полезными. По мотивам этих материалов мы составили эту статью, в чём-то сократив размышления автора, в чём-то, с условиями специфики рынка, дополнили.<br/>

                        <h3 className={style.work_item__h2}>Мы — товар, они — купец</h3><br/>
                        На рынке мы оказываемся в положении либо покупателя, либо продавца. Рынок труда — не исключение: соискатели на этом рынке — продавцы, компании и рекрутеры — покупатели. Товаром является способность выполнять те или иные обязанности, за которые покупатель готов платить.

                        Очень часто люди отрицают свою роль, как продавца, будто продавать что-то — стыдно, и приличные люди этим не занимаются. На самом деле,ситуации бывают разные, но нас заботят не названия, а то, что эту аналогию можно использовать в собственных целях: товарно-рыночные отношения строятся на определенной модели. Понимаешь модель — знаешь, как действовать в реальности.<br/>

                        <h3 className={style.work_item__h2}>Наш товар: качества работника</h3><br/>
                        Человек претендующий на роль работника, предлагает работодателю два принципиально различных типа качеств.<br/>

                        <i>Тип первый:</i> качества, требующие многих лет чтобы их сформировать. Например, высшее образование, способность выполнять рутинную работу, умение правильно вести себя в коллективе, аналитическое мышление, серьезное отношение к делу. Мы не можем сформировать эти качества, пройдя трехмесячные курсы. Они или уже есть, или их пока нет и если они появятся, то нескоро.<br/>

                        <i>Тип второй:</i> умения и навыки, которые можно достаточно быстро приобрести. Инженера можно за пару месяцев научить на уровне, достаточном для успешного поиска работы, таким технологиям, как HTML, основы языка Java, XML, WinRunner, jUnit, SQL и многому другому. Причем всему сразу и всего за три месяца. Разумеется, за это время он не станет гуру ни в одной их этих областей знаний, но для дела — вполне достаточно. Соответственно, ценность такого навыка — три месяца жизни, а не год или десять.<br/>
                    </div>
                </div>
            </div>
    )
}

export default SearchWorkPage