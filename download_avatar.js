var request = require('request');
var fs = require('fs');

var args = process.argv.slice(2);
if (args == ""){
  console.log("Input required");
  return;
}

var GITHUB_USER = "kchylee";
var GITHUB_TOKEN = "a87af952cbc3561942e9308e79476650d1d163fe";

function getRepoContributors (repoOwner, repoName, cb){
  var requestURL = 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  var options = {
    url: requestURL,
    method: "GET",
    headers: {
      'User-Agent': 'skratchtherecord'
    }
  }
  request(options, function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      cb(error, info);
    }else{
      console.log("Error " + response.statusCode + " : " + error);
    }
  })
}

function downloadImageByURL(url, filePath) {
  request.get(url)
    .pipe(fs.createWriteStream(filePath));
}

getRepoContributors(args[0], args[1], function(err, result){
  if(!err){
    for (index in result){
    downloadImageByURL(result[index].avatar_url, "avatars/" + result[index].login + ".jpg");
    }
  }
  console.log("Download complete");
});

