const User = require('../models/user');
module.exports =  function (app) {
   app.get('/users', (req,res) => {
      User.getUsers((err,data) => {
         res.status(200).send({"users":data});
      });
   });

   app.get('/users/:id', (req,res) => {
      const id = req.params.id;
      User.getUserId(id,(err,data) => {
         res.status(200).json(data);
      });
   });

   app.delete('/users/:id', (req,res) => {
      const id = req.params.id;
      User.deleteUserId(id,(err,data) => {
         if (data && data.msg === 'eliminado' || data.msg === 'no existe') {
            res.status(200).json({
               succes: true,
               data
            });
         } else {
            res.status(500).json({
               msg: 'Error'
            });
         }
      });
   });
}
