

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
      correctAnswer: 'G',
      correct: false
    },
      {
        question: 'What is this note?',
        answers: [
          'E',
          'E flat',
          'F',
          'F sharp'
        ],
        correctAnswer: 'E',
        correct: false
      },
        {
          question: 'What is this note?',
          answers: [
            'A',
            'B',
            'C',
            'D'
          ],
          correctAnswer: 'A',
          correct: false
        },
          {
            question: 'What is this note?',
            answers: [
              'F sharp',
              'G',
              'A sharp',
              'B'
            ],
            correctAnswer: 'B',
            correct: false
          },
    {
      question: 'What is the current year?',
      answers: [
        'B flat',
        'A flat',
        'G sharp',
        'A'
      ],
      correctAnswer: 'A'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  submittingAnswer: false,
  score: 0,

  currentQuestion: {
    answerArray: []
  }
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the STORE is updated. 
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

// This function conditionally replaces the contents of the <main> tag based on the state of the STORE

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)


//******************** Template generator functions ********************//

function questionOne() {
  VF = Vex.Flow;
    var div = document.getElementById("boo")
    var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
    
    renderer.resize(500, 500);
    var context = renderer.getContext();
    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
    
    var stave = new VF.Stave(200, 40, 110);
    
    stave.addClef("treble").addTimeSignature("4/4");
    
    stave.setContext(context).draw();
    var notes = [
      new VF.StaveNote({ keys: ["g/4"], duration: "q" })
    ];
    var voice = new VF.Voice({num_beats: 1,  beat_value: 4});
    voice.addTickables(notes);
    
    var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
    
    voice.draw(context, stave);
}
function generateQuizQuestion(question) {
  return `
  <header class = "group headerBox">
  <h1>What note is this?</h1>
  <h1 class="item" id="numCorrect">Number correct:</h1>
  <p>${STORE.score}/5</p> 
</header> 
<main>
  <div class="group">
  <div class ="item noteBox">
   <div id="boo"></div>
  </div>
  <div class="item box">
      <div class="item box">
      <form>
      <input name="answer" type="radio" class="user-answer" value="${question.answers[0]}">
        <label for="answer">${question.answers[0]}<br>
      <input name="answer" type="radio" class="user-answer"value="${question.answers[1]}">
        <label for="answer">${question.answers[1]}<br>
      <input name="answer" type="radio" class="user-answer"value="${question.answers[2]}">
        <label for="answer">${question.answers[2]}<br>
      <input name="answer" type="radio" class="user-answer"value="${question.answers[3]}">
        <label for="answer">${question.answers[3]}<br>
       <button class="submit-button" type="button" data="${question.correctAnswer}">Submit</button>
      </form>
       </div>
       </div>
       <div class ="item answer">
       <p>placeholder</p>
      </div>  
   </div>
   </div>`;
}
function generateWelcomeString() {
  return `
<div class="welcome">
<form>
<p>
Welcome to my quiz!
</p>

<button type="submit" id="beginQuiz" autofocus>Begin!</button>
</form>
</div>`;
}
function generateQuizInterface(obj) {
  return `
  <div class='quiz-interface'>
      <p>Question ${obj.index} out of ${STORE.questions.length}</p>
      <p>
       ${obj.question.question}
      </p>

      <form>
      <ol type="A">
        ${generateQuizAnswers(obj.question.answers)}
      </ol>
      <button type="submit" class="submit-answer">Submit Answer</button>
      </form> 
      <p>Score: ${STORE.score}</p>
    </div>
    `;
}
function generateAnswerResults(){
  let answerArray = STORE.currentQuestion.answerArray;
  const buttons = {
    next: ' <button type="submit" class="next-question" autofocus>Next Question</button>',
    results: '<button type="submit" class="see-results" autofocus>See Results</button>'
  };

  let correctResponse = `"${answerArray[1]}" is correct`;
  let incorrectResponse = `${answerArray[2]} is not correct. The correct answer is<br><br>
  "${answerArray[1]}"`;

  let isLastQuestion = (STORE.questionNumber + 1) === (STORE.questions.length);
  
  return `
    <div class="answer-response">
    <form>
    <p>${answerArray[0] === true ? correctResponse : incorrectResponse}</p>
    <p> Score: ${STORE.score}</p>
   ${isLastQuestion ? buttons.results : buttons.next}
    </form>
    </div>
  `;
}
function generateQuizAnswers(answers){
  let answerArray = [];
  let indexArray = [];
  answers.forEach(answer => {
    answerArray.push(answer);
    indexArray.push(answers.indexOf(answer));
  });
  console.log(indexArray);
  return answerArray.map(answer => stringifyAnswerArray(answer)).join('');
}

