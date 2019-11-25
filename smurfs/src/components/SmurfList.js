import React, {useEffect} from 'react';
import Smurf from './Smurf';
import {fetchSmurfs} from '../Actions/Action';
import {connect} from 'react-redux';

const SmurfList = props =>{
    useEffect (()=>{
        props.fetchSmurfs();
    }, [])

    if(props.isFetching){
        return <h1>Loading Smurf Villagers...</h1>
    }

    return(
        <div className = 'smurf-list'>
            {props.error && <p>{props.error}</p>}
            {props.smurfs.map(item => <Smurf key={item.id} name={item.name} age={item.age} height={item.height}/>)}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);