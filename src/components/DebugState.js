import { useStoreState } from 'easy-peasy';
import { default as React } from 'react';



// this was change to a function, rather than an export class with a render().  
const DebugState = () => {

  // setup our Global State objects from easy peasy
  const uid = useStoreState(state => state.uid);
  const season = useStoreState(state => state.season);
  const activeComp = useStoreState(state => state.activeComp); // this should be a prop that is passed from the App.js I thinK?  Not global state.
  const avset = useStoreState(state => state.avset);
  // const compRounds = useStoreState(state => state.compRounds);

  const availIndex = uid + ":" + activeComp + ":" + season

  // const availUpdate = useStoreActions(
  //   actions => actions.availUpdate
  // );

  var debugReturn = []

  debugReturn.push(
    <br key="br1"/>
  );
  debugReturn.push(
    <div key="uid" style={{textAlign:"left"}}>:: Debug Component ::</div>
  )
  debugReturn.push(
    <br key="br2"/>
  );
  debugReturn.push(
    <div key="seasons" style={{textAlign:"left"}}>UID: {uid} | Season: {season} | Active Comp: {activeComp}</div>
  )

  debugReturn.push(
    <div key="av" style={{textAlign:"left"}}><pre>{JSON.stringify(avset[availIndex], null, 2) }</pre></div>
  )
  
  return (
    <React.Fragment>
      {debugReturn}
    </React.Fragment>
  )      
}
 

// class DebugState extends React.Component {
//   render() {
//        // data could be a prop for example
//        // const { data } = this.props;
//        return (<div><pre>{JSON.stringify(avset, null, 2) }</pre></div>);
//   }
// }

// ReactDOM.render(<PrettyPrintJson/>, document.getElementById('container'));

export default DebugState
