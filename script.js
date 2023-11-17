//your JS code here. If required.
function PowerFunction(x, y) {
// return using the return method
// do not console.log here

    if(x==0)
        return 0;

    if(y==0)
        return 1;

    if(y<0)
    {
        x=1/x;
        y=-y;
    }
    
    if (y % 2 == 0)
    {
        let halfPower = PowerFunction(x, y / 2);
        return halfPower * halfPower;
    }
  else 
    {
        return x * PowerFunction(x, y - 1);
    }  
    
}

var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;

//multipleline input from User
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;
  if (lineNumber == 0) {
    size = parseInt(inputArr[0]);
  } else if (lineNumber < size) {
  }

  //Exit Condition
  if (lineNumber == size) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const N = +inputArr[0];
  inputArr.shift();

  for (let i = 0; i < N; i = i + 1) {
    // inputArr[i] = inputArr[i].trim();
    const [A, B] = inputArr[i].split(" ").map((x) => parseFloat(x));
      console.log(PowerFunction(A, B));
  }
}