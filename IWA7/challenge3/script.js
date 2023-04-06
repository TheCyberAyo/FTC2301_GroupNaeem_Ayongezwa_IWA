const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

/*const owed = parseInt('R' + leoBalance + sarahBalance)
const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}"
const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}"
const total = "Total amount owed: "
const result = leo + sarah + divider + divider + total + owed + divider

console.log(result) 

const owed = parseFloat('R' + leoBalance + sarahBalance) //
const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}"
const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}"
const total = "Total amount owed: "
const result = leo + sarah + divider + divider + total + owed + divider

console.log(result)


const owed = parseFloat(leoBalance) + parseFloat(sarahBalance) //change parseInt to parseFloat and made the code readable by separating the vriables
const leo = `${leoName} ${leoSurname} Owed R${leoBalance}` 

const sarah = `${sarahName} ${sarahSurname} Owed R${sarahBalance}`
const total = "Total amount owed: "
const result = `${leo}\n${sarah}\n${divider}\n${divider}\n${total}${owed}\n${divider}`

console.log(`${result}`)

removed plusses and replaces the double-quotation 
marks by backticks, to enable the strings to appear
 in single separate lines*/

const owed = parseFloat(leoBalance) + parseFloat(sarahBalance); //parseFloat to enable decimals and reordered the assignments for readability
const leo = `${leoName} ${leoSurname} Owed: ( R ${Math.abs(leoBalance).toFixed(2)} )`; //toFixed to specify decimal place
const sarah = `${sarahName} ${sarahSurname} Owed: (R ${Math.abs(sarahBalance).toFixed(2)})`; //used Math.abs to turn negative numbers to positive
const total = `  Total amount owed: R ${Math.abs(owed).toFixed(2)}`; 
const result = `${leo}\n${sarah}\n${divider}\n${total}\n${divider}`;// \n specifies new line

console.log(result);