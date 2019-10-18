import React from 'react'
import {Link} from 'react-router-dom'


class StepTwo extends React.Component {
    constructor(){
        super();

        this.state = {
            imageUrl: ''
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
                <h3>Image URL:</h3>
                <input
                    name="imageUrl"
                    // placeholder="Enter Image URL"
                    onChange={e => this.handleInput(e)}
                />
                            <Link to='/wizard/'><button onClick={this.postNewHouse}>Previous Step</button></Link>
                            <Link to='/wizard/step-three'><button onClick={this.postNewHouse}>Next</button></Link>
            </div>
        )
    }
}

export default StepTwo;
