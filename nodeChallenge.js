var express = require('express');
const bodyParser = require('body-parser');

app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

var products = []
let ids = []


app.get('/api/products', (req, res) => {
    console.log('/////////////////////////////')
    console.log(products)
    res.json({products: products});
});


app.get('/api/products/:id', (req, res) => {
    products.forEach((product) => {
        if(product.id == req.params.id){
            res.json({product: product})
        }

    })
    
});

app.post('/api/products', (req, res) => {
    if(!(req.body.id in ids)){
        ids.push(req.body.id)
        const product = req.body
        products.push(product)
        console.log('/////////////////////////////')
        console.log(products)
        res.json('product added successfully');
    } else {
        res.status(400).json({msg: "id must be unique"});
    } 
});


app.put('/api/products/:id', (req, res) => {
    if (req.body.id in ids){
        products.forEach((product, index) => {
            if (product.id == req.body.id){
                products[index].title = req.body.title
                products[index].description = req.body.description
            }
        })
        console.log('/////////////////////////////')
        console.log(products)
        res.json('updated products details');
    } else {
        res.status(400).json('No product with the passed id');
    }
    
});


app.delete('/api/products/:id', (req, res) => {
    if (req.body.id in ids){
        products.forEach((product, index) => {
            if (product.id == req.body.id){
                products.splice(index,1)
            }
        })
        console.log('/////////////////////////////')
        console.log(products)
        res.json('deleted products details');
    } else {
        res.status(400).json('No product with the passed id');
    }
});

app.listen(3000, () =>{ console.log('Listening on port 3000!')})