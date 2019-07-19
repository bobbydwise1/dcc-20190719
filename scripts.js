/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.
*/

const makeRandomNumber = () => {
  return Math.ceil(Math.random()*10);
}

$(document).ready(function() {
  $('#output-section-1').text(JSON.stringify(testList));
  $('#output-section-2').text(1);
  $('#output-section-3').text(2);
  $('#output-section-4').text(3);
  });
