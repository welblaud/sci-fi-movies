var express = require('express');
var router = express.Router();

/* GET add movie page. */
router.get('/', function(req, res, next) {
  res.render('add-a-movie', { title: 'Přidat film' });
});

/* GET add movie page. */
router.post('/', function(req, res, next) {

  let sqlite3 = require( 'sqlite3').verbose();

  const nazev = req.body.nazev;
  const poster = req.body.poster;
  const description = req.body.description;

  let db = new sqlite3.Database( './movies_db.db', (err) => {
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

});

module.exports = router;
