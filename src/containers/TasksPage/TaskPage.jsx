import MenuSearch from "../../components/MenuSearch/MenuSearch";
import Search from "../../components/Search/Search";
import Drop from "../../components/Drop/Drop";
import DropThree from "../../components/DropThree/Drop";
import DropTwo from "../../components/DropTwo/Drop";

import style from "./TaskPage.module.css";

const TaskPage = () => {
    return (
        <>
            <div className={style.task_conteiner}>
                <MenuSearch />
                <div className={style.task_free}>
                    <a href="/sale"><img className={style.task_free__img} src="https://javarush.ru/assets/images/site/banner/university/university-ru.svg" alt="sale" /></a>
                </div>
                <h2 className={style.task_free__h2}>Задачи</h2>
                <div className={style.task_free__ul}>
                    <ul className={style.task_free__link}>
                        <li className={style.task_free_li}><Search /></li>
                        <li className={style.task_free_li}><Drop /></li>
                        <li className={style.task_free_li}><DropTwo /></li>
                        <li className={style.task_free_li}><DropThree /></li>
                    </ul>
                </div>
                <div className={style.task_game}>
                    <div className={style.task_geme__content}>
                        <img className={style.task_img} src="https://uprostim.com/wp-content/uploads/2021/03/image101-67.jpg" alt="one-geme" />
                        <h4 className={style.task_h1}>Java Syntax Pro</h4>
                        <p  className={style.task_p}>
                            Написать программу, выводящую на экран надпись «Амиго очень умный». Пример вывода на экран: Амиго очень умный
                        </p>
                        <a className={style.task_game__a} href="#">НЕДОСТУПЕН</a>
                    </div>
                    <div className={style.task_geme__content}>
                        <img className={style.task_img} src="https://yt3.ggpht.com/ytc/AKedOLRAjMqVg0s2odOstNNKesaZ0YvfqnpDFNzfw_V2=s900-c-k-c0x00ffffff-no-rj" alt="two-geme" />
                        <h4 className={style.task_h1}>Java Core</h4>
                        <p className={style.task_p}>
                            Если вы считаете, что быть программистом — не круто, значит, вы ещё не пробовали им быть. Самое время попробовать и написать первую программу. Выведите с помощью команды вывода на экран фразу, которую один выпускник JavaRush некогда выцарапал на корпусе своего космического корабля: Я думаю, быть программистом круто
                        </p>
                        <a className={style.task_game__a} href="#">НЕДОСТУПЕН</a>
                    </div>
                    <div className={style.task_geme__content}>
                        <img className={style.task_img} src="https://ru-static.z-dn.net/files/d22/0372765fb7018265cf06eeb680c63b81.jpg" alt="three" />
                        <h4 className={style.task_h1}>Java Multithreading</h4>
                        <p className={style.task_p}>
                            В Java нельзя просто так взять — и использовать переменную! Вас не поймут компиляторы не поймут, ругаться будут, вот увидите!. Так что если уж вы решились что-то делать с переменной, об этом намерении нужно объявить во всеуслышание! Пишем программу, которая объявляет переменные типов int и String.
                        </p>
                        <a className={style.task_game__a} href="#">НЕДОСТУПЕН</a>
                    </div>
                    <div className={style.task_geme__content}>
                        <img className={style.task_img} src="https://i.pinimg.com/originals/5f/ec/43/5fec434132f1ce5ab06beb22ebbb2c34.jpg" alt="four" />
                        <h4 className={style.task_h1}>Java Collections</h4>
                        <p className={style.task_p}>
                            В Java переменные нужно объявлять, то есть выделять место под переменную определенного типа, и только после этой процедуры ей можно присвоить конкретное значение. Радует то, что это можно сделать буквально в одну строку. В этой задаче вам предстоит объявить несколько переменных и сразу же присвоить им значения.
                        </p>
                        <a className={style.task_game__a} href="#">НЕДОСТУПЕН</a>
                    </div>
                </div>
            </div>
        </> 
    )   
}

export default TaskPage;