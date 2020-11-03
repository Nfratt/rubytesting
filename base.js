// function fun(){
// var i;
// for (i=0;i<10;i++){}
// var x=i;
//     console.log(x);}

// function hi(){
//     console.log('buttz')
// }

// function myFunc(p1, p2) {
//     return p1 * p2;   // The function returns the product of p1 and p2
//   }
// // console.log(myFunc(11,2))


// function cars(){
//     let make=["Subaru","Nissan","Ford"]
//     let model=["Forester","Rouge","Escape"]
//     let color=["White","Blue","Green"]
//     const car = 
//     { 
//         make:make, 
//         model:model,
//         color:color
//     }
//     let carlenA= make.length
//     for(carsarray=0; carsarray< carlenA;carsarray++){
//         console.log(make[carsarray])
//     }


//     console.log("i drive a" +" " + car.color[2]+ " " + car.make[0] + " " + car.model[0]),
//     console.log
//     (        
//         make.length,
//         model.length,
//         color.length
//     )
    
// };
 
// console.log(cars())

function avid(numberarr){
    let numbers = numberarr
    let largest = numbers[0];
    let smallest = numbers[0];
    
    for (var i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        largest = numbers[i];
      } else if (numbers[i] < smallest) {
        smallest = numbers[i];
      }
    }
    console.log(largest);
    console.log(smallest);
};
console.log(avid([2, 4, 9, 2, 0, 16, 24]))


// function removeduup(){
//     let array=[1,4,5,6,4,7,8];
//     for (var i=0;i<array.length;i++){
//         for (var j=0; j<array.length;j>i){
//             if(array[i]=== (array[j]))
//                 {flag=1}
//             else{
//                 k++;
//                 array[k]=array[i]
//             }
//         }
//         if (flag !=1){
//             console.log(array[k])

//         }
//     }

// }

// console.log(removeduup())

var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
var uniq = names.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
  },[]);
  console.log(uniq)
