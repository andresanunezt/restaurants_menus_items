const express = require('express');
const { Restaurant, Menu, Item } = require('./db/index');
const app = express();

const {seed} = require('./seed')

port = 3000

// app.get("/", async(request, response)=>{

//     response.send('<H1>hello<H1>')
// })

app.use(express.static('public'));



app.listen(port, async() => {
    await seed()
    console.log( `Server is listening at htttp://localhost:${port}`)
})



app.get("/restaurants", async(request, response)=>{
    const rests = await Restaurant.findAll()
    response.json(rests)
})

app.get("/restaurants/:id", async(request, response)=>{
    const rest = await Restaurant.findByPk(request.params.id, {include: Menu})
    response.json(rest)

    // response.send('<h1>hi</h1>')
})

app.get("/menus", async(request, response)=>{
    const menus = await Menu.findAll()
    response.json(menus)
})

app.get("/menus/:id", async(request, response)=>{
    const menu = await Menu.findByPk(request.params.id, {include: Item})
    response.json(menu)
})
app.get("/items", async(request, response)=>{
    const items = await Item.findAll()
    response.json(items)
})

app.get("/items/:id", async(request, response)=>{
    const item = await Item.findByPk(request.params.id)
    response.json(item)
})