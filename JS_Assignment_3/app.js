// Task 01

let fruits = ["Apple", "Banana", "Pineapple", "Peach", "Guvaua"]
console.log('fruits: ', fruits[1]);

// Task 02

fruits[3] = "mango"
console.log('fruit: ', fruits);

//   Task 03

let color = [];
color.push("Red", "yellow", "Green")
console.log('colors: ', color);

// Task 04 
color.pop();
console.log('colors: ', color);

// Task 05 add two color with it

color.unshift("Purple", "Blue")
console.log('colors: ', color);

// Task 06  remove 1st value from colors array
color.shift()
console.log('colors: ', color);

// Task 07
console.log('fruits: ', fruits.length);

// Task 8:
let arr1 = [10, 20, 30, 40, 50];
let lastTwo = arr1.slice(-2);
console.log("Task 8 - Last two elements:", lastTwo);

// Task 9: 
let arr2 = [1, 2, 3, 4, 5, 6];
let middleIndex = arr2.length / 2;
let middleElements = arr2.slice(middleIndex - 1, middleIndex + 1);
console.log("Task 9 - Middle elements:", middleElements);

// Task 10: 
let arr3 = [100, 200, 300, 400, 500, 600];
let replaceIndex = arr3.length / 2 - 1;
arr3.splice(replaceIndex, 2, "A", "B"); 
console.log("Task 10 - Updated array after splice():", arr3);


// Task 11:
let cities = ['New York', 'London', 'Tokyo'];
cities.push('Paris');
console.log("Task 11 - Updated cities array:", cities);

// Task 12:
let removedCity = cities.pop();
console.log("Task 12 - Updated cities array after pop():", cities);
console.log("Task 12 - Removed city:", removedCity);

// Task 13: 
let colors = ['red', 'blue'];
colors.unshift('green', 'yellow');
console.log("Task 13 - Updated colors array after unshift():", colors);

// Task 14: 
let removedColor = colors.shift();
console.log("Task 14 - Updated colors array after shift():", colors);
console.log("Task 14 - Removed color:", removedColor);

// Task 15:
let names = ['Alice', 'Bob'];
names.push('Charlie', 'David');
console.log("Task 15 - Updated names array after push():", names);

// Task 16:
let elements = ['A', 'B', 'C', 'D', 'E'];
elements.pop();
console.log("Task 16 - Updated elements array after pop():", elements);
console.log("Task 16 - Length of array:", elements.length);

// Task 17: 
let numbers = [1, 2, 3];
numbers.shift();
console.log("Task 17 - Updated numbers array after shift():", numbers);

// Task 18:
numbers.unshift(0);
console.log("Task 18 - Updated numbers array after unshift():", numbers);

// Task 19:
let numArray = [10, 20, 30];
numArray.pop();
console.log("Task 19 - Updated number array after pop():", numArray);

// Task 20:
let arrayElements = ['apple', 'banana', 'cherry'];
arrayElements.shift();
console.log("Task 20 - Updated array after shift():", arrayElements);

// Task 21: Extract the first three elements using slice()
let numbers21 = [10, 20, 30, 40, 50];
let firstThree21 = numbers21.slice(0, 3);
console.log("Task 21 - First three elements:", firstThree21);

// Task 22: Extract elements from index 2 to 4 using slice()
let numbers22 = [5, 10, 15, 20, 25, 30];
let extracted22 = numbers22.slice(2, 5);
console.log("Task 22 - Extracted elements:", extracted22);

// Task 23: Remove two elements from index 1 using splice()
let items23 = [100, 200, 300, 400, 500];
items23.splice(1, 2);
console.log("Task 23 - Updated array:", items23);

// Task 24
let fruits24 = ["Apple", "Banana", "Grapes", "Mango"];
fruits24.splice(2, 0, "Lemon", "Orange");
console.log("Task 24 - Updated fruits array:", fruits24);

// Task 25  
let colors25 = ["Red", "Blue", "Green", "Yellow", "Purple"];
colors25.splice(-2, 2);
console.log("Task 25 - Updated colors array:", colors25);

// Task 26 
let values26 = [10, 20, 30];
values26.splice(0, 0, 1, 2, 3);
console.log("Task 26 - Updated values array:", values26);

// Task 27
let bigNumbers27 = [5, 10, 15, 20, 25, 30, 35];
let lastFour27 = bigNumbers27.slice(-4);
console.log("Task 27 - Last four elements:", lastFour27);

// Task 28
let animals28 = ["Dog", "Cat", "Elephant", "Lion"];
let slicedAnimals28 = animals28.slice(1, 3);
console.log("Task 28 - Original array:", animals28);
console.log("Task 28 - Sliced array:", slicedAnimals28);

// Task 29: Remove one element from the middle using splice()
let numbers29 = [2, 4, 6, 8, 10];
numbers29.splice(2, 1);
console.log("Task 29 - Updated array:", numbers29);

// Task 30: Replace two elements using splice()
let letters30 = ["A", "B", "C", "D", "E"];
letters30.splice(1, 2, "X", "Y");
console.log("Task 30 - Updated array:", letters30);

// Task 31
let originalArray31 = [1, 2, 3];
let copiedArray31 = originalArray31;
originalArray31.push(4);
console.log("Task 31 - Original array:", originalArray31);
console.log("Task 31 - Copied array:", copiedArray31);

// Task 32:
function addItem32(arr, item) {
    arr.push(item);
}
let numArr32 = [10, 20, 30];
addItem32(numArr32, 40);
console.log("Task 32 - Updated array:", numArr32);

// Task 33
function changeFirst33(arr) {
    arr[0] = 99;
}
let modArr33 = [1, 2, 3];
changeFirst33(modArr33);
console.log("Task 33 - Updated array:", modArr33);

// Task 34: 
let firstArray34 = [10, 20, 30];
let secondArray34 = firstArray34;
secondArray34[1] = 50;
console.log("Task 34 - firstArray:", firstArray34);
console.log("Task 34 - secondArray:", secondArray34);

// Task 35
let refArray35 = [5, 10, 15];
let anotherRef35 = refArray35;
anotherRef35[1] = 100;
console.log("Task 35 - Are they equal?", refArray35 === anotherRef35);

// Task 36: 
function removeLast36(arr) {
    arr.pop();
}
let sampleArr36 = [1, 2, 3, 4];
removeLast36(sampleArr36);
console.log("Task 36 - Updated array:", sampleArr36);

// Task 37: 
let arrayA37 = ["X", "Y", "Z"];
let arrayB37 = arrayA37;
arrayB37.push("W");
console.log("Task 37 - arrayA:", arrayA37);
console.log("Task 37 - arrayB:", arrayB37);

// Task 38
function popItem38(arr) {
    arr.pop();
}
let arrayNumbers38 = [100, 200, 300];
popItem38(arrayNumbers38);
console.log("Task 38 - Updated array:", arrayNumbers38);

// Task 39: 
function shortenArray39(arr, newLength) {
    arr.length = newLength;
}
let bigArray39 = [1, 2, 3, 4, 5, 6];
shortenArray39(bigArray39, 3);
console.log("Task 39 - Shortened array:", bigArray39);

// Task 40: 
let identicalArray40a = [1, 2, 3];
let identicalArray40b = [1, 2, 3];
console.log("Task 40 - Are they strictly equal?", identicalArray40a === identicalArray40b);
