/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.
*/

//Assume that numbered "pairs" can only be 1 through 26.

/*

example:

11523....

[1,1,5,2,3]
[11,5,23]
[1,1,5,23]
[11,5,2,3]
[1,15,23]
[1,15,2,3]

step1 - shift through each single digit = easy
[1,1,5,2,3]
subcount = 5;

step2 - attempt 1st pairs
[11].... eleven is valid first pairs

step2a - subloop - look at whats left, and see the valid pairs
[5,2,3]
[5,23]
... that is all.  so we have [11,5,2,3] and [11,5,23]
subcount = 5+2 = 7

Step3 - next index - check if the next number and the previous are a valid letter.  We note that yes, 15 is valid.  So we have a new subloop:
[1,15]

Step3a - subloop - check the remainder for valid pairs
[2,3]
[23]
... that is all. so we have [1,15,2,3] and [1,15,23]
subcount = 7+2 = 9

Step4 - we keep going, and note we don't find valid pair until 23...
[23]
We note that this is at the end of the array.  Chop the end of the array off and check all valid combos:
[1,1,5]
[11,5]
[1,15]
Note that we already did the last two combos.... [11,5,23] & [1,15,23] there is really only 1 combo left.... [1,1,5,23]
subcount = 9+1 = 10

*/

const convertNumberToArray = (number) => {
  let temp = number.toString().split("");
  // let output = [];
  // for (i = 0; i < temp.length; i++) {
  //   output.push(parseInt(temp[i],10))
  // }
  //return output;
  return temp;
}

const decodeNumber = (number) => {
  let output = [];
  for (i = 0; i < number.length; i++) {
    if (isNaN(number[i+1]) === false) {
      if (1*(number[i]+number[i+1])< 27) {
        output.push(number[i]+number[i+1])
        i=i+1;
      } else {
        output.push(number[i]);
      };
    };
  }
  return output;
}

const testNum = 11523;
console.log('testNum = ',testNum);

const testNumArray = convertNumberToArray(testNum);
console.log('array = ', testNumArray);

const final = decodeNumber(testNumArray);

console.log('testNum = ',testNum);
console.log('array = ', testNumArray);
console.log('decode = ', final);

$(document).ready(function() {
  $('#output-section-1').text(1);
  $('#output-section-2').text(2);
  $('#output-section-3').text(3);
  $('#output-section-4').text(4);
  });
