import './style.scss'

const Page = ({page}) => 
    <li>
        <img src='http://placehold.it/300x200' alt="test"/>
        <h3>Page title goes here</h3>
    </li>

export default ({pages}) => 
    <section className="popular-advice container">
        <h2 className="section-title">Popular advice</h2>
        {pages.map((page, i)=>
            <Page page={page} key={i}/>    
        )}
    </section>