import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddIcon from '@material-ui/icons/Add';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const uuid = require("uuid/v4");

export default class TumblerCustomizer extends Component {

  state = {
    topColorVisCoffee: "",
    bottomColorVisCoffee: "",
    topColorVisWine: "",
    bottomColorVisWine: "",
    side: "neither",
    currentCart: [],
    quantity: 1
  }

  successToast = () => toast.success("Added to your cart!")

  addItemToCart = async() => {
    const product = await
      {
        id: uuid(),
        topColor: this.props.type === "coffee" ? this.props.topColorCoffee : this.props.topColorWine,
        bottomColor: this.props.type === "coffee" ? this.props.bottomColorCoffee : this.props.bottomColorWine,
        textLine1: this.props.type === "coffee" ? this.props.coffeeTextLine1 : this.props.wineTextLine1,
        textLine2: this.props.type === "coffee" ? this.props.coffeeTextLine2 : this.props.wineTextLine2,
        textLine3: this.props.type === "coffee" ? this.props.coffeeTextLine3 : this.props.wineTextLine3,
        textLine4: this.props.type === "coffee" ? this.props.coffeeTextLine4 : this.props.wineTextLine4,
        textColor: this.props.type === "coffee" ? this.props.coffeeTextColor : this.props.wineTextColor,
        additionalInfo: this.props.type === "coffee" ? this.props.coffeeAdditionalInfo: this.props.wineAdditionalInfo,
        cupType: this.props.type === "coffee" ? "coffee tumbler" : "wine tumbler",
        amount: this.props.type === "coffee" ? (3000 * this.state.quantity) : (2000 * this.state.quantity),
        quantity: this.state.quantity
      }
      localStorage.setItem('cart', JSON.stringify([...this.state.currentCart, product]))
      this.successToast()
      this.props.closeCustomizer(this.props.type)
      this.props.toggleCounter()
  }


  componentDidUpdate = (prevProps) => {
    if (prevProps.topColorCoffee !== this.props.topColorCoffee ||
        prevProps.topColorWine!== this.props.topColorWine||
        prevProps.bottomColorCoffee !== this.props.bottomColorCoffee ||
        prevProps.bottomColorWine !== this.props.bottomColorWine
      ) {
        if (this.props.type === "coffee") {
          this.state.side === "top" ?
            this.setState({topColorVisCoffee: this.props.topColorCoffee})
          :
            this.setState({bottomColorVisCoffee: this.props.bottomColorCoffee})
        } else {
          this.state.side === "top" ?
            this.setState({topColorVisWine: this.props.topColorWine})
          :
            this.setState({bottomColorVisWine: this.props.bottomColorWine})
        }
      }
  }

  componentDidMount = async() => {
    const currentCart = await JSON.parse(localStorage.getItem('cart'))
    if (currentCart) {
      this.setState({ currentCart })
    }
  }

