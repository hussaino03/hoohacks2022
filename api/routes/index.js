var express = require('express');
var router = express.Router();
var cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: 'dekqw8osx', 
    api_key: '441489766212891', 
    api_secret: 'QF6fCMKBBe4G-GZwqziSAD6Ino4' 
  });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/addimage', function(req, res, next) {
  console.log('hi!!!');
  console.log(req.body);
  

  // cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  //   function(error, result) {console.log(result); console.log(error)});
});


module.exports = router;
