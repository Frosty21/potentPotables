import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchGame } from '../actions/index';
import { joinRoom, startGame } from '../sockets_client';

class LinkLanding extends Component {
  componentDidMount(){
    joinRoom(this.props.link);
    this.props.fetchGame();
  }

  handleClick() {
    const start = new Audio('http://www.qwizx.com/gssfx/usa/jboardfill.wav');
    start.play();
    startGame(this.props.link);
  }

  render() {
    return (
      <div>
      <div>Link Code: {this.props.link}</div>
      <Link to='/gameboard'>
        <button onClick= {this.handleClick} className="join btn btn-primary">Start Game</button>
      </Link>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {link: state.sessionID};
}
export default connect(mapStateToProps, { fetchGame })(LinkLanding)