  render(){
    return(
      <div style={{display: 'flex', flexDirection: 'row', width: '95%', height: 300, marginLeft: '1%', marginTop: -10, backgroundColor: 'white', borderLeft: '2px solid #6c5ce7', borderBottom: '2px solid #6c5ce7', borderRight: '2px solid #6c5ce7', borderBottomRightRadius: 10, borderBottomLeftRadius: 10}}>
        <div style={{display: 'flex', width: '50%', flexDirection: 'column'}}>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: -10, borderBottom: '1px solid blue'}}>
            <div style={{display: 'flex', flexDirection: 'column', width: '50%', backgroundColor: this.state.side === "top" ? "rgba(178, 190, 195,0.7)" : null}} onClick={()=>this.setState({side: this.state.side !== "top" ? "top" : "neither"})}>
              <h6>Top Color</h6>
              <div style={{marginLeft: '25%', marginTop: -10, width: 30, height: 30, borderRadius: 40, border: '2px solid #b2bec3', backgroundColor: this.props.type === "coffee" ? this.state.topColorVisCoffee : this.state.topColorVisWine, marginBottom: 5}}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '50%', backgroundColor: this.state.side === "bottom" ? "rgba(178, 190, 195,0.7)" : null}} onClick={()=>this.setState({side: this.state.side !== "bottom" ? "bottom" : "neither"})}>
              <h6>Bottom Color</h6>
              <div style={{marginLeft: '25%', marginTop: -10, width: 30, height: 30, borderRadius: 40, border: '2px solid #b2bec3', backgroundColor: this.props.type === "coffee" ? this.state.bottomColorVisCoffee : this.state.bottomColorVisWine, marginBottom: 5}}/>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', width: '100%', height: '100%'}}>
            {this.state.side !== "neither" ?
              <div style={{display: 'flex', flexDirection: 'column', width: '50%', justifyContent: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: 'black', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "black", this.props.type)}>
                  <p style={{fontSize: 10, color: 'white'}}>Black</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: 'blue', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "blue", this.props.type)}>
                  <p style={{fontSize: 10, color: 'white'}}>Blue</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: 'brown', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "brown", this.props.type)}>
                  <p style={{fontSize: 10, color: 'white'}}>Brown</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: '#CD7F32', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "#CD7F32", this.props.type)}>
                  <p style={{fontSize: 10, color: 'white'}}>Bronze</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: '#B87333', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "#B87333", this.props.type)}>
                  <p style={{fontSize: 10, color: 'white'}}>Copper</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: '#D4AF37', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "#D4AF37", this.props.type)}>
                  <p style={{fontSize: 10, color: 'white'}}>Gold</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: 'grey', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "grey", this.props.type)}>
                  <p style={{fontSize: 10, color: 'white'}}>Grey</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: 'green', border: '1px solid #636e72', borderBottomLeftRadius: 5}} onClick={()=>this.props.selectColor(this.state.side, "green", this.props.type)}>
                  <p style={{fontSize: 10, color: 'white'}}>Green</p>
                </div>
              </div>
            :
              null
            }
            {this.state.side !== "neither" ?
              <div style={{display: 'flex', flexDirection: 'column', width: '50%', justifyContent: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: 'orange', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "orange", this.props.type)}>
                  <p style={{fontSize: 10, color: 'white'}}>Orange</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: 'pink', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "pink", this.props.type)}>
                  <p style={{fontSize: 10}}>Pink</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: 'purple', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "purple", this.props.type)}>
                  <p style={{fontSize: 10, color: 'white'}}>Purple</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: 'red', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "red", this.props.type)}>
                  <p style={{fontSize: 10, color: 'white'}}>Red</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: '#B76E79', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "#B76E79", this.props.type)}>
                  <p style={{fontSize: 10, color: 'white'}}>Rose Gold</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: 'silver', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "silver", this.props.type)}>
                  <p style={{fontSize: 10}}>Silver</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: 'white', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "white", this.props.type)}>
                  <p style={{fontSize: 10}}>White</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: 25, backgroundColor: 'yellow', border: '1px solid #636e72'}} onClick={()=>this.props.selectColor(this.state.side, "yellow", this.props.type)}>
                  <p style={{fontSize: 10}}>Yellow</p>
                </div>
              </div>
            :
              null
            }
          </div>
        </div>
        <div style={{width: '50%', border: '1px solid blue', overflowY: 'scroll'}}>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TextField error={!!(this.props.type === "coffee" ? this.props.coffeeTextLine1.length > 10 : this.props.wineTextLine1.length > 10)} style={{marginTop: 15, width: 120}} value={this.props.type === "coffee" ? this.props.coffeeTextLine1 : this.props.wineTextLine1} id="outlined-basic" label="Line 1" variant="outlined" maxLength="2" onChange={(e)=>this.props.setTextLineValue(1, e.target.value, this.props.type)}/>
            <AddIcon style={{fontSize: 18 , marginLeft: 5}} onClick={this.props.textInputNum === 1 ? ()=>this.props.setTextInputNum(2) : null} />
          </div>
          {this.props.textInputNum > 1 ?
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <TextField error={!!(this.props.type === "coffee" ? this.props.coffeeTextLine2.length > 10 : this.props.wineTextLine2.length > 10)} style={{marginTop: 15, width: 120}} value={this.props.type === "coffee" ? this.props.coffeeTextLine2 : this.props.wineTextLine2} id="outlined-basic" label="Line 2" variant="outlined" maxLength="2" onChange={(e)=>this.props.setTextLineValue(2, e.target.value, this.props.type)}/>
              <AddIcon style={{fontSize: 18 , marginLeft: 5}} onClick={this.props.textInputNum === 2 ? ()=>this.props.setTextInputNum(3) : null} />
            </div> : null}
          {this.props.textInputNum > 2 ?
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <TextField error={!!(this.props.type === "coffee" ? this.props.coffeeTextLine3.length > 10 : this.props.wineTextLine3.length > 10)} style={{marginTop: 15, width: 120}} value={this.props.type === "coffee" ? this.props.coffeeTextLine3 : this.props.wineTextLine3} id="outlined-basic" label="Line 3" variant="outlined" maxLength="2" onChange={(e)=>this.props.setTextLineValue(3, e.target.value, this.props.type)}/>
              <AddIcon style={{fontSize: 18 , marginLeft: 5}} onClick={this.props.textInputNum === 3 ? ()=>this.props.setTextInputNum(4) : null} />
            </div> : null}
          {this.props.textInputNum === 4 ?
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <TextField error={!!(this.props.type === "coffee" ? this.props.coffeeTextLine4.length > 10 : this.props.wineTextLine4.length > 10)} style={{marginTop: 15, width: 120}} value={this.props.type === "coffee" ? this.props.coffeeTextLine4 : this.props.wineTextLine4} id="outlined-basic" label="Line 4" variant="outlined" maxLength="2" onChange={(e)=>this.props.setTextLineValue(4, e.target.value, this.props.type)}/>
              <AddIcon style={{fontSize: 18 , marginLeft: 5, color: 'white'}} />
            </div> : null}
          <FormControl variant="outlined">
            <InputLabel  id="outlined-basic" style={{marginTop: 20, marginLeft: -25}}>
              Font Color
            </InputLabel>
            <Select
              variant="outlined"
              labelId="outlined-basic"
              id="outlined-basic"
              value={this.props.type === "coffee" ? this.props.coffeeTextColor : this.props.wineTextColor}
              onChange={(e)=>this.props.setTextColor(e.target.value, this.props.type)}
              style={{marginTop: 20, width: 120, marginLeft: -25}}
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
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: -25}}>
            <TextField multiline rows="6" style={{fontSize: 12, marginTop: 15, width: 120}} value={this.props.type === "coffee" ? this.props.coffeeAdditionalInfo : this.props.wineAdditionalInfo} id="outlined-basic" label="Description" variant="outlined" maxLength="2" onChange={(e)=>this.props.setAddInfo(this.props.type, e.target.value)}/>
          </div>
          <div style={{marginLeft: -25}}>
            <FormControl variant="outlined">
              <InputLabel  id="outlined-basic" style={{marginTop: 15}}>
                Quantity
              </InputLabel>
              <Select
                variant="outlined"
                labelId="outlined-basic"
                id="outlined-basic"
                value={this.state.quantity}
                onChange={(e)=>this.setState({quantity: e.target.value})}
                style={{marginTop: 15, width: 120}}
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
          <div style={{marginTop: 20, marginLeft: 5}}>
            <div className="hover-class" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', border: '0.5px solid rgba(99, 110, 114,1.0)', backgroundColor: 'rgba(108, 92, 231,0.8)', width: 120, borderRadius: 5}} onClick={()=>this.addItemToCart()}>
              <h6 style={{color: 'white'}}>Add to Cart</h6>
              <AddShoppingCartIcon style={{fontSize: 20, marginLeft: 25, color: 'white'}} />
            </div>
          </div>
        </div>
        <HighlightOffIcon style={{position: 'relative', bottom: -270, color: '#6c5ce7', fontSize: 30}} onClick={()=>this.props.customizeCup("none")}/>
        <ToastContainer />
      </div>
    )
  }
}
