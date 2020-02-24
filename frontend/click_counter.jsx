import React from 'react';
import Count from './count';
import IsLoggedIn from './isLoggedIn';

export default class ClickCounter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      log: false,
      isOn: true,
      arr: []
    };
    this.click = this.click.bind(this)
    this.reset = this.reset.bind(this)
    this.onoff = this.onoff.bind(this)
    this.login = this.login.bind(this)
  }

  login(event) {
    event.preventDefault();
    this.setState({
      log: !this.state.log
    })
  }

  onoff(event) {
    event.preventDefault();
    this.setState({
      isOn: !this.state.isOn
    })
  }



  click(event){
    event.preventDefault();
    this.setState({
      count: this.state.count + 1
    });
  }


  reset(event){
    event.preventDefault();
    let arr = this.state.arr
    arr.push(this.state.count)
    this.setState({
      count: 0,
      arr
    })
  }
  
  render () {
    return (
      <div>
        <ul class="menu">
          <li><a class="default" href="">Home</a></li>
          <li>Contact</li>
          <li class="has-submenu"><a class="register" href="">Register</a>
            <ul class="submenu">
              <li><a class="li" href="#">Sign In</a></li>
              <li><a class="li" href="#">Sign Up</a></li>
            </ul>
          </li>
          
        </ul>
        <i class="fas fa-american-sign-language-interpreting fa-2x fa-spin"></i>
        <button onClick={this.click}>Click Me</button>
        <button className="onoff" onClick={this.onoff}>{this.state.isOn ? "Follow" : "Unfollowing..."}</button>
        
        <br/>

        {this.state.count} <br/>
        <button onClick={this.reset}>Reset</button>
        <div class="pattern">
         <div class="play">
          <i class="far fa-play-circle"></i>
         </div>
         
        </div>
        <div class="gradient">
          Color
        </div>
        <div class="containerbox">
          <div class="box red"></div>
          <div class="box green"></div>
          <div class="box blue"></div>
        </div>
        <Count arr={this.state.arr}/>
        <IsLoggedIn log={this.state.log} login={this.login}/>
      </div>
    )
  }
}