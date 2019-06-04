import React from 'react'
import './Input.css';
const Input = (props) => {

    return (
        <div>
            <form action="" className='form'>
                <div className='sc'>
                    <span className='span'>Binary Input</span>
                    <input  className='input' type="text" autoComplete="off" placeholder="Enter 0 or 1" name="" id="" onChange={props.getBinary}/>
                </div>

                <button  className='btn' type="submit" onClick={props.Convert}>Convert</button>

                <div className='sc'>
                    <span className='span'>Decimal Output</span>
                    <input  className='input' type="text" value={props.decimalValue}  disabled name="" id=""/>
                </div>
            </form>       
        </div>
    ) 
}

export default Input
