//for-of
const colors = ['blue', 'green', 'white'];

for (const color of colors) {
    
  console.log(color)
 
 
}

//for 

const colors1 = ['blue', 'green', 'white'];
console.log("for with index")
for (let index = 0; index < colors.length; index++) {
  const color = colors[index];
  
  console.log(color);
}

//for each
const colors2 = ['blue', 'green', 'white'];
console.log("for each")

colors.forEach(function callback(value, index) {
  console.log(value, index);
});

//map
const Values=[1,2,3,4,5,6]
console.log(`original array ${Values}`)
const a=Values.map((item)=>{
    console.log("new array",[item*2])
})
 //find & includes & indexof
 const values1=[1,3,7,8] 
 console.log(values1.includes(3)) //includes used to search for specific element if exist return true otherwise false
 console.log(values1.indexOf(3)) //finding index value of specific element
 function even(number){
   return number%2===0;
 }
 const b=values1.find(even) //find always return first element based on predicate condition
 console.log(b)

//array querying
//every and some
const evens = [0, 2, 4, 6];
const numbers = [0, 1, 4, 3];

function isEven(number) {
  return number % 2 === 0;
}

const c = evens.every(isEven); //every check each and every element based on predicate conditions here all elements are even so true
const d =numbers.some(isEven); //some opposite to every it check some elements exist or not based on condition
console.log(c)
console.log(d)

//insert ==> push and unshift
//push add element at last of array and unshift adds element at first of array
const names = ['Batman'];

names.push('Joker');
console.log(names)

names.unshift('sai')  //we can insert mutiple
console.log(names)

//remove ==> pop & shift
//pop removes last element and shift removes first element
const names2 = ['Batman',"sai","kumar"];

names2.pop();
console.log(names2)

names2.shift()  //we can insert mutiple
console.log(names2)
//filter
const numbers4 = [1, 5, 8, 10];

function isEven(number) {
  return number % 2 === 0;
}

const evens4 = numbers4.filter(isEven);
console.log(evens4)


//splice method
//splice is used to remove and add elements in array

const names6 = ['Batman', 'Catwoman', 'Joker', 'Bane'];

const e= names6.splice(1, 2); //removing two items from index 1
console.log("removed items",e)
console.log("resultant array",names6)

//adding through splice
const names7 = ['Batman', 'Catwoman', 'Joker', 'Bane'];

const f=names7.splice(1, 2, 'Alfred'); //removing two items from index one and adding item
console.log("remove and added array",f)
console.log("resultant array",names7);


//spread //spread operator wont effect original array so array is immutable
const names8 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
const fromIndex = 1; //start index
const removeCount = 2; //howmany ned tom remove from fromindex

const newNames = [
  ...names8.slice(0, fromIndex),
  ...names8.slice(fromIndex + removeCount)
];

console.log("spread array",newNames);
console.log("original array",names8);

//making array empty using length and splice

const colors3 = ['blue', 'green', 'black'];
console.log(colors3.length)
colors3.length = 0; //making length 0

console.log("array length",colors3)

//splice
const colors4 = ['blue', 'green', 'black'];
console.log(colors4.length)
colors4.splice(0); //making length 0

console.log("array length",colors4)


//fill
const numbers9 = [1, 2, 3, 4];

numbers9.fill(0);  //fill all with zero

console.log(numbers9); 

//flatten
//creates a new array by recursively flatting the items that are arrays, until certain depth. depth optional argument defaults to 1.
const arrays = [0, [1, 3, 5], [2, 4, 6]];
console.log("original array",arrays)

const flatArray = arrays.flat();
console.log("flatten array",flatArray)


//sorting
const letters = ['B', 'C', 'A'];
console.log("original arrays",letters)

letters.sort();

console.log("sorted array",letters)

//sorting in ascending and descending order

const arrays8=[1,2,3,4,5,6]
const descending=arrays8.sort((a,b)=>
{
    return b-a
}
)
console.log("descending order ", descending)


const arrays9=[3,10,1,5,4,7,6,9,8]
const ascending=arrays9.sort((a,b)=>{
    return a-b
})
console.log("ascending order",ascending)