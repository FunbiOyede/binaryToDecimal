const validate = (value) =>{
    let binaryRegex = /^ [0-1]{0,1}$/;
    let valueResult = binaryRegex.test(value);
    return valueResult;
}

export default validate;
