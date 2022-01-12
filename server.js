const express = require('express');
const req = require('express/lib/request');
const { Restaurant, Menu, Item } = require('./db/index');
const app = express();

console.log("express:", express)
console.log("express():", express)
console.log("app:", app)
// console.log("EXPRESS.JSON:", express().json())


const {seed} = require('./seed')

port = 3000

// app.get("/", async(request, response)=>{

//     response.send('<H1>hello<H1>')
// })

// app.use(express.static('public'));


//parse json - middleware
app.use(express.json());


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
    console.log(rest)
    console.log(request.body)
    response.json(rest)

    
})

app.post("/restaurants", async(request, response)=>{
    const rest = await Restaurant.create(request.body)
    response.json(rest)
})

app.put("/restaurants/:id", async(request, response)=>{
    // const rest = await Restaurant.findByPk(request.params.id)
    // rest.updater(request.body)
    // const rest =
    await Restaurant.update(
    request.body,
    {where: { id: request.params.id}})
    response.send("Updated")
})

app.delete("/restaurants/:id", async(request, response)=>{
    await Restaurant.destroy( 
    {where: { id: request.params.id}})
    response.send("Deleted")
})


// app.post("/restaurants", async(request, response)=>{
//     const rest = new Restaurant(request.body)
//     response.json(rest)
// })

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