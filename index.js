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
  var lowercase = "I can't hear you!"
  var uppercase = "HELLO!"
  var mixedCase = "I love you, Grandma."
  if (lowercase.toLowerCase("hello!") === lowercase) {
    return lowercase;
  }
  else if (uppercase.toUpperCase("HELLO!") === uppercase) {
    return uppercase;
  }
  else if (mixedCase.toLowerCase(string) === mixedCase && mixedCase.toUpperCase(string) === mixedCase) {
      return "I love you, too."
  }
}
