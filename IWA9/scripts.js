

const salary = 4000;
const lodging = 'apartment'
const size = 'large'

// Only change the syntax below (not the values or key names)

/*const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

const taxAsDecimal = tax.913 / 100
const startingAfterTax = salary * 1 - taxAsDecimal
const type = lodging + size
const balance = expenses(transport) - expenses(food) - expenses(rent.type) 
console.log(balance) */

const expenses = {
    food: 51.7501,
    transport: 10.2,
    
  }; // the semi colon, brcause despite the strucure, this  is declaration and assignmnet
  
  const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
  };
  
  const rent = {
    none: 0,
    'small-room': 200, //kebab cases
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
  };
  
  // You can change below however you want
  
  const taxAsDecimal = parseFloat(tax['913']) / 100; //parsefloat to turn into an interger with commas
  const taxableAmount = salary * taxAsDecimal;  
  const afterTaxAmount = salary - taxableAmount;
  const type = `${size}-${lodging}`
  const balance = afterTaxAmount - expenses.food - expenses.transport - rent[type]; //kebabcase, hence the square brackets
  
  console.log(balance.toFixed(2)); //toFix to specify decimals