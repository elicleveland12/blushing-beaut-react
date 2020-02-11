import React, {Component} from 'react';
import './App.css';

import SlideShow from './Components/SlideShow';
import IntroBlurb from './Desktop/HomeScreen/IntroBlurb';
import CupType from './Desktop/HomeScreen/CupType';
import CupTypeRowTwo from './Desktop/HomeScreen/CupTypeRowTwo';
import CupTypeRowThree from './Desktop/HomeScreen/CupTypeRowThree';

let lastScrollY = 0;

export default class DesktopHomeScreen extends Component {

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

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  nav = React.createRef();

  handleScroll = () => {
    lastScrollY = window.scrollY;
    if (lastScrollY < 400) {
      this.setState({scrollArea: "top"})
    } else {
      this.setState({scrollArea: "middle"})
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
      <div>
        <div style={{display: 'flex', flexDirection: 'column', position: 'fixed', top:70, left: 0, width: '10%', height: window.screen.height, backgroundColor: '#f7f1e3', textAlign: 'right', zIndex: 990}}>
          <div className="hover-class" style={{backgroundColor: this.state.scrollArea === "top" ? 'rgba(209, 204, 192,0.7)' : null, marginTop: 100}}><h2 style={{color: '#84817a', textAlign: 'center'}}>About</h2></div>
          <div className="hover-class" style={{backgroundColor: this.state.scrollArea === "middle" ? 'rgba(209, 204, 192,0.7)' : null, marginTop: 100}}><h2 style={{color: '#84817a', textAlign: 'center'}}>Shop</h2></div>
          <div className="hover-class" style={{backgroundColor: this.state.cartSelected ? 'rgba(209, 204, 192,0.7)' : null, marginTop: 100}} onClick={()=>this.setState({cartSelected: !this.state.cartSelected})}><h2 style={{color: '#84817a', textAlign: 'center'}}>Cart</h2></div>
        </div>
        <div className="banner">
          <img src={require('./images/curve-glitter.png')} alt="banner" style={{height: '95%', marginLeft: 50, transform: 'rotate(0.05turn)'}}/>
          <img src={require('./images/glitter-wine.png')} alt="banner" style={{height: '65%', marginTop: 15, transform: 'rotate(-0.05turn)'}}/>
          <img src={require('./images/skinny-grandma.png')} alt="banner" style={{height: '95%', transform: 'rotate(0.05turn)'}}/>
          <img src={require('./images/sippy-nova.png')} alt="banner" style={{height: '65%', marginTop: 15, transform: 'rotate(-0.05turn)'}}/>
          <img src={require('./images/glitter-tumbler.png')} alt="banner" style={{height: '95%', transform: 'rotate(0.05turn)'}}/>
          <img src={require('./images/swirl-wine.png')} alt="banner" style={{height: '65%', marginTop: 15, transform: 'rotate(-0.05turn)'}}/>
          <img src={require('./images/woodgrain-fish.png')} alt="banner" style={{height: '95%', transform: 'rotate(0.05turn)'}}/>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: 100}}>
          <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            <SlideShow mobile={this.props.mobile}/>
            <IntroBlurb/>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <CupType />
            <CupTypeRowTwo />
            <CupTypeRowThree  />
          </div>
        </div>
      </div>
    )
  }
}
