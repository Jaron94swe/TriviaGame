var countDown = setTimeout(30 * 1000);
// var interval = 
var second = 31
var question = "is this working?";
var answer = ["A:", "B:", "C:", "D:"];
var correctAnswer = answer[0];
var triviaQuestions = [
    {
        question: "Q. What was the name of the second Indiana Jones movie, released in 1984?",
        answer:["A:", "B:", "C:", "D:"],
        correctAnswer: answer[0]
    },

    {
        question: "Q. Which actor starred in the 1961 movie The Hustler?",
        answer:["A:", "B:", "C:", "D:"],
        correctAnswer: answer[0]
    },

    {
        question: "Q. Which English director was responsible for the epic movie Gladiator in 2000? ",
        answer:["A:", "B:", "C:", "D:"],
        correctAnswer: answer[1]
    },

    {
        question: "Q. Which movie features Bruce Willis as John McClane, a New York police officer, taking on a gang of criminals in a Los Angeles skyscraper on Christmas Eve?",
        answer:["A:", "B:", "C:", "D:"],
        correctAnswer: answer[3]
    },

    {
        question: "Q. What is the name of the hobbit played by Elijah Wood in the Lord of the Rings movies?",
        answer:["A:", "B:", "C:", "D:"],
        correctAnswer: answer[2]
    },

    {
        question: "Q. Which actress plays Katniss Everdeen in the Hunger Games movies?",
        answer:["A:", "B:", "C:", "D:"],
        correctAnswer: answer[2]
    },

    {
        question: "Q. Judy Garland starred as Dorothy Gale in which classic movie?",
        answer:["A:", "B:", "C:", "D:"],
        correctAnswer: answer[1]
    },

    {
        question: "Q. What is the name of the kingdom where the 2013 animated movie Frozen is set?",
        answer:["A:", "B:", "C:", "D:"],
        correctAnswer: answer[3]
    },

    {
        question: "Q. Which 1997 science fiction movie starring Will Smith and Tommy Lee Jones tells the story of a secret agency that polices alien refugees who are living on earth disguised as humans?",
        answer:["A:", "B:", "C:", "D:"],
        correctAnswer: answer[0]
    },

    {
        question: "Q. Which war movie won the Academy Award for Best Picture in 2009?",
        answer:["A:", "B:", "C:", "D:"],
        correctAnswer: answer[2]
    },

]

setup();

var beginInterval = setInterval(interval, 1 * 1000);
function interval() {
    second--;
    $("#timer").text("you have " + second + " seconds remaing");
    if (second === -1) {
        clearInterval(beginInterval)
        alert(correctAnswer, 4 * 1000)
    }
}



interval();
console.log(interval);

$("#answerA").click(function () {
if ( correctAnswer === answer[0]){
        clearInterval(beginInterval);
        alert("Correct!", 4 * 1000);
    }
    else {
        clearInterval(beginInterval);
        alert("Incorrect!" + "Correct Answer is " + correctAnswer  + "!", 4 * 1000);
    }

})


$("#answerB").click(function () {
    if (answer[1] === correctAnswer) {
        clearInterval(beginInterval);
        alert("Correct!", 4 * 1000);
    }
    else {
        clearInterval(beginInterval);
        alert("Incorrect!" + " Correct Answer is " + correctAnswer  + "!", 4 * 1000);
    }
})

$("#answerC").click(function () {
    if (answer[2] === correctAnswer) {
        clearInterval(beginInterval);
        alert("Correct!", 4 * 1000);
    }
    else {
        clearInterval(beginInterval);
        alert("Incorrect!" + "Correct Answer is " + correctAnswer  + "!", 4 * 1000);
    }
})
$("#answerD").click(function () {
    if (answer[3] === correctAnswer) {
        clearInterval(beginInterval);
        alert("Correct!", 4 * 1000);
    }
    else {
        clearInterval(beginInterval);
        alert("Incorrect!" + "Correct Answer is " + correctAnswer  + "!", 4 * 1000);
    }
})

               

// setup();

    function setup() {
        for (var i = 0; i < triviaQuestions.length; i++) {
            $("#questions").text(triviaQuestions[i].question)
            console.log(triviaQuestions[i].question)
            
            $("#answerA").text(triviaQuestions[i].answer[0]);
            console.log(triviaQuestions[i].answer[0])
            $("#answerB").text(triviaQuestions[i].answer[1]);
            $("#answerC").text(triviaQuestions[i].answer[2]);
            $("#answerD").text(triviaQuestions[i].answer[3]);
        }
    }