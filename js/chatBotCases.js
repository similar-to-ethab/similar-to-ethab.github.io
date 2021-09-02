function homerQuotes(userInput, number) {
  let botResponse = 'if you are seeing this, then life sucks and this is broken';
  switch (number) {
    case 0:
      botResponse = 'D\'oh!';
      break;
    case 1:
      botResponse = 'I\'m going to Moe\'s';
      break;
    case 2:
      botResponse = 'It takes two to lie';
      break;
    default:
      botResponse = 'haw haw';
      break;
  }
  return botResponse;
}
function bye(userInput, number){
  let botResponse = 'if you are seeing this, then life sucks and this is broken';
  if (!localStorage.getItem('name') || getRandomInt(0,1) == 0){
    switch (getRandomInt(0,7)) {
      case 0:
        botResponse = 'bye!';
        break;
      case 1:
        botResponse = 'see you later';
        break;
      case 2:
        botResponse = 'get lost kid';
        break;
      case 3:
        botResponse = 'fine. be like that.';
        break;
      case 4:
        botResponse = 'adios';
        break;
      case 5:
        botResponse = 'Goodbye!';
        break;
      case 6:
        botResponse = 'It has been fun!';
        break;
      case 7:
        d = new Date();
        if (d.getHours() <= 11){ // 11:00 AM
          botResponse = 'have a pleasant morning!';
        }
        else if (d.getHours() > 20) {
          botResponse = 'Have a nice evening!';
        }
        else if (d.getHours() > 11) {
          botResponse = 'Have a nice afternoon!';
        }
        else {
          botResponse = 'See you later!';
        }
        break;
      default:
        botResponse = 'bye';
        break;
    }
  }
  else {
    switch (getRandomInt(0,7)) {
      case 0:
        botResponse = 'bye ' + localStorage.getItem('name') + '!';
        break;
      case 1:
        botResponse = 'see you later '  + localStorage.getItem('name');
        break;
      case 2:
        botResponse = 'get lost kid ' + localStorage.getItem('name');
        break;
      case 3:
        botResponse = 'fine. be like that.';
        break;
      case 4:
        botResponse = 'adios amigo';
        break;
      case 5:
        botResponse = 'Goodbye ' + localStorage.getItem('name') + '!';
        break;
      case 6:
        botResponse = 'It has been fun ' + localStorage.getItem('name');
        break;
      case 7:
        d = new Date();
        if (d.getHours() <= 11){ // 11:00 AM
          botResponse = 'have a pleasant morning ' + localStorage.getItem('name') + '!';
        }
        else if (d.getHours() > 20) {
          botResponse = 'Have a nice evening ' + localStorage.getItem('name') + '!';
        }
        else if (d.getHours() > 11) {
          botResponse = 'Have a nice afternoon ' + localStorage.getItem('name') + '!';
        }
        else {
          botResponse = 'See you later ' + localStorage.getItem('name') + '!';
        }
      default:
        botResponse = 'bye ' + localStorage.getItem('name');
        break;

    }
  }
  return botResponse;
}

function feeling(userInput, number) {
  let botResponse = 'if you are seeing this, then life sucks and this is broken';
  if (!localStorage.getItem('name') || getRandomInt(0,1) == 0){
    switch (number) {
      case 0:
        botResponse = "I'm good, How are you?";
        break;
      default:
        break;
    }
  }
  else {
    switch (number){
      case 0:
        botResponse = "I'm good, " + localStorage.getItem('name') + 'How are you?';
        break;
    }
  }
  return botResponse;
}

