function addCommas(num) {
    console.log(num);
    if (num < 1000 ) return num; 
    else {
            let firstArr = num.toString().split(".")[0];
            let numOfCommas = Math.floor(firstArr.length/3); 
    
    console.log(firstArr);
    
    for(let i = 1 ; i < numOfCommas ; i++) {
            firstArr = firstArr.slice(0, firstArr.length - (3*i)) + "," + firstArr.slice(firstArr.length - (3*i));
    }
    
    return firstArr.toString();
    } 
}