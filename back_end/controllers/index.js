var express = require( 'express' );
var router = express.Router();
var path = require( 'path' );

router.use( '/api/portfolio', require( './portfolio' ) );
router.use( '/api/shares', require( './shares' ) );

module.exports = router;