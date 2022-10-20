// require|('dotenv').config()
const jwt = require('jsonwebtoken');
const dbConfig = require('../../www/db/dbConfig');
const response = require('../libs/responseLib')


let verify = async (req, res, next) => {
    try{
        let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token){
        res.status(401).send("Kindly provide the JWT token");
    }
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);

    if(!decoded) {
        res.status(401).send("Invalid Token");
    }
    req.user = decoded

    next();
    }catch(err){
        console.log(err)
        res.status(401)
    }
}  

let adminVerify = async (req, res, next) => {
    try{
        let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token){
        res.status(401).send("Kindly provide the JWT token");
    }
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);

    if(decoded.role < 4 ) {
        let apiResponse = response.generate(true,"You are not authorised",null)
            res.status(412).send(apiResponse);
    }
    req.user = decoded

    next();
    }catch(err){
        console.log(err)
        res.status(401)
    }
}  

let superAdminVerify = async (req, res, next) => {
    try{
        let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
    }
    if (!token){
        res.status(401).send("Kindly provide the JWT token");
    }
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);

    if(decoded.role !=5 ) {
        let apiResponse = response.generate(true,"You are not authorised",null)
            res.status(412).send(apiResponse);
    }
    req.user = decoded

    next();
    }catch(err){
        console.log(err)
        res.status(401)
    }
}  

let refreshTokenVerify = async (req, res, next) => {
    try{
        let token = req.headers['authorization'].split('')[1]
        if(!token){
            let apiResponse = response.generate(true, "A token is required for authentication", null)
            return res.status(412).send(apiResponse)
        }
        const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
        if (!decoded){
            let apiResponse = response.generate(true,"Invalid token",null)
            res.status(401).send(apiResponse); 
        }
        const data = await dbConfig.sequelize.query(`Select * from user where id = '${decoded.id}' and email = '${decoded.username}'`, { type: Sequelize.QueryTypes.SELECT})
        if(data[0].refresh_token != token){
            let apiResponse = response.generate(true, "Invalid refresh token", null)
            res.status(401).send(apiResponse)
        }
        req.user = data
        next();
    }catch(err){
        console.log('Error: ' + err)
        res.status(401).json({message: err.message})

    }
}

module.exports = {
    verify: verify,
    refreshTokenVerify: refreshTokenVerify,
    adminVerify: adminVerify,
    superAdminVerify:superAdminVerify
}