const {sequelize, DataTypes, Model} = require('../index');

const Menu = require('./Menu');
const { Restaurant } = require('./Restaurant');

class Item extends Model {

    

}
Item.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
}, {
    sequelize,
    timestamps: false,
});

module.exports = {
    Item
};

Item.belongsTo(Menu)