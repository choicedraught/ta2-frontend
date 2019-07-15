import { useStoreState } from 'easy-peasy';
import { default as React } from 'react';
import CompRoundsDay from './CompRoundsDay';


// this was change to a function, rather than an export class with a render().  
const CompRounds = () => {

  // setup our Global State objects from easy peasy
  // const season = useStoreState(state => state.season);
  const activeComp = useStoreState(state => state.activeComp); // this should be a prop that is passed from the App.js I thinK?  Not global state.
  // const avset = useStoreState(state => state.avset);
  const compRounds = useStoreState(state => state.compRounds);

  // const availIndex = uid + ":" + activeComp + ":" + season

  // const availUpdate = useStoreActions(
  //   actions => actions.avset[availIndex].availUpdate
  // );


  
  // Render a div for each round
  // Render a new Component

  const returnItems1 = [];
  Object.keys(compRounds[activeComp].rounds).forEach((rndID) => (
    returnItems1.push(
      <div key={rndID} id={rndID}>
        <CompRoundsDay key={rndID} rndID={rndID}/>
      </div>
    )
  ))

  return (
    <React.Fragment>
      {returnItems1}
    </React.Fragment>
    
  )
}
  
export default CompRounds
