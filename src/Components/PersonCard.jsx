import { Component } from 'react';


class PersonCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // numLikes: this.props.likes
      // for birthday
    }

  }

  // like = e => {
  //   this.setState({ numLikes: this.state.numLikes + 1 });
  // }

  render() {
    return (
      <div className="col-sm-4 mb-5">
        <div className="card tall">
          <div className="card-header bg-dark text-light">{this.props.lastName}, {this.props.firstName}</div>
          <div className="card-body">
            <p>Age: {this.props.age}</p>
            <p>Hair Color: {this.props.hairColor}</p>
            
            {/* <button className="btn btn-outline-info btn-block at-bottom mt-auto mb-0" onClick={this.like}>{this.state.numLikes} Likes</button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default PersonCard;