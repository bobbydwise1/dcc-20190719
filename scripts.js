/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.
*/

//Assume that numbered "pairs" can only be 1 through 26.

/*The problem consists of two parts that are related:
  a.  dividing up the number string into all possible singles and pairs.  Determine the pattern, using example numbers:
    1.  f('1') = {[1]}
    2.  f('12') = {[1], [2], [12]}
    3.  f('123') = {[1], [2], [3], [12], [23], [123]}
    4.  f('1234') = [1], [2], [3], [4], [12], [23], [34], [123], [234], [1234]}
  Note, only pairs of numbers are valid.  No single letter value has a value more than 26.  The easiest way to do this is to split the number into all single digits, then in a loop piece together the index number and the next one.  If it is legal, run a subloop to capture all other possibilties.

  b.  Count the number of ways it is decoded.  We note the problem is complicated because not all possible pairs are letters, ie only pairs between 1-26 are valid.  Discard the non-legal pairs.  The leftover count is the valid number of ways it can be counted.
*/

const convertNumberToArray = (number) => {
  let temp = number.toString().split("");
  let output = [];
  for (i = 0; i < temp.length; i++) {
    output.push(parseInt(temp[i],10))
  }
  return output;
}

console.log('test var = 123456', convertNumberToArray(123456));

const decodeNumber = (number) => {
  output = [];
}

$(document).ready(function() {
  $('#output-section-1').text(1);
  $('#output-section-2').text(2);
  $('#output-section-3').text(3);
  $('#output-section-4').text(4);
  });
