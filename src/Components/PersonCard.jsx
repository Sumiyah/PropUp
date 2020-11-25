/*import { Component } from 'react';


class PersonCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userAge: this.props.age
      // for birthday
    }

  }

  ageUp = e => {
    this.setState({ userAge: this.state.userAge + 1 });
  }

  render() {
    return (
      <div className="col-sm-4 mb-5">
        <div className="card tall">
          <div className="card-header bg-dark text-light">{this.props.lastName}, {this.props.firstName}</div>
          <div className="card-body">
            <p>Age: {this.state.userAge}</p>
            <p>Hair Color: {this.props.hairColor}</p>
            
            <button className="btn btn-outline-success btn-block at-bottom mt-auto mb-0" onClick={this.ageUp}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
          </div>
        </div>
      </div>
    );
  }
}*/

//--------------------------------ATTENTION!--------------------------------//

// TO SHOW THE FUNCTIONAl COMPONENTS!

import React from 'react';
const PersonCard = props => {
  
  return (
    <div className="col-sm-4 mb-5">
      <div className="card tall">
        <div className="card-header bg-danger text-light">{props.lastName}, {props.firstName}</div>
        <div className="card-body">
          <p>Age: {props.age}</p>
          <p>Hair Color: {props.hairColor}</p>
          
          {/* <button className="btn btn-outline-success btn-block at-bottom mt-auto mb-0" onClick={ageUp}>Birthday Button for {props.firstName} {props.lastName}</button> */}
        </div>
      </div>
    </div>
  );
}

export default PersonCard;