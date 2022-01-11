const {sequelize, DataTypes, Model} = require('../index');

const Restaurant = require('./Restaurant')
const Item = require('./Item')

class Menu extends Model {

    // add methods here

}
Menu.init({
    name: DataTypes.STRING,
    hours: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

module.exports = {
    Menu
};

Menu.belongsTo(Restaurant)
Menu.hasMany(Item)