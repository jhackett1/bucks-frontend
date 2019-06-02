import React, {useState} from 'react'

import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'

import './style.scss'

export default () => {

    const [page, changePage] = useState(1)
    const [kindOfHelp, answerKindOfHelp] = useState(null)
    const [anySavings, answerAnySavings] = useState(null)

    return(
        <aside className="financial-checker">
            {(page === 1) && <Page1 changePage={changePage}/> }
            {(page === 2) && <Page2 changePage={changePage} kindOfHelp={kindOfHelp} answerKindOfHelp={answerKindOfHelp} /> }
            {(page === 3) && <Page3 changePage={changePage} anySavings={anySavings} answerAnySavings={answerAnySavings}/> }
            {(page === 4) && <Page4 changePage={changePage} kindOfHelp={kindOfHelp} anySavings={anySavings}/> }
        </aside>
    )
}
