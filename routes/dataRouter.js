var express = require('express');
var router = express.Router();
var {run} = require('./../Database/connection')
var connection


router.get('/', function(req, res, next) {
    getCountries(req,res);
  });

  async function getCountries(req,res){
    try{
        connection = await run();
        result = await connection.execute(`SELECT * FROM COUNTRIES`);
    }catch(err){
       console.log(err);
    }
     if (connection) {
         try {
           // Always close connections
           await connection.close();
           console.log('close connection success');
         } catch (err) {
           console.error(err.message);
         }
       }
      if (result.rows.length == 0) {
        //query return zero employees
        res.send('query send no rows');
      } else {
        //send all employees
        res.json(result.rows[0]);
      }
  }


  module.exports = router;

