# Welcome to Web Desk!

<img src="/Logo.jpg" alt="Web Desk Logo" width="300" height="200">

Hello there, and welcome to the Web Desk GitHub repository! Web Top is a simple system to turn websites
into desktop apps for any platoform. Just set a url, and you're good to go!

## How It Works

Web Desk is built with Javascript and [Electron](https://electronjs.org), which is a Javascript package
to render websites and HTML code as desktop apps. Simply run the exported ```init``` function, and you're good to go!

## How To Use

Run 
```
npm install web-desk
```
And then use ```const webdesk = require('web-desk')``` or ```import webdesk from 'web-desk'``` (depending on your module layout)
after that, just run ```webdesk([your url here])``` to use. Make sure to run the file where you use webtop with ```npx electron```.

## File Structure
- index.js
  - The main file
 
# Have Fun!
