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
            {this.props.smurfs.data ? this.props.smurfs.data.map((smurf, i)=>{
                return <Smurf key={i} smurf={smurf}/>;
            }): null}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);