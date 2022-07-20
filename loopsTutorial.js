 //for loop
 for (let i =0; i<10; i++){
    console.log(i)
 }
 
 for (let i=2; i<10; i++){
    console.log(i)
 }
 for (let p=4; p <= 8; p++){
    console.log(p)
 }
for (let i=12; i <=19; i++){
    console.log(i)
}
//if statement
const x = 10;

if(x===20){
    console.log('x === 20')
}else if (x===10){
    console.log('x === 10')
}else{
    console.log('x is not 20 or 10')
}

// if else to print ex 90, v.good when its 80, ave when its 50, fail if 30 and print you did not write the test

const xe = 10;

// if (x === 90){
//     console.log('excellent')
// }else if(x === 80){
//     console.log('very good')
// }else if(x === 50){
//     console.log('average')
// }else if(x === 30){
//     console.log()
// }else{
//     console.log('you did not write the test')
// }
// new task
//100-70= excellent, 69-60 v.good, 59 -50 good, 49-45 average, 44-40 b.average 39-0 fail

score = 37;
if(score >= 70){
    console.log('Distinction')
}else if ((score <= 69) && (score >= 60)){
    console.log('Very good')
}else if((score <= 59) && (score >=50)){
    console.log('Good')
}else if((score <= 49) && (score >=40)){
    console.log('Average')
}else if (score <= 39){
    console.log('fail')
}

