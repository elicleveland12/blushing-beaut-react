import React, {Component} from 'react';
import '../../App.css';
import DesktopCart from './DesktopCart';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default class TopNavBar extends Component {

  state = {
    cartCounter: 0,
  }

  cartCounterReduction = (value) => {
    this.setState({cartCounter: value})
  }

  componentDidMount = async() => {
    const currentCart = await JSON.parse(localStorage.getItem('cart'))
    if (currentCart) {
      this.setState({cartCounter: currentCart.length})
    }
  }

  componentDidUpdate = async(prevProps) => {
    if (prevProps.toggle !== this.props.toggle) {
      const currentCart = await JSON.parse(localStorage.getItem('cart'))
      if (currentCart) {
        this.setState({cartCounter: currentCart.length})
      }
    } else if ((prevProps.purchaseSuccess !== this.props.purchaseSuccess) && (this.props.purchaseSuccess === true)) {
      this.setState({cartCounter: 0})
    }
  }

  render(){
    return(
      <div className="top-nav-bar">
        <div className="hover-class" style={{display: 'flex', flexDirection: 'row', paddingLeft: 10, alignItems: 'center'}}>
          <img src={require(`../../images/MockupLogo.gif.png`)} style={{width: 90, height: 75}} alt="BB logo"/>
          <h1 className="hover-class" style={{color: '#6c5ce7'}}>Blushing Beaut</h1>
        </div>
        <div className="hover-class" style={{display: 'flex', flexDirection: 'row', paddingRight: 10, alignItems: 'center'}}>
          <InstagramIcon className="hover-class" style={{fontSize: 40, color: '#6c5ce7'}} onClick={() => window.open('https://www.instagram.com/blushin_beaut/')}/>
          <FacebookIcon className="hover-class" style={{fontSize: 40, color: '#6c5ce7', marginLeft: 10}} onClick={()=>window.open('https://www.facebook.com/jenna.whitmeyer')}/>
          <a href="mailto:jennadunne@me.com"><MailOutlineIcon className="hover-class" style={{fontSize: 40, color: '#6c5ce7', marginLeft: 10, marginTop: 3}}/></a>
          <ShoppingCartIcon className="hover-class" style={{fontSize: 40, color: '#6c5ce7', marginLeft: 10}} onMouseEnter={()=>this.props.toggleShowCart()}/>
          {this.state.cartCounter > 0 ?
            <div style={{position: 'absolute', top: 12, right: 8, height: 15, width: 15, borderRadius: 40, backgroundColor: 'white', border: '2px solid #6c5ce7', textAlign: 'center'}}>
              <p style={{fontSize: 10, color: '#6c5ce7', marginTop: 2, fontWeight: 'bold'}}>{this.state.cartCounter}</p>
            </div>
          :
            null
          }
        </div>
        {this.props.cartSelected ?
          <DesktopCart purchaseSuccess={this.props.purchaseSuccess} successfulPayment={this.props.successfulPayment} toggleHideCart={this.props.toggleHideCart} cartCounterReduction={this.cartCounterReduction}/>
        :
          null
        }
      </div>
    )
  }
}
