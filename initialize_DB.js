let sqlite3 = require( 'sqlite3' ).verbose();

// Creating or opening existing DB.
let db = new sqlite3.Database( './movies_db.db', (err) => {
  if ( err ) {
    return console.error( err.message );
  }
  console.log( 'Connected to the database.' )
});
/* // Creating new table
db.serialize(() => {
  db.run('CREATE TABLE movies (id INTEGER, name TEXT, desc TEXT)');
});
// Inserting new data
db.serialize(() => {
  db.run('INSERT INTO movies (id, name, desc) VALUES (1, "Marťan", "Ten s břitvou.")', (err) => {
    if ( err ) {
      return console.error( err.message );
    }
    console.log( 'Item added into DB.' );
  });
});
*/
// Querying data
db.serialize(() => {
  db.each('SELECT name as nazev, desc as popis FROM movies', (err, row) => {
    if ( err ) {
      return console.error( err.message );
    }
    console.log( row.nazev + '\t' + row.popis);
  });
});
db.close( (err) => {
  if (err) {
    return console.error( err.message )
  }
  console.log( 'Connection closed.' );
});
