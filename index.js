import express from 'express'
import cors from 'cors'
import { exit } from 'process';

const app = express()
const port = 3000
let number = 0;
app.use(express.json());

app.use(cors())

let primeiroLancamento = 0;

app.listen(port, () => {

    let controle = true
    let i = 0
    let arrayDosLancamentos = []
    while (controle) {
        const dado1 = Math.floor(Math.random() * 6) + 1;
        const dado2 = Math.floor(Math.random() * 6) + 1;

        const resultado = dado1+dado2
        arrayDosLancamentos.push(resultado)
    
        if ((resultado == 7 || resultado == 11) &&  primeiroLancamento == 0) {
            arrayDosLancamentos.push("Você ganhou")
            console.log({
                primeiroLancamento: primeiroLancamento,
                controle: controle,
                ultimoLancamento: arrayDosLancamentos[i]
            })
            controle = false

        }else if (resultado == 7){
            console.log({
                primeiroLancamento: primeiroLancamento,
                controle: controle,
                ultimoLancamento: arrayDosLancamentos[i]
            })
            arrayDosLancamentos.push("Você perdeu")
            controle = false
            console.log("você perdeu")

        }else if (resultado == primeiroLancamento) {
            console.log({
                primeiroLancamento: primeiroLancamento,
                controle: controle,
                ultimoLancamento: arrayDosLancamentos[i]
            })
            arrayDosLancamentos.push("Você ganhou")
            controle = false
            console.log("você ganhou")
        }

        if (primeiroLancamento == 0) {
            primeiroLancamento = resultado
        }

        i++;
    }

    console.log(arrayDosLancamentos)

})
