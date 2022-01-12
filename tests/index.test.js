
const {Restaurant, Menu, Item} = require('../index.js')
const {sequelize} = require('../db');






describe('Restaurant Class', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    })
    
    test('restaurants has a name', async () => {
        const restaurant = await Restaurant.create({name: 'Atlas Meatless', location: 'Miami'});
        expect(restaurant.name).toBe('Atlas Meatless');
    })

    test('restaurants has a location', async () => {
        const restaurant = await Restaurant.create({name: 'Atlas Meatless', location: 'Miami'});
        expect(restaurant.location).toBe('Miami');
    })

})



describe('Menu Class', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    })
    
    test('Menu has a name', async () => {
        const menu = await Menu.create({name: 'Late Night', hours: "9pm-2pm"});
        expect(menu.name).toBe('Late Night');
    })

    test('menu has hours', async () => {
        const menu = await Menu.create({name: 'Late',hours: "9pm-2am"});
        expect(menu.hours).toBe('9pm-2am');
    })

})

describe('Relationships', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    })
    
    test('restaurants have menus', async () => {
        const restaurant = await Restaurant.create({name: 'Atlas Meatless', location: 'Miami'})
        const menu = await Menu.create({name: 'Breakfast', hours: "9am-12pm"});
        await restaurant.addMenu(menu);
        const menus = await restaurant.getMenus();
        expect(menus[0].name).toBe('Breakfast');
    })

})