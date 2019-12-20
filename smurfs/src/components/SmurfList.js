// import React, {useEffect} from "react";
// import { fetchSmurfs } from "../Actions/Action";
// import { connect } from "react-redux";
// import {Card} from 'semantic-ui-react';


// const SmurfList = ({fetchSmurfs, smurfs}) => {

//   useEffect(()=>{
//     fetchSmurfs();
//   },[fetchSmurfs]);

//   console.log('la x 11', smurfs)
  

//   return (
//     <div className='card'>
//       {smurfs.map(smurf=>{
//         return(
//           <Card key={smurf.id}>
//             <Card.Content>
//             <Card.Header>{smurf.name}</Card.Header>
//             <Card.Meta>{smurf.age}</Card.Meta>
//             <Card.Description>{smurf.height}</Card.Description>
//             </Card.Content>
//           </Card>
//         )
//       })}
//     </div>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     smurfs: state.smurfs
//   };
// };

// export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);
