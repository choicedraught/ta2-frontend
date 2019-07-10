import { useStoreActions, useStoreState } from 'easy-peasy';
import { default as React } from 'react';
import CompRoundsDayLogos from './CompRoundsDayLogos';

// this was change to a function, rather than an export class with a render().  
function CompRoundsDay(props) {

  // setup our Global State objects from easy peasy
  const uid = useStoreState(state => state.uid);
  const season = useStoreState(state => state.season);
  const activeComp = useStoreState(state => state.activeComp); // this should be a prop that is passed from the App.js I thinK?  Not global state.
  const prettyDays = useStoreState(state => state.prettyDays);
  const clubs = useStoreState(state => state.clubs);
  const avset = useStoreState(state => state.avset);
  const compRounds = useStoreState(state => state.compRounds);

  // const availIndex = uid + ":" + activeComp + ":" + season

  const compAvailInsert = useStoreActions(
    actions => actions.compAvailInsert
  );

  const availUpdate = useStoreActions(
    actions => actions.availUpdate
  );
  
  const getStyle = (rndID, noOfDays, dayName) => {
    // ::Enhancements::
    // Add a strikethrough to the rounds that have already passed?
    
    // rndID format = "prem:round_1:1819"

    var roundName = rndID.split(":")[1]
    var avsetIndex = uid + ":" + activeComp + ":" + season

    var styleObject = {
      cursor:'pointer',
      color: 'white',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      background: 'grey' // default background colour - no way to change a button to this colour
    }

    // check if there is an avset for this user and comp
    if ( typeof(avset[avsetIndex]) !== 'undefined' ) {  
      var dayArray = avset[avsetIndex].rounds[roundName]
      // Check if the round day name is in the past
      var dateToday = new Date();
      // god this is grose but a quick kludge to convert DB format into locale format...
      var strDateDay = compRounds[activeComp].rounds[rndID].days[dayName].split("/")[0]
      var strDateMonth = compRounds[activeComp].rounds[rndID].days[dayName].split("/")[1]
      var strDateYear = compRounds[activeComp].rounds[rndID].days[dayName].split("/")[2]
      var dayDate = new Date(strDateYear, strDateMonth, strDateDay);
      if ( dayDate < dateToday ) {
        styleObject.textDecorationLine = 'line-through';
      }


      // Additional check that rounds is actually defined?
      if ( avset[avsetIndex].rounds.hasOwnProperty(roundName) ) {
        // console.log("yes " + roundName + " avail= " + dayArray[dayIndex][dayName])
        if ( noOfDays === 2 ) {
          // add the styling to redner the 2 day buttons into a 2x1 Grid
          // styleObject.display = 'grid';
          // styleObject.gridTemplateColumns = '50% 50%';
          styleObject.width = '50%';
        }

        // check if this day has an entry in the AvSet
        if (typeof(avset[avsetIndex].rounds[roundName][dayName]) != 'undefined') {      
          if ( dayArray[dayName] === "A" ) {
              styleObject.background ='#47b947'
          } 
          else if ( dayArray[dayName] === "M" ) {
              styleObject.background = '#efa92a'
          } 
          else if ( dayArray[dayName] === "U" ) {
              styleObject.background = '#f34949'
          } 
        } 
      }
    }    // console.log(styleObject)
    return styleObject
  }

  const dayUpdate = (e) => {
    // ::Enhancements::
    // Disable the buttons for the rounds that have already passed?

    e.preventDefault();

    console.log(e.target.id)

    // Error checking - the rndID and the dayName need to be provided here or else the click breaks!

    var rndID = e.target.id.split(":")[0] + ":" + e.target.id.split(":")[1] + ":" + e.target.id.split(":")[2]
    var updateDayName = e.target.id.split(":")[3]
    var updateRound =  e.target.id.split(":")[1]

    // I think we should stop updates to rounds that occur in the past...

    // Check if the round day name is in the past
    var dateToday = new Date();
    // god this is grose but a quick kludge to convert DB format into locale format...
    var strDateDay = compRounds[activeComp].rounds[rndID].days[updateDayName].split("/")[0]
    var strDateMonth = compRounds[activeComp].rounds[rndID].days[updateDayName].split("/")[1]
    var strDateYear = compRounds[activeComp].rounds[rndID].days[updateDayName].split("/")[2]
    var dayDate = new Date(strDateYear, strDateMonth, strDateDay);
    var currentRoundAvailability

    if ( dayDate >= dateToday ) {    
      console.log('The day was clicked: ' + e.target.id)

      // var updateDayIndex =  e.target.id.split(":")[3]
      var availIndex = uid + ":" + activeComp + ":" + season
      // So first we grab the current rounds into an object
      if ( typeof(avset[availIndex]) === 'undefined' ) {
        // there is no availability for this comp so we need to create it.
        var newAvailInsertObject = {}
        newAvailInsertObject["rounds"] = {}
        compAvailInsert(newAvailInsertObject)
        currentRoundAvailability = {}
        currentRoundAvailability[availIndex] = newAvailInsertObject;
      } else {
        currentRoundAvailability = avset[availIndex];
      }
      var updateObject = {}
      var newDayAvailability;

      // 1. Check the size of typeof(currentRoundAvailability.round) to make sure it is greater than 0 - rounds SHOULD always be defined BUT.
      // 2. Check that typeof(currentRoundAvailability.round[updateRound]) !== 'undefined'
      // 3. Not undefined, so check typeof(currentRoundAvailability.round[updateRound][updateDayName]) !== undefined
      // 4. Not undefined, update it.
      // 5. Undefined, create the new Day with the value 'A'
      // 6. Round Undefinied, create the round, with the new Day with the value 'A'

      if ( typeof(currentRoundAvailability.rounds) !== 'undefined' ) {
        if ( typeof(currentRoundAvailability.rounds[updateRound]) !== 'undefined' ) {
          if ( typeof(currentRoundAvailability.rounds[updateRound][updateDayName]) !== 'undefined' ) {
            if ( currentRoundAvailability["rounds"][updateRound][updateDayName] === "A"  ) {
              newDayAvailability = "M"
              currentRoundAvailability["rounds"][updateRound][updateDayName] = newDayAvailability
            } else if ( currentRoundAvailability["rounds"][updateRound][updateDayName] === "M"  ) {
              newDayAvailability = "U"
              currentRoundAvailability["rounds"][updateRound][updateDayName] = newDayAvailability

            } else if ( currentRoundAvailability["rounds"][updateRound][updateDayName] === "U" ) {
              newDayAvailability = "A"
              currentRoundAvailability["rounds"][updateRound][updateDayName] = newDayAvailability

            } else {
              newDayAvailability = "A"
              currentRoundAvailability["rounds"][updateRound][updateDayName] = newDayAvailability
            }

          } else {
            currentRoundAvailability["rounds"][updateRound][updateDayName] = "A" // create the 'dayName' key and value
          }

        } else {
          currentRoundAvailability["rounds"][updateRound] = {} // create the 'round' object
          currentRoundAvailability["rounds"][updateRound][updateDayName] = "A" // create the 'dayName' key and value
        }

      } else {
        currentRoundAvailability["rounds"] = {} // create the 'rounds' object
        currentRoundAvailability["rounds"][updateRound] = {} // create the 'round' object
        currentRoundAvailability["rounds"][updateRound][updateDayName] = "A" // create the 'dayName' key and value
      }

      updateObject = {}
      updateObject[updateRound] = currentRoundAvailability["rounds"][updateRound]

      // console.log("Debug the params passed to model: " + JSON.stringify(updateObject))
      return availUpdate(updateObject)
    }
    
    // Ignoring this click because the round occurs in the past.  return nothing
 
  }

  const renderItems = []

  Object.keys(compRounds[activeComp].rounds[props.rndID].days).forEach((dayName)=>(
    renderItems.push(
      <button 
        key={props.rndID + ":" + dayName} 
        id={props.rndID + ":" + dayName} 
        onClick={dayUpdate} 
        style={getStyle(props.rndID, Object.keys(compRounds[activeComp].rounds[props.rndID]).length, dayName)}
      >
        {compRounds[activeComp].rounds[props.rndID].roundName}{<br/>}
        {prettyDays[dayName]}{<br/>}
        {compRounds[activeComp].rounds[props.rndID].days[dayName]}{<br/>}
        {clubs[compRounds[activeComp].rounds[props.rndID].opposition].clubName}{<br/>}
        <CompRoundsDayLogos
          rndID={props.rndID}
          dayName={dayName}
          homeAwayInfo={compRounds[activeComp].rounds[props.rndID].homeAwayInfo} 
          clubName={compRounds[activeComp].rounds[props.rndID].opposition} 
          clubLogoURL={clubs[compRounds[activeComp].rounds[props.rndID].opposition].clubLogoURL} 
        />
      </button>
    )
  ))

  return (
    <React.Fragment>
      {renderItems}
    </React.Fragment>    
  )     
}


// PropTypes
// CompRoundsDay.propTypes = {
//   round: PropTypes.string.isRequired
// }

// const btnStyle = {
//   background: '#ff0000',
//   color: '#fff',
//   // border: 'none',
//   // padding: '5px 9px',
//   // borderRadius: '50%',
//   cursor: 'pointer',
//   float: 'right'
// }

// const btnStyleDefault = {
//   background: 'grey',
//   padding: '10px',
//   borderBottom: '1px #ccc dotted'
// }
  
export default CompRoundsDay
