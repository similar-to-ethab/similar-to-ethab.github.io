/*var tweets = document.getElementsByClassName('twitter-tweet');


<meta name="twitter:widgets:theme" content="light">
document.getElementsByTagName('head')[0].append()

for (var i = 0; i < tweets.length; i++) {
  if (document.getElementsByTagName('html')[0].classList.contains('darkmode')){
    tweets[i].classList.add('darkTweet');
    tweets[i].classList.remove('lightTweet');
    document.querySelector('meta[name="twitter:widgets:theme"]').setAttribute("content",'dark');
    console.log(document.querySelector('meta[name="twitter:widgets:theme"]'),document.getElementsByTagName('html')[0].classList.contains('darkmode'));
  }
  else{
    tweets[i].classList.add('lightTweet');
    tweets[i].classList.remove('darkTweet');
    document.querySelector('meta[name="twitter:widgets:theme"]').setAttribute("content",'dark');

    console.log(document.querySelector('meta[name="twitter:widgets:theme"]'),document.getElementsByTagName('html')[0].classList.contains('darkmode'));
  }
  //tweets[i].classList.add(localStorage.getItem('colormode') == '' || lo'darkTweet');
}


//const target = document.getElementsByTagName('html')[0];

//const config = { attributes: true, childList: false, subtree: false };
/*
const callback = function(mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      console.log('A child node has been added');
    }
    else if (mutation.type === 'attributes') {
      console.log('The ' + mutation.attributeName + ' attribute was modified.');
      if (mutation.attributeName === 'class') {
        console.log(mutation);
        for (var j = 0; j < tweets.length; j++){
          if (mutation.target.classList.contains('darkmode')){

            tweets[j].classList.add('darkTweet');
            tweets[j].classList.remove('lightTweet');
            document.querySelector('meta[name="twitter:widgets:theme"]').setAttribute("content",'dark');
            console.log(document.querySelector('meta[name="twitter:widgets:theme"]'));
          }
          else{
            tweets[j].classList.add('lightTweet');
            tweets[j].classList.remove('darkTweet');
            document.querySelector('meta[name="twitter:widgets:theme"]').setAttribute("content",'light');
            console.log(document.querySelector('meta[name="twitter:widgets:theme"]'));
          }


        }
      }
    }
  }
}

const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(target, config);
* /
twttr.ready(function (twwtr){
  twttr.widgets.createTweet(
    '20',
    document.getElementById('container'),
    {
      theme: 'dark'
    }
  );
});*/
