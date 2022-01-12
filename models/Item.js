const {sequelize, DataTypes, Model} = require('../db/db');

class Item extends Model {}

Item.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
}, {
    sequelize,
    timestamps: false,
});

// Restaurant.hasMany(Menu)
// Menu.hasMany(Item)
// Menu.belongsTo(Restaurant)
// Item.belongsTo(Menu)

module.exports = {
   
    Item
};

