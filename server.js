// Import Express
const express = require('express')

// Create an Express app
const app = express()

// Define routes here (we'll add them soon)
//route 1
app.get('/greetings/:name',(req,res) => {
    res.send(`Hello there, ${req.params.name}!`)
});

//route 2
app.get('/roll/:number', (req,res) => {
    let number = req.params.number
    if (isNaN(number) === true) {
        res.send('You must specify a number')
    } else {
        res.send(`You rolled a ${Math.floor(Math.random() * number) +1} `)
    }
});

//route 3
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get('/collectibles/:index', (req,res) => {
    // let item = parseInt(req.params.index, 10);
    // if (item === 0){
    //     res.send(`So, you want the ${collectibles[0].name}? For ${collectibles[0].price}, it can be yours!`)
    // } else if (item === 1) {
    //     res.send(`So, you want the ${collectibles[1].name}? For ${collectibles[1].price}, it can be yours!`)
    // } else if (item === 2) {
    //     res.send(`So, you want the ${collectibles[2].name}? For ${collectibles[1].price}, it can be yours!`)
    // } else {
    //     res.send('This item is not yet in stock. Check back soon!')
    // }
    let index = req.params.index 
        if (collectibles[index]) {
            res.send(`So, you want the ${collectibles[index].name}? For ${collectibles[index].price}, it can be yours!`)
        } else {
                res.send('This item is not yet in stock. Check back soon!')
            }
    
})

//route 4
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];





app.get('/shoes', (req,res) => {
    if (req.query['min-price']) {
        let minPrice = [];
        shoes.forEach(shoe => {
            if (shoe.price >=req.query['min-price']){
                minPrice.push(shoe)
            }
        })
        res.send(minPrice)
        return
    }
    if (req.query['max-price']) {
        let maxPrice = [];
        shoes.forEach(shoe => {
            if (shoe.price <=req.query['max-price']){
                maxPrice.push(shoe)
            }
        })
        res.send(maxPrice)
        return
    }
    if (req.query['type']) {
        let type = [];
        shoes.forEach(shoe => {
            if (shoe.type === req.query['type']){
                type.push(shoe)
            }
        })
        res.send(type)
        return
    } 
    res.send(shoes)
    return
});

// req.query.min-price // will NOT work
// req.query[‘min-price’] // WILL work


// app.get()


// app.get('', (req,res) => {
//     if 
// });  


// Listen for requests on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000')
  })
  