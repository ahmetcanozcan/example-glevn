/**
 *  Hey there✋😅,
 * 
 * This is an example project for understanding glevn clearly.
 * 
 * Severel scripts is defined in package.json
 * Firstly run `npm install` to install dependencies
 * And run script defined in package.json
 * ex: `npm run script1`,`npm run script2` and `npm run script3` go on...
 * 
 */

/**
 * This block for script1 `glevn app.js` 
 * Run this app.js script with custom environment reading by .env file
 */

console.log("\nprocess.env.FOO:\t", process.env.FOO, "\n\n");


/**
 * This block for script2 `glevn app.js --glevnfile`
 * Run this app.js script with everthing in script1 and glevnfileoption
 */

try {

  let pickArr = ["FOO", "year", "isProduction"];

  //It cames from `import lodash.pick`
  console.log("Using pick:\t", pick(config, pickArr), "\n\n");

  //It cames form `import lodash as _`
  console.log("Using _.pick\t", _.pick(config, pickArr), "\n\n")

  //It cames from `import lodash`
  console.log("Using lodash.pick\t", lodash.pick(config, pickArr), "\n\n")

} catch (error) {
  console.log("--glevnfile or --gfile option is off\n\n\n");
}




/**
 * This block for script3 `glevn app.js --glevmon`
 * Runn this app.js script with environment variables and
 */

//Throws an error to crash app if glevmon is open,
// app wait for your changes to restart
throw Error("Oops, Someting gone wrong");