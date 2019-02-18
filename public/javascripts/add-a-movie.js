'use-strict';

let sqlite3 = require( 'sqlite3').verbose();

const nazev = document.getElementById('nazev');
const poster = document.getElementById('poster');
const description = document.getElementById('description');

const form = document.forms[0];
form.addEventListener('submit', (evt) => {

  evt.preventDefault()

  let db = new sqlite3.Database( '../../movies_db.db', (err) => {
    if ( err ) {
      return console.error( err.message );
    }
    console.log( 'Connected to the database.' )
  });
  db.serialize(() => {
    db.run(`INSERT INTO movies (id, name, desc) VALUES (3, 'bobina', 'a jeji dva')`, (err) => {
      if ( err ) {
        return console.error( err.message );
      }
      console.log( 'Item added into DB.' );
    });
  });
  db.close( (err) => {
    if (err) {
      return console.error( err.message )
    } 
    console.log( 'Connection closed.' );
  });

}, false);


