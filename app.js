var questions = [
    {
        question: "What does HTML stand for?",
        option1: "Hyperlinks and Text Markup Language",
        option2: "Hypertext Markup Language",
        option3: "Home Tool Markup Language",
        correctOption: "Hypertext Markup Language",
    },
    {
        question: "Who is making the Web standards?",
        option1: "Google",
        option2: "The World Wide Web Consortium",
        option3: "Microsoft",
        correctOption: "The World Wide Web Consortium",
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        option1: "<heading>",
        option2: "<h6>",
        option3: "<h1>",
        correctOption: "<h1>",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        option1: "<linebreak>",
        option2: "<br>",
        option3: "<break>",
        correctOption: "<br>",
    },
    {
        question: "What is the correct HTML for adding a background color?",
        option1: '<body bg="yellow">',
        option2: "<background>yellow</background>",
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">',
    },
    {
        question: "Choose the correct HTML element to define important text:",
        option1: "<strong>",
        option2: "<b>",
        option3: "<i>",
        correctOption: "<strong>",
    },
    {
        question: "Choose the correct HTML element to define emphasized text:",
        option1: "<italic>",
        option2: "<i>",
        option3: "<em>",
        correctOption: "<em>",
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        option1: "<a>http://www.w3schools.com</a>",
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>',
    },
];


  var htmlques = document.getElementById("ques");
  var htmlopt1 = document.getElementById("opt1");
  var htmlopt2 = document.getElementById("opt2");
  var htmlopt3 = document.getElementById("opt3");
  var radio1 = document.getElementById("radio1");
  var radio2 = document.getElementById("radio2");
  var radio3 = document.getElementById("radio3");
  var getBtn = document.getElementById("btn");
  var resetBtn = document.getElementById("resetBtn");
  var startBtn = document.getElementById("startBtn");
  var timerDiv = document.getElementById("timer");
  var progress = document.getElementById("progress");

  var index = 0;
  var score = 0;
  var timer = 0;
  var timerInterval;

  function startTimer() {
    timer = 0;
    timerInterval = setInterval(function () {
      timer++;
      timerDiv.innerText = "Time: " + timer + "s";
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerInterval);
  }

  function loadQuestion() {
    htmlques.innerText = questions[index].question;
    htmlopt1.innerText = questions[index].option1;
    htmlopt2.innerText = questions[index].option2;
    htmlopt3.innerText = questions[index].option3;
    progress.innerText = `Question ${index + 1} of ${questions.length}`;
  }

  function nextQuestion() {
  

    let selectedAnswer = "";
    if (radio1.checked) selectedAnswer = htmlopt1.innerText;
    else if (radio2.checked) selectedAnswer = htmlopt2.innerText;
    else if (radio3.checked) selectedAnswer = htmlopt3.innerText;

    if (selectedAnswer === questions[index].correctOption) {
      score++;
    }

    index++;
    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = false;
    getBtn.disabled = true;
    disableOptions();

    if (index >= questions.length) {
      stopTimer();
      Swal.fire({
        title: "Quiz Completed!",
        html: `<h2>Your Score: ${score}/${questions.length}</h2><p>Time Taken: ${timer} seconds</p>`,
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        resetBtn.style.display = "inline-block";
        getBtn.style.display = "none";
      });
    } else {
      loadQuestion();
      enableOptions();
    }
  }

  function btnWork() {
    getBtn.disabled = false;
  }

  function resetQuiz() {
    index = 0;
    score = 0;
    timer = 0;
    timerDiv.innerText = "Time: 0s";
    getBtn.disabled = true;
    getBtn.style.display = "none";
    resetBtn.style.display = "none";
    startBtn.style.display = "inline-block";
    document.getElementsByTagName('input').style.display = "block";
    disableOptions();
  }

  function startQuiz() {
    
    index = 0;
    score = 0;
    timer = 0;
    
    startBtn.style.display = "none";
    getBtn.style.display = "inline-block";
    getBtn.disabled = true;
    resetBtn.style.display = "none";
    enableOptions();
    loadQuestion();
    startTimer();
    
    
  }

  function enableOptions() {
    radio1.disabled = false;
    radio2.disabled = false;
    radio3.disabled = false;
  }

  function disableOptions() {
    radio1.disabled = true;
    radio2.disabled = true;
    radio3.disabled = true;
  }