const axios = require("axios");
const fs = require("fs");
var url = require("url");
var devRant = require("rantscript");
var cheerio = require("cheerio");
var i = 0;

(async function() {
   try {
     console.log("START");
     while (true) {
       try {
         console.log(i++);
         await axios.post("https://www.youthkiawaaz.com/wp-admin/admin-ajax.php?action=yka_view_count&post_id=714624");
         await axios("https://www.youthkiawaaz.com/wp-admin/admin-ajax.php?action=yka_like&post_id=714624");
       }
       catch (e) {continue;}
   }
 }
 catch (e) {
   console.log(e.message);
 }
})();
