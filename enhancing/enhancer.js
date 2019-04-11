module.exports = {
  succeed,
  fail,
  repair,
  get
};
//When enhancement succeeds
// The item's enhancement increases by 1.
// If the item enhancement level is 20, the enhancement level is not changed.
// The durability of the item is not changed.
function succeed(item) {
  
  if(item.enhancement <= 20){
    item.enhancement +=1;
    
  }
  return { ...item };
}

//If the item's enhancement is less than 15, the durability of the item is
//decreased by 5.
//If the item's enhancement is 15 or more, the durability of the item is
// decreased by 10.
//If the item's enhancement level is greater than 16, the enhancement level
//decreases by 1 (17 goes down to 16, 18 goes down to 17).
function fail(item) {
  if (item.enhancement < 15) {
    item.durability -= 5;
  } else if (item.enhancement >= 15 && item.enhancement <= 16) {
    item.durability -= 10;
  } else if (item.enhancement <= 20) {
    item.enhancement -= 1;
  }
  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
   if(item.enhancement>0){
      item.name="[+" + item.enhancement +"]"+item.name
      return { ...item };
   }
   return item;
}
// After a set of interviews with the potential users of the solution, we gathered the following information
//about the functionality of the game's enhancing system.
//Your job is to add tests to ./enhancing/enhancer.spec.js and code to ./enhancing/enhancer.js to implement
//the requirements; ./enhancing/enhancer.js exports an object that has the following methods:

// a repair(item) method that accepts an item object and returns a new item with the durability restored to 100.
//This method is the simplest of the three and would be a good starting point on this project.
// a success(item) method that accepts an item object and returns a new item object
// modified according to the rules defined by the client for enhancement success.
// a fail(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement failure.
// a get() method for use when working on the stretch problem.
// The following sections list information provided by the client about items and the game's enhancing system.

// Items.
// Items have name, durability and enhancement.
// The item's enhancement it's a number from 0 to 20.
// The item's durability it's a number from 0 to 100.
// 
// When enhancement fails
// If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
// Stretch Problem
//"[+7] Iron Sword".
