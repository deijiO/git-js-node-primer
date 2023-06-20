var a; //Declare variable named a.
a = 10; //Assign the integer value of 10 to variable a.
b = 11; //Create variable b and assign a value to it. No previous declaration statement.
var c = 12; //Declare variable c and assign it the value of 12 in one statement.
console.log(a); //Print the content of variable a
console.log(b); //Print the content of variable b
console.log(c); //Print the content of variable c

f = 13; //Reassign a new value of type number to f. 
console.log(f); //Prints out 13. 
g = "Another value which is a string"; //Reassign a new value of type string to g. 
console.log(g); //Prints out Another value which is a string. 
h = true; //Reassign a new value of type boolean - i.e. true or false. 
console.log(h); //Prints out true.

var d; 
console.log(d); //This will print out the value undefined. 
e = null; 
console.log(e); //This will print out the value null.

i = 10; //Assign variable i the value of 10 
j = 20; //Assign variable j the value of 20 
k = i + j; //Add value in i and j and put the result in variable k. 
console.log(k); //This should print out 30 
console.log(j - i); //Subtract i value from j value; displays 10 in console. 
console.log(j/i); //Divide j value by i value; displays 2 in console. 
console.log(i*j); //Multiply i value by j value; displays 200 in console. 
console.log(j%i); //Divide j value by i value and return remainder; displays 0 in console. 
console.log(i**2); //i value raised to power 2; displays 100 in console. 
i++; //Increment i value. 
console.log(i); //Displays 11 in console. 
j--; //Decrement j value. 
console.log(j); //Displays 19 in console.

firstName = "Daisy"; 
lastName = "Obasogie"; 
fullName = firstName + " " + lastName; //Concatenate firstName, whitespace and lastName 
console.log(fullName); //This should output the full name Daisy Obasogie.

l = 10; 
l < 11; //Returns true 
console.log(l < 11); //Displays true in console 
var test = l > 20; //Declares a variable named test and gives it the value of false. 
console.log(test); //Displays false in console 
l >= 10; //Returns true 
l <= 20; //Returns true 
l == 10; //Returns true 
l === "10"; //Returns false because l holds an integer value of 10 and not string value "10"

m = 1; 
n = 2; 
console.log(m < 3 && n < 3); //Prints true as both a and b contain values that are less than 3. 
console.log(m > 3 && n < 3); //Prints false as the first condition (a > 3) is not true. 
console.log(m > 3 || n < 3); //Prints true as at least one condition (b < 3) is true. 
console.log(!(m < 3)); //Prints false as condition (NOT a < 3) is false. 
console.log(!(m < 3) || !(n > 3)); //Prints true as one of the conditions (NOT b > 3) is true. Replace m(a) and  n(b)

var age = 21; 
var adult = (age > 20)? "Yes" : "No"; 
console.log(adult); //This should display the string "No"

o = typeof "Daisy Obasogie"; console.log(o);//Returns the value "string" 
p = typeof true; console.log(p);//Returns the value "boolean" 
q = typeof (10.5 + 10.5); console.log(q);//Returns the value "number" 
r = typeof 33; console.log(r);//Returns the value "number"

var minimumVotingAge = 18; 
var age = 17; 
if (age < minimumVotingAge){ 
    console.log("Not eligible to vote"); 
}else{ 
    console.log("Eligible to vote"); 
}

var dayOfTheWeekCount = 1; 
switch (dayOfTheWeekCount){ 
    case 1: 
        console.log("Sunday"); 
        break; 
    case 2: 
        console.log("Monday"); 
        break; 
    case 3: 
        console.log("Tuesday"); 
        break; 
    case 4: 
        console.log("Wednesday"); 
        break; 
    case 5: 
        console.log("Thursday"); 
        break; 
    case 6: 
        console.log("Friday"); 
        break; 
    case 7: 
        console.log("Saturday"); 
        break; 
    default: 
        console.log("Sorry, day of the week numbered " + dayOfTheWeekCount + " does not exist") 
} //The switch statement prints out Sunday

var ageRange = "below 13"; 
switch (ageRange){ 
    case "below 1": 
        console.log("Infant"); 
        break; 
    case "below 13": 
        console.log("Pre-teen"); 
        break; 
    case "below 20": 
        console.log("Teenager"); 
        break; 
    default: 
        console.log("Adult") 
}//This switch statement should print out Pre-teen.

for (var s = 1; s < 11; s++){ 
    console.log(s); 
}

for (var t = 1; t < 11; t++){ 
    if(t == 7) continue; 
    console.log(t); 
}

var u = 0; 
while(u != 5){ 
    u = Math.floor((Math.random() * 10)); 
    console.log(u) 
}

var v = 0; 
do{ 
    v+= 1; 
    console.log(v) 
}while(v < 10)

var readlineSync = require('readline-sync'); //make the module just installed available for use in our program 
var answer; //declare variable named answer; 
do{ 
    //use question() function to read input and assign the value to answer 
    answer = readlineSync.question('What should I do? [Type "exit" for me to quit]: '); 
    console.log('You asked me to '+ answer) 
}while(answer != 'exit')

//By direct declaration 
function addTwoNumbersA(number1, number2){ 
    return number1 + number2; //Add the two numbers passed when function is called 
} 
//By expression 
var addTwoNumbersB = function(number1, number2){ 
    return number1 + number2; 
}
console.log(addTwoNumbersA(20,30)); //Call addTwoNumbersA and print return value (50). 
console.log(addTwoNumbersB(20,30)); //Call addTwoNumbersB and print return value (50).