function age(userInput, number){
  let botResponse = 'if you are seeing this, then life sucks and this is broken';
  groups = userInput.match(regex_intents.userAgeNum[0]);
  if (groups[2]) {
    localStorage.setItem('age', groups[2]);
    switch (groups[2].toString().substr(-1)) { // gets last digit of number
      case 1:
        botResponse = 'When is your ' + parseInt(localStorage.getItem('age')) + 1 + 'st birthday?';
        break;
      case 2:
        botResponse = 'When is your ' + parseInt(localStorage.getItem('age')) + 1 + 'nd birthday?';
        break;
      case 3:
        botResponse = 'When is your ' + parseInt(localStorage.getItem('age')) + 1 + 'rd birthday?';
        break;
      default:
        botResponse = 'When is your ' + parseInt(localStorage.getItem('age')) + 1 + 'th birthday?';

    }
    botResponse = groups[1];
  }
  else {
    localStorage.setItem('age', groups[3]);
    switch (groups[3].toString().substr(-1)) { // gets last digit of number
      case 1:
        botResponse = 'When is your ' + (parseInt(localStorage.getItem('age')) + 1) + 'st birthday?';
        break;
      case 2:
        botResponse = 'When is your ' + (parseInt(localStorage.getItem('age')) + 1) + 'nd birthday?';
        break;
      case 3:
        botResponse = 'When is your ' + (parseInt(localStorage.getItem('age')) + 1) + 'rd birthday?';
        break;
      default:
        botResponse = 'When is your ' + (parseInt(localStorage.getItem('age')) + 1) + 'th birthday?';
    }
    //botResponse = groups[2];
  }
  return botResponse;
}

function long(userInput, number){
  let botResponse = 'if you are seeing this, then life sucks and this is broken';
  switch(number){ //(getRandomInt(0,25)) {
    case 1:
      botResponse = 'Wow!';
      break;
    case 2:
      botResponse = 'The average length of a word is 4.7 letters';
      break;
    case 3:
      const a = new Date("2020-12-20"),
      b = new Date(),
      difference = dateDiffInWeeks(a,b);
      yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      botResponse = 'I have been working on this project for ' + difference + ' weeks as of ' + yesterday.toLocaleDateString() + '!';
      break;
    case 4:
      botResponse = 'I am running out of ideas.';
      break;
    case 5:
      botResponse = 'Woohoo';
      break;
    case 6:
      botResponse = "Wouldn't Harm a Fly";
      break;
    case 7:
      botResponse = 'Every Cloud Has a Silver Lining';
      break;
    case 8:
      botResponse = 'In a Pickle';
      break;
    case 9:
      botResponse = 'Hands Down';
      break;
    case 10:
      botResponse = 'Everything But The Kitchen Sink';
      break;
    case 11:
      botResponse = 'Wake Up Call';
      break;
    case 12:
      botResponse = 'Know the Ropes';
      break;
    case 13:
      botResponse = 'Up In Arms';
      break;
    case 14:
      botResponse = 'An Arm and a Leg';
      break;
    case 15:
      botResponse = 'Short End of the Stick';
      break;
    case 16:
      botResponse = 'Par For the Course';
      break;
    case 17:
      botResponse = 'A Fool and His Money are Soon Parted';
      break;
    case 18:
      botResponse = 'Son of a Gun';
      break;
    case 19:
      botResponse = 'Shot In the Dark';
      break;
    case 20:
      botResponse = 'Go Out On a Limb';
      break;
    case 21:
      botResponse = 'Dropping Like Flies';
      break;
    case 22:
      botResponse = 'Eat My Hat';
      break;
    case 23:
      botResponse = 'Greased Lightning';
      break;
    case 24:
      botResponse = 'Barking Up The Wrong Tree';
      break;
    case 25:
      botResponse = 'A Piece of Cake';
      break;
    default:
      botResponse = 'interesting';
      break;
  }
  return botResponse;
}

function userName(userInput, number){
  let botResponse = 'if you are seeing this, then life sucks and this is broken';
  var name = userInput.match(regex_intents.userName[0])[1];
  localStorage.setItem('name',name);
  if (localStorage.getItem('name') != '') {
    botResponse = 'It is nice to meet you, ' + name;
  }

  return botResponse;
}

