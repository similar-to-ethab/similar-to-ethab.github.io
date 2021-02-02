//closed domain chatbot, very limited scope


var regex_intents = {};

regex_intents.helloRe = [
  new RegExp(/^(.* )?(hello|hey|hi)([ ,\.].*)?$/,'g'), "hello"
]
regex_intents.goodbyeRe = [
  new RegExp(/^(.* )?(bye|adios|goodbye|holla|see you later)( .*)?$/,'g'),'bye'
]
regex_intents.what = [
  new RegExp(/^(.* )?(what|who|why|when|how)$/,'g'),'what'
]

function getIntent(userInput) {
  for (var re in regex_intents) {
    if (userInput.match(regex_intents[re][0])){
      return regex_intents[re][1];
    }
  }
  return 69, "none";
}

function generateResponse(userInput){
  item = getIntent(userInput);
  switch (item) {
    case 'hello':
      return 'hello';
      break;

    case 'bye':
      return 'goodbye';
      break;

    case 'what':
      return 'Interesting Question';
      break;

    default:
      return 'Due to my limited scope, I am unable to understand you. My apologies';
      break;
  }
}

function addElement (input) {
  var emptyCell = document.createElement("td");
  var userh3 = document.createElement("td");
  userh3.id = "userResponse";
  var userInput = document.createTextNode(input);
  userh3.appendChild(userInput);
  var both3 = document.createElement("td");
  both3.id = "botResponse";

  var botInput = (document.createTextNode(generateResponse(input))); // getting bot response
  both3.appendChild(botInput);

  var botRow = document.createElement("tr");
  var userRow = document.createElement("tr");

  botRow.class = "tableRow";

  botRow.appendChild(both3);
  botRow.appendChild(emptyCell);
  userRow.appendChild(emptyCell);
  userRow.appendChild(userh3);

  var conversationDiv = document.getElementById("conversation");

  conversationDiv.appendChild(userRow);
  conversationDiv.appendChild(botRow);

  document.getElementById("userInput").value = "";
}

function keyPressFunction() {
  var el = document.getElementById("userInput");
  if (el.value == "" || el.value.trim() == ""){
    el.value = "";
  }
  else {
    addElement(el.value);
  }
}

document.querySelector('#userInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    keyPressFunction();
  }
});
