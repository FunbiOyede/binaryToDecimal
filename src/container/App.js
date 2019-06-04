import React, { Component } from 'react';
import './App.css';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import convert from '../components/convert/convert';
class App extends Component {
 

  state = {
  binary:'',
  Value: ''
  
  }

 
  
  
  getBinary = (e) =>{
    this.setState({
      binary:e.target.value
    })
  }


  Convert = () =>{
    let value = convert(this.state.binary);
      this.setState({
        Value: value
      })

  }

 
  render() {
    
    return (
      <div className="App">
        <Input getBinary={this.getBinary} binary={this.state.binary} value={this.state.Value}/>
        <Button Convert={this.Convert} />
      </div>
    );
  }
}

export default App;
