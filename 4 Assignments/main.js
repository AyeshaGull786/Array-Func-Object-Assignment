"use strict";
//......<<<.........Object, Array and Function Assignment...................>>>...//
//<<<<<<<<<<<<<<<<<<.....Assignment 1: Building your friend list.....>>>>>>>>>>>>>>>>>>>>>>>>>//
console.log("\nThis is Assignment 1: Building Your Friend List");
let people = {
    friends: []
};
let friend1 = {
    firstName: "Alisha",
    lastname: "Fareed",
    id: 111
};
let friend2 = {
    firstName: "Anum",
    lastname: "Zia",
    id: 222
};
let friend3 = {
    firstName: "Misbah",
    lastname: "Raheem",
    id: 333
};
people.friends.push(friend1, friend2, friend3); //adding friend object to the friends array within the people object
console.log(people);
