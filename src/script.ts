const api = 'http://api.icndb.com/jokes/random/';

declare var $;

(():void =>
{
    let tweet = $('#tweet');
    let generateBtn = $('#randomBtn');
    let targetDiv = $('#quote');

    $.getJSON(api, (result) =>
    {
       targetDiv.html(result.value.joke);
       buildTweet(result.value.joke);
   });

    generateBtn.on('click', (() =>
    {
          $.getJSON(api, (result)=>
          {
              targetDiv.html(result.value.joke);
              buildTweet(result.value.joke);
          });
     }));

    let buildTweet = (quote) =>
    {
      tweet.attr('href', 'https://twitter.com/intent/tweet?hashtags=ChuckNorrisQuotes&text=' + encodeURIComponent('"' + quote + '"')).attr('target', '_blank');
    }
})();
