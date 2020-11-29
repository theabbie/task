var axios = require("axios")
var rgag = require("random-gag");
var fs = require("fs");
var dl = require("dlurl");
var fd = require("form-data");
var i = 0;

(async function() {
while (true) {
try {
var data = new fd();
var gag = await rgag();
var file = fs.createReadStream(await dl(gag.images.image700.url));
data.append("image",file);

var res = await axios({
  url: 'https://img.randme.me/',
  method: 'POST',
  data: data,
  headers: data.getHeaders()
});

console.log(res.data);
}
catch (e) {
  console.log(e.message);
}
}
})();
