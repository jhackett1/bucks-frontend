import fetch from 'isomorphic-unfetch'

import Question1 from '../components/question-1'
import Question2 from '../components/question-2'
import Question3 from '../components/question-3'
import RecommendationList from '../components/recommendation-list'

export default class Index extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            step: 1,
            category: null,
            daytime: false,
            days: [],
            results: []
        }
    }

    componentDidMount(){
        fetch("http://localhost:8000/api/v2/community-assets")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    results: data.items
                })
            })
    }

    handleQuestion1 = event => {
        this.setState({
            step: 2
        })
    }

    handleQuestion2 = event => {
        this.setState({
            step: 3,
            daytime: event.target.value
        })
        console.log(this.state)
    }

    handleQuestion3 = event => {
        const item = event.target.name;

        this.setState(prevState => ({ 
            days: (event.target.checked === true )? prevState.days.push(item) : prevState.days.splice( list.indexOf(item), 1 ),
            step: 4
        }));
    }


    render(){
        return(
            <>
                <Question1 handleChange={this.handleQuestion1} />
                {(this.state.step > 1) && 
                    <Question2 handleChange={this.handleQuestion2} /> 
                }
                {(this.state.step > 2) && 
                    <>
                        <Question3 handleChange={this.handleQuestion3} days={this.state.days} /> 
                        <RecommendationList 
                            days={this.state.days}
                            items={this.state.results}
                            />    
                    </>            
                }
            </>
        )
    }
}