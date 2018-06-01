function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var lowercase = string.whisper()
  if(string === lowercase) return "I can't hear you!"
  var uppercase = string.shout()
  if(string === uppercase) return "YES INDEED!"
  var love = "I love you, Grandma."
  if(string === love) return "I love you, too."
}
