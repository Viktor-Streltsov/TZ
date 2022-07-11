import MenuSearch from '../../components/MenuSearch/MenuSearch';
import Search from '../../components/Search/Search';
import Drop from '../../components/Drop/Drop';
import DropThree from '../../components/DropThree/Drop';
import DropTwo from '../../components/DropTwo/Drop';

import style from './Quizzes.module.css'

const QuizzesPage = () => {
    return (
        <>
            <div className={style.quizzes_conteiner}>
                <MenuSearch />
                <div className={style.quizzes_free}>
                    <a href="/sale"><img className={style.quizzes_free__img} src="https://javarush.ru/assets/images/site/banner/university/university-ru.svg" alt="quizzes" /></a>
                    <div><a className={style.quizzes_free__link} href="#">Подробнее</a></div>
                </div>
                <div className={style.quizzes_link}>
                    <ul className={style.quizzes_link__ul}>
                        <li className={style.quizzes_li}>
                            <Search />
                        </li>
                        <li className={style.quizzes_li}>
                            <Drop />
                        </li>
                        <li className={style.quizzes_li}>
                            <DropTwo />
                        </li>
                        <li className={style.quizzes_li}>
                            <DropThree />
                        </li>
                    </ul>
                </div>
                <div className={style.quizzes_content}>
                    <div className={style.quizzes_geme__content}>
                        <img className={style.quizzes_img} src="https://uprostim.com/wp-content/uploads/2021/03/image101-67.jpg" alt="one-geme" />
                        <h4 className={style.quizzes_h1}>Команды и первая программа</h4>
                        <p  className={style.quizzes_p}>
                            Какая была ваша первая програма?
                        </p>
                        <div className={style.quizzes_but}>
                        <a className={style.quizzes_quizzes__a} href="">НЕДОСТУПЕН</a>
                        </div>
                    </div>
                    <div className={style.quizzes_geme__content}>
                        <img className={style.quizzes_img} src="https://yt3.ggpht.com/ytc/AKedOLRAjMqVg0s2odOstNNKesaZ0YvfqnpDFNzfw_V2=s900-c-k-c0x00ffffff-no-rj" alt="two-geme" />
                        <h4 className={style.quizzes_h1}>Знакомство с типами, ввод с клавиатуры</h4>
                        <p className={style.quizzes_p}>
                            Наиболее простой способ взаимодействия с пользователем представляет консоль: мы можем выводить на консоль некоторую информацию или, наоборот, считывать с консоли некоторые данные. Для взаимодействия с консолью в Java применяется класс System, а его функциональность собственно обеспечивает консольный ввод и вывод.
                        </p>
                        <div className={style.quizzes_but}>
                            <a className={style.quizzes_quizzes__a} href="">НЕДОСТУПЕН</a>
                        </div>
                    </div>
                    <div className={style.quizzes_geme__content}>
                        <img className={style.quizzes_img} src="https://ru-static.z-dn.net/files/d22/0372765fb7018265cf06eeb680c63b81.jpg" alt="three" />
                        <h4 className={style.quizzes_h1}>Циклы</h4>
                        <p className={style.quizzes_p}>
                            Циклы позволяют в зависимости от определенных условий выполнять определенное действие множество раз.
                        </p>
                        <div className={style.quizzes_but}>
                            <a className={style.quizzes_quizzes__a} href="">НЕДОСТУПЕН</a>
                        </div>
                    </div>
                    <div className={style.quizzes_geme__content}>
                        <img className={style.quizzes_img} src="https://klike.net/uploads/posts/2020-01/1578662864_14.jpg" alt="four" />
                        <h4 className={style.quizzes_h1}>Работа в IDE и Debug</h4>
                        <p className={style.quizzes_p}>
                            Отладка - это процесс поиска и исправления ошибок в ваших программах. Встроенный отладчик Jdeveloper позволяет отлаживать приложения Java, апплеты, сервлеты, страницы JavaServer (JSP) и корпоративные JavaBeans (EJB).
                        </p>
                        <div className={style.quizzes_but}>
                            <a className={style.quizzes_quizzes__a} href="">НЕДОСТУПЕН</a>
                        </div>
                    </div>
                    <div className={style.quizzes_geme__content}>
                        <img className={style.quizzes_img} src="https://coolsen.ru/wp-content/uploads/2021/06/60-8-768x768.jpg" alt="four" />
                        <h4 className={style.quizzes_h1}>Массивы</h4>
                        <p className={style.quizzes_p}>
                            Массивы в Java — это структура данных, которая хранит упорядоченные коллекции фиксированного размера элементов нужного типа.
                        </p>
                        <div className={style.quizzes_but}>
                            <a className={style.quizzes_quizzes__a} href="">НЕДОСТУПЕН</a>
                        </div>
                    </div>
                    <div className={style.quizzes_geme__content}>
                        <img className={style.quizzes_img} src="https://coolsen.ru/wp-content/uploads/2021/06/4-7.jpg" alt="four" />
                        <h4 className={style.quizzes_h1}>Функции</h4>
                        <p className={style.quizzes_p}>
                            Функция — часть программы, имеющая собственное имя. Это имя можно использовать в программе как команду (такая команда называется вызовом функции). При вызове функции выполняются команды, из которых она состоит. Вызов функции может возвращать значение (аналогично операции) и поэтому может использоваться в выражении наряду с операциями.
                        </p>
                        <div className={style.quizzes_but}>
                            <a className={style.quizzes_quizzes__a} href="">НЕДОСТУПЕН</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuizzesPage;