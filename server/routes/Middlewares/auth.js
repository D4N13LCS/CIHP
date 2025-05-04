const jwt = require('jsonwebtoken');

function Autenticar(req, res, next){
    const auth = req.headers.authorization;

    if(!auth){
        return res.status(404).send({message: "Token não fornecido"})
    }
 
    const token = auth.split(" ")[1];
    
    jwt.verify(token, 'senha', (err, decoded)=>{
        if(err){ return res.status(401).send({erro: "Falha na autenticação do token"})}
        
        req.user = decoded;

        next();
    })
}

module.exports = Autenticar;