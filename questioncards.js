var allQuestions = [
  "Dark side or light side?",
  "What's your favourite animal to ride?",
  "Who will win the next election",
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
  ["Trump", "Hillary", "Stein"],
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
      $( '.card-container' ).replaceWith('<div class="end-message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint accusantium, fugit ullam odit dicta nihil aliquid. Atque odio, repellendus perferendis deleniti fuga consequatur voluptatibus, laborum earum voluptatum dolorem, repudiandae maxime quam commodi voluptate tenetur, tempora ab nostrum aperiam a quis natus corrupti! Doloremque libero repellendus sit ab ducimus, repudiandae culpa.</div>');
    }, 5000);
  }
});