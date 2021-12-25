/* 
* ESM Import
*/
import { makeButton } from './header'
/* 
* ESM style import of CommonJs export, thanks to Webpack interop
*/
import { Footer } from './footer'
/* 
* run "node main.js" to run
*/
document.body.appendChild(makeButton('Hello'))
console.log(Footer)