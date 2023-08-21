import fs from "fs"
import csv from "csv-parser"
import { Writable, Transform } from 'stream'

function carregarDadosCSV(filePath = "") {
    const leituraStream = fs.createReadStream(filePath)// Faz a leitura do arquivo .csv

    const Stream_ToObject = csv({separator: ","})// Separa os dados por virgula

    const StreamObject_ToJSON = new Transform({ // salva cada objeto em um json
        objectMode: true,
        transform(chunk, encoding, callback) {
        callback(null, JSON.stringify(chunk))
        },
    })

    var dadosConcorrentes = []

    const JSON_toString = new Writable({// pega o json e faz uma string
        write(chunk, encoding, next) {
        const stringifyer = chunk.toString()
        const rowData = JSON.parse(stringifyer) // cada rowData é um Object, ou seja ele pegou cada linha e transformou em um objeto no JS
        dadosConcorrentes.push(rowData)
        //console.log('PROCESSANDO', rowData)
        next()
        },
    })


    console.log(`Inicio da leitura de: ${filePath}`, Date())

    leituraStream
        .pipe(Stream_ToObject)
        .pipe(StreamObject_ToJSON)
        .pipe(JSON_toString)
        .on('close', ()=> {
            console.log(`Fim da leitura de ${filePath}`, Date())
            return dadosConcorrentes
        })
}

var CSVconcorrentes = carregarDadosCSV('concorrentes.csv')
var CSVbairros = carregarDadosCSV('bairros.csv')
var CSVfluxoConcorrentes = carregarDadosCSV('eventos_de_fluxo.csv')






    