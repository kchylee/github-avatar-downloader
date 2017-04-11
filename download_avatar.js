var request = require('request');

console.log('Welcome to the Github Avatar Downloader!');

var GITHUB_USER = "kchylee";
var GITHUB_TOKEN = "a87af952cbc3561942e9308e79476650d1d163fe";

function getRepoContributors (repoOwner, repoName, cb){
  var requestURL = 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  var options = {
    url: requestURL,
    method: "GET",
    headers: {
      'User-Agent': 'Github Avatar Downloader - Student Project'
    }
  }
  request(options, function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      cb(error, info);
    }
  });
}

getRepoContributors('jquery', 'jquery', function(err, result){

  for (index in result){
    console.log(result[index].avatar_url);
  }
});