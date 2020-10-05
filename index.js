const axios = require("axios");
const fs = require("fs");
var url = require("url");
var devRant = require("rantscript");
var cheerio = require("cheerio");

(async function() {
   try {
     var rants = (await axios("https://del.dog/raw/rants")).data.split("\n").slice(0,1000);
     console.log("START");
     for (id of rants) {
         try {
         var rant = await devRant.rant(id);
         var time = new Date(rant.rant["created_time"]*1000);
         await axios.post("https://admin-2s999zpqryz3.runkit.sh/?time=" + d.getFullYear() + '/' + d.getMonth() +'/' + d.getDate() + '/' + d.getDay());
      }
       catch (e) {continue;}
     }
 }
 catch (e) {
   console.log(e.message);
 }
})();
