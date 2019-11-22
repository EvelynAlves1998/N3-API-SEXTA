// configurações do servidor
const app  = require('./src/app')
const port = 3000

app.list(port, () => {
    
    console.log(`O servidor esta rodando na porta ${port}`)

})