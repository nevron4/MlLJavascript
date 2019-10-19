// Mean Normalization
const inputFeatures = [100, 50, 80, 10];
console.log(inputFeatures);

function readDataFile(file) {
    const fs = require('fs') 
    
    fs.readFile('Input.txt', 'utf-8', (err, data) => { 
        if (err) throw err; 
  
    // Converting Raw Buffer to text 
    // data using tostring function. 
        console.log(data); 
    })
}
readDataFile('ex1data1.txt');

function featureScaling(arr){
    const scaledArr = [];
    const averageValue = arr.reduce((a,b) => a + b, 0) / arr.length;
    const rangeValues = Math.max(...arr) - Math.min(...arr);
    console.log(`Average value = ${averageValue}`);
    console.log(`Range of values = ${rangeValues}`);
    arr.forEach(function(item) {
        scaledArr.push((item - averageValue) / rangeValues);
    });
    console.log(`Scaled array = ${scaledArr}`);
    return scaledArr;
}

//featureScaling(inputFeatures);
