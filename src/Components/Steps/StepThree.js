import React from 'react'
import {Link} from 'react-router-dom'


class StepTwo extends React.Component {
    constructor(){
        super();

        this.state = {
            mortgage: 0,
            rent: 0, 
        }
    }

    handleInput = e => {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    render(){
        return(
            <div>
                <h2>Recommended Rent: ${this.state.mortgage * 1.25}</h2>
                <h3>Monthly Mortgage:</h3>
                <input
                    type="number"
                    name="mortgage"
                    // value={mortgage}
                    placeholder={0}
                    onChange={e => this.handleInput(e)}
                />
                <h3>Desired Monthly Rent:</h3>
                <input
                    type="number"
                    name="rent"
                    // value={rent}
                    placeholder={0}
                    onChange={e => this.handleInput(e)}
                />
                <Link to='/wizard/step-two'><button onClick={this.postNewHouse}>Pevious Step</button></Link>
            </div>
        )
    }
}

export default StepTwo;