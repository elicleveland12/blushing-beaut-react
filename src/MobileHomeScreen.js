import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import SlideShow from './Components/SlideShow';
import PopUpMobile from './Components/PopUpMobile';

export default class MobileHomeScreen extends Component {

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
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{marginTop: -68, width: '100%', height: 100, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', backgroundImage: 'url(https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v830-sasi-50.jpg?auto=format&bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1400&s=49a5b12cd66835cd44df513875e20c50'}}>
          <img src={require('./images/curve-glitter.png')} alt="banner" style={{height: '95%', marginLeft: 10, transform: 'rotate(-0.05turn)'}}/>
          <img src={require('./images/sippy-nova.png')} alt="banner" style={{height: '65%', marginTop: 15, transform: 'rotate(0.05turn)'}}/>
          <img src={require('./images/skinny-grandma.png')} alt="banner" style={{height: '95%', transform: 'rotate(-0.05turn)'}}/>
          <img src={require('./images/swirl-wine.png')} alt="banner" style={{height: '65%', marginTop: 15, transform: 'rotate(0.05turn)'}}/>
          <img src={require('./images/woodgrain-fish.png')} alt="banner" style={{height: '95%', transform: 'rotate(-0.05turn)'}}/>
        </div>
        {this.state.displayPopUp ? <PopUpMobile closePopUpMobile={this.closePopUpMobile}/> : null}
        <SlideShow mobile={this.props.mobile} />
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Link to={'/tumbler'} className="hover-class picker" style={{border: '3px solid #6c5ce7', height: 200, width: '90%', borderRadius: 10,  display: 'flex', flexDirection: 'row', justifyContent: 'space-around', textDecoration: 'none'}}>
            <div>
              <img src={require('./images/glitter-tumbler.png')} alt="wine outline" height="200" style={{marginTop: 2}}/>
            </div>
            <div style={{marginTop: 50}}>
              <h2 style={{color: '#6c5ce7', textAlign: 'center'}}>Shop Customizable</h2>
              <h2 style={{color: '#6c5ce7', textAlign: 'center'}}>Coffee Tumblers</h2>
            </div>
          </Link>
          <Link to={'/wine'} className="hover-class picker" style={{border: '3px solid #6c5ce7', height: 200, width: '90%', borderRadius: 10,  display: 'flex', flexDirection: 'row', justifyContent: 'space-around', textDecoration: 'none', marginTop: 25}}>
            <div>
              <img src={require('./images/swirl-wine.png')} alt="wine outline" height="160" style={{marginTop: 37}}/>
            </div>
            <div style={{marginTop: 50}}>
              <h2 style={{color: '#6c5ce7', textAlign: 'center'}}>Shop Customizable</h2>
              <h2 style={{color: '#6c5ce7', textAlign: 'center'}}>Wine Tumblers</h2>
            </div>
          </Link>
          <Link to={'/sippy-cup'} className="hover-class picker" style={{border: '3px solid #6c5ce7', height: 200, width: '90%', borderRadius: 10,  display: 'flex', flexDirection: 'row', justifyContent: 'space-around', textDecoration: 'none', marginTop: 25}}>
            <div>
              <img src={require('./images/sippy-nova.png')} alt="wine outline" height="160" style={{marginTop: 37}}/>
            </div>
            <div style={{marginTop: 50}}>
              <h2 style={{color: '#6c5ce7', textAlign: 'center'}}>Shop Customizable</h2>
              <h2 style={{color: '#6c5ce7', textAlign: 'center'}}>Sippy Cups</h2>
            </div>
          </Link>
          <Link to={'/curve'} className="hover-class picker" style={{border: '3px solid #6c5ce7', height: 200, width: '90%', borderRadius: 10,  display: 'flex', flexDirection: 'row', justifyContent: 'space-around', textDecoration: 'none', marginTop: 25}}>
            <div>
              <img src={require('./images/curve-glitter.png')} alt="wine outline" height="200" style={{marginTop: 2}}/>
            </div>
            <div style={{marginTop: 50}}>
              <h2 style={{color: '#6c5ce7', textAlign: 'center'}}>Shop Customizable</h2>
              <h2 style={{color: '#6c5ce7', textAlign: 'center'}}>Curved Tumblers</h2>
            </div>
          </Link>
          <Link to={'/skinny'} className="hover-class picker" style={{border: '3px solid #6c5ce7', height: 200, width: '90%', borderRadius: 10,  display: 'flex', flexDirection: 'row', justifyContent: 'space-around', textDecoration: 'none', marginTop: 25}}>
            <div>
              <img src={require('./images/skinny-grandma.png')} alt="wine outline" height="200" style={{marginTop: 2}}/>
            </div>
            <div style={{marginTop: 50}}>
              <h2 style={{color: '#6c5ce7', textAlign: 'center'}}>Shop Customizable</h2>
              <h2 style={{color: '#6c5ce7', textAlign: 'center'}}>Skinny Tumblers</h2>
            </div>
          </Link>
          <Link to={'/kids-cup'} className="hover-class picker" style={{border: '3px solid #6c5ce7', height: 200, width: '90%', borderRadius: 10,  display: 'flex', flexDirection: 'row', justifyContent: 'space-around', textDecoration: 'none', marginTop: 25}}>
            <div>
              <img src={require('./images/straw.png')} alt="wine outline" height="160" style={{marginTop: 37, marginLeft:5}}/>
            </div>
            <div style={{marginTop: 50}}>
              <h2 style={{color: '#6c5ce7', textAlign: 'center'}}>Shop Customizable</h2>
              <h2 style={{color: '#6c5ce7', textAlign: 'center'}}>Kids Cups</h2>
            </div>
          </Link>
          <Link to={'/can'} className="hover-class picker" style={{border: '3px solid #6c5ce7', height: 200, width: '90%', borderRadius: 10,  display: 'flex', flexDirection: 'row', justifyContent: 'space-around', textDecoration: 'none', marginTop: 25}}>
            <div>
              <img src={require('./images/empty can.png')} alt="wine outline" height="190" style={{marginTop: 10, marginLeft: 5}}/>
            </div>
            <div style={{marginTop: 50}}>
              <h2 style={{color: '#6c5ce7', textAlign: 'center'}}>Shop Customizable</h2>
              <h2 style={{color: '#6c5ce7', textAlign: 'center'}}>Soda Can Tumblers</h2>
            </div>
          </Link>
          <div style={{height: 100}}/>
        </div>
      </div>
    )
  }
}
