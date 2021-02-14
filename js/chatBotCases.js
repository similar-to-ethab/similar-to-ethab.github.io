function homerQuotes(userInput, number) {
  switch (number) {
    case 0:
      return 'D\'oh!';
      break;
    case 1:
      return 'I\'m going to Moe\'s';
      break;
    case 2:
      return 'It takes two to lie'
      break;
    default:
  }
}
function bye(userInput, number){
  if (!localStorage.getItem('name') || getRandomInt(0,1) == 0){
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
  }
  else {
    switch (getRandomInt(0,7)) {
      case 0:
        return 'bye ' + localStorage.getItem('name') + '!';
        break;
      case 1:
        return 'see you later '  + localStorage.getItem('name');
        break;
      case 2:
        return 'get lost kid ' + localStorage.getItem('name');
        break;
      case 3:
        return 'fine. be like that.';
        break;
      case 4:
        return 'adios amigo';
        break;
      case 5:
        return 'Goodbye ' + localStorage.getItem('name') + '!';
        break;
      case 6:
        return 'It has been fun ' + localStorage.getItem('name');
        break;
      case 7:
        d = new Date();
        if (d.getHours() <= 11){ // 11:00 AM
          return 'have a pleasant morning ' + localStorage.getItem('name') + '!';
        }
        else if (d.getHours() > 20) {
          return 'Have a nice evening ' + localStorage.getItem('name') + '!';
        }
        else if (d.getHours() > 11) {
          return 'Have a nice afternoon ' + localStorage.getItem('name') + '!';
        }
        else {
          return 'See you later ' + localStorage.getItem('name') + '!';
        }
      default:
        return 'bye ' + localStorage.getItem('name');
        break;

    }
  }
}
function feeling(userInput, number) {
  if (!localStorage.getItem('name') || getRandomInt(0,1) == 0){
    switch (number) {
      case 0:
        return "I'm good, How are you?";
        break;
      default:
        break;
    }
  }
  else {
    switch (number){
      case 0:
        return "I'm good, " + localStorage.getItem('name') + 'How are you?';
        break;
    }
  }
}
function age(userInput, number){
  groups = userInput.match(regex_intents.userAgeNum[0]);
  if (groups[2]) {
    localStorage.setItem('age', groups[2]);
    switch (groups[2].toString().substr(-1)) { // gets last digit of number
      case 1:
        return 'When is your ' + parseInt(localStorage.getItem('age')) + 1 + 'st birthday?';
        break;
      case 2:
        return 'When is your ' + parseInt(localStorage.getItem('age')) + 1 + 'nd birthday?';
        break;
      case 3:
        return 'When is your ' + parseInt(localStorage.getItem('age')) + 1 + 'rd birthday?';
        break;
      default:
        return 'When is your ' + parseInt(localStorage.getItem('age')) + 1 + 'th birthday?';

    }
    return groups[1];
  }
  else {
    localStorage.setItem('age', groups[3]);
    switch (groups[3].toString().substr(-1)) { // gets last digit of number
      case 1:
        return 'When is your ' + (parseInt(localStorage.getItem('age')) + 1) + 'st birthday?';
        break;
      case 2:
        return 'When is your ' + (parseInt(localStorage.getItem('age')) + 1) + 'nd birthday?';
        break;
      case 3:
        return 'When is your ' + (parseInt(localStorage.getItem('age')) + 1) + 'rd birthday?';
        break;
      default:
        return 'When is your ' + (parseInt(localStorage.getItem('age')) + 1) + 'th birthday?';
    }
    //return groups[2];
  }
}
function long(userInput, number){
  switch(number){ //(getRandomInt(0,25)) {
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
}
function userName(userInput, number){
  var name = userInput.match(regex_intents.userName[0])[1];
  localStorage.setItem('name',name);
  if (localStorage.getItem('name') != '') {
    return 'It is nice to meet you, ' + name;
  }
  localStorage.removeItem('name');
  return 'Not this time bud';
}
function hello(userInput, number){
  if (localStorage.getItem('name') || getRandomInt(0,1) == 0){
    switch (number) {
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
    switch (number) {
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
}
