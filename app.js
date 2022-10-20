
const express = require("express")
const app = express()
const fs = require('fs')


/// Predifined middleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Bootstrap route
const routesPath = './src/routes'
fs.readdirSync(routesPath).forEach(function (file) {
  if (~file.indexOf('.js')) {
    let route = require(routesPath + '/' + file);
    route.setRouter(app)
  }
})

// end bootstrap route

app.listen(3301, () => {
    console.log("The server is running on PORT : "+ 3301)
})

