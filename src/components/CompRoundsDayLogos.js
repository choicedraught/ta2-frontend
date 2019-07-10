import PropTypes from 'prop-types';
import * as React from 'react';
import { Component } from 'react';
import uuid from 'uuid';

export class CompRoundsDayLogos extends Component {

  getLogo = (l, CN) => {
    if (l === "H") {
      return CN.logo
    } else if (l === "A") {
      return this.props.clubLogoURL
    } else if ( l === "B") {
      return "https://banner2.kisspng.com/20171220/vye/letter-b-png-5a3a4f45d40d77.40891921151377082186862035.jpg"
    } else if ( l === "T") {
      return "http://waca.wa.cricket.com.au/files/12/images/WACA%20affiliate%20WAPC%20RGB%20sponsor.jpg"
    }
  }
  getName = (n, CN) => {
    if (n === "H") {
      return CN.name
    } else if (n === "A") {
      return this.props.clubName
    } else if ( n === "B") {
      return "BYE"
    } else if ( n === "T") {
      return "TBA"
    }
  }

  handlecClick = (e) => {
    console.log(JSON.stringify(e))
  }

  render() {

    const CN = {
      name: "Claremont Nedlands",
      logo: "http://www.cncc.org.au/files/525/images/tiger_head.jpg"
    }
    // var imageKey;
    const returnItems = []
    
    this.props.homeAwayInfo.split(":").forEach((h) => (
      returnItems.push(
        <img 
          key={uuid.v4()}
          id={this.props.rndID + ":" + this.props.dayName} // Done to match the element id of the parent.  #Kludge
          src={this.getLogo(h, CN)}
          alt={this.getName(h, CN)}
          style={{width:"15px", height:"15px", padding:"3px", cursor:'pointer'}}
        >
        </img>
      )
    ))

    return (
      <React.Fragment>
        {returnItems}
      </React.Fragment>
    )
  }

}

// PropTypes
CompRoundsDayLogos.propTypes = {
  rndID: PropTypes.string.isRequired,
  dayName: PropTypes.string.isRequired,
  homeAwayInfo: PropTypes.string.isRequired,
  clubName: PropTypes.string.isRequired,
  clubLogoURL: PropTypes.string.isRequired
}

export default CompRoundsDayLogos