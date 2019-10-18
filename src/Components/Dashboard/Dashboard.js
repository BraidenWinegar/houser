import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import House from '../House/House'


class Dashboard extends Component {
    constructor(){
        super();

        this.state = {
            houses: []
        }
    }

    componentDidMount(){
        this.getHouses()
    }

    getHouses(){
        axios.get('/api/houses').then(res => {
            this.setState({
                houses: res.data
            })
        })
        .catch(err => console.log('getHouses', err))

    }

    // grabHouse = (data) => {
    //     this.setState({
    //         houses: data
    //     })
    // }

    deleteHouse = (id) => {

    } 

    render(){
        
        const houseList = this.state.houses.map((e,i) => {
            return <House data={e} key={i} />
        })
        return(
            <div>
                <div>
                    <h1>Dashboard</h1>
                    <Link to='/wizard'><button id="add-new-property">Add New Property</button></Link>
                </div>
                <h3>Home Listings</h3>
                {houseList}
            </div>
        )
    }
}

export default Dashboard ;