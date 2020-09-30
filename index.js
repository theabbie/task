const axios = require("axios");
const fs = require("fs");
var url = require("url");
var devRant = require("rantscript");
var cheerio = require("cheerio");

(async function() {
   var scores = {};
   try {
     var rants = (await axios("https://del.dog/raw/rants")).data.split("\n");
     console.log("START");
     for (id of rants) {
         try {
         var rant = await devRant.rant(id);
         scores[rant.rant["user_id"]] = rant.rant["user_score"];
         for (comment of rant.comments) {
           scores[comment["user_id"]] = comment["user_score"];
       }
      }
       catch (e) {continue;}
     }
     var ranks = [];
     for (x in scores) {
       ranks.push([x,scores[x]]);
    }
    ranks = ranks.sort((a,b)=>b[1]-a[1]).map(t=>t[0]+": "+t[1]);
    console.log(ranks.join("\n"));
 }
 catch (e) {
   console.log(e.message);
   console.log(scores);
 }
})();
