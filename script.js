var functions = {
  '+': function (a,b){return  a+b},
  '-': function (a,b){return  a-b},
  '*': function (a,b){return a*b},
  '/': function (a,b){return a/b},
  '^': function (a,b){return Math.pow(a,b)},
}

function calc(str){
let temp = '';
let isA = true;
let time_to_calc = false;
let result = '';
let isB = false;
const A = [];
const OP = [];
const B = [];
let index = 0;
  for(char of str){
    if (Number.isInteger(Number(char))) {
      console.log('Number');
      temp += char;
      console.log('temp' , temp);
    }else if (char == '+' || char == '-' || char == '*' || char == '/' || char == '^') {
      console.log('soft char');
      if (isA) {
        console.log('isA: true');
        A.push(temp);
        OP.push(char);
        temp = '';
        isA = false;
        isB = true;
        // console.log(isA);
      }else{
        console.log('isA: false , isB');
        B.push(temp);
        OP.push(char);
        time_to_calc = true;
      }
    }if(!isA && temp != '') time_to_calc= true;

    if (time_to_calc && index == str.length -1) {
      console.log('time to calc');
      if (temp != ''){
        console.log('temp not empty');
        B.push(temp);

      }
      result = functions[OP.pop()](Number(A.pop()),Number(B.pop()));
      A.push(result);
      time_to_calc = false;
    }
    index ++;
    console.log('A:' , A , 'B:' , B , 'OP' , OP);
  }
console.log(A.pop());
}
