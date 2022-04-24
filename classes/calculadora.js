const express = require('express');
const app = express();
const port = 3000;

app.get('/adicao', (requisicao, resposta) => {
    console.log(requisicao.query);
    const elemA = parseFloat(requisicao.query.elemA);
    const elemB = parseFloat(requisicao.query.elemB);
    resposta.send("Adicionando o número " + elemA + " e o número " + elemB + " temos como resultado o valor " + (elemA + elemB) + "." );
});

app.get('/subtracao', (requisicao, resposta) => {
    console.log(requisicao.query);
    const elemA = parseFloat(requisicao.query.elemA);
    const elemB = parseFloat(requisicao.query.elemB);
    resposta.send("Subtraindo o número " + elemA + " menos o número " + elemB + " temos como resultado o valor " + (elemA - elemB) + "." );
});

app.get('/multiplicacao', (requisicao, resposta) => {
    console.log(requisicao.query);
    const elemA = parseFloat(requisicao.query.elemA);
    const elemB = parseFloat(requisicao.query.elemB);
    resposta.send("Multiplicando o número " + elemA + " e o número " + elemB + " temos como resultado o valor " + (elemA * elemB) + "." );
});

app.get('/divisao', (requisicao, resposta) => {
    console.log(requisicao.query);
    const elemA = parseFloat(requisicao.query.elemA);
    const elemB = parseFloat(requisicao.query.elemB);
    resposta.send("Dividindo o número " + elemA + " pelo número " + elemB + " temos como resultado o valor " + (elemA / elemB) + "." );
});

app.get('/porcentagem', (requisicao, resposta) => {
    console.log(requisicao.query);
    const elemA = parseFloat(requisicao.query.elemA);
    const elemB = parseFloat(requisicao.query.elemB);
    resposta.send("Calculando o porcentual de " + elemA + "% de " + elemB + " temos como resultado o valor " + (((elemA * 10) * elemB) / 1000) + "." );
});

app.get('/exponenciacao', (requisicao, resposta) => {
    console.log(requisicao.query);
    const elemA = parseFloat(requisicao.query.elemA);
    const elemB = parseFloat(requisicao.query.elemB);
    resposta.send("Calculando o exponencial do numero " + elemA + " elevado a " + elemB + " temos como resultado o valor " + (elemA ** elemB) + "." );
});

app.get('/bye', (requisicao, resposta) => {
    resposta.send('Tchau');
});

app.get('', (requisicao, resposta) => {
    resposta.send("Operação solicitada não é reconhecida pelo sistema. Operações possíveis são adição, subtração, multiplicação, divisão, porcentual e exponencial");
});

app.post('/calculadora', (req, res) => {
    const objeto = req.body;

     objeto.elemA = parseFloat(elemAA);
     objeto.elemB = parseFloat(elemBB);

     if (coman === "adi") {
        nodVIS.textContent = (objeto.elemA + elemB);
    } else if (coman == "sub") {
        nodVIS.textContent = (elemA - elemB);
    } else if (coman == "mult") {
        nodVIS.textContent = (elemA * elemB);
    } else if (coman == "div") {
        nodVIS.textContent = (elemA / elemB);
    } else if (coman == "exp") {
        nodVIS.textContent = (elemA ** elemB);
    }

});

 app.listen(port, () => {
      console.log(`Servidor rodando no endereço http://127.0.0.1:3000/`);
 });