const express = require('express');
const pool = require('../cihpDB').pool;
const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const jwt = require('jsonwebtoken');
const router = express.Router();

const oAuth2ToClient = new google.auth.OAuth2({
    clientId: '1041122489477-te8rosv0360djddnsvrd6gf6khh1c158.apps.googleusercontent.com',
    clientSecret: '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',
    redirectUri: 'https://developers.google.com/oauthplayground',
})

oAuth2ToClient.setCredentials({refresh_token: '1//041mofA6SVlStCgYIARAAGAQSNwF-L9IrsAw98MHbdphJpj4DXJWXKTXk5RdMLZOhnVBjENkc7IQL6LQYsSeSHEXWTW8Tj9ReGyI'})


router.post('/Voluntario', async (req, res)=>{
    

    try{
        const accesstoken = await oAuth2ToClient.getAccessToken()
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAUTH2',
                user: 'danielmazzini6@gmail.com',
                clientId: oAuth2ToClient.clientId,
                clientSecret: oAuth2ToClient.clientSecret,
                refreshToken: oAuth2ToClient.refreshToken,
                accessToken: accesstoken.token
            }
        })
        const response = await transporter.sendMail({
            from: 'dan.cardoso.1507@gmail.com',
            to: 'gabriel.jakke.gc@gmail.com',
            subject: 'Mensagem virtual',
            html: '<p>Clique no link a seguir</p> >/br> <a href="https://www.tiktok.com">linK</a>'
        })
        return res.status(200).send({message: 'Verifique seu email'})
    }catch(error){
        console.log(error)
        return res.status(500).send({error})
    }

})


module.exports = {router};