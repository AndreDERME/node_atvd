const express = require("express");


const app = express();

app.get ("/home", (req, res) => { 
    res.status(200).send("<h1> hello word");
});

app.get ("/user", (req, res) => {


  const user =  [
        {
            nome: "Andre",
            email: "andre.com",
        },

        {
          nome: "senna",
          email: "senabot.com"  
        }
    ]

    res.status(200).json(user);
    
})

const port = 8080;

app.listen(port, () => console.log(`Rodando com express na porta ${port}`));