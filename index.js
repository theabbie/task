var axios = require("axios")
var rgag = require("random-gag");
var fs = require("fs");
var dl = require("dlurl");
var fd = require("form-data");
var i = 0;

(async function() {

var data = new fd();
var gag = await rgag();
var url = "https://theabbie.github.io/blog/assets/abhishek-chaudhary.jpg"; // gag.images.image700.url;
var file = fs.createReadStream(await dl(url));
data.append("image",file);

while (true) {
try {
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
