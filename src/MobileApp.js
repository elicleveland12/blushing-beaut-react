import React, {Component} from 'react';
import './App.css';

import MobileNav from './Mobile/MobileNav';
import SlideShow from './Components/SlideShow';
import MobileCupType from './Mobile/MobileCupType';
import PopUpMobile from './Components/PopUpMobile';

export default class MobileApp extends Component {

  state = {
    customize: "none",
    toggle: false,
    displayPopUp: false
  }

  popUpTimeout = () => {
    setTimeout(()=>{this.setState({displayPopUp: true})}, 5000)
  }

  customizeCup = (type) => {
    this.setState({customize: type})
  }

  toggleCounter = () => {
    this.setState({toggle: !this.state.toggle})
  }

  closePopUpMobile = () => {
    this.setState({displayPopUp: false})
  }

  // componentDidMount(){
  //   this.popUpTimeout()
  // }

  render(){
    return(
      <div className="app-container">
        <MobileNav toggle={this.state.toggle}/>
        {this.state.displayPopUp ? <PopUpMobile closePopUpMobile={this.closePopUpMobile}/> : null}
        <SlideShow mobile={this.props.mobile} />
        <MobileCupType customizeCup={this.customizeCup} type={this.state.customize} toggleCounter={this.toggleCounter}/>
      </div>
    )
  }
}
