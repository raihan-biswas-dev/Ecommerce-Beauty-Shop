import express from "express";
import data from './data.js';

const app = express()

// app.get('/', function (req, res) {
//     res.send('Hello World')
// })
app.get('/products', function (req, res) {
    res.send(data)
})

app.get('/products/:slug', function (req, res) {
    // console.log(req.params.slug)
    // res.send(data)\

    let product = data.find((item) => {
        if (item.slug == req.params.slug) {
            // console.log(item)
            return item
        }
    })
    res.send(product)
})

let port = process.env.PORT || 5000

app.listen(port, () => {
    console.log("I am from Backend")
})