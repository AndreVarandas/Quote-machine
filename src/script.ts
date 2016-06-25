const api = 'http://api.icndb.com/jokes/random/';
const slogan = ' - via http://ChuckNorrisQuotes.xyz';

declare var $;

(():void =>
{
    let tweet = $('#tweet');
    let generateBtn = $('#randomBtn');
    let targetDiv = $('#quote');
    
    $.getJSON(api, (result) => {
       targetDiv.html(result.value.joke);
       buildTweet(result.value.joke);
   });

    generateBtn.on('click', (() => {
          $.getJSON(api, (result) => {
              targetDiv.html(result.value.joke);
              buildTweet(result.value.joke);
          });
     }));

    let buildTweet = (quote) => {
        quote = fixedQuoteString(quote);
        tweet.attr('href', 'https://twitter.com/intent/tweet?hashtags=ChuckNorrisQuotes&text=' + encodeURIComponent('"' + quote + '"' + slogan)).attr('target', '_blank');
    }

    let fixedQuoteString = (quote) => {
        quote = quote.replace(/&(lt|gt|quot);/g, function (m, p) {
            return (p == "lt") ? "<" : ((p == "gt") ? ">" : "'");
        });
        return quote;
    }
})();
