import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import wizroutes from './wizroutes'


class Wizard extends Component {
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

    

    postNewHouse = () => {
        // const {name, address, city, state, zip} = this.state
        // axios.post('/api/houses',{name, address, city, state, zip})
        // .then(res => {

        // })
        // .catch(err => console.log('postHouse', err))
    }

    render(){
        let {name, address, city, state, zip} = this.state;
        return(
            <div>
                <div>
                    <h1>Add New Listing</h1>
                    <Link to='/'><button id="cancel">Cancel</button></Link>
                </div>
                {wizroutes}
            </div>
        )
    }
}

export default Wizard;