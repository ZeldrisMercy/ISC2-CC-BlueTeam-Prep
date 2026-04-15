/* =========================================================
   ISC2 CC EXAM ENGINE
   Core logic for exam simulation and practice mode

   Features
   - load questions
   - shuffle questions
   - track answers
   - mark for review
   - navigation
   - scoring
   - domain statistics
   ========================================================= */

import { shuffleExam } from "./utils/shuffle.js"

export class ExamEngine {

    constructor(questions, config = {}) {

        this.originalQuestions = questions

        this.config = {

            mode: "practice", // practice | exam
            shuffle: true,
            examSize: 100,
            timerMinutes: 120,

            ...config
        }

        this.questions = []
        this.currentIndex = 0

        this.answers = {}
        this.marked = new Set()

        this.started = false
        this.finished = false

        this.startTime = null
        this.endTime = null
    }



    /* =========================================
       START EXAM
    ========================================= */

    start() {

        this.started = true
        this.startTime = Date.now()

        let pool = [...this.originalQuestions]

        if (this.config.shuffle) {

            pool = shuffleExam(pool)

        }

        if (this.config.mode === "exam") {

            pool = pool.slice(0, this.config.examSize)

        }

        this.questions = pool
        this.currentIndex = 0
    }



    /* =========================================
       GET CURRENT QUESTION
    ========================================= */

    getCurrentQuestion() {

        return this.questions[this.currentIndex]

    }



    /* =========================================
       ANSWER QUESTION
    ========================================= */

    answer(index) {

        this.answers[this.currentIndex] = index

    }



    /* =========================================
       MARK FOR REVIEW
    ========================================= */

    toggleMark() {

        if (this.marked.has(this.currentIndex)) {

            this.marked.delete(this.currentIndex)

        } else {

            this.marked.add(this.currentIndex)

        }

    }



    /* =========================================
       NAVIGATION
    ========================================= */

    next() {

        if (this.currentIndex < this.questions.length - 1) {

            this.currentIndex++

        }

    }

    previous() {

        if (this.currentIndex > 0) {

            this.currentIndex--

        }

    }

    goTo(index) {

        if (index >= 0 && index < this.questions.length) {

            this.currentIndex = index

        }

    }



    /* =========================================
       GET PROGRESS
    ========================================= */

    getProgress() {

        const answered = Object.keys(this.answers).length

        return {

            answered,
            total: this.questions.length,
            remaining: this.questions.length - answered,
            percentage: Math.round((answered / this.questions.length) * 100)

        }

    }



    /* =========================================
       FINISH EXAM
    ========================================= */

    finish() {

        this.finished = true
        this.endTime = Date.now()

        return this.calculateResults()

    }



    /* =========================================
       CALCULATE RESULTS
    ========================================= */

    calculateResults() {

        let correct = 0

        const domainStats = {}

        this.questions.forEach((q, index) => {

            const userAnswer = this.answers[index]

            const isCorrect = userAnswer === q.answer

            if (isCorrect) correct++

            const domain = q.domain || "General"

            if (!domainStats[domain]) {

                domainStats[domain] = {

                    total: 0,
                    correct: 0

                }

            }

            domainStats[domain].total++

            if (isCorrect) {

                domainStats[domain].correct++

            }

        })

        const score = Math.round((correct / this.questions.length) * 100)

        return {

            score,
            correct,
            total: this.questions.length,
            domainStats

        }

    }



    /* =========================================
       GET QUESTION STATE
    ========================================= */

    getQuestionState(index) {

        return {

            answered: index in this.answers,
            marked: this.marked.has(index)

        }

    }



    /* =========================================
       TIME ELAPSED
    ========================================= */

    getElapsedTime() {

        if (!this.startTime) return 0

        const now = this.finished ? this.endTime : Date.now()

        return Math.floor((now - this.startTime) / 1000)

    }



    /* =========================================
       RESET EXAM
    ========================================= */

    reset() {

        this.questions = []
        this.answers = {}
        this.marked.clear()

        this.currentIndex = 0

        this.started = false
        this.finished = false

        this.startTime = null
        this.endTime = null
    }

}