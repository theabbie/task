const axios = require("axios");
const fs = require("fs");
var url = require("url");
var devRant = require("rantscript");
var cheerio = require("cheerio");

(async function() {
   var scores = {};
   try {
     /*var i = 215000;
     var rants = (await axios("https://del.dog/raw/rants")).data.split("\n").slice(215000);
     console.log("START");
     for (id of rants) {
         i++;
         try {
         if (i%1000==0) {console.log(i);await axios.post("https://admin-2s999zpqryz3.runkit.sh/",scores);}
         var rant = await devRant.rant(id);
         scores[rant.rant["user_id"]] = rant.rant["user_score"];
         for (comment of rant.comments) {
           scores[comment["user_id"]] = comment["user_score"];
       }
      }
       catch (e) {continue;}
     }*/
     scores = (await axios("https://codrcrew.firebaseio.com/main/devrant.json")).data;
     var ranks = [];
     for (x in scores) {
       ranks.push([x,scores[x]]);
    }
    ranks = ranks.sort((a,b)=>b[1]-a[1]).slice(0,100);
    var k = 0;
    for (t of ranks) {
        var profile = (await devRant.profile(t[0]));
        console.log(++k+". @"+profile.username+": "+Math.floor(1000*t[1]/(profile.content.counts.rants+profile.content.counts.comments+profile.content.counts.collabs))/1000);
     }
 }
 catch (e) {
   console.log(e.message);
   console.log(scores);
 }
})();
