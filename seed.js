

const {Restaurant} = require('./models/Restaurant')
const {Menu} = require('./models/Menu')
const {Item} = require('./models/Item')
const {sequelize} = require('./db/db')


async function seed(){

    await sequelize.sync({force: true});

    const testRestaurant = await Restaurant.create({name: "The Beatles Cafe",location: "Liverpool, UK" })
    
    const tDBreakfast = await Menu.create({name: "Breakfast", hours: "8am-12pm"})
    const tDLunch = await Menu.create({name: "Lunch", hours: "12pm-6pm"})
    const tDDinner = await Menu.create({name: "Dinner", hours: "6pm-11pm"})
    
    const oj = await Item.create({name: "Orange Juice",price: 3.99 })
    const eggs = await Item.create({name: "Eggs",price: 5.99})

    const softDrink = await Item.create({name: "Soft Drink",price: 2.99 })
    const sandwhich = await Item.create({name: "Sandwhich",price: 5.99 })

    const wine = await Item.create({name: "Wine",price: 8.99 })
    const steak = await Item.create({name: "Steak",price: 12.99 })

    await testRestaurant.addMenu(tDBreakfast)
    await testRestaurant.addMenu(tDLunch)
    await testRestaurant.addMenu(tDDinner)

    await tDBreakfast.addItem(oj)
    await tDBreakfast.addItem(eggs)

    await tDLunch.addItem(softDrink)
    await tDLunch.addItem(sandwhich)
   
    await tDDinner.addItem(wine)
    await tDDinner.addItem(steak)

    const testRestaurant2 = await Restaurant.create({name: "The Cafe",location: "Brooklyn, NY" })
    
    const tDBreakfast2 = await Menu.create({name: "Breakfast", hours: "9am-11Am"})
    const tDLunch2 = await Menu.create({name: "Lunch", hours: "12pm-4pm"})
    const tDDinner2 = await Menu.create({name: "Dinner", hours: "6pm-9Pm"})
    
    const oj2 = await Item.create({name: "Carrot Juice",price: 6.99 })
    const eggs2 = await Item.create({name: "Eggs Sandwhich",price: 8.99})

    const softDrink2 = await Item.create({name: "Green Juice",price: 7.99 })
    const sandwhich2 = await Item.create({name: "Vegan Wrap",price: 5.99 })

    const wine2 = await Item.create({name: "Merlot",price: 10.99 })
    const steak2 = await Item.create({name: "Pasta",price: 12.99 })

    await testRestaurant2.addMenu(tDBreakfast2)
    await testRestaurant2.addMenu(tDLunch2)
    await testRestaurant2.addMenu(tDDinner2)

    await tDBreakfast2.addItem(oj2)
    await tDBreakfast2.addItem(eggs2)

    await tDLunch2.addItem(softDrink2)
    await tDLunch2.addItem(sandwhich2)
   
    await tDDinner2.addItem(wine2)
    await tDDinner2.addItem(steak2)

}

module.exports = {seed}