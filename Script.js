const questions = [
    {
        question:"Which is not feature of JS?",
        answers:[
            {text:"Compiled laguage", correct:true},
            {text:"Hoisting", correct: false},
            {text:"Closure", correct: false},
            {text:"IFEE", correct: false}
        ]
    },
    {
        question:"What does DOM stand for in JavaScript?",
        answers:[
            {text:"Data Object Model", correct:false},
            {text:"Document Object Model", correct:true},
            {text:"Document Oriented Method", correct:false},
            {text:"Document Ownership Model", correct:false},
        ]
    },

    {
        question:"Which keyword is used to declare a variable in JavaScript?",
        answers:[
            {text:"declare", correct:false},
            {text:"variable", correct:false},
            {text:"v", correct:false},
            {text:"var", correct:true},
        ]
    },
    {
        question:"Which function is used to print something in the console in JavaScript?",
        answers:[
            {text:"log()", correct:false},
            {text:"print()", correct:false},
            {text:"display()", correct:false},
            {text:"console.log()", correct:true},
        ]
    },
    {
        question:"Which is not feature of JS?",
        answers:[
            {text:"Compiled laguage", correct:true},
            {text:"Hoisting", correct: false},
            {text:"Closure", correct: false},
            {text:"IFEE", correct: false}
        ]
    },
    {
        question:"How can you check the length of an array named 'arr' in JavaScript?",
        answers:[
            {text:"lengthOf(arr)", correct:false},
            {text:"arr.size", correct:false},
            {text:"arr.length", correct:true},
            {text:"getSize(arr)", correct:false},
        ]
    },

    {
        question:"Which function is used to print something in the console in JavaScript?",
        answers:[
            {text:"log()", correct:false},
            {text:"print()", correct:false},
            {text:"display()", correct:false},
            {text:"console.log()", correct:true},
        ]
    },

    {
        question:"Which keyword is used to declare a variable in JavaScript?",
        answers:[
            {text:"declare", correct:false},
            {text:"variable", correct:false},
            {text:"v", correct:false},
            {text:"var", correct:true},
        ]
    },

    {
        question:"Which keyword is used to declare a variable in JavaScript?",
        answers:[
            {text:"declare", correct:false},
            {text:"variable", correct:false},
            {text:"v", correct:false},
            {text:"var", correct:true},
        ]
    },

    {
        question:"How can you check the length of an array named 'arr' in JavaScript?",
        answers:[
            {text:"lengthOf(arr)", correct:false},
            {text:"arr.size", correct:false},
            {text:"arr.length", correct:true},
            {text:"getSize(arr)", correct:false},
        ]
    },



];

const questionElement = document.getElementById("question");
const AnsButton = document.getElementById("answer-button");
const nextbutton = document.getElementById("next-button");


let currentQuestionIndex =0;
let score =0;

function startQuiz(){
    currentQuestionIndex =0;
    score=0;
    nextbutton.innerHTML ="Next";
    showQuestion();
}
function showQuestion(){
    resetstate();
    let currentquestion = questions[currentQuestionIndex];
    let questionnum = currentQuestionIndex+1;
    questionElement.innerHTML = questionnum +"."+ currentquestion.question;

    currentquestion.answers.forEach(answer =>{
      const button =document.createElement("button") ;
      button.innerHTML = answer.text;
       button.classList.add('bg-gray-200',  
       'font-semibold', 'm-2','py-2', 'px-4','shadow-sm', 'rounded');
       AnsButton.appendChild(button);
     if(answer.correct){
        button.dataset.correct = answer.correct;
     }
       button.addEventListener("click",selectans);
    });


}

function resetstate(){
    nextbutton.style.display ="none";
    while(AnsButton.firstChild){
        AnsButton.removeChild(AnsButton.firstChild)
    }

}
function selectans(e){
   const selectedbtn = e.target;
   const isCorrect = selectedbtn.dataset.correct === "true";
   if(isCorrect){
    selectedbtn.classList.add('bg-green-400');
    score++;
    
   }
   else{
    selectedbtn.classList.add('bg-red-500',);  
   }
   

   Array.from(AnsButton.children).forEach(button =>{
    if (button.dataset.correct ==="true"){
        button.classList.add('bg-green-400');
    }
   button.disabled= true;
   });
   nextbutton.style.display ="block"

}
function showscore(){
    resetstate();
    questionElement.innerHTML =`you scored ${score} out of ${questions.length}!`;
    nextbutton.innerHTML="Play Again";
    nextbutton.style.display ="block"
}
function handleNextButton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length){
        showQuestion();
    }
    else{
        showscore();
    }

}
nextbutton.addEventListener("click",()=>{
    if(currentQuestionIndex <questions.length)
{
    handleNextButton();
}
else{
    startQuiz();
}
})

startQuiz();

