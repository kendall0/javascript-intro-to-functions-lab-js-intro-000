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
  var lowercase = "hello!"
  var uppercase = "HELLO!"
  var mixedCase = "I love you, Grandma."
  if (lowercase.toLowerCase(string) === lowercase) {
    return "I can't hear you!";
  }
  else if (uppercase.toUpperCase(uppercase) === uppercase) {
    return "YES INDEED!";
  }
  else if (mixedCase.toLowerCase(string) === mixedCase && mixedCase.toUpperCase(string) === mixedCase) {
      return "I love you, too."
  }
}
