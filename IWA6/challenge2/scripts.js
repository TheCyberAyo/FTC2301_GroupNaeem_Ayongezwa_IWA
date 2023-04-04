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

if (hourOfDay === 0 && minuteOfDay === 0) {
	const taxAsDecimal = tax;
  const startingAfterTax = salary * (1 - taxAsDecimal);
	const balance = startingAfterTax - transport - food - rent;
  console.log(balance); // you can add this to see the result
}