console.log(addTwoNumbersA(20,30)); //Call addTwoNumbersA defined below. Correct! 
function addTwoNumbersA(number1, number2){ 
 return number1 + number2; //Add the two numbers passed when function is called 
} 
console.log(addTwoNumbersB(20,30)); //Call addTwoNumbersB defined below. Wrong! 
var addTwoNumbersB = function(number1, number2){ 
 return number1 + number2; //Add the two numbers passed when function is called 
}

//Define a function that receives a number to be squared 
function square(number){ 
    number = number**2; 
    return number; 
} 
var number = 20; //Declare variable that holds number to be squared 
var numberSquared = square(number); //Pass number (by value) to the square() function 
console.log(numberSquared); //The function returns 400 
console.log(number); //The value of number variable outside the function remains 20

function multiplier(){ 
    var product = 1; 
    for (var x=0; x < arguments.length; x++){ 
        product = product * arguments[x]; 
    } return product; 
} 
console.log(multiplier(10,30));//Prints 300 to the console 
console.log(multiplier(10,30,10));//Prints 3000 to the console

var accumulatedTotal = 0; //Declare and initialize a global variable. 
//Declare function named sum that expects two parameters named number1 and number2. 
function sum(number1, number2){ 
    //The variables named total, number1 and number2 below are function scope variables. 
    //They are not visible from outside the function. 
    var total = number1 + number2; 
    //Update the global variable named accumulatedTotal. 
    //Even though not declared within the function, it is visible. 
    accumulatedTotal = accumulatedTotal + total; 
    return total; 
} 
console.log(sum(2,3)); //Call sum() function and print to console the total returned. 
console.log(sum(10,20)); //Call sum() function and print to console the total returned. 
console.log(accumulatedTotal); //Show the latest value held in the global variable. This should return 35

//Declare a variable named vehicles and assign an array literal that contains three elements 
var vehicles = ["car","lorry","trailer"]; 
console.log(vehicles); //Prints out the array literal [ 'car', 'lorry', 'trailer' ] 
//Declare a variable named basket and assign an empty array literal. 
var basket = [ ]; 
console.log(basket); //Prints out the array literal [ ]

//Declare a variable named myExpressions and assign an array literal which contains expressions. 
var myExpressions = ["car", 2+3, 10, true]; //The second element includes a plus operation 
console.log(myExpressions); //Prints out [ 'car', 5, 10, true]
console.log(myExpressions[0]); //Prints out 'car' 
console.log(myExpressions[1]); //Prints out 5 
console.log(myExpressions[2]); //Prints out 10 
console.log(myExpressions[3]); //Prints out true 
myExpressions[3] = false; //Change the expression at position 3. 
console.log(myExpressions[3]); //Prints out false
//
var myExpressions = ["car", , 10, true]; //The second element (i.e. index position 1), is undefined 
console.log(myExpressions[1]); //Prints out undefined

var myObject = { 
    name: { 
        firstName : "Daisy", 
        surname: "Obasogie" 
    }, 
    expertise: "Software design and development", 
    languages: ["Python","JavaScript","Java","C++"],
    isRetired: false, 
    favouriteCombination: 3 + 3 
}
console.log(myObject.name); //Prints out { firstName: 'Daisy', surname: 'Obasogie' }. 
console.log(myObject['name']); //Also prints out { firstName: 'Daisy', surname: 'Obasogie' }. 
console.log(myObject.expertise); //Prints out Software design and development 
console.log(myObject['expertise']); //Also prints out Software design and development 
console.log(myObject.languages); //Prints out [ 'Python', 'JavaScript', 'Java', 'C++' ] 
console.log(myObject['languages']); //Also prints out [ 'Python', 'JavaScript', 'Java', 'C++' ] 
console.log(myObject.isRetired); //Prints out false 
console.log(myObject['isRetired']); //Also prints out false 
console.log(myObject.favouriteCombination); //Prints out 6 
console.log(myObject['favouriteCombination']); //Also prints out 6

//Accessing nested objects 
console.log(myObject.name.firstName); //Prints out Daisy. 
console.log(myObject['name']['firstName']); //Also prints out Daisy.
myObject.favouriteCombination = 9 + 9; 
console.log(myObject.favouriteCombination); //Prints out 18 
myObject.newProperty = "another property added"; //Add a new property named newProperty 
console.log(myObject); //Prints out the string, another property added

var phones = { 
    make: 'Samsung', 
    model: 'S7', 
    cost: 500 
} 
console.log('make' in phones); //Prints out true 
delete phones.make; //Delete property phones.make 
console.log('make' in phones); //Prints out false

//Person = "Daisy", "Onteria", 3.5, 87;
//var person1 = new Person("Daisy", "Obasogie",1.72, 80); 
//var person2 = new Person("ALden", "Ottison", 1.7, 70) 
//console.log (person1.firstName); //Prints out Pius 
//console.log (person1.getFullName()); //Prints out Daisy Obasogie 
//console.log (person2.firstName); //Prints out Mary 
//console.log (person2.getFullName()); //Prints out Alden Ottison

var firstName = 'Daisy'; 
var lastname = 'Obasogie'; 
var fullName = firstName.concat(' ' , lastname); //Concatenate firstName, space and last name 
console.log(fullName); //This should output the string 'Daisy Obasogie' 
var fullName = firstName + ' ' + lastname; //This is equivalent to the concat statement above. 
console.log(fullName); //This should also output the string 'Daisy Obasogie'

