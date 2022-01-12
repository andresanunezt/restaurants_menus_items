

const {Restaurant} = require('../models/Restaurant')
const {Menu} = require('../models/Menu')
const {Item} = require('../models/Item')

Restaurant.hasMany(Menu)
Menu.hasMany(Item)
Menu.belongsTo(Restaurant)
Item.belongsTo(Menu)

module.exports = {
        Restaurant,
         Menu,
         Item
     };

