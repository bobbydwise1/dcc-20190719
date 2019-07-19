/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.
*/

//Assume that numbered "pairs" can only be 1 through 26.

/*The problem consists of two parts:
  a.  dividing up the number string into all possible singles and pairs.
  b.  converting the ASCII value into a number.  (use: 'a'.charCodeAt(0)-96 for lowercase.)
*/

$(document).ready(function() {
  $('#output-section-1').text(1);
  $('#output-section-2').text(2);
  $('#output-section-3').text(3);
  $('#output-section-4').text(4);
  });
