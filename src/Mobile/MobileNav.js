import React, {Component} from 'react';
import '../App.css';
import MobileCart from './MobileCart';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default class TopNavBar extends Component {

  state = {
    expandMenu: false,
    cartCounter: 0,
    showCart: false,
    currentCart: [],
    purchaseSuccess: false
  }

  successfulPayment = () => {
    this.setState({purchaseSuccess: true, currentCart: [], cartCounter: 0})
  }

  componentDidMount = async() => {
    const currentCart = await JSON.parse(localStorage.getItem('cart'))
    if (currentCart) {
      this.setState({currentCart: currentCart, cartCounter: currentCart.length})
    }
  }

  toggleHideCart = () => {
    this.setState({showCart: false, purchaseSuccess: false})
  }

  cartCounterReduction = (value) => {
    this.setState({cartCounter: value})
  }

  componentDidUpdate = async(prevProps) => {
    if (prevProps.toggle !== this.props.toggle) {
      const currentCart = await JSON.parse(localStorage.getItem('cart'))
      if (currentCart) {
        this.setState({currentCart: currentCart, cartCounter: currentCart.length})
      }
    }
  }

  removeCartItem = async(id) => {
    const cartArr = await JSON.parse(localStorage.getItem('cart'))
    const removedItem = cartArr.find(item => item.id !== id)
    const newArr = cartArr.splice(cartArr.indexOf(removedItem), (cartArr.length - 1))
    this.setState({currentCart: newArr})
    localStorage.setItem('cart', JSON.stringify(newArr))
    this.cartCounterReduction(newArr.length)
  }

  render(){
    const encodedURL = encodeURIComponent('blushin_beaut')
    return(
      <div style={{display: 'flex', position: 'fixed', flexDirection: 'column', justifyContent: 'space-between', width: '100%', backgroundColor: '#dfe6e9', height: this.state.expandMenu ? 120 : 70, borderBottom: '2px solid #6c5ce7', top:0, left:0, right:0, zIndex: 999}}>
        <div style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <img src={require(`../images/MockupLogo.gif.png`)} style={{width: 70, height: 50}} alt="BB logo"/>
            <h2 style={{color: '#6c5ce7'}}>Blushing Beaut</h2>
          </div>
          <div>
            {this.state.expandMenu ?
              <MenuOpenIcon style={{color: '#6c5ce7', fontSize: 30, marginRight: 5}} onClick={()=>this.setState({expandMenu: false})}/>
            :
              <div>
                <MenuIcon style={{color: '#6c5ce7', fontSize: 30, marginRight: 5}} onClick={()=>this.setState({expandMenu: true})}/>
                {this.state.cartCounter > 0 ?
                  <div style={{position: 'absolute', top: 12, right: 3, height: 15, width: 15, borderRadius: 40, backgroundColor: 'white', border: '2px solid #6c5ce7', textAlign: 'center'}}>
                    <p style={{fontSize: 10, color: '#6c5ce7', marginTop: 2, fontWeight: 'bold'}}>{this.state.cartCounter}</p>
                  </div>
                :
                  null
                }
              </div>
            }
          </div>
        </div>
        {this.state.expandMenu ?
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
            <InstagramIcon style={{color: '#6c5ce7', fontSize: 40}} onClick={() => window.open(`instagram://user?username=${encodedURL}`)}/>
            <FacebookIcon style={{color: '#6c5ce7', fontSize: 40}} onClick={()=>window.open('https://www.facebook.com/jenna.whitmeyer')}/>
            <a href="mailto:jennadunne@me.com"><MailOutlineIcon style={{color: '#6c5ce7', fontSize: 40}}/></a>
            <ShoppingCartIcon style={{color: '#6c5ce7', fontSize: 40}} onClick={()=>this.setState({showCart: !this.state.showCart})}/>
            {this.state.cartCounter > 0 ?
              <div style={{position: 'absolute', top: 76, right: 22, height: 15, width: 15, borderRadius: 40, backgroundColor: 'white', border: '2px solid #6c5ce7', textAlign: 'center'}}>
                <p style={{fontSize: 10, color: '#6c5ce7', marginTop: 2, fontWeight: 'bold'}}>{this.state.cartCounter}</p>
              </div>
            :
              null
            }
          </div>
        :
          null
        }
        {this.state.showCart ?
          <MobileCart purchaseSuccess={this.state.purchaseSuccess} successfulPayment={this.successfulPayment} currentCart={this.state.currentCart} removeCartItem={this.removeCartItem} toggleHideCart={this.toggleHideCart} />
        :
          null
        }
      </div>
    )
  }
}
