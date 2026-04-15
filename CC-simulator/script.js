// js/script.js
// UI Controller (~320 linhas)

let engine = null
let currentQuestionIndex = 0
let flaggedQuestions = new Set()
let answers = {}

const ui = {
    startScreen: document.getElementById("start-screen"),
    examContainer: document.getElementById("exam-container"),
    questionText: document.getElementById("question-text"),
    answersContainer: document.getElementById("answers"),
    progressBar: document.getElementById("progress-bar"),
    progressText: document.getElementById("progress-text"),
    nextBtn: document.getElementById("next-btn"),
    prevBtn: document.getElementById("prev-btn"),
    flagBtn: document.getElementById("flag-btn"),
    finishBtn: document.getElementById("finish-btn"),
    remainingCounter: document.getElementById("remaining-counter"),
    timer: document.getElementById("timer"),
    themeToggle: document.getElementById("theme-toggle"),
    resultsContainer: document.getElementById("results")
}

function initUI() {

    engine = window.CCSimulator.getEngine()

    document.addEventListener("examStarted", startExamUI)
    document.addEventListener("practiceStarted", startPracticeUI)

    ui.nextBtn?.addEventListener("click", nextQuestion)
    ui.prevBtn?.addEventListener("click", previousQuestion)
    ui.flagBtn?.addEventListener("click", toggleFlag)
    ui.finishBtn?.addEventListener("click", finishExam)

    ui.themeToggle?.addEventListener("click", toggleTheme)

    document.addEventListener("keydown", handleKeyboard)
}

function startExamUI() {

    ui.startScreen.style.display = "none"
    ui.examContainer.style.display = "block"

    engine.startExamSession()

    renderQuestion()
    updateProgress()
}

function startPracticeUI() {

    ui.startScreen.style.display = "none"
    ui.examContainer.style.display = "block"

    engine.startPracticeSession()

    renderQuestion()
    updateProgress()
}

function renderQuestion() {

    const question = engine.getQuestion(currentQuestionIndex)

    if (!question) return

    ui.questionText.innerText = question.question

    ui.answersContainer.innerHTML = ""

    const options = [...question.options]

    options.forEach((option, index) => {

        const button = document.createElement("button")

        button.className = "answer-option"

        button.innerText = option

        button.onclick = () => selectAnswer(index)

        if (answers[currentQuestionIndex] === index) {
            button.classList.add("selected")
        }

        ui.answersContainer.appendChild(button)

    })

    updateFlagUI()
    updateRemaining()
}

function selectAnswer(optionIndex) {

    answers[currentQuestionIndex] = optionIndex

    engine.answerQuestion(currentQuestionIndex, optionIndex)

    const buttons = document.querySelectorAll(".answer-option")

    buttons.forEach(b => b.classList.remove("selected"))

    buttons[optionIndex].classList.add("selected")

    updateRemaining()
}

function nextQuestion() {

    if (currentQuestionIndex < engine.totalQuestions() - 1) {

        currentQuestionIndex++

        renderQuestion()

        updateProgress()
    }
}

function previousQuestion() {

    if (currentQuestionIndex > 0) {

        currentQuestionIndex--

        renderQuestion()

        updateProgress()
    }
}

function toggleFlag() {

    if (flaggedQuestions.has(currentQuestionIndex)) {
        flaggedQuestions.delete(currentQuestionIndex)
    } else {
        flaggedQuestions.add(currentQuestionIndex)
    }

    updateFlagUI()
}

function updateFlagUI() {

    if (!ui.flagBtn) return

    if (flaggedQuestions.has(currentQuestionIndex)) {
        ui.flagBtn.classList.add("flagged")
    } else {
        ui.flagBtn.classList.remove("flagged")
    }
}

function updateProgress() {

    const total = engine.totalQuestions()

    const percent = ((currentQuestionIndex + 1) / total) * 100

    ui.progressBar.style.width = percent + "%"

    ui.progressText.innerText = `Questão ${currentQuestionIndex + 1} / ${total}`
}

function updateRemaining() {

    const total = engine.totalQuestions()

    const answered = Object.keys(answers).length

    const remaining = total - answered

    if (ui.remainingCounter)
        ui.remainingCounter.innerText = `Restantes: ${remaining}`
}

function finishExam() {

    const result = engine.finishExam()

    showResults(result)
}

function showResults(result) {

    ui.examContainer.style.display = "none"

    ui.resultsContainer.style.display = "block"

    const score = document.createElement("h2")
    score.innerText = `Score: ${result.score}%`

    const correct = document.createElement("p")
    correct.innerText = `Acertos: ${result.correct}`

    const wrong = document.createElement("p")
    wrong.innerText = `Erros: ${result.wrong}`

    const flagged = document.createElement("p")
    flagged.innerText = `Marcadas para revisão: ${flaggedQuestions.size}`

    ui.resultsContainer.appendChild(score)
    ui.resultsContainer.appendChild(correct)
    ui.resultsContainer.appendChild(wrong)
    ui.resultsContainer.appendChild(flagged)

    renderDomainStats(result)
}

function renderDomainStats(result) {

    if (!result.domains) return

    const title = document.createElement("h3")
    title.innerText = "Estatísticas por domínio"

    ui.resultsContainer.appendChild(title)

    Object.keys(result.domains).forEach(domain => {

        const stat = result.domains[domain]

        const row = document.createElement("div")

        row.className = "domain-stat"

        row.innerText = `${domain}: ${stat.correct}/${stat.total}`

        ui.resultsContainer.appendChild(row)
    })
}

function toggleTheme() {

    const body = document.body

    if (body.classList.contains("dark")) {
        body.classList.remove("dark")
        body.classList.add("light")
    } else {
        body.classList.remove("light")
        body.classList.add("dark")
    }
}

function handleKeyboard(e) {

    if (e.key === "ArrowRight") {
        nextQuestion()
    }

    if (e.key === "ArrowLeft") {
        previousQuestion()
    }

    if (e.key === "f") {
        toggleFlag()
    }

    if (e.key === "1") selectAnswer(0)
    if (e.key === "2") selectAnswer(1)
    if (e.key === "3") selectAnswer(2)
    if (e.key === "4") selectAnswer(3)
}

document.addEventListener("DOMContentLoaded", initUI)