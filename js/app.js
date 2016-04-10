var quote = '';
var author = '';
var quoteDest = document.querySelector('#text');
var authorDest = document.querySelector('#author');
var quoteBtn = document.querySelector('.new-quote');
var twitBtn = document.querySelector('.twit');

function getQuote() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://andruxnet-random-famous-quotes.p.mashape.com/', true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      quote = JSON.parse(request.responseText).quote;
      author = JSON.parse(request.responseText).author;
      quoteDest.innerHTML = quote;
      authorDest.innerHTML = author;
    } else {
      // We reached our target server, but it returned an error
    }
  };
  request.onerror = function() {
    var quotes = {
      1: ['Life is a box of chocolates, Forrest. You never know what you\'re gonna get.', 'Mrs Gump/Sally Field in Forrest Gump'],
      2: ['May the Force be with you.', 'Han Solo/Harrison Ford in Star Wars'],
      3: ['If you want something, go get it. Period.', 'Chris Gardner, from The Pursuit of Happyness'],
      4: ['Be determined. Instead of intending to just try, do it.', 'Yoda, Star Wars Episode V: The Empire Strikes Back'],
      5: ['The first rule of Fight Club is: You do not talk about Fight Club.', 'Fight Club']
    };
    var randomQuoteNumber = Math.ceil(Math.random() * Object.keys(quotes).length);
    quoteDest.textContent = quotes[randomQuoteNumber][0];
    authorDest.textContent = quotes[randomQuoteNumber][1];
  }
  request.setRequestHeader(
    'X-Mashape-Key', 'YUgYUlqi9YmshakqSt2HWVZ9AdoIp1CT5gZjsnR5gyhgwi1U4S');
  request.send();
}

function twit() {
  var myUrl = 'https://twitter.com/intent/tweet?text=' + quote + ' ' + author;
  window.open(myUrl, 'twitter');
  return false;
}

quoteBtn.addEventListener('click', getQuote);

twitBtn.addEventListener('click', twit);
