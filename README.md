![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Event Driven Development

### Author: Caity Heath

### Links and Resources
* [repo](https://github.com/CaityHeath/06-event-driven-apps)
* [travis](https://www.travis-ci.com/CaityHeath/06-event-driven-apps)


### Modules
#### `app.js`
##### This is the driver file for this application, it contains the alter file function which takes an argument from the command line to read and rewrite to a file. 

#### `events.js`
##### Exports events which is a events emitter object. 

#### `logger.js`
##### This module contains the handleError function and the event listener that calls it. 



### Setup
#### `.env` requirements
* To use this application be sure to perform an `npm i jest eslint`


#### Running the app
Run the app by performing the following command: 
`node app.js text.txt`
* Entrypoint: `app.js`
* Endpoint: `text.txt`
  * Transforms the text.txt file to contain all uppercase characters.


#### Tests
* No tests have been created for this application yet. 


