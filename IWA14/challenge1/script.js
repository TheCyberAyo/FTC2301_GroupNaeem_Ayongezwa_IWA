
firstName = 'John';
age = 35;
hobby1 = 'Coding'; //added 1 to hobby to change the variable name

const logTwice = (parameter) => {  //parameter was not defined, defined it by adding parameter in the brackets
  console.log(parameter) //added .log to console
  console.log(parameter)
}

function hobby ()  {  //hobby was already defined as something else before
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby1}!`)
}

hobby() 