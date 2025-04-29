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




var getQuet = document.getElementById('quet')
var getOpts1 = document.getElementById('opts1')
var getOpts2 = document.getElementById('opts2')
var getOpts3 = document.getElementById('opts3')
var index = 0;
var getDisBtn = document.getElementById('disBtn');
var result = 0;



function next(){
    var getInputs = document.getElementsByTagName('input');
    var selectedValue = null;
    var getValues = [getOpts1.innerText, getOpts2.innerText, getOpts3.innerText];

    for(var i = 0; i < getInputs.length; i++){
        if (getInputs[i].checked) {
            selectedValue = getValues[i]; // match index to label text
            console.log(getInputs[i])
        }
    }

   
    if (selectedValue === questions[index].correctOption) {
        result++;
    }

    for(var i=0; i < getInputs.length; i++){
        getInputs[i].checked = false
    }

    if(index > questions.length - 1)  {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            result

        });

        getQuet.innerText = questions[0].question;
        getOpts1.innerText = questions[0].option1;
        getOpts2.innerText = questions[0].option2;
        getOpts3.innerText = questions[0].option3;

        index = 0;
        result = 0;
    } else {
        getQuet.innerText = questions[index].question;
        getOpts1.innerText = questions[index].option1;
        getOpts2.innerText = questions[index].option2;
        getOpts3.innerText = questions[index].option3;

        index++;
   
    }

    getDisBtn.disabled = true;
}

next();



function btndis(){
getDisBtn.disabled = false
}