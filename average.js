//Program # 1 Mean
const numbers = [10, 20, 30, 40, 50];
function getaverage(arr) {
  // 5 === 0 = false
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;


	// i = 0 ; 0 < 5 = true; 0
  for (let i = 0; i < arr.length; i++) {
		// arr[0] = 10
		// arr[1] = 20
		// arr[2] = 30
		// arr[3] = 40
		//arr[4] = 50
		//arr[5] = false
    sum += arr[i];
  }
	// 10+20+30+40+50/5 
  const average = sum / arr.length;
	// 150/5 = 30
  return average;
}
console.log(getaverage(numbers));

//program #2 Mean

const n = [1, 2, 3, 4, 6];
function calculateAverage() {
  let sum = 0;
	// i = 0 ; 0<5 ; 0
	// i = 1 ; 1<5; 1
	// i = 2 ; 2<5; 2
	// i = 3 ; 3<5; 3
	// i = 4 ; 4<5; 4
	// i = 5 ; 5<5; false so loop will terminate here 
  for (let i = 0; i < n.length; i++) {
		// n[0] = 1
		//n[1]= 2
		//n[2]= 3
		//n[3]=4
		//n[4] = 6
		//n[5] = false
    sum += n[i];
		//1+2+3+4+6 = 16
  }
  const mean = sum / n.length;
// 16/5 =3.2
  return mean;
}
console.log(calculateAverage(n));

//program # 3 Median of even numbers

const numb = [1, 2, 4, 6,7];
function calculateMedian() {
  //sort array
  numb.sort((a, b) => a - b);
	//(1,2) 1-2 = -1 so ignore negative and 1 remains in its position
	//(2,3) 2-3 = -1 so ignore negative and 2 remains in its position
	//(3,4) 3-4 = -1 so ignore negative and 3 remains in its position
	//(4,6) 4-6 = -2 so ignore negative and 4 and 6 remain in their position
  const mid = Math.floor(numb.length / 2);
	//mid = 6/2 = 3 
//6 %2 === 0 = true it is even 
  // if (numb.length % 2 === 0) {
	// 	// [4-1] + [4] /2 = 3.5
  //   return (numb[mid - 1] + numb[mid]) / 2;
  // } else {
if (numb.length % 2 !==0) {
    return numb[mid];
  }
	else {
		return (numb[mid - 1] + numb[mid]) / 2;
	}
}
console.log(calculateMedian(numb));

//program #4 Median of odd numbers

const number = [1, 2, 3, 4, 5];

function calculateMedian(arr) {
  //sort array
	// (1,2) 1-2 = -1 so ignore negative and 1 remains in its position
	// (2,3) 2-3 = -1 so ignore negative and 2 remains in its position
	//(3,4)  3-4 = -1 so ignore negative and 3 remains in its position
	//(4,5) 4-5 = -1 so ignore negative and 4 and 5 remain in their positions
	arr.sort((a, b) => a - b);
	
  const mid = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
		// 5 / 2 = 2.5 so its false condition
    return (arr[mid - 1] + arr[mid]) / 2;
  } else {
		// its not zero so else will run 
		// 3
    return (arr[mid]);
  }
}console.log(calculateMedian(number));

