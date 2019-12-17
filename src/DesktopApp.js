import React, {Component} from 'react';
import './App.css';
import scrollToComponent from 'react-scroll-to-component';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import TopNavBar from './Desktop/HomeScreen/TopNavBar';
import SlideShow from './Components/SlideShow';
import IntroBlurb from './Desktop/HomeScreen/IntroBlurb';
import CupType from './Desktop/HomeScreen/CupType';
import TumblerCustomizer from './Desktop/Customizer/TumblerCustomizer';

let lastScrollY = 0;

export default class App extends Component {

  state = {
    customizeCoffee: false,
    customizeWine: false,
    scrollArea: "top",
    cartSelected: false,
    toggle: false,
    purchaseSuccess: false
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

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  nav = React.createRef();

  handleScroll = () => {
    lastScrollY = window.scrollY;
    if (lastScrollY < 90) {
      this.setState({scrollArea: "top"})
    } else if (lastScrollY > 91 && lastScrollY < 650 ) {
      this.setState({scrollArea: "middle"})
    } else if (lastScrollY > 651) {
      this.setState({scrollArea: "bottom"})
    }
  };

  toggleShowCart = () => {
    this.setState({cartSelected: true})
  }

  toggleHideCart = () => {
    this.setState({cartSelected: false, purchaseSuccess: false})
  }

  render(){
    return(
      <div className="app-container-home">
        <nav ref={this.nav}>
          <TopNavBar purchaseSuccess={this.state.purchaseSuccess} successfulPayment={this.successfulPayment} cartSelected={this.state.cartSelected} toggleShowCart={this.toggleShowCart} toggleHideCart={this.toggleHideCart} toggle={this.state.toggle}/>
          <div style={{display: 'flex', flexDirection: 'column', position: 'fixed', top:70, left: 0, width: '15%', height: window.screen.height, backgroundColor: 'rgba(99, 110, 114,0.4)', textAlign: 'right'}}>
            <div style={{backgroundColor: this.state.scrollArea === "top" ? 'rgba(223, 230, 233,0.7)' : null, marginTop: 100}}><h3>About</h3></div><br /><br /><br /><br />
            <div style={{backgroundColor: this.state.scrollArea === "middle" ? 'rgba(223, 230, 233,0.7)' : null}}><h3>Select Type</h3></div><br /><br /><br /><br />
            <div style={{backgroundColor: this.state.scrollArea === "bottom" ? 'rgba(223, 230, 233,0.7)' : null}}><h3>Customize</h3></div><br /><br /><br /><br />
            <div className="hover-class" style={{backgroundColor: this.state.cartSelected ? 'rgba(223, 230, 233,0.7)' : null}} onClick={()=>this.setState({cartSelected: !this.state.cartSelected})}><h3>Cart</h3></div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: 100}}>
            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
              <SlideShow mobile={this.props.mobile}/>
              <IntroBlurb/>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <CupType customizeCup={this.customizeCup}/>
            </div>
            {this.state.customizeCoffee ?
              <div ref={(section) => { this.Coffee = section; }} style={{width: '90%', backgroundColor: 'white', border: '3px solid #6c5ce7', borderRadius: 10, marginLeft: '5%', marginTop: 20}}>
                <HighlightOffIcon className="hover-class" style={{top: 8, right: 8, color: '#6c5ce7', fontSize: 40}} onClick={()=>this.setState({customizeCoffee: false, customizeWine: false})}/>
                <TumblerCustomizer coffee={true} closeCustomizer={this.closeCustomizer}/>
              </div>
            :
              null
            }
            {this.state.customizeWine ?
              <div ref={(section) => { this.Wine = section; }} style={{width: '90%', backgroundColor: 'white', border: '3px solid #6c5ce7', borderRadius: 10, marginLeft: '5%', marginTop: 20}}>
                <HighlightOffIcon className="hover-class" style={{top: 8, right: 8, color: '#6c5ce7', fontSize: 40}} onClick={()=>this.setState({customizeCoffee: false, customizeWine: false})}/>
                <TumblerCustomizer coffee={false} closeCustomizer={this.closeCustomizer}/>
              </div>
            :
              null
            }
          </div>
        </nav>
      </div>
    )
  }
}
