import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'
class App extends Component {
  state ={
    length:0,
    stringinput:[]
  }
  textlength=(event)=>{
    this.setState({
      length:event.target.value.length,
      stringinput:event.target.value.split("")
    })
    console.log(this.state.stringinput)
  }
  deleteLetterOnClick=(index)=>{
    const letters = [...this.state.stringinput];
    letters.splice(index,1);
    console.log(letters)
    this.setState({stringinput:letters})
    
  }
  render() {
    let stringinputs = (this.state.stringinput.map((text,index)=>{
          return <CharComponent
          key={index}
          letter={text}
          click={()=>{this.deleteLetterOnClick(index)}}></CharComponent>
        }))
      
    return (
      <div className="App">
        <div>
          <input type="text" 
          onChange={(event)=>{this.textlength(event)}}></input>
          <ValidationComponent
          length={this.state.length}/>
        </div>
        {stringinputs}
    
      </div>
    );
  }
}

export default App;
