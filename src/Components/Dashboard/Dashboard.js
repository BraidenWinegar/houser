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
        this.props.getHouses()
        console.log('mount', this.props.inputsReducer.output)
        this.setState({
            houses: this.props.inputsReducer.output
        })
    }

    componentDidUpdate(prepProps){
        
        // console.log(this.props.inputsReducer.output)
    }

    deleteHouse = (id) => {
        ////
    } 

    render(){
        // console.log('render', this.props.inputsReducer)

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