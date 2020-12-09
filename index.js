var axios = require("axios")
var rgag = require("random-gag");
var fs = require("fs");
var fd = require("form-data");
var axios = require("axios")
var dl = require("dlurl");
var Tenor = require("tenor-api");
var tenor = new Tenor();
var i = 0;

(async function() {
await tenor.addToken(process.argv[2]);
var memes = (await axios("https://memeful.com/web/ajax/posts?count=1000&page=2")).data.data.map(x=>x.animatedUrl);

for (meme of memes) {
 try {
  await tenor.upload(await dl(meme));
  console.log(meme);
  console.log(i++);
 }
 catch(e) {
   continue;
 }
}
})();
