var katzDeliLine = [];  
var num = 0

function takeANumber(katzDeliLine) {
  num += 1
  katzDeliLine.push(num);
  return `Welcome. You are number ${num}.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var firstInLine = katzDeliLine.shift();
      return `Currently serving ${firstInLine}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function  currentLine(katzDeliLine) {
  var numarray = [];
  for (var i = 0; i < katzDeliLine.length; i++) {
    numarray.push(`${i+1}. ${katzDeliLine[i]}`);
  }
  
  if (katzDeliLine.length > 0) {
    var str = numarray.join(`, `);
    return `The line is currently: ${str}`;
  } else {
      return "The line is currently empty.";
  }
}