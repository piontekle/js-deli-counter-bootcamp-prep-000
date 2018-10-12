function takeANumber(currentLine, name) {
  
}

function nowServing(currentLine) {
  if (currentLine.length === 0) {
    return "There is nobody waiting to be served!"
  } 
  var name = currentLine.shift()
  return "Currently serving " + name + "."
}