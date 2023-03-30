// scripts.js
console.log(company, year)
import {company, year} from './configuration.js'

const message = '  ©  ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message
