import express from 'express'
import cors from 'cors'
import { exit } from 'process';

const app = express()
const port = 3000
let number = 0;
app.use(express.json());

app.use(cors())
let vitorias = 0
let derrotas = 0
app.listen(port, () => {
    let i = 0;

    while (i < 1000000000) {
        // craps();
        megaSena();
        i++;
    }
    console.log("vitorias: ", vitorias)
    console.log("derrotas: ", derrotas)
})

function craps(params) {
    let primeiroLancamento = 0;
    let controle = true
    let i = 0
    let arrayDosLancamentos = []
    while (controle) {
        const dado1 = Math.floor(Math.random() * 6) + 1;
        const dado2 = Math.floor(Math.random() * 6) + 1;

        const resultado = dado1+dado2
        arrayDosLancamentos.push(resultado)
    
        if ((resultado == 7 || resultado == 11) &&  primeiroLancamento == 0) {
            // arrayDosLancamentos.push("Você ganhou")
            // console.log({
            //     primeiroLancamento: primeiroLancamento,
            //     controle: controle,
            //     ultimoLancamento: arrayDosLancamentos[i]
            // })
            vitorias++
            controle = false

        }else if ((resultado == 2 || resultado == 3 || resultado == 12) &&  primeiroLancamento == 0) {
            derrotas++
            controle = false
        }
        else if (resultado == 7){
            // console.log({
            //     primeiroLancamento: primeiroLancamento,
            //     controle: controle,
            //     ultimoLancamento: arrayDosLancamentos[i]
            // })
            // arrayDosLancamentos.push("Você perdeu")
            derrotas++
            controle = false
            // console.log("você perdeu")

        }else if (resultado == primeiroLancamento) {
            // console.log({
            //     primeiroLancamento: primeiroLancamento,
            //     controle: controle,
            //     ultimoLancamento: arrayDosLancamentos[i]
            // })
            // arrayDosLancamentos.push("Você ganhou")
            vitorias++
            controle = false
            // console.log("você ganhou")
        }

        if (primeiroLancamento == 0) {
            primeiroLancamento = resultado
        }

        i++;
    }

    // console.log(arrayDosLancamentos)

    return;

}

function megaSena(params) {
    let numerosMegaSena = []
    let meusNumeros = [23,54,32,54,32,21]
    let ganhou = 0;
    for (let index = 0; index < 6; index++) {
        geraNumeroAleatorio(meusNumeros)
        numerosMegaSena.push();
    }
    let resultado;
    meusNumeros.forEach(index => {
        resultado = numerosMegaSena.find((element) => element == index )
        if (resultado != undefined) {
            ganhou++
        }
    });

    ganhou == 5 ? vitorias++ : derrotas++
    
}

function geraNumeroAleatorio(arrayNumeros = []) {
    const numeroAleatorio = Math.floor(Math.random() * 60) + 1
    const resultado = arrayNumeros.find(item => numeroAleatorio == item)

    if (resultado) {
        geraNumeroAleatorio(arrayNumeros)
    }

    return resultado

}