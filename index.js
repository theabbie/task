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
         await axios.post("https://www.youthkiawaaz.com/wp-admin/admin-ajax.php?action=yka_view_count&post_id=713208");
         await axios.post("https://www.youthkiawaaz.com/wp-admin/admin-ajax.php?action=yka_view_count&post_id=714267");
         await axios.post("https://www.youthkiawaaz.com/wp-admin/admin-ajax.php?action=yka_view_count&post_id=713412");
         await axios.post("https://www.youthkiawaaz.com/wp-admin/admin-ajax.php?action=yka_view_count&post_id=713506");
         await axios.post("https://www.youthkiawaaz.com/wp-admin/admin-ajax.php?action=yka_view_count&post_id=713258");
         await axios.post("https://www.youthkiawaaz.com/wp-admin/admin-ajax.php?action=yka_view_count&post_id=713317");
         await axios.post("https://www.youthkiawaaz.com/wp-admin/admin-ajax.php?action=yka_view_count&post_id=711527");
         await axios.post("https://www.youthkiawaaz.com/wp-admin/admin-ajax.php?action=yka_view_count&post_id=711520");
         await axios.post("https://www.youthkiawaaz.com/wp-admin/admin-ajax.php?action=yka_view_count&post_id=713393");
         await axios.post("https://www.youthkiawaaz.com/wp-admin/admin-ajax.php?action=yka_view_count&post_id=713425");
       }
       catch (e) {continue;}
   }
 }
 catch (e) {
   console.log(e.message);
 }
})();
