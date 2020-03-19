import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import MobileNav from './Mobile/MobileNav';
import MobileHomeScreen from './MobileHomeScreen';
import MobileTumblerCustomizer from './Mobile/MobileTumblerCustomizer';

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
      <Router>
        <div className="app-container">
          <nav ref={this.nav}>
            <MobileNav toggle={this.state.toggle}/>
            <Switch>
              <Route path="/" exact component={MobileHomeScreen} />
              <Route path="/tumbler" exact component={() => <MobileTumblerCustomizer tall={true} coffee={true} />} />
              <Route path="/tumbler" exact component={() => <MobileTumblerCustomizer tall={true} coffee={true} />} />
              <Route path="/wine" exact component={() => <MobileTumblerCustomizer tall={false} wine={true} />} />
              <Route path="/sippy-cup" exact component={() => <MobileTumblerCustomizer tall={false} sippy={true} />} />
              <Route path="/curve" exact component={() => <MobileTumblerCustomizer tall={true} curve={true} />} />
              <Route path="/skinny" exact component={() => <MobileTumblerCustomizer tall={true} skinny={true} />} />
              <Route path="/kids-cup" exact component={() => <MobileTumblerCustomizer tall={false} kids={true}/>} />
              <Route path="/can" exact component={() => <MobileTumblerCustomizer tall={true} can={true}/>} />
            </Switch>
          </nav>
        </div>
      </Router>
    )
  }
}
