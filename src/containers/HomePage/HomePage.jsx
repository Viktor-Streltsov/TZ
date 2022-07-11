import HeaderHome from "./HeaderHome/HeaderHome";

import style from './HomePage.module.css'

const HomePage = () => {
    return (
        <div className={style.content}>
                <nav className={style.heder__menu}>
                    <HeaderHome />
                </nav>
                    <div className={style.home}>
                        <h1 className={style.home_text}>
                            Чтобы стать программистом,<br/> нужно программировать
                        </h1>
                        <span className={style.home_text_two}>
                            JavaRush - это онлайн-курсобучение програмирование на Java,<br/> который на 80% состоит из практики
                        </span>
                        <img className={style.home_glass} src="https://javarush.ru/sapper/assets/images/site/homepage/HeroDecorationGlassLight.webp" alt="glass" />
                        <img className={style.home_coffe} src="https://javarush.ru/sapper/assets/images/site/homepage/HeroDecorationCoffeecupLight.webp" alt="coffe"/>
                        <img className={style.home_leptop} src="https://javarush.ru/assets/images/site/homepage/HeroLaptopLight.png" alt="leptop"/>
                        <img className={style.home_shedow} src="https://javarush.ru/assets/images/site/homepage/HeroLaptopShadowLight.png" />
                        <img className={style.home_notebook} src="https://javarush.ru/sapper/assets/images/site/homepage/HeroDecorationNotebookLight.webp" alt="notebook"/>
                </div>
                <div className={style.home_colum}>
                    <div className={style.home_colum_one}>
                        <img className={style.home_scales} src="https://javarush.ru/assets/images/site/homepage/InfoSectionPracticeLight.svg" alt="scales"/>
                        <div className={style.home_title_colum}>
                            <h2 className={style.home_h2}>
                                Обучение на 80% состоит из практики
                            </h2>
                            <p>
                                В Интернете много хороших книг, но читая книги программистом не станешь. Чтобы стать программистом, нужно много программировать. JavaRush — это онлайн-курс обучения программированию на Java, на 80% состоящий из практики. Именно то, что нужно чтобы стать Java‑программистом.
                            </p>
                        </div>
                    </div>
                    <div className={style.home_colum_two}>
                        <div className={style.home_title_colum}>
                            <h2 className={style.home_h2}>
                                1200 практических заданий
                            </h2>
                            <p>
                                Сколько практических заданий должен содержать идеальный курс по Java? 10, 20, 100? Курс JavaRush содержит 1200 практических задач возрастающей сложности. Задачи небольшие, но их много, очень много. Как раз тот минимум, выполнив который, вы получите опыт необходимый для трудоустройства.
                            </p>
                        </div>
                       <img className={style.home_height} src="https://javarush.ru/assets/images/site/homepage/InfoSectionPractice2Light.svg" alt="height"/>
                    </div>
                    <div className={style.home_colum_three}>
                        <img className={style.home_stopwatch} src="https://javarush.ru/assets/images/site/homepage/InfoSectionInstantVerificationLight.svg" alt="stopwatch"/>
                        <div className={style.home_title_colum}>
                            <h2 className={style.home_h2}>
                                Мгновенная проверка задач
                            </h2>
                            <p>
                                Знакома ли вам ситуация, когда вы сдали задачу/работу на проверку, а результатов пришлось ждать неделю, т.к. проверяющий занят? Именно так обстоят дела в большинстве очных курсов. В JavaRush вы узнаёте результаты проверки задачи меньше чем через секунду, после нажатия кнопки «Проверить».
                            </p>
                        </div>
                    </div>
                    <div className={style.home_colum_four}>
                    <div className={style.home_title_colum}>
                        <h2 className={style.home_h2}>
                            500+ часов опыта программирования на Java
                        </h2>
                        <p>
                            Курс Java разбит на 40 уровней. Вы можете перейти на следующий уровень, только если решили большую часть задач текущего уровня. Начиная с маленьких и легких и заканчивая большими и очень полезными. Каждый, дошедший до конца, получит 500+ часов практического опыта. Серьезная заявка на победу. И на работу.
                        </p>
                    </div>
                        <img className={style.home_men} src="https://javarush.ru/assets/images/site/homepage/InfoSectionJavaManLight.svg" alt="men"/>
                    </div>
                    <div className={style.home_colum_five}>
                        <img className={style.home_method} src="https://javarush.ru/assets/images/site/homepage/InfoSectionTeachingLight.svg" alt="metchod"/>
                        <div className={style.home_title_colum}>
                            <h2 className={style.home_h2}>
                                Новейшие обучающие методики
                            </h2>
                            <p>
                                Как в нашем веке вообще можно учиться только по книгам? Такой подход был инновационным в 17 веке, но не в 21. В JavaRush используются новейшие методики, которые делают ваше обучение легче, интересней и продуктивнее: визуализация, сторитейлинг, мотивация, геймификация и еще два десятка технологий, о которых вы даже не слышали.
                            </p>
                        </div>
                    </div>
                    <div className={style.home_colum_six}>
                    <div className={style.home_title_colum}>
                        <h2 className={style.home_h2}>
                            Изучайте Java онлайн в любое время
                        </h2>
                        <p>
                            Занимайтесь в своем темпе, с подходящей вам регулярностью. Здесь не нужно ждать, пока наберется группа и подстраиваться под жесткий график. Просто нажмите “Начать” и погружайтесь в увлекательный мир Java сегодня!
                        </p>
                    </div>
                        <img className={style.home_pc} src="https://javarush.ru/assets/images/site/homepage/InfoSectionCodingLight.svg" alt="pc"/>
                    </div>
                </div>
        </div>
    )
}

export default HomePage;