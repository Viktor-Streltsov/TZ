import style from './Drop.module.css';

const DropTwo = () => {
    return (
        <div>
            <form action="#">
                <select className={style.drop__select}>
                    <option className={style.dropl__option} value="1">Любой статус</option>
                    <option className={style.dropl__option} value="2">Доступно</option>
                    <option className={style.dropl__option} value="3">Решено</option>
                    <option className={style.dropl__option} value="3">В разработке</option>
                    <option className={style.dropl__option} value="3">Не доступно</option>
                </select>
            </form>
        </div>
    )
}

export default DropTwo;