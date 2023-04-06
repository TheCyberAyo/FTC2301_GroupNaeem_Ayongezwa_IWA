const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

/* if hourOfDay && (minuteOfDay !== null) && (hourOfDay == '00') && (minuteOfDay == '00') {
	const taxAsDecimal = tax / '100'
  const startingAfterTax = salary * '1' - taxAsDecimal
	const balace = starting - transport - food - rent
}
	
console.log(balance.toFixed(3)) 8 */
if (hourOfDay === 00 && minuteOfDay == 00) {
	const taxAsDecimal = parseInt(tax) / 100
    const startingAfterTax = salary * (1 - taxAsDecimal)
	const balance1 = startingAfterTax - transport - food - rent
} else { 
  hourOfDay == "undefined" && minuteOfDay == "undefined"
}

console.log(`R${balance1.toFixed(2)}`);
