import React from 'react'
import {Link} from 'react-router-dom'


class StepOne extends React.Component {
    constructor(){
        super();

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }

    handleInput = e => {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    render(){
    
    return (
        <div>
            <h3>Property Name</h3>
            <input
                name="name"
                // value={name}
                placeholder="Enter Property Name"
                onChange={e => this.handleInput(e)}
            />

            <h3>Address</h3>
            <input
                name="address"
                // value={address}
                placeholder="Enter Property Address"
                onChange={e => this.handleInput(e)}
            />
            
            <h3>City</h3>
            <input
                name="city"
                // value={city}
                placeholder="Enter City"
                onChange={e => this.handleInput(e)}
            />
            
            <h3>State</h3>
            <input
                name="state"
                // value={state}
                placeholder="Enter State"
                onChange={e => this.handleInput(e)}
            />
            
            <h3>Zip</h3>
            <input
                name="zip"
                // value={zip}
                placeholder="Enter Property Zip"
                onChange={e => this.handleInput(e)}
            />
            <Link to='/wizard/step-two'><button onClick={this.postNewHouse}>Next</button></Link>
        </div>
    )    
    }
}


export default StepOne;