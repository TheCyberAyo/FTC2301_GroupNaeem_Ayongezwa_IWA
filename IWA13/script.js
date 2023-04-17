let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const  logCalc = () => { //removed equal sign from before the variable to after it
    const isString = typeof calculated === 'string' // change numerical-string to string
    const calculatedAsNumber = isString ? calculated : parseInt(calculated) //change parseNumber to parseInt
    calculated === calculatedAsNumber + 1 
}

const calcUser = () => {  //removed equal sign from before the variable to after it
  logCalc ()
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

const checkUser = () => {  //removed equal sign from before the variable to after it
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()