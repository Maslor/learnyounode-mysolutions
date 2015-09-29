var sum = 0;

for (cont = 2; cont < process.argv.length; cont++) {
	sum += +process.argv[cont];
};

console.log(sum);
