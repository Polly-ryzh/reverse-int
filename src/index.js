module.exports = function reverse (n) {

const str = (Math.abs(n)).toString()
    
    let result = ''
    
    for (let i = str.length -1; i >= 0; i--){
      result += str[i];
    }
    
    return result;
}
