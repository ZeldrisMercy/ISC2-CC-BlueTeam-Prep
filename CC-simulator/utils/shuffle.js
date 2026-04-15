/* =========================================================
   utils/shuffle.js
   Fisher–Yates Shuffle Utilities for CC Exam Engine

   Used for:
   - Randomizing question order
   - Randomizing answer alternatives
   - Ensuring fair exam simulations

   Safe deterministic utilities with optional seed
   ========================================================= */


/* =========================================
   BASIC FISHER-YATES SHUFFLE
========================================= */

export function shuffleArray(array) {

    const arr = [...array]

    for (let i = arr.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1))

        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp

    }

    return arr
}



/* =========================================
   SHUFFLE QUESTIONS
========================================= */

export function shuffleQuestions(questions) {

    return shuffleArray(questions)

}



/* =========================================
   SHUFFLE ANSWER OPTIONS
========================================= */

export function shuffleOptions(question) {

    const options = [...question.options]

    const shuffled = shuffleArray(options)

    const correctText = question.options[question.answer]

    const newCorrectIndex = shuffled.indexOf(correctText)

    return {

        ...question,

        options: shuffled,

        answer: newCorrectIndex

    }

}



/* =========================================
   SHUFFLE QUESTIONS + OPTIONS
========================================= */

export function shuffleExam(questions) {

    const shuffledQuestions = shuffleArray(questions)

    return shuffledQuestions.map(q => shuffleOptions(q))

}



/* =========================================
   RANDOM INTEGER
========================================= */

export function randomInt(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min

}



/* =========================================
   RANDOM PICK
========================================= */

export function randomPick(array) {

    return array[randomInt(0, array.length - 1)]

}



/* =========================================
   SHUFFLE WITH SEED (ADVANCED)
   Useful for reproducible exams
========================================= */

export function seededShuffle(array, seed = 1) {

    const arr = [...array]

    function random() {

        const x = Math.sin(seed++) * 10000

        return x - Math.floor(x)

    }

    for (let i = arr.length - 1; i > 0; i--) {

        const j = Math.floor(random() * (i + 1))

        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp

    }

    return arr

}



/* =========================================
   SHUFFLE OPTIONS SEEDED
========================================= */

export function seededShuffleOptions(question, seed) {

    const options = [...question.options]

    const shuffled = seededShuffle(options, seed)

    const correctText = question.options[question.answer]

    const newCorrectIndex = shuffled.indexOf(correctText)

    return {

        ...question,

        options: shuffled,

        answer: newCorrectIndex

    }

}



/* =========================================
   FULL SEEDED EXAM SHUFFLE
========================================= */

export function seededShuffleExam(questions, seed = 1) {

    const shuffledQuestions = seededShuffle(questions, seed)

    return shuffledQuestions.map((q, index) =>
        seededShuffleOptions(q, seed + index)
    )

}



/* =========================================
   VALIDATE QUESTION STRUCTURE
========================================= */

export function validateQuestion(question) {

    if (!question) return false

    if (!question.question) return false

    if (!Array.isArray(question.options)) return false

    if (question.options.length < 2) return false

    if (typeof question.answer !== "number") return false

    return true

}



/* =========================================
   SANITIZE QUESTION BANK
========================================= */

export function sanitizeQuestionBank(questions) {

    return questions.filter(q => validateQuestion(q))

}