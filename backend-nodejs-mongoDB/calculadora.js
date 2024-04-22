
var params = process.argv.slice(2)

var n1 = parseFloat(params[0]);
var n2 = parseFloat(params[1]);

var plantilla = `
La suma es: ${n1 + n2} 
La resta es: ${n1 - n2}
La multi es: ${n1 * n2}
La div es: ${n1/n2}
`;
console.log(plantilla);
console.log("Testing this service");