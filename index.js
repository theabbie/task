var axios = require("axios")
var rgag = require("random-gag");
var fs = require("fs");
var dl = require("dlurl");
var i = 0;

(async function() {
try {
while (true) {
try {
console.log(i++);
var gag = await rgag();
var img = fs.createReadStream(await dl(gag.images.image460.url));
var meme = await axios({
  url: 'https://makeameme.org/ajax/uploader.php?qqfile=meme.jpg',
  method: 'POST',
  data: img,
  headers: {
    'x-file-name': 'meme.jpg',
    'Content-Type': 'application/octet-stream'
  }
});
await axios({
  url: 'https://makeameme.org/ajax/createMeme.php',
  method: 'POST',
  data: 'meme='+meme.data.filename+'&title-text=TheAbbie:+'+gag.title.split(' ').join('+'),
  headers: {
    cookie: 'PHPSESSID=lrhj0f6udmvv06le034iilkqad'
  }
});
}
catch (e) {
  continue;
}
}
}
catch (e) {
 console.log(e.message);
}
})();
