const {sequelize, DataTypes, Model} = require('../index');


const Menu = require('./Menu')

class Restaurant extends Model {

    // add methods here

}
Restaurant.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

module.exports = {
    Restaurant
};


Restaurant.hasMany(Menu)
