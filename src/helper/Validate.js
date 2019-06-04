const validate = (value) =>{
    let binaryRegex = /^[0-1]+$/g;   
    let valueResult = binaryRegex.test(value);
    return valueResult;
}

export default validate;
