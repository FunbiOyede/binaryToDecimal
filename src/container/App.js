import React, { Component } from 'react';
import './App.css';
import Input from '../components/Input/Input';
// import Button from '../components/Button/Button';
import convert from '../helper/convert/convert';
import Header from '../components/Header';
class App extends Component {
 

  state = {
  binary:'',
  decimalValue: ''
  
  }

 
  
  
  getBinary = (e) =>{
    this.setState({
      binary:e.target.value
    })
  }


  Convert = () =>{
    let value = convert(this.state.binary);
      this.setState({
        decimalValue: value
      })

  }

 
  render() {
    
    return (
      <div>
        <Header />
        <Input  Convert={this.Convert} getBinary={this.getBinary} binary={this.state.binary} decimalValue={this.state.decimalValue}/>
        {/* <Button Convert={this.Convert} /> */}
      </div>
    );
  }
}

export default App;
