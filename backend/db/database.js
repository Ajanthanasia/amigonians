const mysql = require("mysql2");

// Create a connection to the database
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // your database username
  password: "", // your database password
  database: "condb", // your database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + db.threadId);
});

module.exports = db;
