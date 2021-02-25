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

function sayHiToGrandma(string) {
  var uppercase = "HELLO!"
  var lowercase = 'hello!'
  var mixedCase = "I love you, Grandma."
  if (uppercase.toUpperCase() === uppercase) {
      return "YES INDEED!";
  } else if (lowercase.toLowerCase() === lowercase) {
      return "I can't hear you!";
  } else if (mixedCase.toLowerCase() === mixedCase && mixedCase.toUpperCase() === mixedCase) {
      return "I love you, too."
  }
}
