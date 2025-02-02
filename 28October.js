var arr= [2, 4, 6, 8, 10]
var result=arr.reduce((acc,curr)=>acc+curr);
console.log(result);

var arr2=[1, 3, 5, 7]
var result2=arr2.reduce((acc,curr)=>acc*curr);
console.log(result2);

var arr3=['apple', 'banana', 'cherry']
var result3=[]
result3.push(arr3.map(item=>item.toUpperCase()))
console.log(result3);

var arr4=[1, 2, 3, 4, 5]
var result4=arr.reduce((acc,curr)=>acc*10);
console.log(result4);

const people = [
    { name: 'John', age: 25 },
    { name: 'Sarah', age: 30 },
    { name: 'Mike', age: 35 }
  ];
  console.log(people[age]);
  

  
  const fruits = ['apple', 'banana', 'cherry'];

  fruits.forEach(fruit => {
      console.log(fruit);
  });