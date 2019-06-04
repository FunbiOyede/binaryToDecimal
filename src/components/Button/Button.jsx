import React, {Component} from 'react'

 class  Button extends Component{

   
     render(){
        return(
            <button type="submit" onClick={this.props.Convert}>Convert</button>
        )
     }
   
}

export default Button;