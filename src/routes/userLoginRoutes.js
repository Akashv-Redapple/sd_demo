const appConfig = require("../../config/appConfig");
const sd = require("../controllers/slotsDiamondAPIController")

module.exports.setRouter = (app) =>{
    let baseUrl = `${appConfig.apiVersion}`
    app.post(`${baseUrl}Kiron/apiprodKironV2/authenticatePlayer`, sd.authenticate)
    app.post(`${baseUrl}Kiron/apiprodKironV2/GetPlayerBalance`, sd.getBalance)
    app.post(`${baseUrl}Kiron/apiprodKironV2/debitPlayer`, sd.debitPlayer)
    app.post(`${baseUrl}Kiron/apiprodKironV2/creditPlayer`, sd.creditPlayer)
    app.post(`${baseUrl}Kiron/apiprodKironV2/cancelBet`, sd.cancelBet)
}