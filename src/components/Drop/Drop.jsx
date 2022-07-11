import style from './Drop.module.css';

const Drop = () => {
    return (
        <div>
            <form action="#">
                <select className={style.drop__select}>
                    <option className={style.dropl__option} value="1">Все квесты</option>
                    <option className={style.dropl__option} value="2">Java Syntax</option>
                    <option className={style.dropl__option} value="3">Java Core</option>
                    <option className={style.dropl__option} value="3">Java Syntax Pro</option>
                    <option className={style.dropl__option} value="3">Spring</option>
                </select>
            </form>
        </div>
    )
}

export default Drop;