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
