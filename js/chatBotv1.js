//closed domain chatbot, very limited scope

var regex_intents = {};
regex_intents.hawHaw = [
  new RegExp(/haw haw|nelson|simpsons|homer|marge|bart/), 'hawhaw'
];
regex_intents.userName = [
  new RegExp( /my name is (\w*)/), 'userName'
];
regex_intents.userAgeNum = [
  new RegExp(/(\d{1,2}) years old|age[^\d]*(\d+)|i am (\d+)/), 'age'
];
//regex_intents.userAgeBornIn = [
  //new RegExp(/,'age')
//];
regex_intents.helloRe = [
  new RegExp(/^(.* )?(hello|hey|hi)([ \,\.].*)?$/,'g'), "hello"
];
regex_intents.goodbyeRe = [
  new RegExp(/^(.* )*(bye|adios|goodbye|holla|see you later)([\.\, ].*)?$/),'bye'
];
regex_intents.feeling = [
  new RegExp(/^(.* )?(how are you)([ \,\.].*)?$/,'g'), 'feeling'
];
regex_intents.what = [
  new RegExp(/^(.* )?(what|who|why|when|how)([ \,\.].*)?$/,'g'),'what'
];
regex_intents.longLength = [
  new RegExp(/.{250,}/,'g'),'long'
];
regex_intents.positive = [
  new RegExp(/great|awesome|cool|nice/),'positive'
];
regex_intents.months = [
  new RegExp(/january|february|march|april|may|june|july|august|september|october|november|december/), 'months'
];


function getIntent(userInput) {
  for (var re in regex_intents) {
    if (userInput.match(regex_intents[re][0])){
      console.log(regex_intents[re][1]);
      return regex_intents[re][1];
    }
  }
  return "none";
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateResponse(userInput){
  item = getIntent(userInput);
  switch (item) {
    case 'months':
      console.log(userInput.match(regex_intents.months[0]));
      localStorage.setItem('month', userInput.match(regex_intents.months[0])[0]);

      return 'Nice!';
      break;
    case 'hawhaw':
      return homerQuotes(getRandomInt(0,20));
      break;
    case 'hello':
      return hello(userInput, getRandomInt);
      break;

    case 'age':
      return age(userInput);
      break;
    case 'bye':
      return bye(getRandomInt(0,7));
      break;
    case 'what':
      return 'Interesting Question';
      break;
    case 'feeling':
      return feeling(0);
      break;
    case 'long':
      return long(userInput, getRandomInt(0,20));
      break;
    case 'userName':
      return userName(userInput, getRandomInt(0,20));
      break;
    default:
      return 'Due to my limited scope, I am unable to understand you. My apologies';
  }
}

function addElement (user) {
  var input = user.toLowerCase();
  var userh3 = document.createElement("h3");
  userh3.id = "userResponse";
  userh3.className= "userResponse";
  var userInput = document.createTextNode(user);
  userh3.appendChild(userInput);
  var both3 = document.createElement("h3");
  both3.id = "botResponse";
  both3.className = "botResponse";

  var botInput = (document.createTextNode(generateResponse(input))); // getting bot response
  both3.appendChild(botInput);
  var conversationDiv = document.getElementById("conversation");

  conversationDiv.appendChild(userh3);
  conversationDiv.appendChild(both3);
}

function keyPressFunction() {
  console.log('hrllo');
  var el = document.getElementById("userInput");
  if (el.value == "" || el.value.trim() == ""){
    //el.value = "";
    el.style.height = "25px";
  }
  else {
    addElement(el.value.trim());
    return false;
    el.style.height = "25px";
  }
}
function scrollSmoothToBottom (id) {
   var div = document.getElementById(id);
   $('#' + id).animate({
      scrollTop: div.scrollHeight - div.clientHeight
   }, 500);
}

document.querySelector('#userInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    keyPressFunction();

    document.getElementById("userInput").value = "";
    event.preventDefault();
    var elementsBot = document.getElementsByClassName('botResponse');
    for (var i=0; i<elementsBot.length; i++) {
      if (elementsBot.item(i).clientWidth / document.getElementById("innerconv").clientWidth > 0.6){
        elementsBot.item(i).style.width = '60%';
      }
    }

    var elementsUser = document.getElementsByClassName('userResponse');
    for (var i=0; i<elementsUser.length; i++) {
      if (elementsUser.item(i).clientWidth / document.getElementById("innerconv").clientWidth > 0.6){
        elementsUser.item(i).style.width = '60%';
      }
    }
    scrollSmoothToBottom('table');
  }
});

// if there are any issues with the input, they are likely here -
(function($) {
  $.fn.hasScrollBar = function() {
    return this.get(0).scrollHeight > $( this ).innerHeight();
  }
})(jQuery);
function heightChange() {
  if ($('#userInput').hasScrollBar()) {
    $('#userInput').css('height', $('#userInput').get(0).scrollHeight - 2);
  }
}

const input = document.querySelector('#userInput');
$(document).ready(function() {
  $('#userInput').on('input', function() {
    heightChange();
  });
});

const _MS_PER_DAY = 1000 * 60 * 60 * 24;
// a and b are javascript Date objects
function dateDiffInWeeks(a, b) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.abs(Math.floor((utc2 - utc1) / (_MS_PER_DAY * 7)));
}
