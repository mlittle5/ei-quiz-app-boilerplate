//********Vexflow functions to create the notes***************/

function insG() {
  const VF = Vex.Flow;
  var div = document.getElementById("boo")
  var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

  renderer.resize(150, 150);
  var context = renderer.getContext();
  // context.scale(5,5)
  context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

  var stave = new VF.Stave(50, 0, 110);

  stave.addClef("treble").addTimeSignature("4/4");

  stave.setContext(context).draw();
  var notes = [
    new VF.StaveNote({ keys: ["g/4"], duration: "q" })
  ];
  var voice = new VF.Voice({ num_beats: 1, beat_value: 4 });
  voice.addTickables(notes);

  var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

  voice.draw(context, stave);
}
function insE() {
  const VF = Vex.Flow;
  var div = document.getElementById("boo")
  var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

  renderer.resize(150, 150);
  var context = renderer.getContext();
  context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

  var stave = new VF.Stave(50, 0, 110);

  stave.addClef("treble").addTimeSignature("4/4");

  stave.setContext(context).draw();
  var notes = [
    new VF.StaveNote({ keys: ["e/4"], duration: "q" })
  ];
  var voice = new VF.Voice({ num_beats: 1, beat_value: 4 });
  voice.addTickables(notes);

  var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

  voice.draw(context, stave);
}
function insA() {
  const VF = Vex.Flow;
  var div = document.getElementById("boo")
  var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

  renderer.resize(150, 150);
  var context = renderer.getContext();
  context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

  var stave = new VF.Stave(50, 0, 110);

  stave.addClef("treble").addTimeSignature("4/4");

  stave.setContext(context).draw();
  var notes = [
    new VF.StaveNote({ keys: ["a/4"], duration: "q" })
  ];
  var voice = new VF.Voice({ num_beats: 1, beat_value: 4 });
  voice.addTickables(notes);

  var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

  voice.draw(context, stave);
}
function insB() {
  const VF = Vex.Flow;
  var div = document.getElementById("boo")
  var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

  renderer.resize(150, 150);
  var context = renderer.getContext();
  context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

  var stave = new VF.Stave(50, 0, 110);

  stave.addClef("treble").addTimeSignature("4/4");

  stave.setContext(context).draw();
  var notes = [
    new VF.StaveNote({ keys: ["b/4"], duration: "q" })
  ];
  var voice = new VF.Voice({ num_beats: 1, beat_value: 4 });
  voice.addTickables(notes);

  var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

  voice.draw(context, stave);
}
function insC() {
  const VF = Vex.Flow;
  var div = document.getElementById("boo")
  var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

  renderer.resize(150, 150);
  var context = renderer.getContext();
  context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

  var stave = new VF.Stave(50, 0, 110);

  stave.addClef("treble").addTimeSignature("4/4");

  stave.setContext(context).draw();
  var notes = [
    new VF.StaveNote({ keys: ["c/4"], duration: "q" })
  ];
  var voice = new VF.Voice({ num_beats: 1, beat_value: 4 });
  voice.addTickables(notes);

  var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

  voice.draw(context, stave);
}
/********** STORE  **********/

