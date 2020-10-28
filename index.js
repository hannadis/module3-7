


const todoList = ['Milk', 'Cow']; 

todoList = ['Milk'];

// with const its impossible to reassign the data in it 

let counter = 10; 

counter = 5; 

//always use the const - If I want to reassign a value of a variable then I can use the let
//const is used a lot more then let 

const list = [1,2,3,4,5]; 
for(let i = 0; i < list.length; i){
  console.log(i); //this is going to loop through everything 
}

//the "let" wont be available anywhere outside of this - just want to use it to loop over something

//if I would use console.log outside the code block it would give me an error
//let and const is a block scope so wherever these {} are its only going to be available inside of that 

// if var would be instead of the let, then I could console log it outside of the block 
//and it would bleed outside it, which would mean a lot of trouble later on  

//string concatenation with backticks 
const name = 'Hanna';
const age = 30; 

console.log(`hello my name is ${name} and my age is ${age}`);

// so everything is done in the console.log 

//this is the same way as using a variable like 
var nafn = "Hanna";
console.log("hello my name is " + nafn); 



function getFood(title, prize) {
  return {
    title,
    prize //in here I dont have to write title:title or prize:prize can just keep it simple 
  };
}

var food = getFood("chocolate", "250kr");
console.log(food); 



//object deconstruction 

const listi = {
  name1: 'shopping list', //object 
  items: ['milk', 'egg', 'apple', 'cinnamon'] // array 
};
//    want to get the name and itemst = from the list 
const { name1, items } = listi; 
// here I add the things I want to extract  
console.log(name1, items);  
// with this I can use name1 and items whereever I want in the code 



//arrow functions 
  
//if I had two things in here I would have to add them into () also if I have nothing there, I would also need the ()
// so if I have only one thing in where the location is I would not need the ()
const sayLocation = location => { // this is how a arrow function is made
  // I can also get rid of the {} if im only returning one thing  
  console.log(`my location is ${location}`);
}

sayLocation(Iceland); 


// so it can look like this 
const sayLocation1 = location => console.log(`my location is ${location1}`);

sayLocation1("Iceland"); 

//but this will only work if I am returning one single thing
// and I cant have multiple lines of code




//this 

const user = {
  name2: 'Hanna',
  age1: 30, 
  sayName: function(){
    console.log(`my name is ${this.name}`);
    const fullName = () => {
      console.log(`My name is ${this.name2} and my age is ${this.age}`);
    }
    fullName();
  }
};

user.sayName();



//default parameters 

const add = (c = 1, d = 1) => { // default parameters added into the ()
  console.log(c + d); 

};

add(2); // if nothing is added in here it will error out


//array functions 

const shoppingList = ['banana', 'milk', 'egg', 'yogurt', 'choco'];
// for each

shoppingList.forEach(product =>{ // its possible to add things into the () if I want to 
  console.log(product + "nice") // with this its going to loop over all of the properties above
// because I added "nice" it will add nice behind each of the products in the shopping list 

});



//constructor function 

class shoppingList1{ //can give the class the name I want 
  constructor(items, nr,){ //constructor function 
    this.items = items;
    this.nr = nr; // number of items I have 

  }
  //if I want to add a function I have to go outside the constructor function
  sayList(){
    console.log(this.items);
    }
}

//then create object from this
const myList = new shoppingList(["milk, choco, drink"], 3);

myList.sayList();

// if I want to describe one item better 
class Product extends shoppingList{
  constructor(items, nr, amount, cost){ // in here I should add for example what I had in my constructor before 
    //if I want to combine this together I can use the super keyword 
    super(items, nr);
    this.amount = amount; 
    this.cost = cost; 

  }
}
                          //number 3, amount of this specific product, the cost of it 
const product = new product(['milk', 'choco', 'drink'], 3, 2, 20);

console.log(product);
//can also say 
product.sayList();


//possible to inheret everything by using the keyword extends shopping list