function stringifyAnswerArray(answer){
  let questionNumber = STORE.questionNumber;
  let name = STORE.questions[questionNumber].answers.indexOf(answer);
  console.log(name);

  return `
    <li>
      <div class="answer-container">
      <input type="radio" name="answer" id="answer-${name}" data-answer="${answer}">
      <label for="answer-${name}"> ${answer}</label>
     
      </div>
    </li>
  `;
}
function generateQuizResultsString(){
  return `
    <div class='quiz-results'>
      <p>
       The Quiz is over.
         </p>
          <p>You scored ${STORE.score} out of ${STORE.questions.length * 10}</p>            
        <button class="restart-quiz">Restart Quiz</button>      
    </div>   
   ${generateImage()}  
`;
        }

function generateImage(quizResults) {
   return
   console.log("I'm popping up after the quiz")
      $('main').empty().append('<img src="https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" height="64px" width="64px" alt="River Image">')

 }


//******************** Render function ********************//

function renderQuizQuestions () {
  
  if(STORE.quizStarted === false) {
    if(STORE.questionNumber === STORE.questions.length){
      const quizResultsString = generateQuizResultsString();
      const finalImage = generateImage();
      $('quiz-item').html(quizResultsString); 
    } else {
      const quizWelcomeInterfaceString = generateWelcomeString();
      $('quiz-item').html(quizWelcomeInterfaceString);
    }
  } else if (STORE.quizStarted === true) {
    if(STORE.submittingAnswer === false) {
      const quizInterfaceString = generateQuizInterface(currentQuestion());
      $('quiz-item').html(quizInterfaceString);
    } else if (STORE.submittingAnswer === true) {
      const quizAnswerResponseString = generateAnswerResults();
      $('quiz-item').html(quizAnswerResponseString);
    }
  } 
}
function startQuiz() {
  console.log('start the quiz');
  STORE.quizStarted = true;
}

function thisQuestion() {
  let index = STORE.questionNumber;
  let obj = STORE.questions[index];
  return {
    index: index +1,
    question: obj
  };
} 
function nextQuestion() {
if (STORE.questionNumber < STORE.questions.length) {
  STORE.questionNumber++;
  STORE.submittingAnswer = false;
  console.log(STORE.questionNumber);
} else if (STORE.questionNumber === STORE.questions.length) {
  STORE.quizStarted = false;
}
}

function validateAnswers() {
  let radios = $('input:radio[name=answer]');
  let selectedAnswer = $('input[name="answer"]:checked').data('answer');
  let questionNumber = STORE.questionNumber;
  let correctAnswer = STORE.questions[questionNumber].correctAnswer;

  if (radios.filter(':checked').length === 0) {
    alert('Please answer');
    return;
  } else {
    STORE.submittingAnswer = true;
    if (selectedAnswer === correctAnswer){
    STORE.score += 1;
    STORE.currentQuestion.answerArray = [true, correctAnswer, selectedAnswer];
  } else {
    STORE.currentQuestion.answerArray = [false, correctAnswer, selectedAnswer];
  }
}
}
function finishQuiz () {
  STORE.quizStarted = false;
  STORE.questionNumber ++;
}

function restartEverything() {
  STORE.quizStarted = false;
  STORE.questionNumber = 0;
  STORE.submittingAnswer = false;
  STORE.currentQuestion.answerArray = [];
}

/*********** Event Handlers! ********************/
function handleBeginning () {
$('.quiz-item').on('click', '#beginQuiz', (e) =>{
  event.preventDefault();
  startQuiz();
  renderQuizQuestions();
});
}

function handleSubmitAnswer() {
  $('.quiz-item').on('click' , '.submit-answer', (event)=>{
    event.preventDefault();
    console.log('submitting answer');
    validateCorrectAnswer();
    renderQuizQuestions();
  });
}

function handleNextQuestionSubmit(){
  $('.quiz-item').on('click', '.next-question', (event) => {
    event.preventDefault();
    nextQuestion();
    renderQuizQuestions();
  });
}

function handleSeeResultsSubmit(){
  $('.quiz-item').on('click', '.see-results', (event) => {
    event.preventDefault();
    seeResults();
    renderQuizQuestions();
  });
}

function handleRestartQuizSubmit(){
  $('.quiz-item').on('click', '.restart-quiz', (event) => {
    event.preventDefault();
    restartQuiz();
    renderQuizQuestions();
  });
}


// This function will launch all other functions after the page is loaded
function handleQuiz (){
  renderQuizQuestions();
  startQuiz();
  thisQuestion();
  nextQuestion();
  restartEverything();
  handleSeeResultsSubmit();

}

$(handleQuiz);