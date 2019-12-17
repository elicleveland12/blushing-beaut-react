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
            <div style={{position: 'relative', display: 'inline-block', height: 130, background: `linear-gradient(to bottom, ${this.props.item.topColor} 0%, ${this.props.item.bottomColor} 100%)`}}>
              <img src={require('../images/blank-inner-coffee.gif')} style={{display: 'block', height: 130}} alt="coffee tumbler"/>
              <div style={{position: 'absolute', height: 120, width: 100, marginTop: -120, marginLeft: -15}}>
                {this.props.item.textLine1.length > 0 ? <p style={{fontSize: 8, marginTop: 15, color: this.props.item.textColor, textAlign: 'center'}}>{this.props.item.textLine1}</p> : null}
                {this.props.item.textLine2.length > 0 ? <p style={{fontSize: 8, marginTop: 15, color: this.props.item.textColor, textAlign: 'center'}}>{this.props.item.textLine2}</p> : null}
                {this.props.item.textLine3.length > 0 ? <p style={{fontSize: 8, marginTop: 15, color: this.props.item.textColor, textAlign: 'center'}}>{this.props.item.textLine3}</p> : null}
                {this.props.item.textLine4.length > 0 ? <p style={{fontSize: 8, marginTop: 15, color: this.props.item.textColor, textAlign: 'center'}}>{this.props.item.textLine4}</p> : null}
              </div>
            </div>
          :
            <div style={{position: 'relative', display: 'inline-block', height: 130, background: `linear-gradient(to bottom, ${this.props.item.topColor} 0%, ${this.props.item.bottomColor} 100%)`}}>
              <img src={require('../images/blank-inner-wine.gif')} style={{display: 'block', height: 130}} alt="wine tumbler"/>
              <div style={{position: 'absolute', height: 120, width: 100, marginTop: -120, marginLeft: 2.5}}>
                {this.props.item.textLine1.length > 0 ? <p style={{fontSize: 8, marginTop: 15, color: this.props.item.textColor, textAlign: 'center'}}>{this.props.item.textLine1}</p> : null}
                {this.props.item.textLine2.length > 0 ? <p style={{fontSize: 8, marginTop: 15, color: this.props.item.textColor, textAlign: 'center'}}>{this.props.item.textLine2}</p> : null}
                {this.props.item.textLine3.length > 0 ? <p style={{fontSize: 8, marginTop: 15, color: this.props.item.textColor, textAlign: 'center'}}>{this.props.item.textLine3}</p> : null}
                {this.props.item.textLine4.length > 0 ? <p style={{fontSize: 8, marginTop: 15, color: this.props.item.textColor, textAlign: 'center'}}>{this.props.item.textLine4}</p> : null}
              </div>
            </div>
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
