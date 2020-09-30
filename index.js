const axios = require("axios");
const fs = require("fs");
var url = require("url");
var devRant = require("rantscript");
var cheerio = require("cheerio");

(async function() {
   try {
     var rants = [];
     var maps = ["https://devrant.com/static/devrant/sitemaps/current/devrant_com_sitemap.xml","https://devrant.com/static/devrant/sitemaps/current/devrant_com_sitemap_2.xml","https://devrant.com/static/devrant/sitemaps/current/devrant_com_sitemap_3.xml","https://devrant.com/static/devrant/sitemaps/current/devrant_com_sitemap_4.xml","https://devrant.com/static/devrant/sitemaps/current/devrant_com_sitemap_5.xml"]

     for (p of maps) {
       var k = cheerio.load((await axios(p,{headers: {"User-Agent": "Googlebot-News"}})).data,{xmlMode: true})
       rants = [...rants, ...k("loc").map((i,x)=>+url.parse(k(x).text(),true).pathname.split("/")[2]).get()]
     }
     console.log((await axios.post("https://hastebin.com/documents",rants.join("\n"))).data);
     /*var scores = {};
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
    console.log(ranks.join("\n"));*/
 }
 catch (e) {
   console.log(e.message);
 }
})();
