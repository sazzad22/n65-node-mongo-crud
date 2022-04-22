/**
 * -------------
 * creating node server
 * -------------
 * 1.create a folder or directory - run mkdir forlder name
 * 2. run npm init
 * 3.run npm i express cors mongodb
 * 4. add index.js in the folder
 * 5. in the package.json add start and start-dev key with values as node index.js and nodemon index.js
 * 6.inside index.js create a simple express app using the link -https://expressjs.com/en/starter/hello-world.html
 *
 * ---------------------------------
 * create Atlas account on mongodb
 * ---------------------------------
 * 1. sign up
 * create cluster
 * 3. create db user and password ( save them in the code for later purpose)
 * 4.network access: > my own ip and alow all
 * 5. database > connect > copy and paste the uri ,client and all that in my own code
 *
 * ---------------
 * CRUD operation
 * ---------------
 * 1.node mongodb crud > fundamentals - https://www.mongodb.com/docs/drivers/node/current/usage-examples/
 * 2. create an async function in my code
 *
 * - - - - - - - - - - - - - - - - - - - - - - - -
 * Integrating sending data from client to server
 * ----------------------------------------------
 * 1. on client side create form - get input data from the form using handle
 * 2. set fetch with post ,headers and body - ex: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data
 *
 * 3. on Server : create post method to catch the data to be sending as an api req(request) and respond
 * 4.make sure to respond send an object/json from the POST api
 */
