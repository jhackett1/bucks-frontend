import './style.scss'
import icon from './search.svg'

export default () =>
    <form className="search">
        {/* <label className="visually-hidden" for="query">Search query</label> */}
        {/* <input className="search__input" type="search" id="query" name="query" placeholder="Start typing..."></input> */}
        <button className="search__submit" type="submit">
            <img className="search__icon" src={icon} alt="Submit search"/>
        </button>
    </form>