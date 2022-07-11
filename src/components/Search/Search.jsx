import style from './Search.module.css';

const Search = () => {
    return (
        <div className={style.faind}>
            <form className={style.faind__form} action="#">
                <input className={style.search} id='toggl' type="search" name="faind" size="15" onChange={(e) => console.log(e.target.value)} placeholder="Поиск..."/>
                <input className={style.submit} name='toggl' type="submit" value="🔎"/>
            </form>
        </div>
    )
}

export default Search;