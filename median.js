const arr =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function calculateMedian(arr) {
    if (arr == null || arr.length === 0) {
        throw new Error("The array is empty.");
    }
    arr.sort((x, y) => x - y);
    if (arr.length % 2 === 0) {
        return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
    } else {
        return arr[Math.floor(arr.length / 2)];
    }
}

console.log(calculateMedian(arr));

//program Median of odd numbers

const array =[12,3,8,14,6]

function calculateMedian(array){
    if (array == null || arr.length === 0) {
        throw new Error("The array is empty.");
    } 
    array.sort((a,b)=>a-b);
if(array.length % 2 === 1){
    return array[Math.floor(array.length / 2)];
}
else{
    return(array[array.length/2-1] + array[array.length/2])/2;
}

}
console.log(calculateMedian(array));
