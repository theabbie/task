const axios = require("axios");
const fs = require("fs");
var url = require("url");
var devRant = require("rantscript");
var cheerio = require("cheerio");

(async function() {
   try {
     console.log("START");
     while (true) {
       try {
         await axios.post("https://www.youthkiawaaz.com/wp-admin/admin-ajax.php?action=yka_view_count&post_id=713208");
       }
       catch (e) {continue;}
   }
 }
 catch (e) {
   console.log(e.message);
 }
})();
