import style from './Footer.module.css';

const Footer = () => {
    return (
            <div className={style.footer_link}>
                <div className={style.footer_colum}>
                    <span className={style.footer_lable}>Учеба</span>
                    <ul className={style.footer_ul}>
                        <li className={style.footer_li}><a className={style.footer_link_page} href='#'>Курсы программирования</a></li>
                        <li className={style.footer_li}><a className={style.footer_link_page} href='#'>Регистрация</a></li>
                        <li className={style.footer_li}><a className={style.footer_link_page} href='#'>Курс Java</a></li>
                        <li className={style.footer_li}><a className={style.footer_link_page} href='#'>Помощь по задачам</a></li>
                        <li className={style.footer_li}><a className={style.footer_link_page} href='#'>Цены</a></li>
                        <li className={style.footer_li}><a className={style.footer_link_page} href='#'>Задачи-игры</a></li>
                    </ul>
                </div>
                <div className={style.footer_colum}>
                    <span className={style.footer_lable}>Команда</span>
                    <ul className={style.footer_ul}>
                        <li className={style.footer_li}><a className={style.footer_link_page} href='#'>Все пользователи</a></li>
                        <li className={style.footer_li}><a className={style.footer_link_page} href='#'>Статьи</a></li>
                        <li className={style.footer_li}><a className={style.footer_link_page} href='#'>Форум</a></li>
                        <li className={style.footer_li}><a className={style.footer_link_page} href='#'>Чат</a></li>
                        <li className={style.footer_li}><a className={style.footer_link_page} href='#'>Истории успеха</a></li>
                        <li className={style.footer_li}><a className={style.footer_link_page} href='#'>Аутивности</a></li>
                    </ul>
                </div>
                <div className={style.footer_colum}>
                    <span className={style.footer_lable}>Компания</span>
                    <ul className={style.footer_ul}>
                        <li className={style.footer_li}><a className={style.footer_link_page} href='#'>О нас</a></li>
                        <li className={style.footer_li}><a className={style.footer_link_page} href='#'>Контакты</a></li>
                        <li className={style.footer_li}><a className={style.footer_link_page} href='#'>Отзывы</a></li>
                        <li className={style.footer_li}><a className={style.footer_link_page} href='#'>FAQ</a></li>
                        <li className={style.footer_li}><a className={style.footer_link_page} href='#'>Подержка</a></li>
                    </ul>
                </div>
                <div className={style.footer_colum_text}>
                    <p className={style.footer_text}>
                        <img className={style.footer_img} src='https://javarush.ru/sapper/assets/images/site/logo/logo-jr-full.svg' alt='img' />
                        <br/>
                        JavaRush — это интерактивный онлайн-курс по изучению Java-программирования c нуля. Он содержит 1200 практических задач с проверкой решения в один клик, необходимый минимум теории по основам Java и мотивирующие фишки, которые помогут пройти курс до конца: игры, опросы, интересные проекты и статьи об эффективном обучении и карьере Java‑девелопера.
                    </p>
                </div>
            </div>
    )
}

export default Footer;