const {sequelize, DataTypes, Model} = require('./index');




class Restaurant extends Model {

   

}
Restaurant.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});




class Menu extends Model {}

Menu.init({
    name: DataTypes.STRING,
    hours: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

class Item extends Model {

    

}
Item.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
}, {
    sequelize,
    timestamps: false,
});

Restaurant.hasMany(Menu)
Menu.hasMany(Item)
Menu.belongsTo(Restaurant)
Item.belongsTo(Menu)

module.exports = {
    Restaurant,
    Menu,
    Item
};