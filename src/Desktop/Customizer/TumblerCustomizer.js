import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddIcon from '@material-ui/icons/Add';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import ColorSelector from '../../Components/ColorSelector';

const uuid = require("uuid/v4");

export default class TumblerCustomizer extends Component {


  state = {
    hoverTop: false,
    hoverBottom: false,
    topColor: "white",
    bottomColor: "white",
    textLine1: "",
    textLine2: "",
    textLine3: "",
    textLine4: "",
    textColor: "",
    additionalInfo: "",
    textInputNum: 1,
    currentCart: [],
    quantity: 1,
  }

  renderColors = (side, color) => {
    if (side === "top") {
      this.setState({topColor: color})
    } else {
      this.setState({bottomColor: color})
    }
  }

  addItemToCart = async() => {
    const product = await
      {
        id: uuid(),
        topColor: this.state.topColor,
        bottomColor: this.state.bottomColor,
        textLine1: this.state.textLine1,
        textLine2: this.state.textLine2,
        textLine3: this.state.textLine3,
        textLine4: this.state.textLine4,
        additionalInfo: this.state.additionalInfo,
        textColor: this.state.textColor,
        cupType: this.props.coffee ? "coffee tumbler" : "wine tumbler",
        amount: this.props.coffee ? (3000 * this.state.quantity) : (2000 * this.state.quantity),
        quantity: this.state.quantity
      }
      localStorage.setItem('cart', JSON.stringify([...this.state.currentCart, product]))
      this.setState({
        topColor: "white",
        bottomColor: "white",
        textLine1: "",
        textLine2: "",
        textLine3: "",
        textLine4: "",
        textColor: "",
        textInputNum: 1,
        quantity: null
      })
      this.props.closeCustomizer()
  }

  componentDidMount = async() => {
    const currentCart = await JSON.parse(localStorage.getItem('cart'))
    if (currentCart) {
      this.setState({ currentCart })
    }
  }

