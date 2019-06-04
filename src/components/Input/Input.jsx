import React from 'react'

const Input = (props) => {

    return (
        <div>
            <form action="">
                <input type="number" autoComplete="off" name="" id="" onChange={props.getBinary}/>
                <input type="number" value={props.value}  disabled name="" id=""/>
            </form>       
        </div>
    ) 
}

export default Input
