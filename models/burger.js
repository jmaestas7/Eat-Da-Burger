let orm = require('../config/orm.js');
// create the code that will call the ORM functions using burger specific input for the ORM.

let burger = {
    selectAll: function(burgerInput) {
    orm.selectAll(burgers, function(res) {
        burgerInput(res);
    });
},
    insertBurger: function (burger_name, desc, cost, burgerInput) {
    orm.insertOne(burger_name, desc, cost, function (res) {
        burgerInput(res);
    });
},
    updateOne: function (colName, cellName, colVal, cellVal, burgerInput) {
    orm.updateOne(colName, cellName, colVal, cellVal, function (res) {
        burgerInput(res);
    });
}

}

module.exports = burger;