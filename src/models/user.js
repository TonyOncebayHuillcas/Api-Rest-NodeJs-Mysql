const mysql = require('mysql');
 connection  =  mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: 'Tboh974541372*',
    database: 'node-rest'
});

let userModel = {};

userModel.getUsers = (callback) => {
   if(connection){
      connection.query('SELECT * FROM `node-rest`.users',
      (err, rows)=>{
         if(err){
            throw err;
         } else {
            callback(null, rows);
         }
      });
   }
};

userModel.getUserId = (id,callback) => {
   if(connection){
      connection.query('SELECT * FROM `node-rest`.users WHERE id = ?', id ,
      (err, rows)=>{
         if(err){
            throw err;
         } else {
            callback(null, rows);
         }
      });
   }
};

userModel.deleteUserId = (id,callback) => {
   if(connection){
      let sql =`SELECT * FROM users WHERE id = ${connection.escape(id)}`;

      connection.query(sql,(err, row)=>{
         if(row){
            let sql = `DELETE FROM users WHERE id = ${id}`;
            connection.query(sql,(err,result) => {
               if (err) {
                  throw err;
               } else {
                  callback (null ,{
                     msg : 'eliminado'
                  });
               }
            });
         } else {
            callback(null, {
               msg : 'no existe'
            });
         }
      });
   }
};

module.exports = userModel;
