import style from './Drop.module.css';

const DropThree = () => {
    return (
        <div>
            <form action="#">
                <select className={style.drop__select}>
                    <option className={style.dropl__option} value="1">Уровени</option>
                    <option className={style.dropl__option} value="2">Уровень 1</option>
                    <option className={style.dropl__option} value="3">Уровень 2</option>
                    <option className={style.dropl__option} value="3">Уровень 3</option>
                    <option className={style.dropl__option} value="3">Уровень 4</option>
                </select>
            </form>
        </div>
    )
}

export default DropThree;