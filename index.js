var Ifunny = require("node-ifunny");
var rgag = require("random-gag");

(async function() {
 try {
  var ifunny = new Ifunny();
  await ifunny.addToken(process.argv[2]);
   while (true) {
    try {
      var gag = await rgag();
      //while (gag.type!="Photo") gag = await rgag();
      if (gag.type=="Photo") console.log(await ifunny.postimg(gag.images.image700.url,gag.title,gag.tags.map(x=>x.key)));
      else console.log(await ifunny.postvid(gag.images.image460sv.url,gag.title,gag.tags.map(x=>x.key)));
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
