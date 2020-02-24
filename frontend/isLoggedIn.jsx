import React from 'react';

export default class IsLoggedIn extends React.Component {
  constructor(props){
    super(props);
  }



  render() {
  
    return (
      <div>
        <button onClick={this.props.login}>{this.props.log ? "LOG_OUT" : "LOG_IN"}</button>
      </div>
    )
  }
}

