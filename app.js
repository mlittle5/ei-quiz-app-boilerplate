/**
 * Example store structure
 */
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is this note?',
      answers: [
        'A',
        'B',
        'D sharp',
        'G'
      ],
      correctAnswer: 'G'
    },
      {
        question: 'What is this note?',
        answers: [
          'E',
          'E flat',
          'F',
          'F sharp'
        ],
        correctAnswer: 'E Flat'
      },
        {
          question: 'What is this note?',
          answers: [
            'A',
            'B',
            'C',
            'D'
          ],
          correctAnswer: 'A'
        },
          {
            question: 'What is this note?',
            answers: [
              'F sharp',
              'G',
              'A sharp',
              'B'
            ],
            correctAnswer: 'B'
          },
    {
      question: 'What is the current year?',
      answers: [
        'B flat',
        'A flat',
        'G sharp',
        'C'
      ],
      correctAnswer: 'A flat'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)


function generateQuizQuestion(question) {
  return `
  <header class = "group headerBox">
  <h1>What note is this?</h1>
</header> 
<main>
  <div class="group">
  <div class ="item noteBox">
   <div id="boo"></div>
  </div>
  <div class="item box">
      <div class="item box">
      <form>
      <fieldset> 
      <input name="answer" type="radio" class="user-answer" value="${question.answers[0]}">
        <label for="answer">${question.answers[0]}
      <input name="answer" type="radio" class="user-answer"value="${question.answers[1]}">
        <label for="answer">${question.answers[1]}
      <input name="answer" type="radio" class="user-answer"value="${question.answers[2]}">
        <label for="answer">${question.answers[2]}
      <input name="answer" type="radio" class="user-answer"value="${question.answers[3]}">
        <label for="answer">${question.answers[3]}
       <button class="submit-button" type="button" data="${question.correctAnswer}">Submit</button>
      </fieldset>
      </form>
       </div>
      </div>  
   </div>
   </div>`;
}

function generateQuizItemsString(quiz) {
  console.log("Generating quiz element");

  const items = quiz.questions.map((i) => generateQuizQuestion(i));
  
  return items.join("");
}
function renderQuizQuestions() {
  // this function will be responsible for rendering the shopping list in
  // the DOM
  console.log('`renderQuizQuestions` ran');
  const QuizItemsString = generateQuizItemsString(STORE);

// insert that HTML into the DOM
$('.quiz-item').html(QuizItemsString);
}

function handleQuestionSubmit() {
// when you hit that submit button in the quiz app do something
// handleQuestionAnswer();
// handleNextQuestion();

$('.submit-button').click( (e) => {
  e.preventDefault();
  //alert("this is an alert");
  let correctAnswer = $(e.currentTarget).attr('data');
  alert(correctAnswer);

});
}


function allDone() {
//when all questions are answered spit out a final score 
//TODO creat a final score element 
}

function handleQuizQuestions() {
  renderQuizQuestions();
  handleQuestionSubmit();
}

$(handleQuizQuestions);


//Todo
// figure out radio buttons
// get the answer they clicked on (sleected button state)
// update the score
// 