  render(){
    return(
      <div style={{display: 'flex', justifyContent: 'space-between', padding: 20}}>
        <div style={{display: 'flex', height: 600, alignItems: 'center'}}>
          <div style={{height: 450, width: 250}}>
            <div style={{position: 'absolute', height: this.props.coffee ? 225 : 150, width: 250, marginTop: this.props.coffee ? 0 : 75}} onMouseEnter={()=>this.setState({hoverTop: true})} onMouseLeave={()=>this.setState({hoverTop: false})}>
              {this.state.textLine1.length > 0 ? <h1 style={{marginTop: this.props.coffee ? 80 : 30, color: this.state.textColor === "" ? 'black' : this.state.textColor, textAlign: 'center'}}>{this.state.textLine1}</h1> : null}
              {this.state.textLine2.length > 0 ? <h1 style={{marginTop: this.props.coffee ? 60 : 40, color: this.state.textColor === "" ? 'black' : this.state.textColor, textAlign: 'center'}}>{this.state.textLine2}</h1> : null}
            </div>
            <div style={{position: 'absolute', height: this.props.coffee ? 225 : 150, width: 250, marginTop: 225}} onMouseEnter={()=>this.setState({hoverBottom: true})} onMouseLeave={()=>this.setState({hoverBottom: false})}>
              {this.state.textLine3.length > 0 ? <h1 style={{marginTop: this.props.coffee ? 40 : 20, color: this.state.textColor === "" ? 'black' : this.state.textColor, textAlign: 'center'}}>{this.state.textLine3}</h1> : null}
              {this.state.textLine4.length > 0 ? <h1 style={{marginTop: this.props.coffee ? 60 : 40, color: this.state.textColor === "" ? 'black' : this.state.textColor, textAlign: 'center'}}>{this.state.textLine4}</h1> : null}
            </div>
            {this.props.coffee ?
              <div style={{width: 250, height: 430, background: `linear-gradient(to bottom, ${this.state.topColor} 0%, ${this.state.bottomColor} 100%)`}}>
                <img src={require('../../images/blank-inner-coffee.gif')} style={{width: 250, height: 450, marginTop: -20}} alt="coffee tumbler"/>
              </div>
            :
              <div style={{width: 250, height: 300, marginTop: 75, background: `linear-gradient(to bottom, ${this.state.topColor} 0%, ${this.state.bottomColor} 100%)`}}>
                <img src={require('../../images/blank-inner-wine.gif')} style={{width: 250, height: 300}} alt="wine tumbler"/>
              </div>
            }
          </div>
          <div style={{display: 'flex', flexDirection: 'column', height: 450, width: 500, alignContent: 'space-between'}}>
            {this.state.hoverTop ?
              <div style={{height: 200, marginLeft: -60, zIndex: 999}} onMouseEnter={()=>this.setState({hoverTop: true})} onMouseLeave={()=>this.setState({hoverTop: false})}>
                <ColorSelector renderColors={this.renderColors} side={"top"} />
              </div>
            :
              null
            }
            {this.state.hoverBottom ?
              <div style={{height: 200, marginTop: 225, marginLeft: -60, zIndex: 999}} onMouseEnter={()=>this.setState({hoverBottom: true})} onMouseLeave={()=>this.setState({hoverBottom: false})}>
                <ColorSelector renderColors={this.renderColors} side={"bottom"} />
              </div>
            :
              null
            }
            {this.state.hoverTop || this.state.hoverBottom ?
              null
            :
              <div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                  <TextField helperText="Max of 10 characters per line" error={!!(this.state.textLine1.length > 10)} style={{marginTop: 15, width: 200}} value={this.state.textLine1} id="outlined-basic" label="Line 1" variant="outlined" maxLength="2" onChange={(e)=>this.setState({textLine1: e.target.value})}/>
                  <AddIcon style={{fontSize: 30, marginLeft: 25}} onClick={this.state.textInputNum === 1 ? ()=>this.setState({textInputNum: 2}) : null} />
                </div>
                {this.state.textInputNum > 1 ?
                  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <TextField helperText="Max of 10 characters per line" error={!!(this.state.textLine2.length > 10)} style={{marginTop: 15, width: 200}} value={this.state.textLine2} id="outlined-basic" label="Line 2" variant="outlined" maxLength="2" onChange={(e)=>this.setState({textLine2: e.target.value})}/>
                    <AddIcon style={{fontSize: 30, marginLeft: 25}} onClick={this.state.textInputNum === 2 ? ()=>this.setState({textInputNum: 3}) : null} />
                  </div> : null}
                {this.state.textInputNum > 2 ?
                  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <TextField helperText="Max of 10 characters per line" error={!!(this.state.textLine3.length > 10)} style={{marginTop: 15, width: 200}} value={this.state.textLine3} id="outlined-basic" label="Line 3" variant="outlined" maxLength="2" onChange={(e)=>this.setState({textLine3: e.target.value})}/>
                    <AddIcon style={{fontSize: 30, marginLeft: 25}} onClick={this.state.textInputNum === 3 ? ()=>this.setState({textInputNum: 4}) : null} />
                  </div> : null}
                {this.state.textInputNum === 4 ?
                  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <TextField helperText="Max of 10 characters per line" error={!!(this.state.textLine4.length > 10)} style={{marginTop: 15, width: 200, marginLeft: -50}} value={this.state.textLine4} id="outlined-basic" label="Line 4" variant="outlined" maxLength="2" onChange={(e)=>this.setState({textLine4: e.target.value})}/>
                  </div> : null}
                <FormControl variant="outlined">
                  <InputLabel  id="outlined-basic" style={{marginTop: 20, marginLeft: 122}}>
                    Font Color
                  </InputLabel>
                  <Select
                    variant="outlined"
                    labelId="outlined-basic"
                    id="outlined-basic"
                    value={this.state.textColor}
                    onChange={(e)=>this.setState({textColor: e.target.value})}
                    style={{marginTop: 20, width: 200, marginLeft: 122}}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"black"}>Black</MenuItem>
                    <MenuItem value={"blue"}>Blue</MenuItem>
                    <MenuItem value={"brown"}>Brown</MenuItem>
                    <MenuItem value={"#CD7F32"}>Bronze</MenuItem>
                    <MenuItem value={"#B87333"}>Copper</MenuItem>
                    <MenuItem value={"#D4AF37"}>Gold</MenuItem>
                    <MenuItem value={"grey"}>Grey</MenuItem>
                    <MenuItem value={"green"}>Green</MenuItem>
                    <MenuItem value={"orange"}>Orange</MenuItem>
                    <MenuItem value={"pink"}>Pink</MenuItem>
                    <MenuItem value={"purple"}>Purple</MenuItem>
                    <MenuItem value={"red"}>Red</MenuItem>
                    <MenuItem value={"#B76E79"}>Rose Gold</MenuItem>
                    <MenuItem value={"silver"}>Silver</MenuItem>
                    <MenuItem value={"white"}>White</MenuItem>
                    <MenuItem value={"yellow"}>Yellow</MenuItem>
                  </Select>
                </FormControl>
                <div style={{marginTop: 20, marginLeft: '30%'}}>
                  <div className="hover-class" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', border: '0.5px solid rgba(99, 110, 114,1.0)', backgroundColor: 'rgba(108, 92, 231,0.8)', width: 200, height: 60, borderRadius: 5, marginLeft: -28, marginTop: 20}} onClick={()=>this.addItemToCart()}>
                    <h3 style={{color: 'white'}}>Add to Cart</h3>
                    <AddShoppingCartIcon style={{fontSize: 30, marginLeft: 25, color: 'white'}} />
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
        <div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: -100, marginTop: 75}}>
            <TextField helperText="Add any additional design instructions here" multiline rows="6" style={{marginTop: 15, width: 200}} value={this.state.additionalInfo} id="outlined-basic" label="Description" variant="outlined" maxLength="2" onChange={(e)=>this.setState({additionalInfo: e.target.value})}/>
            <FormControl variant="outlined">
              <InputLabel  id="outlined-basic" style={{marginTop: 20}}>
                Quantity
              </InputLabel>
              <Select
                variant="outlined"
                labelId="outlined-basic"
                id="outlined-basic"
                value={this.state.quantity}
                onChange={(e)=>this.setState({quantity: e.target.value})}
                style={{marginTop: 20, width: 200}}
              >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
                <MenuItem value={"1"}>1</MenuItem>
                <MenuItem value={"2"}>2</MenuItem>
                <MenuItem value={"3"}>3</MenuItem>
                <MenuItem value={"4"}>4</MenuItem>
                <MenuItem value={"5"}>5</MenuItem>
                <MenuItem value={"6"}>6</MenuItem>
                <MenuItem value={"7"}>7</MenuItem>
                <MenuItem value={"8"}>8</MenuItem>
                <MenuItem value={"9"}>9</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    )
  }
}
