import React, {Component} from 'react';
import './App.css';

import MobileNav from './Mobile/MobileNav';
import SlideShow from './Components/SlideShow';
import MobileCupType from './Mobile/MobileCupType';

export default class MobileApp extends Component {

  state = {
    customize: "none",
    toggle: false
  }

  customizeCup = (type) => {
    this.setState({customize: type})
  }

  toggleCounter = () => {
    this.setState({toggle: !this.state.toggle})
  }

  render(){
    return(
      <div className="app-container">
        <MobileNav toggle={this.state.toggle}/>
        <SlideShow mobile={this.props.mobile} />
        <MobileCupType customizeCup={this.customizeCup} type={this.state.customize} toggleCounter={this.toggleCounter}/>
      </div>
    )
  }
}
