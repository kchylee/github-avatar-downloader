var request = require('request');

console.log('Welcome to the Github Avatar Downloader!');

var GITHUB_USER = "kchylee";
var GITHUB_TOKEN = "a87af952cbc3561942e9308e79476650d1d163fe";

var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + 'jquery' + '/' + 'jquery' + '/contributors';


console.log(requestURL);
function getRepoContributors (repoOwner, repoName, cb){

}

getRepoContributors(jquery, jquery, function(err, result){
  console.log('Errors: ', err);
  console.log('Result: ', result);
});