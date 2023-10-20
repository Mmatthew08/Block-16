//Array Methods:

const array1 = ['a', 'b', 'c'];
array1.forEach((element) => console.log(element));


const array2= [ 'Rex' ,'Sally','Nimit']
const foundItem= array2.find((name)=>{
    return name==='Rex'})
    console.log(foundItem) || 'Rex'

    const array3=[1,4,9,16]
const mappedArray= array3.map(x=>x*2);
console.log(mappedArray);

const words=['dog','exuberant','present',];
const result= words.filter(word=>word.length>6);
console.log(result);

const animals=['ant','bison','camel','duck','elephant'];
console.log(animals.slice(2));
console.log(animals.slice(1,3));

// Array.Reduce

const array4=[1,2,3,4];
const initialValue=0;
const sumWihtInitial=array4.reduce((accumulator,currentValue)=>accumulator+currentValue,initialValue);
console.log(sumWihtInitial);

