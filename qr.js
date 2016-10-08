'use strict';
const qr = require("qr-image");
const fs = require("fs");

var dataToEncode = process.argv[2] || null;
let outImage = process.argv[3] || null;

if(dataToEncode !== null && outImage !== null){
	qr.image(dataToEncode,{
		type: 'png',
		size: 20
	}).pipe(fs.createWriteStream(outImage));

	console.log('QR Code Generated..!!');
}else{
	console.log('Error.. Check command line Arguments..');
}