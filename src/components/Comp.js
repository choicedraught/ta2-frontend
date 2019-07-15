import { Auth } from 'aws-amplify';
import { useStoreActions, useStoreState } from 'easy-peasy';
import React from 'react';

function Comp() {

  // const activeComp = useStoreState(state => state.activeComp); // this should be a prop that is passed from the App.js I thinK?  Not global state.
  const uid = useStoreState(state => state.uid);
  const compRounds = useStoreState(state => state.compRounds);

  const setActiveComp = useStoreActions(
    actions => actions.setActiveComp
  );

  const setUid = useStoreActions(state => state.setUid);

  // retrive the logged in use and store it in the State Store
  Auth.currentAuthenticatedUser({
    bypassCache: false
  }).then(user => setUid(user.username))
  .then(console.log("Store Updated with UID: " + uid)
    // we need to do the request to dynamoDB here.  Update the store with DDB data
    
    // Or maybe not?  uid wasn't updated here...
  )
  .catch(err => console.log(err))

  const setComp = (e) => {
    e.preventDefault();
    // this.props.addTodo(this.state.title);
    console.log(e.target.id)

    setActiveComp(e.target.id);
  }


  // const onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  // render() {
    return Object.keys(compRounds).map((i) => (
        // <AvCompItem key={comp.id} comp={comp}/>
        <button 
          id={ i } 
          key={ i }
          label={compRounds[i].name} 
          style={tabButtonStyle}
          onClick={setComp}
        >
          {compRounds[i].name}
        </button>
    ));
  // }
}

// const tabStyle = {
//   // display: 'none',
//   background: '#f1f1f1',
//   overflow: 'hidden',
//   width: '100%'
// }

const tabButtonStyle = {
  // backgroundColor: 'inherit',
  float: 'left',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  padding: '14px 16px',
  transition: '0.3s',
  // fontSize: '24px',
  fontWeight: 'bold',
  color: '#223A78',
}

// Comp.propTypes = {
//   comp: PropTypes.array.isRequired
// }

export default Comp
