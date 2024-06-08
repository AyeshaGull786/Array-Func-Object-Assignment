
//<<<<<<<<<<<<<<<<<<.....Assignment 1: Building your friend list.....>>>>>>>>>>>>>>>>>>>>>>>>>//
console.log("\nThis is Assignment 1: Building Your Friend List");
let people = {                                                 //creating an object people containing an empty array friends
    friends : [] as friend[]
}
type friend = {                                                // creating an object type friends and define it's properties
    firstName : string,
    lastname : string,
    id? : number
};
let friend1 : friend = {                                      //object 1 with Friend type object properties
    firstName : "Alisha", 
    lastname : "Fareed",
    id : 111
};
let friend2 : friend = {                                     //object 2 with Friend type object properties
    firstName : "Anum",
    lastname : "Zia",
    id : 222
};
let friend3 : friend = {                                    //object 3  with Friend type object properties
    firstName : "Misbah",
    lastname : "Raheem",
    id : 333
};
people.friends.push(friend1,friend2,friend3)                //adding friend object to the friends array within the people object
console.log(people);
//<<<<<<<<<<<<<<<<<<<Assignment 2: "Manuplating an Array: Rearranging Words">>>>>>>>>>>>>>>>>>>>>.//
console.log("\nThis is Assignment 2: Manipulating an Array: Rearranging Words \n");
const scrambledArray = ["student","of",true,123,"am","a","GIAIC","I"];         //Creating scrambled array 
scrambledArray.splice(2,4);           // from index 2 delete 4 elements (true to a)
scrambledArray.pop();                    //remove I
scrambledArray.unshift("I");               // add "I" on index 0
scrambledArray.splice(1,0,"am","a")       //add "am" and "a" after I
let join = scrambledArray.join(" ");         //converts array into a single string 
console.log(`"${join}"`);                            // print desired output

//<<<<<<<<<<<<<<<<Assignment 3: Company Product Catalog>>>>>>>>>>>>>>>>>>>>>>>>//
console.log("\nThis is Assignment 3: Company Product Catalog\n");
const inventory:{name: string; model:string; cost: number; quantity: number;} []=[];  //define an array
let bluetoothSpeakers = {
    name: "JBL Go 3",
    model: "Go 3",
    cost: 2000,
    quantity: 60,
};
let smartWatch = {
    name: "Apple Watch ",
    model: "SE 2",
    cost: 5000,
    quantity: 30,
};
let WirelessHeadphones = {
    name: "Wireless bluetooth headphones",
    model: "p47",
    cost: 5000,
    quantity: 10,
};
inventory.push(bluetoothSpeakers,smartWatch,WirelessHeadphones);
console.log("Inventory Products:", inventory);
console.log("Third product's quantity property:",inventory[2].quantity);   //access quantity of third product

//.................add more products............................//
let videoGameConsoles = {
    name:"Game cube",
    model:"ps 2",
    cost: 7000,
    quantity: 20,
};
inventory.push(videoGameConsoles);
console.log("\n Adding more products to the inventory:",inventory[3]);
console.log("\n Current Inventory",inventory)
//............................decrease the quantityof 2nd product........................>>>>
inventory[1].quantity -= 20;             //decreasing quantity
console.log("\n Decrease the quantity of 2nd product:" ,inventory[1]);

//......................<<removing last element>>>...............>>>>
inventory.pop();
console.log(inventory);

//<<<<<<<<<<<<<<<<<Assignment 4: Student List Organizer>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
 //Student Data Template
 interface Student {
    name : string,
    seniorStatus : boolean,
    assignmentCompleted : boolean
  };
  //Student List
  const students : Student[] = [
    {name :"Alisha",seniorStatus :false,assignmentCompleted :true},
    {name :"Alina",seniorStatus :true,assignmentCompleted :false},
    {name :"Ayesha",seniorStatus :false,assignmentCompleted :true},
    {name :"Maria",seniorStatus :false,assignmentCompleted :false},
    {name :"Misbah",seniorStatus :true,assignmentCompleted :true},
    {name :"Anum",seniorStatus :false,assignmentCompleted :false},
  ]
  console.log("\n Student List:",students);
  
  //Find Senior students with Assignment
  console.log("\n List of senior students who completed their assignments:");
  students.forEach(function(findSeniorStudent){
  if(findSeniorStudent.seniorStatus === true && findSeniorStudent.assignmentCompleted === true)
    {
        console.log(`${findSeniorStudent.name} is a senior student and she completed all her assignments.`);
    }
  })
  //Class List Update:
  console.log("\n Update Class List:");
  students.forEach(function(removeStudent){
    if(removeStudent.seniorStatus === true && removeStudent.assignmentCompleted === true)
        {
            console.log(removeStudent)
        }
    })
