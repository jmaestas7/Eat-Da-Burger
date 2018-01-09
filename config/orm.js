let connect = require('./connection.js');

let controlls = {
    selectAll: function(burgerInput) {
      let queryString = "SELECT burger_name FROM ??";  //?? - equals a columns or tables  ? - equals a value
      connection.query(queryString, [burgerInput], function(err, result) {
        console.log(result);
      });
    },

    insertBurger: function (burger_name, desc, cost, callback) {
      let queryString = "INSERT INTO burgers (name, burger_desc, burger_cost) VALUES (??, ??, ??)";
      let queryInput = [burger_name, desc, cost];
  
      query(queryString, queryInput, function (error, result) {
  
        console.log(result);
        callback(result);
      });
    },

    updateOne: function (colName, cellName, colVal, cellVal, callback) {
      let queryString = "UPDATE burgers SET ?? = ? WHERE ?? = ?";
      let queryInput = [colName, cellName, colVal, cellVal];
  
      query(queryString, queryInput, function (error, result) {
  
        console.log(result);
        callback(result);
      });
    }
  };
  
  module.exports = controlls;