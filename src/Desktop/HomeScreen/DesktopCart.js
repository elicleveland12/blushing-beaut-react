import React, {Component} from 'react';
import '../../App.css';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CartItem from '../../Components/CartItem';

export default class DesktopCart extends Component {

  state = {
    currentCart: [],
    cartTotal: 0,
    processingCost: 0
  }

  successToast = () => toast.success("Purchas successful!")

  failureToast = () =>toast.error("Oops! Something went wrong")

  handleToken = async(token) => {
    const product = await
      {
        id: `id: ${this.state.currentCart.map(item => {return item.id})}`,
        topColor: `top color: ${this.state.currentCart.map(item => {return item.topColor})} - `,
        bottomColor: `bottom color: ${this.state.currentCart.map(item => {return item.bottomColor})} - `,
        textLine1: `text line 1: ${this.state.currentCart.map(item => {return item.textLine1})} - `,
        textLine2: `text line 2: ${this.state.currentCart.map(item => {return item.textLine2})} - `,
        textLine3: `text line 3: ${this.state.currentCart.map(item => {return item.textLine3})} - `,
        textLine4: `text line 4: ${this.state.currentCart.map(item => {return item.textLine4})} - `,
        textColor: `text color: ${this.state.currentCart.map(item => {return item.textColor})} - `,
        additionalInfo: `additional info: ${this.state.currentCart.map(item => {return item.additionalInfo})} - `,
        cupType: `${this.state.currentCart.map(item => {return item.cupType})} - `,
        quantity: `quantity: ${this.state.currentCart.map(item => {return item.quantity})} - `,
        amount: this.state.cartTotal + this.state.processingCost
      }
    if (Object.keys(product).length > 0) {
      const response = await axios.post("http://localhost:8080/checkout", {token, product})
      const { status } = response.data
      console.log(response);
      if (status === 'success') {
        localStorage.removeItem('cart')
        this.props.successfulPayment()
        this.successToast()
      } else {
        this.failureToast()
      }
    }
  }


  renderCartItems = () => {
    return this.state.currentCart.map(item => {
      return (
        <div key={item.id} style={{height: 250, minWidth: 160, border: '2px solid black', marginLeft: 20, borderRadius: 5}}>
          <CartItem item={item} removeCartItem={this.removeCartItem}/>
        </div>
      )
    })
  }

  calculateTotal = (array) => {
    return array.map(item => {
      return this.setState({cartTotal: this.state.cartTotal + item.amount})
    })
  }

  calculateProcessingEst = () => {
    this.setState({processingCost: ((this.state.cartTotal * 0.09) + (this.state.cartTotal * 0.029) + 830)})
  }

  removeCartItem = async(id) => {
    const cartArr = await JSON.parse(localStorage.getItem('cart'))
    const removedItem = cartArr.find(item => item.id !== id)
    const newArr = cartArr.splice(cartArr.indexOf(removedItem), (cartArr.length - 1))
    this.setState({currentCart: newArr})
    localStorage.setItem('cart', JSON.stringify(newArr))
    this.props.cartCounterReduction(newArr.length)
  }

  componentDidMount = async() => {
    const currentCart = await JSON.parse(localStorage.getItem('cart'))
    if (currentCart) {
      this.calculateTotal(currentCart)
      this.setState({ currentCart })
      this.calculateProcessingEst()
    }
  }


  render(){
    const total = (this.state.cartTotal / 100)
    const processing = ((total * 0.09) + (total * 0.029) + 8.30)
    return(
      <div className="shopping-cart" onMouseLeave={()=>this.props.toggleHideCart()}>
        <HighlightOffIcon className="hover-class" style={{fontSize: 40, color: 'black', position: 'absolute', top: 5, right: 5}} onClick={()=>this.props.toggleHideCart()}/>
        <div/>
        {Object.keys(this.state.currentCart).length > 0 ?
          <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '90%', overflowX: 'scroll', marginTop: 10}}>
              {this.renderCartItems()}
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <div style={{borderTop: '2px solid black', width: 300, marginTop: 30}}>
                <div style={{borderBottom: '2px solid black', marginTop: 5, width: 300, display: 'flex', justifyContent: 'space-between'}}>
                  <div><h4>Tax, Shipping, Processing</h4></div>
                  <div><h4>${(processing).toFixed(2)}</h4></div>
                </div>
                <div style={{borderBottom: '2px solid black', marginTop: 5, width: 300, display: 'flex', justifyContent: 'space-between'}}>
                  <div><h3>Total</h3></div>
                  <div><h3>${(total + processing).toFixed(2)}</h3></div>
                </div>
              </div>
            </div>
          </div>
        :
        this.props.purchaseSuccess ?
          <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <h1>Thank you for your purchase!</h1>
            <h3>Check your email for your recipt</h3>
          </div>
        :
          <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1>Your cart is currently empty</h1>
          </div>
        }
        {Object.keys(this.state.currentCart).length > 0 ?
          <div style={{display: 'flex', width: '100%', justifyContent: 'center', position: 'absolute', bottom: 25}}>
            <StripeCheckout
              stripeKey={'pk_test_YyJ4zsu33jb6sFQvyG0iVhWn00DtFUbYTQ'}
              token={this.handleToken}
              billingAddress
              shippingAddress
              amount={(total + processing) * 100}
            />
          </div>
        : null}
        <ToastContainer />
      </div>
    )
  }
}
