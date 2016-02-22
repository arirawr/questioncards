var allQuestions = [
  "Dark side or light side?",
  "What's your favourite animal to ride?",
  "Who will be the most successful 2016 entrepreneur?",
  "Which Lindt Lindor flavour is your favourite?",
  "Do you prefer snacking on candy, chocolate, or chips?",
  "What kind of vacation would you love to have?",
  "What's your ideal superpower?",
  "Which colour iPhone do you want?",
  "How many GB on said iPhone?",
  "Which adventure would you choose?"
];

var allAnswers = [
  ["Dark side", "Light side", "Star Trek"],
  ["Horse", "Elephant", "Camel"],
  ["Katerina", "Ari", "Yann-Axel"],
  ["Milk", "Stracciatella", "Hazelnut"],
  ["Candy", "Chocolate", "Chips"],
  ["Warm beach", "Ski chalet", "Historical relic backpacking"],
  ["Flight", "Invisibility", "Super strength"],
  ["Rose Gold", "White", "Space Grey"],
  ["16GB", "32GB", "64GB"],
  ["White water rafting", "Skydiving", "Wind surfing"]
];

var question;
var answers;

var i = 0;

$( '.card' ).click(function() {
  if(i<10) {
    question = allQuestions[i];
    answers = allAnswers[i];
    $( '.question' ).text(question);
    $( '.card' ).eq(0).text(answers[0]);
    $( '.card' ).eq(1).text(answers[1]);
    $( '.card' ).eq(2).text(answers[2]);
    i++;
  }
  else {
    $( '.question' ).text("Thanks for your participation in this brief survey! Calculating your results.");
    $( '.card' ).eq(0).text("");
    $( '.card' ).eq(1).text("");
    $( '.card' ).eq(2).text("");
    setTimeout(function() {
      $( '.card-container' ).replaceWith('<div class="end-message">I wanted to get you a big present this year but I went back and forth on what to get. No matter how many questions I asked, I couldn&apos;t nail down what to get.<br/><br/>I decided to give you the option, which you can choose within the next few months.<br/><br/>1.  Originally, I was going to pay the upfront cost of a new iPhone 6S. However, I&apos;d recommend that you wait until the 7 comes out, and I&apos;d pay the down payment on that.<br/><br/>2.  I also wanted to take you on a cruise, but it gets weird with our ages. However, if you want to fly somewhere warm with me on March break (ish), I&apos;m happy to cover you.<br/><br/>3.  I also found an amazing variety of adventures for you - skydiving, kite-skiing, etc. Wasn&apos;t sure if you&apos;d want to go alone but they looked totally amazing and I&apos;m happy to show you, take you, and take pictures of you being a little adventurer ;).<br/><br/>4.  And finally, if there&apos;s anything else you would never buy for yourself or go do yourself (spa day? hotel getaway? fitbit?) let me know.<br/><br/>I love you. Enjoy.<br/><br/>PS There&apos;s a budget on this and I already have said budget set aside, so don&apos;t worry about that :)</div>');
    }, 5000);
  }
});