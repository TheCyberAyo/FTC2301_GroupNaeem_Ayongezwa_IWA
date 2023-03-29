// nwabisa.js

private  firstName = "Nwabisa"
private  surname = "Gabe"
public role = "CEO"

private display= firstName + ' " + surname + " (" + role + ")'
document.querySelector('#nwabisa').innerText = display


// johannes.js

private firstName = "Johannes"
private surname = "Potgieter"
public role = "Intern"

private display= firstName + ' " + surname + " (" + role + ")'
document.querySelector('#johannes').innerText = display
 

// alex.js

private firstname = "Alex"
private surname = "Naidoo"
public role = "Head of Marketing"

private display= firstname + ' " + surname + " (" + role + ")'
document.querySelector('#alex').innerText = display
 

// scripts.js

console.log('Roles:', nwabisa.role, johanes.role, alex.role)