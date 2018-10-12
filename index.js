function takeANumber(currentLine, name) {
  var i = 0;
  currentLine = [];
  for (i = 0; (i < currentLine.length); i++) {
      currentLine.push("Welcome, " + name + ". You are number " + i+1 + " in line.");
      return currentLine[i]
  }
}

function nowServing(currentLine) {
  if (currentLine.length === 0) {
    return "There is nobody waiting to be served!"
  } 
  var name = currentLine.shift()
  return "Currently serving " + name + "."
}