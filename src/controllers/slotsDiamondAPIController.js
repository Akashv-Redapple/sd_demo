const response = require('../libs/responseLib')

let authenticate = async  (req, res) => {
    try{

        data = {
                PlayerID: "A135A67A39T",
                CurrencyCode: "USD",
                LanguageCode: "en",
                Code: "0",
                Status: ""
        }
        // apiReponse = response.generate(false, `Done`, data)
        res.status(200).send(data)


    }catch(err){
        console.log(err)
        let apiResponse = response.generate(true, `Error Occured : ${err.message}`, null);
        res.status(412).send(apiResponse);
    }
}


let getBalance = async  (req, res) => {
    try{

        data = {
                Amount: 100000,
                Code: 0,
                Status: ""          
        }
        // apiReponse = response.generate(false, `Done`, data)
        res.status(200).send(data)


    }catch(err){
        console.log(err)
        let apiResponse = response.generate(true, `Error Occured : ${err.message}`, null);
        res.status(412).send(apiResponse);
    }
}

let debitPlayer = async  (req, res) => {
    try{

        data = {
            
            TransactionID: "156",
            Code: "0",
            Status: ""
                         
        }
        apiReponse = response.generate(false, `Done`, data)
        res.status(200).send(apiReponse)


    }catch(err){
        console.log(err)
        let apiResponse = response.generate(true, `Error Occured : ${err.message}`, null);
        res.status(412).send(apiResponse);
    }
}

let creditPlayer = async  (req, res) => {
    try{

        data = {
            TransactionID: "157",
            Code: "0",
            Status: ""         
        }
        apiReponse = response.generate(false, `Done`, data)
        res.status(200).send(apiReponse)


    }catch(err){
        console.log(err)
        let apiResponse = response.generate(true, `Error Occured : ${err.message}`, null);
        res.status(412).send(apiResponse);
    }
}

let cancelBet = async  (req, res) => {
    try{

        data = {
            TransactionID: "158",
            Code: "0",
            Status: ""        
        }
        apiReponse = response.generate(false, `Done`, data)
        res.status(200).send(apiReponse)


    }catch(err){
        console.log(err)
        let apiResponse = response.generate(true, `Error Occured : ${err.message}`, null);
        res.status(412).send(apiResponse);
    }
}


module.exports = {
    authenticate : authenticate,
    getBalance   : getBalance,
    debitPlayer  : debitPlayer,
    creditPlayer : creditPlayer,
    cancelBet    : cancelBet
}