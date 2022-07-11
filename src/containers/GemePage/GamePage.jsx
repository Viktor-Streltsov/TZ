import MenuSearch from '../../components/MenuSearch/MenuSearch';

import style from './GamePage.module.css';

const GamePage = () => {
    return (
        <div className={style.game_conteiner}>
            <MenuSearch />
            <div className={style.game_free}>
            <a href="/sale"><img className={style.game_free__img} src="https://javarush.ru/assets/images/site/banner/university/university-ru.svg" alt="game" /></a>
                <div><a className={style.game_free__link} href="#">Подробнее</a></div>
            </div>
            <div className={style.game_link}>
                <ul className={style.game_link__ul}>
                    <li className={style.game_li}><a className={style.game_a} href="/tasks">Задачи-игры</a></li>
                    <li className={style.game_li}><a className={style.game_a} href="#">Опубликовнные игры</a></li>
                </ul>
            </div>
            <div className={style.game__title}>
            <p className={style.game__text}>Создай собственную версию классической игры!</p><p className={style.game_text_two}>Пиши код, совершенствуй его, играй, давай поиграть друзьям!</p>
            </div>
            <div className={style.game_game}>
                <div className={style.game_geme__content}>
                    <div className={style.geme_content__header}>
                        <img className={style.game_img} src="https://avatars.mds.yandex.net/i?id=b16b8ff400b9b623080efe94c2196fd0-5279455-images-thumbs&n=13" alt="bomb" />
                        <h4 className={style.game_h1}>Сапер</h4>
                        <p  className={style.game_p}>
                            5+<br/>уровень
                        </p>
                    </div>
                    <img className={style.game_img__two} src="https://avatars.mds.yandex.net/i?id=2048be808838dc6e85dafc384d4a9001-6946905-images-thumbs&n=13" alt="one-geme" />
                    <a className={style.game_game__a} href="">ДОСТУПЕН</a>
                </div>
            </div>
            <div className={style.game_game}>
                <div className={style.game_geme__content}>
                    <div className={style.geme_content__header}>
                        <img className={style.game_img} src="https://st3.depositphotos.com/7843760/13009/v/950/depositphotos_130092770-stock-illustration-illustration-of-cobra-snake-cartoon.jpg" alt="one-geme" />
                        <h4 className={style.game_h1}>Змейка</h4>
                        <p  className={style.game_p}>
                            4+<br/>уровень
                        </p>
                    </div>
                    <img className={style.game_img__two} src="https://avatars.mds.yandex.net/i?id=f2a0f8612700d99aff7d33f33341a889-5446590-images-thumbs&n=13" alt="one-geme" />
                    <a className={style.game_game__a} href="">ДОСТУПЕН</a>
                </div>
            </div>
            <div className={style.game_game}>
                <div className={style.game_geme__content}>
                    <div className={style.geme_content__header}>
                        <img className={style.game_img} src="https://avatars.mds.yandex.net/i?id=76b74ae7ccea4473507c443124e8069f-5449844-images-thumbs&n=13" alt="one-geme" />
                        <h4 className={style.game_h1}>2048</h4>
                        <p  className={style.game_p}>
                            2+<br/>уровень
                        </p>
                    </div>
                    <img className={style.game_img__two} src="https://avatars.mds.yandex.net/i?id=e444cd1ea9e86e3712022bc20c57c6b5-5434761-images-thumbs&n=13" alt="one-geme" />
                    <a className={style.game_game__a} href="">ДОСТУПЕН</a>
                </div>
            </div>
            <div className={style.game_game}>
                <div className={style.game_geme__content}>
                    <div className={style.geme_content__header}>
                        <img className={style.game_img} src="https://avatars.mds.yandex.net/i?id=2a0000017a11e80be1590260adc128be8eba-4481877-images-thumbs&n=13" alt="one-geme" />
                        <h4 className={style.game_h1}>Moon lander</h4>
                        <p  className={style.game_p}>
                            4+<br/>уровень
                        </p>
                    </div>
                    <img className={style.game_img__two} src="https://avatars.mds.yandex.net/i?id=1074759a91938366c6833dba3477397f-5611890-images-thumbs&n=13" alt="one-geme" />
                    <a className={style.game_game__a} href="">ДОСТУПЕН</a>
                </div>
            </div>
        </div>
    )
}

export default GamePage;