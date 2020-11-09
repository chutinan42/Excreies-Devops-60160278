const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const items = [
    {id: '1', name: 'Chanel Boy'},
    {id: '2', name: 'Hermes'}
]

app.get('/', (req, res) => {
    return res.send('Hello')
})

app.get('/item', (req, res) => {
    return res.json(items)
})

app.listen(port, () => {
    console.log(`Start Express application at ${port}`)
})

module.exports = app