function hello(userInput, number){
  let botResponse = 'if you are seeing this, then life sucks and this is broken';
  if (localStorage.getItem('name') || getRandomInt(0,1) == 0){
    switch (number) {
      case 0:
        botResponse = 'hi ' + localStorage.getItem('name') + '!';
        break;
      case 1:
        botResponse = 'Hi ' + localStorage.getItem('name') + '!';
        break;
      case 2:
        botResponse = 'hi ' + localStorage.getItem('name');
        break;
      case 3:
        botResponse = 'hey ' + localStorage.getItem('name');
        break;
      case 4:
        botResponse = 'Hey ' + localStorage.getItem('name');
        break;
      case 5:
        botResponse = 'hey ' + localStorage.getItem('name') + '!';
        break;
      case 6:
        botResponse = 'Hello ' + localStorage.getItem('name') + '!';
        break;
      case 7:
        botResponse = 'hi ' + localStorage.getItem('name') + '!';
        break;
      case 8:
        botResponse = 'sup ' + localStorage.getItem('name');
        break;
      case 9:
        botResponse = 'howdy ' + localStorage.getItem('name');
        break;
      case 10:
        botResponse = 'hey you';
        break;
      case 11:
        botResponse = "Hey! What's up " + localStorage.getItem('name') + "!";
        break;
      case 12:
        botResponse = 'Hola ' + localStorage.getItem('name');
        break;
      case 13:
        botResponse = 'Greetings ' + localStorage.getItem('name') + '!';
        break;
      case 14:
        d = new Date();
        if (d.getHours() <= 11){ // 11:00 AM
          botResponse = 'good morning ' + localStorage.getItem('name');
        }
        else if (d.getHours() > 20) {
          botResponse = "a nice evening, isn't it?";
        }
        else if (d.getHours() > 11) {
          botResponse = 'good afternoon ' + localStorage.getItem('name');
        }
        else {
          botResponse = 'See you later ' + localStorage.getItem('name') + '!';
        }
        break;
      case 15:
        botResponse = 'Hi ' + localStorage.getItem('name') + '!';
        break;
      case 16:
        botResponse = 'hi ' + localStorage.getItem('name');
        break;
      case 17:
        botResponse = 'hey ' + localStorage.getItem('name');
        break;
      case 18:
        botResponse = 'Hey ' + localStorage.getItem('name');
        break;
      case 19:
        botResponse = 'hey ' + localStorage.getItem('name') + '!';
        break;
      case 20:
        botResponse = 'Hello ' + localStorage.getItem('name') + '!';
        break;
      case 21:
        botResponse = 'wassup ' + localStorage.getItem('name') + '!';
        break;
      case 22:
        botResponse = 'wassup ' + localStorage.getItem('name');
        break;
      default:
        botResponse = 'I am unable to count if you can see this';
        break;
      }
  }
  else {
    switch (number) {
      case 0:
        botResponse = 'hi!';
        break;
      case 1:
        botResponse = 'Hi!';
        break;
      case 2:
        botResponse = 'hi';
        break;
      case 3:
        botResponse = 'hey';
        break;
      case 4:
        botResponse = 'Hey';
        break;
      case 5:
        botResponse = 'hey!';
        break;
      case 6:
        botResponse = 'Hello!';
        break;
      case 7:
        botResponse = 'hi!';
        break;
      case 8:
        botResponse = 'sup';
        break;
      case 9:
        botResponse = 'howdy';
        break;
      case 10:
        botResponse = 'hey you';
        break;
      case 11:
        botResponse = "Hey! What's up!";
        break;
      case 12:
        botResponse = 'Hola';
        break;
      case 13:
        botResponse = 'Greetings!';
        break;
      case 14:
        d = new Date();
        if (d.getHours() <= 11){ // 11:00 AM
          botResponse = 'good morning';
        }
        else if (d.getHours() > 20) {
          botResponse = "a nice evening, isn't it?";
        }
        else if (d.getHours() > 11) {
          botResponse = 'good afternoon';
        }
        else {
          botResponse = 'See you later!';
        }
        break;
      case 15:
        botResponse = 'Hi!';
        break;
      case 16:
        botResponse = 'hi';
        break;
      case 17:
        botResponse = 'hey';
        break;
      case 18:
        botResponse = 'Hey';
        break;
      case 19:
        botResponse = 'hey!';
        break;
      case 20:
        botResponse = 'Hello!';
        break;
      case 21:
        botResponse = 'wassup!';
        break;
      case 22:
        botResponse = 'wassup';
        break;
      default:
        botResponse = 'I am unable to count if you can see this';
        break;
    }
  }
  return botResponse;
}

function defaultResponses(userInput, number){
  let botResponse = 'if you are seeing this, then life sucks and this is broken';
  switch (number){
    case 0:
      botResponse = "Was that a typo?";
      break;
    case 1:
      botResponse = "Aaaaaaaaaaaargh";
      break;
    default:
      botResponse = "Your message, '" + userInput + ",' is not recognized. If you believe this to be an error, email ethanperson82@gmail.com";
      break;
  }
  return botResponse;
}
