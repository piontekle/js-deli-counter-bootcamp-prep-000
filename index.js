function takeANumber(currentLine, name) {
  position = currentLine.length + 1;
  return "Welcome, " + name + ". You are number " + position + " in line.";
}

function nowServing(currentLine) {
  if (currentLine.length === 0) {
    return "There is nobody waiting to be served!"
  } 
  var name = currentLine.shift()
  return "Currently serving " + name + "."
}