/* FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'

if (location = RSA) { shipping === 400 && currency === 'R' }

if location = NAM
shipping = 600 
else shipping = 800

shoes = 300 * 1
toys - 100 * 5
shirts = 150 * 'NONE_SELECTED'
batteries 35 * 2
pens = 5 * 'NONE_SELECTED' 

shipping = null
currency = $

if (shoes + batteries + pens + shirts > 1000 &&  ) {
	if (location = NAM && customers < 2) {
			if (location = RSA)
		    shipping = 0 || calcShipping
		}
	}
}

if (shipping = 0) && (customers !=== 1) { console.log(WARNING) }

location = 'NK' ? console.log(WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)

customers = '1'
const location = 'RSA'
currency = null */

const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately, we do not ship to your country of residence'
const NONE_SELECTED = 0

let shipping = null;
let customers = 1
let COUNTRY = 'RSA'
let currency = 'R'

if ( COUNTRY === 'RSA') {  //local clients
	shipping = 400
	currency = 'R' 
} else if ( COUNTRY=== 'NAM') {   //namibian clients
    shipping = 600
	currency = '$'

} else if (COUNTRY === 'NK' ) {    //Banned country
	console.log(BANNED_WARNING)
} else {
	console = 800
	currency = '$'
}



const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

let cost = shoes + toys + shirts + batteries + pens;

if ( cost >= 1000 && COUNTRY === 'NAM' || COUNTRY === 'RSA')  {
	// <2 and 1 are technically the same thing, hence the decision not to change this part
	  
	  if (customers === 1 ){
		shipping = 0
	  } else {
		console.log(FREE_WARNING)
	  }
  }


let price = cost + shipping;

console.log(price)
