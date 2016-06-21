var api = 'http://api.icndb.com/jokes/random/';
(function () {
    var tweet = $('#tweet');
    var generateBtn = $('#randomBtn');
    var targetDiv = $('#quote');
    $.getJSON(api, function (result) {
        targetDiv.html(result.value.joke);
        buildTweet(result.value.joke);
    });
    generateBtn.on('click', (function () {
        $.getJSON(api, function (result) {
            targetDiv.html(result.value.joke);
            buildTweet(result.value.joke);
        });
    }));
    var buildTweet = function (quote) {
        tweet.attr('href', 'https://twitter.com/intent/tweet?hashtags=ChuckNorrisQuotes&text=' + encodeURIComponent('"' + quote + '"')).attr('target', '_blank');
    };
})();
