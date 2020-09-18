/**
 * Example store structure
 */
// function insG () {
//   const VF = Vex.Flow;
//   var div = document.getElementById("boo")
//   var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
  
//   renderer.resize(500, 500);
//   var context = renderer.getContext();
//   context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
  
//   var stave = new VF.Stave(200, 40, 110);
  
//   stave.addClef("treble").addTimeSignature("4/4");
  
//   stave.setContext(context).draw();
//   var notes = [
//     new VF.StaveNote({ keys: ["g/4"], duration: "q" })
//   ];
//   var voice = new VF.Voice({num_beats: 1,  beat_value: 4});
//   voice.addTickables(notes);
  
//   var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
  
//   voice.draw(context, stave);
//   }

const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: 'g.png',
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
   <img href="images/g.png">
  </div>
  <div class="item box">
      <div class="item box">
      <form id="questionForm">
      <fieldset> 
      <input name="answer" type="radio" class="user-answer" value="${question.answers[0]}">
        <label for="answer">${question.answers[0]}
      <input name="answer" type="radio" class="user-answer" value="${question.answers[1]}">
        <label for="answer">${question.answers[1]}
      <input name="answer" type="radio" class="user-answer" value="${question.answers[2]}">
        <label for="answer">${question.answers[2]}
      <input name="answer" type="radio" class="user-answer" value="${question.answers[3]}">
        <label for="answer">${question.answers[3]}
       <button class="submit-button" type="button" data="${question.correctAnswer}">Submit</button>
      </fieldset>
      </form>
       </div>
      </div>
      <section class="item hidden answer-box">
      <h2>placeholder<h2>
      </section>
   </div>
   </div>`;
}

function generateQuizItemsString(quiz) {
  console.log("Generating quiz element");

  const question = generateQuizQuestion(STORE.questions[STORE.questionNumber]);
  //const items = quiz.questions.map((i) => generateQuizQuestion(i));

  return question;
}
function renderQuizQuestions() {
  // this function will be responsible for rendering the shopping list in
  // the DOM
  console.log('`renderQuizQuestions` ran');
  const QuizItemsString = generateQuizItemsString(STORE);

  // insert that HTML into the DOM
  $('.quiz-item').html(QuizItemsString);
}
function displayAnswerAnswer() {
  alert("you did it");
}

function handleQuestionSubmit() {
  // when you hit that submit button in the quiz app do something
  // handleQuestionAnswer();
  // handleNextQuestion();

  $('.submit-button').click((e) => {
    e.preventDefault();
    //alert("this is an alert");
    let correctAnswer = $(e.currentTarget).attr('data');
    let radioAnswer = $('input[name=answer]:checked', '#questionForm').val()
    if (correctAnswer === radioAnswer) {
      $('.answer-box').html(`<p>Correct!</p>`);
      console.log("done");
      //$('#answer-box').removeClass('hidden');
      STORE.score += 1;
    } else {
      $('.answer-box').html(`Incorrect. The correct answer is ${correctAnswer}`);
      //$('#answer-box').removeClass('hidden');
    }
    STORE.questionNumber += 1;
    handleQuizQuestions();
    // alert(correctAnswer);
    // handleQuizQuestions();
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
// get the answer they clicked on (selected button state)
// update the score
// 