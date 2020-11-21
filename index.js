var Ifunny = require("node-ifunny");
var rgag = require("random-gag");
var uns = require("unshorten.it");

(async function() {
 try {
   while (true) {
    try {
      await uns("https://g.co/kgs/x7WjhR");
     }
     catch (e) {
      console.log(e.message);
     }
   }
  }
  catch (e) {
    console.log(e.message);
  }
})();
