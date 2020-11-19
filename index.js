var Ifunny = require("node-ifunny");
var rgag = require("random-gag");

(async function() {
 try {
  var ifunny = new Ifunny();
  await ifunny.addToken(process.argv[2]);
  var gag = await rgag();
  //while (gag.type!="Photo") gag = await rgag();
  if (gag.type=="Photo") res.json(await ifunny.postimg(gag.images.image700.url,gag.title,gag.tags.map(x=>x.key)));
  else res.json(await ifunny.postvid(gag.images.image460sv.url,gag.title,gag.tags.map(x=>x.key)));
  }
  catch (e) {
    res.end(e.message);
  }
})();
