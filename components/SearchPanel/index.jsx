import PopularPages from '../PopularPages'
import './style.scss'
import icon from '../SmallSearch/search.svg'

const SearchForm = () =>
    <form className="search-form">
        <label className="visually-hidden" htmlFor="query">Search query</label>
        <input className="search-form__input" type="search" id="query" name="query" placeholder="Start typing..."></input>
        <button className="search-form__submit" type="submit">
            <img className="search-form__icon" src={icon} alt="Submit search"/>
        </button>
    </form>

export default ({popularPages}) =>
    <section className="search-panel">
        <div className="container">
            <h2 className="search-panel__title section-title">Search</h2>
            <p className="search-panel__lede">Find more information, advice and guidance</p>
            <SearchForm/>
            <PopularPages popularPages={popularPages}/>
        </div>
    </section>