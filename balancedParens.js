let sample1 = "This ( is unbalanced.";
let sample2 = "(This (is (a) balanced) string.)";
let sample3 = "This is () also ) unbalanced.";
let sample4 = "Balanced.";

const balance = (string) => {
  let equilibrium = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      equilibrium++;
    } else if (string[i] === ")") {
      equilibrium--;
    }
  }
  return !equilibrium;
};

console.log(balance(sample1), "should be false");
console.log(balance(sample2), "should be true");
console.log(balance(sample3), "should be false");
console.log(balance(sample4), "should be true");
