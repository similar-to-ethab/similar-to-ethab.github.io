//closed domain chatbot, very limited scope

var regex_intents = {};
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
    case 'hello':
      if (localStorage.getItem('name')){
        switch (getRandomInt(0,20)) {
          case 0:
            return 'hi ' + localStorage.getItem('name') + '!';
            break;
          case 1:
            return 'Hi ' + localStorage.getItem('name') + '!';
            break;
          case 2:
            return 'hi ' + localStorage.getItem('name');
            break;
          case 3:
            return 'hey ' + localStorage.getItem('name');
            break;
          case 4:
            return 'Hey ' + localStorage.getItem('name');
            break;
          case 5:
            return 'hey ' + localStorage.getItem('name') + '!';
            break;
          case 6:
            return 'Hello ' + localStorage.getItem('name') + '!';
            break;
          case 7:
            return 'hi ' + localStorage.getItem('name') + '!';
            break;
          case 8:
            return 'sup ' + localStorage.getItem('name');
            break;
          case 9:
            return 'howdy ' + localStorage.getItem('name');
            break;
          case 10:
            return 'hey you';
            break;
          case 11:
            return "Hey! What's up " + localStorage.getItem('name') + "!";
            break;
          case 12:
            return 'Hola ' + localStorage.getItem('name');
            break;
          case 13:
            return 'Greetings ' + localStorage.getItem('name') + '!';
            break;
          case 14:
            d = new Date();
            if (d.getHours() <= 11){ // 11:00 AM
              return 'good morning ' + localStorage.getItem('name');
            }
            else if (d.getHours() > 20) {
              return "a nice evening, isn't it?";
            }
            else if (d.getHours() > 11) {
              return 'good afternoon ' + localStorage.getItem('name');
            }
            else {
              return 'See you later ' + localStorage.getItem('name') + '!';
            }
            break;
          case 15:
            return 'Hi ' + localStorage.getItem('name') + '!';
            break;
          case 16:
            return 'hi ' + localStorage.getItem('name');
            break;
          case 17:
            return 'hey ' + localStorage.getItem('name');
            break;
          case 18:
            return 'Hey ' + localStorage.getItem('name');
            break;
          case 19:
            return 'hey ' + localStorage.getItem('name') + '!';
            break;
          case 20:
            return 'Hello ' + localStorage.getItem('name') + '!';
            break;
          default:
            break;
          }
      }
      else {
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
      }

    case 'age':
      groups = userInput.match(regex_intents.userAgeNum[0]);
      if (groups[2]) {
        localStorage.setItem('age', groups[2]);
        localStorage.getItem('age');
        console.log(groups[2].toString().substr(-1));
        switch (1) {
          case 1:
            return 'When is your ' + parseInt(localStorage.getItem('age')) + 1 + 'st birthday?';
            break;
          case 2:
            return 'When is your ' + parseInt(localStorage.getItem('age')) + 1 + 'nd birthday?';
            break;
          case 3:
            return 'When is your ' + parseInt(localStorage.getItem('age')) + 1 + 'rd birthday?';
          default:
          return 'When is your ' + parseInt(localStorage.getItem('age')) + 1 + 'th birthday?';
        }
        return groups[1];
      }
      else {
        localStorage.setItem('age', groups[3]);
        console.log(localStorage.getItem('age'));
        console.log(groups[3]);
        console.log(groups);
        console.log(12);
        switch (groups[3].toString().substr(-1)) {
          case 1:
            return 'When is your ' + (parseInt(localStorage.getItem('age')) + 1) + 'st birthday?';
            break;
          case 2:
            return 'When is your ' + (parseInt(localStorage.getItem('age')) + 1) + 'nd birthday?';
            break;
          case 3:
            return 'When is your ' + (parseInt(localStorage.getItem('age')) + 1) + 'rd birthday?';
          default:
          return 'When is your ' + (parseInt(localStorage.getItem('age')) + 1) + 'th birthday?';
        }
        return groups[2];
      }
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
    case 'long':
      switch(3){ //(getRandomInt(0,25)) {
        case 1:
          return 'Wow!';
          break;
        case 2:
          return 'The average length of a word is 4.7 letters';
          break;
        case 3:
          const a = new Date("2020-12-20"),
          b = new Date(),
          difference = dateDiffInWeeks(a,b);
          yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          return 'I have been working on this project for ' + difference + ' weeks as of ' + yesterday.toLocaleDateString() + '!';
          break;
        case 4:
          return 'I am running out of ideas.';
          break;
        case 5:
          return 'Woohoo';
          break;
        case 6:
          return "Wouldn't Harm a Fly";
          break;
        case 7:
          return 'Every Cloud Has a Silver Lining';
          break;
        case 8:
          return 'In a Pickle';
          break;
        case 9:
          return 'Hands Down';
          break;
        case 10:
          return 'Everything But The Kitchen Sink';
          break;
        case 11:
          return 'Wake Up Call';
          break;
        case 12:
          return 'Know the Ropes';
          break;
        case 13:
          return 'Up In Arms';
          break;
        case 14:
          return 'An Arm and a Leg';
          break;
        case 15:
          return 'Short End of the Stick';
          break;
        case 16:
          return 'Par For the Course';
          break;
        case 17:
          return 'A Fool and His Money are Soon Parted';
          break;
        case 18:
          return 'Son of a Gun';
          break;
        case 19:
          return 'Shot In the Dark';
          break;
        case 20:
          return 'Go Out On a Limb';
          break;
        case 21:
          return 'Dropping Like Flies';
          break;
        case 22:
          return 'Eat My Hat';
          break;
        case 23:
          return 'Greased Lightning';
          break;
        case 24:
          return 'Barking Up The Wrong Tree';
          break;
        case 25:
          return 'A Piece of Cake';
          break;
        default:
          return 'interesting';
          break;
      }

    case 'userName':
      var name = userInput.match(regex_intents.userName[0])[1];
      localStorage.setItem('name',name);
      //if (name.includes('\\') || name.includes('/'))
      if (localStorage.getItem('name') != '') {
        return 'It is nice to meet you, ' + name;
      }
      localStorage.removeItem('name');

      return 'Not this time bud';



      break;
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
