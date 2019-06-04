import React, { Component } from 'react';
import './App.css';
import Input from '../components/Input/Input';
import Validate from '../helper/Validate';
import convert from '../helper/convert/convert';
import Header from '../components/Header';
class App extends Component {
 

  state = {
  binary:'',
  decimalValue: ''
  
  }

 
  
  
  getBinary = (e) =>{
    let validatedValue = Validate(e.target.value);
    // this.setState({
    //   binary: validatedValue
    // })
    if(validatedValue === false){
        console.log("Enter normal value");
    }
    else{
      console.log("funbi")
    }
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
