/* =====================================================
   utils/timer.js
   Advanced Timer System for CC Practice Exam Engine

   Features
   - Exam timer (countdown)
   - Practice mode (optional timer)
   - Pause / Resume
   - Time formatting
   - Callback when time expires
   ===================================================== */

export class ExamTimer {

    constructor(durationSeconds, onExpireCallback = null) {

        this.duration = durationSeconds
        this.remaining = durationSeconds

        this.interval = null
        this.running = false

        this.onExpire = onExpireCallback

        this.displayElement = null
    }

    /* ================================
       Attach timer to DOM element
    ================================= */

    attachDisplay(elementId) {

        this.displayElement = document.getElementById(elementId)

        this.render()

    }

    /* ================================
       Start timer
    ================================= */

    start() {

        if (this.running) return

        this.running = true

        this.interval = setInterval(() => {

            this.remaining--

            this.render()

            if (this.remaining <= 0) {

                this.stop()

                if (this.onExpire) {
                    this.onExpire()
                }

            }

        }, 1000)

    }

    /* ================================
       Pause timer
    ================================= */

    pause() {

        if (!this.running) return

        clearInterval(this.interval)

        this.running = false

    }

    /* ================================
       Resume timer
    ================================= */

    resume() {

        if (this.running) return

        this.start()

    }

    /* ================================
       Stop timer completely
    ================================= */

    stop() {

        clearInterval(this.interval)

        this.running = false

    }

    /* ================================
       Reset timer
    ================================= */

    reset() {

        this.stop()

        this.remaining = this.duration

        this.render()

    }

    /* ================================
       Get remaining seconds
    ================================= */

    getRemaining() {

        return this.remaining

    }

    /* ================================
       Format time (mm:ss)
    ================================= */

    formatTime(seconds) {

        const minutes = Math.floor(seconds / 60)
        const secs = seconds % 60

        const m = minutes.toString().padStart(2, "0")
        const s = secs.toString().padStart(2, "0")

        return `${m}:${s}`

    }

    /* ================================
       Update UI
    ================================= */

    render() {

        if (!this.displayElement) return

        this.displayElement.textContent = this.formatTime(this.remaining)

        if (this.remaining < 60) {
            this.displayElement.classList.add("timer-warning")
        }

        if (this.remaining < 15) {
            this.displayElement.classList.add("timer-danger")
        }

    }

}



/* =====================================================
   Helper: create exam timer for official simulation
   100 questions — 120 minutes
   ===================================================== */

export function createOfficialExamTimer(callback) {

    const minutes120 = 120 * 60

    return new ExamTimer(minutes120, callback)

}



/* =====================================================
   Helper: create optional practice timer
   ===================================================== */

export function createPracticeTimer(minutes, callback) {

    const seconds = minutes * 60

    return new ExamTimer(seconds, callback)

}