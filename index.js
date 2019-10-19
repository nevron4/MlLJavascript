// Mean Normalization
const inputFeatures = [100, 50, 80, 10];
console.log(inputFeatures);
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

featureScaling(inputFeatures);
