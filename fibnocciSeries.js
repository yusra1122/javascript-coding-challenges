let num2=0;
let num1=1;

let fibnocciSeries=[num1,num2];
//i = 2; 2<10 ; 
//i = 3; 3<10 ;
//i = 4; 4<10 ;
//i = 5; 5<10 ;
//i = 6; 6<10 ;
//i = 7; 7<10 ;
//i = 8; 8<10 ;
//i = 9; 9<10 ;
for(let i=2; i<10; i++){
    //0+1 = 1
    //1+1 = 2
    //1+2 = 3
    //3+2 = 5
    //5+3 = 8
    //8+5 = 13
    // 13+8 = 21
    // 21+13 = 34
    newnum = num1+num2;
   // push 1
   // push 2
   // push 3
   //push 5
   // push 8
   // push 13
   // push 21
   // push 34
    fibnocciSeries.push(newnum);
    //1
    //1
    //2
    //3
    //5
    //8
    //13
    //21
num2=num1;
//1
//2
//3
//5
//8
//13
//21
//34
num1=newnum;
}
console.log(fibnocciSeries);
