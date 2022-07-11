import MenuSearch from "../../components/MenuSearch/MenuSearch";

import style from "./ReviewPage.module.css"

const ReviewPage = () => {
    return (
        <div className={style.review__coteiner}>
            <MenuSearch />
            <div className={style.review}>
            </div>
            <div className={style.review__ul}>
                <ul className={style.review__link}>
                    <li className={style.review_li}><a className={style.review__a} href="/infa">О JavaRush</a></li>
                    <li className={style.review_li}><a className={style.review__a} href="/help">Помощ</a></li>
                    <li className={style.review_li}><a className={style.review__a} href="/searchwork">Поиск работы</a></li>
                    <li className={style.review_li}><a className={style.review__a} href="/contacts">Контакты</a></li>
                </ul>
            </div>
            <div className={style.review_about}>
                <img className={style.review_img__ava} src="https://yt3.ggpht.com/ytc/AKedOLRAjMqVg0s2odOstNNKesaZ0YvfqnpDFNzfw_V2=s900-c-k-c0x00ffffff-no-rj" alt="avatar" />
                <div className={style.review_handbutton}>
                    <h2 className={style.review_item__h2}>Отзывы</h2>
                </div>
            </div>
            <div className={style.review_item__p}>
                <div className={style.review_item__text}>
                    <h2 className={style.review_item__h2}>Оставьте отзыв: это важно</h2>

                    В этом разделе вы можете рассказать о том, что вам нравится в JavaRush, а что стоит улучшить в курсе, написать о своем опыте обучения и отправить совет по электронной почте.

                    <h2 className={style.review_item__h2}>Что делать, если возник вопрос по курсу?</h2>

                    Если у вас что-то не работает, сервер не принимает задачу (даже если вы на 100% уверены, что она решена правильно), опишите ситуацию в разделе <a href="#">“Помощь”</a>.

                    По всем остальным вопросам (не связанным с решением задач) обращайтесь в службу поддержки: <a href="#">support@javarush.ru</a>.
                </div>
            </div>
        </div>
    )
}

export default ReviewPage;