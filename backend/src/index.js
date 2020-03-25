const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
/**
 * Tipo de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, páginação)
 * Route Params: Parâmetros utilizados para identifcar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */

app.listen(3333)