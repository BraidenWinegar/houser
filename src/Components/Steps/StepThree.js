import React from 'react'
import {Link} from 'react-router-dom'


class StepTwo extends React.Component {
    constructor(){
        super();

        this.state = {
            mortgage: 0,
            rent: 0
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
                <h3>State</h3>
                <input
                    name="state"
                    // value={state}
                    placeholder="Enter State"
                    onChange={e => this.handleInput(e)}
                />
                <h3>Desired Monthly Rent</h3>
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