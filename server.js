const express = require(`express`);
const bodyParser = require(`body-parser`);
const cors = require(`cors`);

const app = express ();

app.use(cors());

app.use(bodyParser.json());
const puerto = 3001;

// crear endpoint
app.get(`/api/hola`,(req,res)=>{
res.send(`Hola Mundo`);

});

app.get(`/api/nombre`,(req, res)=>{
    res.send(`Antonio Manjarrez`);
});

app.get(`/api/suma/:n1/:n2`,(req, ser)=>{
let numero1 = req.params.n1;
let numero2 = req.params.n2;
let suma = Number(numero1) + Number (numero2);
ser.send("La suma es:" + suma);

});
app.get(`/api/resta/:n1/:n2`,(req, ser)=>{
    let numero1 = req.params.n1;
    let numero2 = req.params.n2;
    let resta = Number(numero1) - Number (numero2);
    ser.send("La resta es:" + resta);
    
    });
    //resta con post
    app.post(`/api/resta/:n1/:n2`,(req, ser)=>{
        let numero1 = req.params.n1;
        let numero2 = req.params.n2;
        let resta = Number(numero1) - Number (numero2);
        ser.send("La resta post:" + resta);
        
        });
    


app.listen(puerto,()=>{
    console.log(`Servidor escuchado en el puerto: ` + puerto);
});
