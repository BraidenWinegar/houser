import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import House from '../House/House'
import { connect } from 'react-redux';
import { getHouses } from '../../redux/inputsReducer'


class Dashboard extends Component {
    constructor(){
        super();

        this.state = {
            houses: []
        }
    }

    componentDidMount(){
        console.log('hit')
        console.log(this.props.getHouses)
        this.props.getHouses()
        console.log('slap')
    }

    componentDidUpdate(prepProps){
        if(this.prevProps !== this.props) {
            this.render()
        }
    }

    deleteHouse = (id) => {
        ////
    } 

    render(){
        console.log(this.props)
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

function mapStateToProps(state){
    return {
        inputsReducer: state.inputsReducer
    }
}

export default connect(mapStateToProps, {getHouses})(Dashboard) ;