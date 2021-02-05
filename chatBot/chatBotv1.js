//closed domain chatbot, very limited scope


var regex_intents = {};

regex_intents.helloRe = [
  new RegExp(/^(.* )?(hello|hey|hi)([ ,\.].*)?$/,'g'), "hello"
];
regex_intents.goodbyeRe = [
  new RegExp(/^(.* )?(bye|adios|goodbye|holla|see you later)( .*)?$/,'g'),'bye'
];
regex_intents.feeling = [
  new RegExp(/^(.* )?(how are you)( .*)?$/,'g'), 'feeling'
];
regex_intents.what = [
  new RegExp(/^(.* )?(what|who|why|when|how)( .*)?$/,'g'),'what'
];

function getIntent(userInput) {
  for (var re in regex_intents) {
    if (userInput.match(regex_intents[re][0])){
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
    case 'hello':
      return 'asdfghgjdhjdasghjshhjhgpologiesasdfghgjdhjdasghjshhjhgpologiesasdfghgjdhjdasghjshhjhgpologiesasdfghgjdhjdasghjshhjhgpologies';
      switch (getRandomInt(0,20)) {
        case 0:
          return 'hi!';
          break;
        case 1:
          return 'Hi!';
          break;
        case 2:
          return 'hi';
          break;
        case 3:
          return 'hey';
          break;
        case 4:
          return 'Hey';
          break;
        case 5:
          return 'hey!';
          break;
        case 6:
          return 'Hello!';
          break;
        case 7:
          return 'hi!';
          break;
        case 8:
          return 'sup';
          break;
        case 9:
          return 'howdy';
          break;
        case 10:
          return 'hey you';
          break;
        case 11:
          return "Hey! What's up!";
          break;
        case 12:
          return 'Hola';
          break;
        case 13:
          return 'Greetings!';
          break;
        case 14:
          d = new Date();
          if (d.getHours() <= 11){ // 11:00 AM
            return 'good morning';
          }
          else if (d.getHours() > 20) {
            return "a nice evening, isn't it?";
          }
          else if (d.getHours() > 11) {
            return 'good afternoon';
          }
          else {
            return 'See you later!';
          }
          break;
        case 15:
          return 'Hi!';
          break;
        case 16:
          return 'hi';
          break;
        case 17:
          return 'hey';
          break;
        case 18:
          return 'Hey';
          break;
        case 19:
          return 'hey!';
          break;
        case 20:
          return 'Hello!';
          break;
        default:
          break;
      }
      return 'hello';
      break;

    case 'bye':
      switch (getRandomInt(0,7)) {
        case 0:
          return 'bye!';
          break;
        case 1:
          return 'see you later';
          break;
        case 2:
          return 'get lost kid';
          break;
        case 3:
          return 'fine. be like that.';
          break;
        case 4:
          return 'adios';
          break;
        case 5:
          return 'Goodbye!';
          break;
        case 6:
          return 'It has been fun!';
          break;
        case 7:
          d = new Date();
          if (d.getHours() <= 11){ // 11:00 AM
            return 'have a pleasant morning!';
          }
          else if (d.getHours() > 20) {
            return 'Have a nice evening!';
          }
          else if (d.getHours() > 11) {
            return 'Have a nice afternoon!';
          }
          else {
            return 'See you later!';
          }
        default:
          return 'bye';
          break;

      }
      break;

    case 'what':
      return 'Interesting Question';
      break;

    case 'feeling':
      return "I'm good, How are you?";
    default:
      return 'Due to my limited scope, I am unable to understand you. My apologies';
      break;
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
      else {
        console.log(elementsBot.item(i).clientWidth); /// document.getElementById("innerconv").style.width);
        //elementsBot.item(i).style.width = 'fit-content';
      }
    }

    var elementsUser = document.getElementsByClassName('userResponse');
    for (var i=0; i<elementsUser.length; i++) {
      if (elementsUser.item(i).clientWidth / document.getElementById("innerconv").clientWidth > 0.6){
        elementsUser.item(i).style.width = '60%';
        console.log('hello');
      }
      else {
        console.log(elementsUser.item(i).clientWidth); /// document.getElementById("innerconv").style.width);
      }
    }
    scrollSmoothToBottom('table');
  }
});



// if there are any issues with the input, they are likely here -
(function($) {
  $.fn.hasScrollBar = function() {
    console.log(this.get(0).scrollHeight);
    console.log($(this).innerHeight());
    return this.get(0).scrollHeight > $( this ).innerHeight();
  }
})(jQuery);
function heightChange() {
  console.log($('#userInput').hasScrollBar());
  if ($('#userInput').hasScrollBar()) {
    $('#userInput').css('height', $('#userInput').get(0).scrollHeight - 2);
  }
}

const input = document.querySelector('#userInput');
$(document).ready(function() {
  $('#userInput').on('input', function() {
    console.log('h?');
    heightChange();
  });
});
