
//find duplicate
const arr=[1,2,3,4,6,2,1,4];

const unique=new Set();

const duplicate=[];

arr.forEach(item=>{
    if (unique.has(item)){
        duplicate.push(item)
    }else{
        unique.add(item)
    }
})

console.log(duplicate);
console.log(unique);


//reverse a string
let str="world";

function res(str){
    let spi=str.split("");

    const rev=spi.reverse();

    const jo=rev.join("");

    console.log(jo)

}

res(str);


const fruits=new Map([
    ["apple",200],
    ["orange",400]
])
//get method
console.log(fruits.get("apple"));

//set method

const Animals =new Map();

Animals.set("Lion","king");
Animals.set("Tiger","speed");
Animals.set("Elephant","power");

console.log(Animals);
console.log(Animals.get("Tiger"));

// map size

console.log(Animals.size);

//delete

Animals.delete("Lion");
console.log(Animals);

//clear the map element

fruits.clear();
console.log(fruits);

//true if keys values is there
console.log(Animals.has("Tiger"));
console.log(Animals.has("Lion"));


//foreach used in map method
let txt="";
Animals.forEach(function(value,key){
    txt += key + ' = ' + value  
})
console.log(txt);

//json
let person={"Employee":[
    {"firstName":"Gokul","lastname":"Krish"},
    {"firstName":"Arul","lastname":"kumar"},
    {"firstName":"John","lastname":"Doe"}
]}

let look= person;  

console.log(`${look.Employee[1].firstName} ${look.Employee[1].lastname} `);




// swap two numbers

let K ="World";
let J ="Hello";
let temp;

temp = K;
K = J;
J = temp;

console.log(`${K} and ${J}`);


