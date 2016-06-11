// 1.
console.log('Problem => 1');
for (var x = 1; x < 9; x++) {
  console.log(x);
}

// 2.
console.log('Problem => 2');
msg = 'codingdojo';
for (var x = 11; x < msg.length + 4; x++) {
  console.log(x);
}

// 3.
console.log('Problem => 3');
var x = 10;
if (x == 10) {
  console.log(x);
} else {
  console.log('hello');
}

// 4.
console.log('Problem => 4');
msg = 'dojo';
if (msg === 'dojo') {
  console.log('coding' + msg);
} else {
  console.log('ninja' + msg);
}

// 5.
console.log('Problem => 5');
for (var x = 15; x > 7; x--) {
  console.log(x);
  break;
}

// 6.
console.log('Problem => 6');
msg = 'hello!';
for (var x = 18; x > msg.length + 4; x--) {
  console.log(x);
}

// 7.
console.log('Problem => 7');
msg = 'codingdojo';
for (var x = 1; x < msg.length - 3; x++) {
  if (msg.length === 1) {
    for (var i = 3; i < 5; i++) {
      console.log(i);
    }
  } else {
    for (var i = msg.length; i > (msg.length - 1); i--) {
      console.log(i);
    }
  }
}

console.log('========');

msg = 'codingdojo';
for (var x = -1; x < msg.length - 2; x++) {
  if (msg.length === 1) {
    for (var i = 2; i < 5; i++) {
      console.log(i);
    }
  } else {
    for (var i = msg.length; i > (msg.length - 1); i--) {
      console.log(i);
    }
  }
}

// 8.
function sumEven() {
  var sum = 0;
  var i = 10;
  while (i <= 187) {
    if (i % 2 === 0) {
      sum += i;
    }

    i++;
  }

  return sum;
}

console.log(sumEven());

function sumOdd() {
  var sum = 0;
  var i = 4;
  while (i <= 48) {
    if (i % 2 === 1) {
      sum += i;
    }

    i++;
  }

  return sum;
}

console.log(sumOdd());
