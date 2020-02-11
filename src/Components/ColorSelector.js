import React from 'react';
import Box from '@material-ui/core/Box';


function ColorSelector(props) {
  return(
    <Box boxShadow={3} style={{display: 'flex', height: 210, flexDirection: 'column', backgroundColor: '#dfe6e9', marginLeft: 60, borderRadius: 10, border: '2px solid #636e72', shadowOffset:{ width: 0, height: 10}, shadowColor: 'black', shadowOpacity: 1.0}}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        <div style={{display: 'flex', flexDirection: 'column', lineHeight: 0.2, justifyContent: 'center'}} onClick={()=>props.renderColors(props.side, "black")}>
          <div style={{height: 40, width: 40, marginTop: 10, backgroundColor: 'black', border: '3px solid #636e72', borderRadius: 40}} />
          <div>
            <p style={{textAlign: 'center'}}>black</p>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', lineHeight: 0.2, justifyContent: 'center'}} onClick={()=>props.renderColors(props.side, "blue")}>
          <div style={{height: 40, width: 40, marginTop: 10, backgroundColor: '#0000FF', border: '3px solid #636e72', borderRadius: 40}} />
          <div>
            <p style={{textAlign: 'center'}}>blue</p>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', lineHeight: 0.2, justifyContent: 'center'}} onClick={()=>props.renderColors(props.side, "brown")}>
          <div style={{height: 40, width: 40, marginTop: 10, backgroundColor: '#964B00', border: '3px solid #636e72', borderRadius: 40}} />
          <div>
            <p style={{textAlign: 'center'}}>brown</p>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', lineHeight: 0.2, justifyContent: 'center'}} onClick={()=>props.renderColors(props.side, "#CD7F32")}>
          <div style={{height: 40, width: 40, marginTop: 10, backgroundColor: '#CD7F32', border: '3px solid #636e72', borderRadius: 40}} />
          <div>
            <p style={{textAlign: 'center'}}>bronze</p>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', lineHeight: 0.2, justifyContent: 'center'}} onClick={()=>props.renderColors(props.side, "#B87333")}>
          <div style={{height: 40, width: 40, marginTop: 10, backgroundColor: '#B87333', border: '3px solid #636e72', borderRadius: 40}} />
          <div>
            <p style={{textAlign: 'center'}}>copper</p>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', lineHeight: 0.2, justifyContent: 'center'}} onClick={()=>props.renderColors(props.side, "#D4AF37")}>
          <div style={{height: 40, width: 40, marginTop: 10, backgroundColor: '#D4AF37', border: '3px solid #636e72', borderRadius: 40}} />
          <div>
            <p style={{textAlign: 'center'}}>gold</p>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', lineHeight: 0.2, justifyContent: 'center'}} onClick={()=>props.renderColors(props.side, "grey")}>
          <div style={{height: 40, width: 40, marginTop: 10, backgroundColor: '#808080', border: '3px solid #636e72', borderRadius: 40}} />
          <div>
            <p style={{textAlign: 'center'}}>grey</p>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', lineHeight: 0.2, justifyContent: 'center'}} onClick={()=>props.renderColors(props.side, "green")}>
          <div style={{height: 40, width: 40, marginTop: 10, backgroundColor: '#00FF00', border: '3px solid #636e72', borderRadius: 40}} />
          <div>
            <p style={{textAlign: 'center'}}>green</p>
          </div>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 5}}>
        <div style={{display: 'flex', flexDirection: 'column', lineHeight: 0.2, justifyContent: 'center'}} onClick={()=>props.renderColors(props.side, "orange")}>
          <div style={{height: 40, width: 40, marginTop: 10, backgroundColor: '#FFA500', border: '3px solid #636e72', borderRadius: 40}} />
          <div>
            <p style={{textAlign: 'center'}}>orange</p>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', lineHeight: 0.2, justifyContent: 'center'}} onClick={()=>props.renderColors(props.side, "pink")}>
          <div style={{height: 40, width: 40, marginTop: 10, backgroundColor: '#FFC0CB', border: '3px solid #636e72', borderRadius: 40}} />
          <div>
            <p style={{textAlign: 'center'}}>pink</p>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', lineHeight: 0.2, justifyContent: 'center'}} onClick={()=>props.renderColors(props.side, "purple")}>
          <div style={{height: 40, width: 40, marginTop: 10, backgroundColor: '#6A0DAD', border: '3px solid #636e72', borderRadius: 40}} />
          <div>
            <p style={{textAlign: 'center'}}>purple</p>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', lineHeight: 0.2, justifyContent: 'center'}} onClick={()=>props.renderColors(props.side, "red")}>
          <div style={{height: 40, width: 40, marginTop: 10, backgroundColor: '#FF0000', border: '3px solid #636e72', borderRadius: 40}} />
          <div>
            <p style={{textAlign: 'center'}}>red</p>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', lineHeight: 0.2, justifyContent: 'center'}} onClick={()=>props.renderColors(props.side, "#B76E79")}>
          <div style={{height: 40, width: 40, marginTop: 10, backgroundColor: '#B76E79', border: '3px solid #636e72', borderRadius: 40, marginLeft: 7.5}} />
          <div>
            <p style={{textAlign: 'center'}}>rose gold</p>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', lineHeight: 0.2, justifyContent: 'center'}} onClick={()=>props.renderColors(props.side, "silver")}>
          <div style={{height: 40, width: 40, marginTop: 10, backgroundColor: '#AAA9AD', border: '3px solid #636e72', borderRadius: 40}} />
          <div>
            <p style={{textAlign: 'center'}}>silver</p>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', lineHeight: 0.2, justifyContent: 'center'}} onClick={()=>props.renderColors(props.side, "white")}>
          <div style={{height: 40, width: 40, marginTop: 10, backgroundColor: 'white', border: '3px solid #636e72', borderRadius: 40}} />
          <div>
            <p style={{textAlign: 'center'}}>white</p>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', lineHeight: 0.2, justifyContent: 'center'}} onClick={()=>props.renderColors(props.side, "yellow")}>
          <div style={{height: 40, width: 40, marginTop: 10, backgroundColor: '#FFFF00', border: '3px solid #636e72', borderRadius: 40}} />
          <div>
            <p style={{textAlign: 'center'}}>yellow</p>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default ColorSelector
