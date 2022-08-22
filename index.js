// Q3

function createBase(n) {
  return function (n2) {
    console.log(n + n2);
  };
}

const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

createBase(6)(10);
