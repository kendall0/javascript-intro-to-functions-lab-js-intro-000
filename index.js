function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(hello) {
  console.log(hello.toUpperCase());
}

function logWhisper(HELLO) {
  console.log(HELLO.toLowerCase());
}

var lowercase = 'hello!'
var uppercase = "HELLO!"
var mixedCase = "I love you, Grandma."
function sayHiToGrandma(string){
if (string.toLowerCase() === lowercase){
return “I can’t hear you!”;
} if (string.toUpperCase() === uppercase){
return “YES INDEED!”;
} if (string === mixedCase){
return “I love you, too.”;
}
}
