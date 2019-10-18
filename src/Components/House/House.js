import React, {Component} from 'react'


class House extends Component {

    render(){
        const {property_name, address, city, state, zip} = this.props.data
        return(
            <div>
                <p>Property Name: {property_name}</p>
                <p>Address: {address}</p>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Zip: {zip}</p>
            </div>
        )
    }
}

export default House;