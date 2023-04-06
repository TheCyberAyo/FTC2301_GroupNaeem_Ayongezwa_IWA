const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

/* Only change below this line

const primaryValid = typeof number == primaryPhone 
const secondaryValid = typeof number == secondaryPhone

console.log('Primary phone is valid numerical string:', primaryValid);
console.log('Secondary phone is valid numerical string:', secondaryValid);
                       

if ( typeof  primaryPhone === Na){
    console.log('Primary phone is valid numerical string:', true);
} else {
    console.log('Primary phone is valid numerical string:', false);
}

if (typeof secondaryPhone === NaN) {
    console.log('Secondary phone is valid numerical string:', true);
} else{
    console.log('Secondary phone is valid numerical string:', false); */

    //the above is absolutely wrong


    const primaryValid = !Number.isNaN(parseInt(primaryPhone)) 
    const secondaryValid = !Number.isNaN(parseInt(secondaryPhone))

    // primaryValid is made  a variable that  hold a boolean value 

    // secondaryValid

    // parseInt makes it a number

    // !isNaN makes is a valid question (Boolean expression)
    
    console.log('Primary phone is valid numerical string:', primaryValid)
    console.log('Secondary phone is valid numerical string:', secondaryValid )

