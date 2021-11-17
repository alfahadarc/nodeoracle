    var {run} = require('./../Database/connection')
    var connection

async function getEmployess(req,res){
    
    try{
      connection = await run();
      result = await connection.execute(`SELECT * FROM EMPLOYEES`);
    }catch(err){
      console.log(err)
    }finally{
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

  function foo(){
      console.log("khabar")
  }

module.exports.getEmployess = getEmployess;
module.exports.foo = foo;