// configuration.js

const company = 'ACME Inc.'
const year = '2022'
 

// scripts.js

import {company as companyName} from 'configuration'
import {year as yearReal} from 'configuration'

const message = ' + ©  ' + company + ' (' + year + ')'
documents.querySelector('footer').innerText = message

console.log(companyName,yearReal)