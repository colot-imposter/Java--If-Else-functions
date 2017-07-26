// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(x, y) {
    console.log(x, y);
    if (x > y) {
        return 'x';
    }
    if (x < y) {
        return 'y';
    }
    if (x === y) {
        return "h";
    }

}

console.log(max(9, 9));


// Your answer here



// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(x, y, z) {
    if (x > y) {
        return x;
    }
    if (x > z) {
        return x;
    }
    if (y > x) {
        return y;
    }
    if (y > z) {
        return y;
    }
    if (z > x) {
        return z;
    }
    if (z > y) {
        return z;
    }
    if (x == y && z == y) {
        return "#samsies"
    }
}
console.log(maxOfThree(26, 26, 30));


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char) {
  if (char === 'a')
  {return true;
  if (char === 'e')
  return true;
  if (char === 'i')
  return true;
  if (char === 'o')
  return true;
  if (char === 'u')
  return true;
} else
  return false
}
console.log(isVowel('a')===true)


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(x,y){
  return(x+y)
}
console.log(sum(34,54));


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg (z,x,y){
  return ((z+x+y)/3);
}
console.log(5,25,333);


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength (a){
  return a.length
}
console.log(getLength('boobies'));



// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan (x,y){
  if (y>x){
  return true}
  else
  {return false}
}
console.log(3,4);


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet (a){
return a+',move outcha mommas backyear, and get yo shit togetha. youre buildin rocket-ships. you know how much money is wasted on space travel? we could solve world hunger but youre a child and dont get it. getchyashit togetha, ya wonk ass.'
}
console.log(greet("Jimmy Neutron"));


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
function madlib(a,b,c,d){
  return a + "is a" + b +"way of saying" + c +", which is not true. Mostly because" + d +"Jimmy Neutron is a selfish son of a gun. If I was in his class I would bully him into actually helping the world. Any friend of Jimmy Neutron is an enemy of mine."
}
console.log(madlib('Beauty', 'beautiful', 'Bono from U2', 'wonk-ass'));
