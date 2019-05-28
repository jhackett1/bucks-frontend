import React from 'react'
import Recommendation from './recommendation'


export default class extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        let items = this.props.items

        console.log("DAYS IN STATE:", this.props.days)


        // let filteredItems = this.props.items.filter((item)=>
        //     item.days.some(r=> this.props.days.includes(r))
        // )

        return(
            <>
                <h2>{items.length} personalised recommendations</h2>
                <ul>
                    {(items.map((item, i) =>
                        <Recommendation item={item} key={i} />
                    ))}
                </ul>
            </>
        )
    }
}