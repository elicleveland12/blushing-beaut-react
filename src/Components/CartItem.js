import React, {Component} from 'react';
import '../App.css';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default class CartItem extends Component {


  render(){
    const cost = this.props.item.amount / 100
    return(
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: 50}}>
          <h5>{}</h5>
          <HighlightOffIcon className="hover-class" style={{fontSize: 24}} onClick={()=>this.props.removeCartItem(this.props.item.id)}/>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          {this.props.item.cupType === "coffee tumbler" ?
            <div style={{position: 'relative', display: 'inline-block', height: 130}}>
              <img src={require('../images/blank-inner-coffee.gif')} style={{display: 'block', height: 130}} alt="coffee tumbler"/>
              <div style={{position: 'absolute', height: 120, width: 100, marginTop: -120, marginLeft: -15}}>
              </div>
            </div>
          :
          this.props.item.cupType === "wine tumbler" ?
            <div style={{position: 'relative', display: 'inline-block', height: 130}}>
              <img src={require('../images/blank-inner-wine.gif')} style={{display: 'block', height: 130}} alt="wine tumbler"/>
              <div style={{position: 'absolute', height: 120, width: 100, marginTop: -120, marginLeft: 2.5}}>
              </div>
            </div>
          :
          this.props.item.cupType === "sippy cup" ?
            <div style={{position: 'relative', display: 'inline-block', height: 130}}>
              <img src={require('../images/sippycup.001.png')} style={{display: 'block', height: 130}} alt="sippy tumbler"/>
              <div style={{position: 'absolute', height: 120, width: 100, marginTop: -120, marginLeft: 2.5}}>
              </div>
            </div>
          :
          this.props.item.cupType === "curved tumbler" ?
            <div style={{position: 'relative', display: 'inline-block', height: 130}}>
              <img src={require('../images/30oz.png')} style={{display: 'block', height: 130}} alt="curved tumbler"/>
              <div style={{position: 'absolute', height: 120, width: 100, marginTop: -120, marginLeft: -15}}>
              </div>
            </div>
          :
          this.props.item.cupType === "skinny tumbler" ?
            <div style={{position: 'relative', display: 'inline-block', height: 130}}>
              <img src={require('../images/skinny.png')} style={{display: 'block', height: 130}} alt="skinny tumbler"/>
              <div style={{position: 'absolute', height: 120, width: 100, marginTop: -120, marginLeft: -15}}>
              </div>
            </div>
          :
          this.props.item.cupType === "kids tumbler" ?
            <div style={{position: 'relative', display: 'inline-block', height: 130}}>
              <img src={require('../images/120z_straw.png')} style={{display: 'block', height: 130}} alt="kids tumbler"/>
              <div style={{position: 'absolute', height: 120, width: 100, marginTop: -120, marginLeft: 2.5}}>
              </div>
            </div>
          :
          this.props.item.cupType === "soda tumbler" ?
            <div style={{position: 'relative', display: 'inline-block', height: 130}}>
              <img src={require('../images/can.png')} style={{display: 'block', height: 130}} alt="soda tumbler"/>
              <div style={{position: 'absolute', height: 120, width: 100, marginTop: -120, marginLeft: -15}}>
              </div>
            </div>
          :
          null
          }
        </div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}>
          <h4>{this.props.item.quantity} {this.props.item.cupType}s</h4>
          <h4 style={{marginTop: -15}}>${cost}.00</h4>
        </div>
      </div>
    )
  }
}
