anArray = [];

for (i = 1; i < 11; i++) {
  anArray.push(i);
};

console.log(`${anArray}`);

const oddNumbers = anArray.filter(x => x % 2 !== 0);

console.log(oddNumbers);

const divisible2or5 = anArray.filter(x => x % 2 === 0 || x % 5 === 0);

console.log(divisible2or5);

const divisible3squared = anArray.filter(x => x % 3 === 0).map(x => x ** 2);

console.log(divisible3squared);

const sumofdivisible5 = anArray.filter(x => x % 5 === 0).map(x => x ** 2).reduce((acc, value) => acc + value, 0);

console.log(sumofdivisible5);