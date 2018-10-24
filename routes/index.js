var express = require('express');
var router = express.Router();
var fs = require('fs');
var PDFDoc = require('pdfkit');
var Mustache = require('mustache');
var PDF = require('html-pdf');
var myData = [];


var fullHtmlContent = function(){
  var output = '<!DOCTYPE html> \
  <html> \
    <head> \
      <link rel="stylesheet" href="/stylesheets/style.css" /> \
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" /> \
      <script src=”https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.bundle.min.js”></script> \
    </head> \
    <body>';
  output += partialHtmlContent();
  output += '</body> \
  </html>';
  var fullData = Mustache.render(output);
  return fullData;
}
var partialHtmlContent = function () {
  var output = "";
  for (var i = 0; i < myData.length; i++) {
    output += '<div class="row"> \
    <div class="col-md-4">' + myData[i].name + '</div> \
    <div class="col-md-4">' + myData[i].email + '</div> \
    <div class="col-md-4">' + myData[i].phone + '</div> \
    </div>';
  }
  return output;
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.post('/details', function (req, res) {
  myData.push({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  });
  res.render('details', {
    data: myData
  });
});

router.get('/pdf', function (req, res) {
  // var pdf = new PDFDoc();
  // pdf.pipe(fs.createWriteStream('output.pdf'));
  var docHTML = fullHtmlContent();
  // pdf.fontSize(25)
  //  .text('Some text with an embedded font!', 100, 100)
  // pdf.end();

  var filename = "";
  PDF.create(docHTML).toFile('output.pdf', function(err, res){
    filename = res.filename;
  });

  fs.writeFile('./views/pdf.hbs', partialHtmlContent(), function(err){
    if(err)
      throw err;
  });

  res.render('pdf');
  
});


module.exports = router;