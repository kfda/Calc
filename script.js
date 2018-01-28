//Enter Event
function exec(e) {
  if (e.keyCode == 13) {
    calc($('#q').val());
  }
}
//\/\/\/\/\/\/\/\/\/\/\\/\/\\\


//with those functions i can take have OP and calc with a string note
// like '+' will be +
var functions = {
  '+': function(a, b) {
    return a + b
  },
  '-': function(a, b) {
    return a - b
  },
  '*': function(a, b) {
    return a * b
  },
  '/': function(a, b) {
    return a / b
  },
  '^': function(a, b) {
    return Math.pow(a, b)
  },
}



function calc(str) {
  let temp = '';
  let isA = true;
  let time_to_calc = false;
  let result = '';
  let isB = false;
  const A = [];
  const OP = [];
  const B = [];
  let index = 0;
  for (char of str) {
    //asking if the char is number
    //if yes , add it to tmp
    if (Number.isInteger(Number(char))) {
      console.log('Number');
      temp += char;
      console.log('temp', temp);
    } else if (char == '+' || char == '-' || char == '*' || char == '/' || char == '^') {
      console.log('soft char');
      //A flag is up (true) by Default
      //if it's an OP
      if (isA) {
        //if it an opperator , put the temp inside A stack
        // AND push the OP inside the OP
        console.log('isA: true');
        A.push(temp);
        OP.push(char);
        //clear the tmp and wait for another char
        temp = '';
        isA = false;
        // console.log(isA);
      } else {
        //if the A flag is not up (false) , asouming it's B
        console.log('isA: false , isB');
        B.push(temp);
        OP.push(char);
        // after we have A , OP, B  - we are ready to calc

        time_to_calc = true;
      }
    }
    if (!isA && temp != '') time_to_calc = true;
    //the index show us if the STRING is done.
    if (time_to_calc && index == str.length - 1) {
      console.log('time to calc');
      if (temp != '') {
        console.log('temp not empty');
        B.push(temp);

      }
      result = functions[OP.pop()](Number(A.pop()), Number(B.pop()));
      A.push(result);
      time_to_calc = false;
    }
    index++;
    console.log('A:', A, 'B:', B, 'OP', OP);
  }
  //CANT Dividing By 0
  if (A[0] == Infinity) {
    $('#result').text('Error - cant Div by 0!');
  } else {
    $('#result').text(A.pop());
  }
}
