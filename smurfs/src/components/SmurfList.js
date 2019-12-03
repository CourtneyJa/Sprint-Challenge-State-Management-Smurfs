import React, { useEffect } from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";
import { fetchSmurfs } from "../Actions/actions";

const SmurfList = props => {
  useEffect(() => {
    props.fetchSmurfs();
    console.log("calling all villagers", props.smurfs);
  }, []);

  return (
    <div className="village-list">
      {props.smurfs.map(smurf => {
        return <Smurf key={smurf.id} smurf={smurf} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);
