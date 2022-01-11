const {sequelize} = require('../index');
const {Item} = require('../models/Item')

describe('Item', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create an Item', async () => {
        const restaurant = await Item.create({ name: 'Ronalds', image: 'http://some.image.url' })
        expect(restaurant.id).toBe(1)
    })
})
