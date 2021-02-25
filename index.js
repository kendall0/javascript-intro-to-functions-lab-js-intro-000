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
  var uppercase = "YES INDEED!"
  var mixedCase = "I love you, too."
  if (lowercase.toLowerCase("hello!") === lowercase) {
    return lowercase;
  }
  else if (uppercase.toUpperCase("HELLO!") === uppercase) {
    return uppercase;
  }
  else if (mixedCase.toLowerCase("I love you, Grandma.") === mixedCase && mixedCase.toUpperCase("I love you, Grandma.") === mixedCase) {
      return mixedCase;
  }
}
