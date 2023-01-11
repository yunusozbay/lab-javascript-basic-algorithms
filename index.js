// Iteration 1: Names and Input
const hacker1 = "Yunus"
console.log(`The driver's name is ${hacker1}`)
const hacker2 = "Krystina"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  }
  else if (hacker2.length > hacker1.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
  }
  else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
  }
  

// Iteration 3: Loops
const upc = hacker1.toUpperCase();
let output = "";
for (let i=0; i < upc.length; i++) {
  if (i < upc.length) {
    output += `${upc[i]} `;
  }
  else {
    output += `${upc[i]}`;
  }
}
console.log(output)


let backwards = ""
for (let j = hacker2.length-1; j >= 0; j--) {
  backwards += `${hacker2[j]}`
}
console.log(backwards)



if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely.")
}
else if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.")
}
else {
  console.log("What?! You both have the same name?")
}
// Bonus 1
const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at dictum enim. Sed aliquam rhoncus ipsum vitae feugiat. Nam consequat eget augue vitae efficitur. Nunc porta lectus sed dui sollicitudin molestie. Ut enim dui, laoreet eu tellus vel, finibus facilisis massa. Mauris ac accumsan est. Etiam porttitor vehicula lectus eu ultricies. Aliquam quis nulla blandit, elementum odio ut, luctus ante. Phasellus mollis justo eget dolor semper auctor. In sed dui sodales, laoreet purus et, semper lorem. Sed ac interdum odio, eget volutpat elit. Nunc sodales volutpat risus, non iaculis arcu mollis in.Praesent sit amet vulputate purus. Aliquam viverra sit amet ligula maximus tempus. Vestibulum varius dapibus felis, in imperdiet dui vestibulum non. Pellentesque ac velit fermentum, scelerisque quam et, elementum tellus. Curabitur volutpat scelerisque odio, non sollicitudin urna scelerisque ac. Phasellus vitae mattis lectus. Pellentesque finibus mattis lectus, in iaculis orci venenatis at.Nam sit amet risus neque. Vivamus arcu leo, bibendum interdum tempus quis, mattis eu mauris. Phasellus at massa scelerisque, aliquam mauris quis, placerat purus. Maecenas congue odio in sapien pretium, sit amet condimentum urna sagittis. Pellentesque id arcu faucibus, cursus nibh ac, finibus leo. Integer eu sollicitudin odio. Aliquam gravida vel lectus sed vehicula. Vivamus et tempus risus, sit amet tincidunt neque. Nulla nisl velit, finibus et magna elementum, tempus bibendum nisi. Sed sit amet dolor odio. Duis nisi mi, dignissim a volutpat vitae, tincidunt eu tortor. Integer neque neque, tristique vitae mattis at, elementum vitae purus. Aenean quis ultricies nisi, nec vehicula ipsum. Integer interdum tortor sed aliquet facilisis."

const someArr = longText.split(" ");
console.log(someArr.length); 

let counter= 0;

for (l=0; l < someArr.length; l++) {
  if (longText[l] + longText[l+1] === "et") {
    counter++;
  }
}
console.log(counter)

// Bonus 2 
const phraseToCheck = ""

for (h=0; h < phraseToCheck.length/2; h++) {
  if(phraseToCheck[h] !== phraseToCheck[phraseToCheck.length - 1 - h]) {
    console.log("It is not a palindrome")
    break;
  }
  else{
    console.log("Bingo")
    break;
  }
}

