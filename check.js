const oracledb = require('oracledb');

async function run() {

  let connection;

  try {

    connection = await oracledb.getConnection({ user: "c##fahad", password: "password", connectionString: "localhost/orcl" });

    console.log("Successfully connected to Oracle Database");

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

run();