import React, { Component } from 'react';
import './App.css';
import Input from '../components/Input/Input';
import Validate from '../helper/Validate';
import convert from '../helper/convert';
import Header from '../components/Header';
class App extends Component {
 

  state = {
  binary:'',
  decimalValue: '',
  error:''
  
  }

 
  
  
  getBinary = (e) =>{
        this.setState({
        binary:e.target.value
      })
    
  }


  Convert = (e) =>{
    e.preventDefault();
    let validatedValue = Validate(this.state.binary);
    
    if(validatedValue === true){
    let value = convert(this.state.binary);
    this.setState({
      decimalValue : value
    })
  }
  else{
    this.setState({
      decimalValue : "",
      error:"Enter either 0 or 1"
    })
   this.clearInput();
  }
}
 clearInput = () =>{
   this.setState({
     binary:""
   })
 }
 
  render() {
    
    return (
      <div>
        <Header />
        <Input  Convert={this.Convert} getBinary={this.getBinary} binary={this.state.binary} decimalValue={this.state.decimalValue}  error={this.state.error}/>
        {/* <Button Convert={this.Convert} /> */}
      </div>
    );
  }
}

export default App;
