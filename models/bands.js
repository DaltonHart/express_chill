const db = require("../db");

/**
 * 
 * @param {*} callback function(err,data){}
 */
const all = (callback) => {
  // use my db connection to go and get my bands from the db 
      // once i get my bands I will pass the data into the callback 
  db.query(
    `SELECT * 
        FROM bands;`,
    function (err, results) {
      if(err) return callback(err); 
      return callback(null, results);
    }
  );
}

/**
 * 
 * @param {*} options {column: "name", value: "daft punk"}
 * @param {*} callback 
 */
const filter = (options,callback) => {
  const {column, value} = options;

  db.query(
    `SELECT * 
        FROM bands
          WHERE ${column}="${value}";`,
    function (err, results) {
      if(err) return callback(err); 
      return callback(null,results);  
    }
  );
}


module.exports = {
  all,
  filter
}