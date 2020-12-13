var axios = require("axios")
var rgag = require("random-gag");
var fs = require("fs");
var fd = require("form-data");
var axios = require("axios")
var dl = require("dlurl");
var Tenor = require("tenor-api");
var tenor = new Tenor();
var poetizer = require("poetizer");
var { text } = require("theabbie");
var pt = new poetizer();
pt.addToken(process.argv[2]);
var i = 0;

(async function() {
while (true) {
  try {
    console.log(i++);
    await pt.post(text(3),text(50)+'\n\n'+text(150)+'\n\n'+text(50),[text(1),text(1),text(1)]);
  }
  catch(e) {
    continue;
  }
}
})();
