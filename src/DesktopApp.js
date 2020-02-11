import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';

import TopNavBar from './Desktop/HomeScreen/TopNavBar';
import DesktopHomeScreen from './DesktopHomeScreen';
import TumblerCustomizer from './Desktop/Customizer/TumblerCustomizer';


export default class App extends Component {

  state = {
    customizeCoffee: false,
    customizeWine: false,
    scrollArea: "top",
    cartSelected: false,
    toggle: false,
    purchaseSuccess: false,
    showPopUp: false
  }

  successfulPayment = () => {
    this.setState({purchaseSuccess: true, toggle: !this.state.toggle})
  }

  closeCustomizer = () => {
    this.setState({customizeCoffee: false, customizeWine: false, toggle: !this.state.toggle})
  }

  customizeCup = async(cupType) => {
    if (cupType === "coffee") {
      await this.setState({customizeCoffee: true, customizeWine: false})
      scrollToComponent(this.Coffee, {offset: -100, align: 'middle', duration: 1000, ease:'inExpo'})
    } else {
      await this.setState({customizeCoffee: false, customizeWine: true})
      scrollToComponent(this.Wine, {offset: -100, align: 'middle', duration: 1000, ease:'inExpo'})
    }
  }

  toggleShowCart = () => {
    this.setState({cartSelected: true})
  }

  toggleHideCart = () => {
    this.setState({cartSelected: false, purchaseSuccess: false})
  }

  render(){
    return(
      <Router>
        <div className="app-container-home">
          <nav ref={this.nav}>
            <TopNavBar purchaseSuccess={this.state.purchaseSuccess} successfulPayment={this.successfulPayment} cartSelected={this.state.cartSelected} toggleShowCart={this.toggleShowCart} toggleHideCart={this.toggleHideCart} toggle={this.state.toggle}/>
            <Switch>
              <Route path="/" exact component={DesktopHomeScreen} />
              <Route path="/tumbler" exact component={() => <TumblerCustomizer tall={true} coffee={true} />} />
              <Route path="/wine" exact component={() => <TumblerCustomizer tall={false} wine={true} />} />
              <Route path="/sippy-cup" exact component={() => <TumblerCustomizer tall={false} sippy={true} />} />
              <Route path="/curve" exact component={() => <TumblerCustomizer tall={true} curve={true} />} />
              <Route path="/skinny" exact component={() => <TumblerCustomizer tall={true} skinny={true} />} />
              <Route path="/kids-cup" exact component={() => <TumblerCustomizer tall={false} kids={true}/>} />
              <Route path="/can" exact component={() => <TumblerCustomizer tall={true} can={true}/>} />
            </Switch>
          </nav>
        </div>
      </Router>
    )
  }
}
