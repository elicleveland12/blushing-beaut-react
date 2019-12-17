import React, {Component} from 'react';
import '../App.css';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import CartItem from '../Components/CartItem';


export default class MobileCart extends Component {

  state = {
    cartTotal: 0,
    processingCost: 0
  }

  successToast = () => toast.success("Purchas successful!")

  failureToast = () =>toast.error("Oops! Something went wrong")

  handleToken = async(token) => {
    const product = await
      {
        id: `id: ${this.props.currentCart.map(item => {return item.id})}`,
        topColor: `top color: ${this.props.currentCart.map(item => {return item.topColor})}, `,
        bottomColor: `bottom color: ${this.props.currentCart.map(item => {return item.bottomColor})}, `,
        textLine1: `text line 1: ${this.props.currentCart.map(item => {return item.textLine1})}, `,
        textLine2: `text line 2: ${this.props.currentCart.map(item => {return item.textLine2})}, `,
        textLine3: `text line 3: ${this.props.currentCart.map(item => {return item.textLine3})}, `,
        textLine4: `text line 4: ${this.props.currentCart.map(item => {return item.textLine4})}, `,
        textColor: `text color: ${this.props.currentCart.map(item => {return item.textColor})}, `,
        additionalInfo: `additional info: ${this.props.currentCart.map(item => {return item.additionalInfo})}, `,
        cupType: `${this.props.currentCart.map(item => {return item.cupType})}, `,
        amount: this.state.cartTotal + this.state.processingCost
      }
    if (Object.keys(product).length > 0) {
      const response = await axios.post("http://localhost:8080/checkout", {token, product})
      const { status } = response.data
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
    return this.props.currentCart.map(item => {
      return (
        <div key={item.id} style={{height: 250, minWidth: 160, border: '2px solid black', marginLeft: 20, borderRadius: 5}}>
          <CartItem item={item} removeCartItem={this.props.removeCartItem}/>
        </div>
      )
    })
  }


  calculateTotal = async(array) => {
    await this.setState({cartTotal: 0})
    if (array) {
      return array.map(item => {
        return this.setState({cartTotal: this.state.cartTotal + item.amount})
      })
    }
  }

  calculateProcessingEst = () => {
    this.setState({processingCost: ((this.state.cartTotal * 0.09) + (this.state.cartTotal * 0.029) + 830)})
  }

  componentDidMount = async() => {
    const currentCart = await JSON.parse(localStorage.getItem('cart'))
    if (this.props.currentCart) {
      this.calculateTotal(currentCart)
      this.calculateProcessingEst()
    }
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.currentCart.length !== this.props.currentCart.length) {
      this.calculateTotal(this.props.currentCart)
    }
  }


  render(){
    const total = (this.state.cartTotal / 100)
    const processing = ((total * 0.09) + (total * 0.029) + 8.30)
    return(
      <div className="mobile-shopping-cart" onMouseLeave={()=>this.props.toggleHideCart()}>
        <HighlightOffIcon className="hover-class" style={{fontSize: 40, color: 'black', position: 'absolute', top: 5, right: 5}} onClick={()=>this.props.toggleHideCart()}/>
        <div/>
        {Object.keys(this.props.currentCart).length > 0 ?
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
              <h3>Thank you for your purchase!</h3>
              <h4>Check your email for your recipt.</h4>
            </div>
          :
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <h3>Your cart is currently empty</h3>
            </div>
        }
        {Object.keys(this.props.currentCart).length > 0 ?
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
