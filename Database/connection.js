const oracledb = require('oracledb');

 async function run() {

  try {
      let connection;

    connection = await oracledb.getConnection({ user: "c##fahad", password: "password", connectionString: "localhost/orcl" });
    console.log("Successfully connected to Oracle Database");
    return connection;
    // result = await connection.execute(`SELECT * FROM COUNTRIES`);
    // console.log(result.rows)

  } catch (err) {
    console.error(err);
  }
}

module.exports.run = run;