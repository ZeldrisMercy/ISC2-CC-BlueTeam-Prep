let questions = []
let currentQuestion = 0
let score = 0

fetch('questions.json')
.then(response => response.json())
.then(data => {

questions = data
loadQuestion()

})

function loadQuestion(){

let q = questions[currentQuestion]

document.getElementById("question").innerText = q.question

let optionsHTML = ""

q.options.forEach((option,index)=>{

optionsHTML += `<button onclick="answer(${index})">${option}</button><br>`

})

document.getElementById("options").innerHTML = optionsHTML

}

function answer(choice){

if(choice === questions[currentQuestion].answer){
score++
}

currentQuestion++

if(currentQuestion < questions.length){

loadQuestion()

}else{

showResult()

}

}

function nextQuestion(){

loadQuestion()

}

function showResult(){

document.getElementById("quiz").style.display="none"

document.getElementById("result").innerHTML =
`Final Score: ${score}/${questions.length}`

}