const STORE = {
  // 5 or more questions are required
  questions: [
    {
      renderNote: insG,
      answers: [
        'A',
        'B',
        'D sharp',
        'G'
      ],
      correctAnswer: 'G'
    },
    {
      renderNote: insE,
      answers: [
        'E',
        'E flat',
        'F',
        'F sharp'
      ],
      correctAnswer: 'E'
    },
    {
      renderNote: insA,
      answers: [
        'A',
        'B',
        'C',
        'D'
      ],
      correctAnswer: 'A'
    },
    {
      renderNote: insB,
      answers: [
        'F sharp',
        'G',
        'A sharp',
        'B'
      ],
      correctAnswer: 'B'
    },
    {
      renderNote: insC,
      answers: [
        'B flat',
        'A flat',
        'G sharp',
        'C'
      ],
      correctAnswer: 'C'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  isCorrect: "incorrect",
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

/********** TEMPLATE GENERATION FUNCTIONS **********/

function generateQuizQuestion(question) {
  return `
  <header class = "headerBox">
  <h1>What note is this?</h1>
  <h1>Question ${STORE.questionNumber + 1}/5<h1>
</header> 
<main>
  <div class="group">
  <div class ="item noteBox">
   <div id="boo"></div>
  </div>
  <div class="item box">
      <div class="item box">
      <form id="questionForm">
      <fieldset> 
      <input name="answer" type="radio" class="user-answer" value="${question.answers[0]}">
        <label for="answer">${question.answers[0]}
        <br>
      <input name="answer" type="radio" class="user-answer" value="${question.answers[1]}">
        <label for="answer">${question.answers[1]}
        <br>
      <input name="answer" type="radio" class="user-answer" value="${question.answers[2]}">
        <label for="answer">${question.answers[2]}
        <br>
      <input name="answer" type="radio" class="user-answer" value="${question.answers[3]}">
        <label for="answer">${question.answers[3]}
        <br>
       <button class="submit-button" type="button" data="${question.correctAnswer}">Submit</button>
      </fieldset>
      </form>
       </div>
      </div>
      <div class="answer-box">
      </div>
      
   </div>
   </div>`;
}

function endHtml() {
  return `
  <h1>You did it!</h1>
  <h1>your score was ${STORE.score}<h1>
  <button class="end-button" type="button">Refresh</button>`
}

// function startHtml() {
//   return `
//   <h1>Start the quiz!<h1>
//   <button class="start-button" type="button">Start!</button>`
// }

/********** RENDER FUNCTION(S) **********/

function generateQuizItemsString(quiz) {
  console.log("Generating quiz element");

  const question = generateQuizQuestion(STORE.questions[STORE.questionNumber]);
  //const items = quiz.questions.map((i) => generateQuizQuestion(i));

  return question;
}
function renderQuizQuestions() {
  console.log('`renderQuizQuestions` ran');
  const QuizItemsString = generateQuizItemsString(STORE);
  $('.quiz-item').html(QuizItemsString);
  let currentQuestion = STORE.questions[STORE.questionNumber];
  currentQuestion.renderNote();
}
function displayAnswerAnswer() {
  alert("you did it");
}
function renderImage(){
  if (STORE.isCorrect === "correct") {
    return `<img src="images/checkmark-16.png">`
  } else {
    return `<img src="images/x-mark-16.png">`
  }
}
function renderResults() {
  $('.answer-box').html(`
  <p>${STORE.isCorrect}</p>
  <button type="button" class="next">Next</button>`);
  $('.next').click(e => {
    if (STORE.questionNumber > 4) {
      $('.quiz-item').html(endHtml());
      handleRefresh();
      return;
    }
    handleQuizQuestions();
  })

}
function renderStart() {
  $('.quiz-item').html(`
  <section class="start-box">
  <h1>Welcome!</h1>
  <h2>This is a quiz that will test your note naming skills.</h2>
  <button type="button" class="start">Start</button>
  </section>`);
  $('.start').click(e => {
    handleQuizQuestions();
  })
}
// function startQuiz() {
//   STORE.quizStarted > 0;
//   renderQuizQuestions();
// }

/********** EVENT HANDLERS **********/

// function handleStart() {
//   $('.start-button').click(e => {
//     STORE.quizStarted += 1;
//     handleQuizQuestions();
//   });
// }

function handleRefresh() {
  $('.end-button').click(e => {
    STORE.questionNumber = 0;
    STORE.score = 0;
    handleQuizQuestions();
  });
}

function handleQuestionSubmit() {
  // when you hit that submit button in the quiz app do something
  $('.submit-button').click((e) => {
    e.preventDefault();
    //alert("this is an alert");
    let correctAnswer = $(e.currentTarget).attr('data');
    let radioAnswer = $('input[name=answer]:checked', '#questionForm').val();
    if (radioAnswer === undefined) {
      return;
    }
    if (correctAnswer === radioAnswer) {
      // $('.answer-box').html(`<p>Correct!</p>`);
      STORE.isCorrect = "correct";
      console.log("done");
      //$('#answer-box').removeClass('hidden');
      STORE.score += 1;
    } else {
      let question = STORE.questions[STORE.questionNumber];
      let correctAnswer = question.correctAnswer;
      STORE.isCorrect = `Incorrect. <img src="images/x-mark-16.png"><br> The correct answer is ${correctAnswer}`;
    }
    STORE.questionNumber += 1;
    renderResults();
    // if (STORE.quizStarted > 1) {
    //   $('.quiz-item').html(startHtml());
    //   handleStart();
    //   return;
    // }
  });
}


function handleQuizQuestions() {
  renderQuizQuestions();
  handleQuestionSubmit();
}

$(renderStart);

