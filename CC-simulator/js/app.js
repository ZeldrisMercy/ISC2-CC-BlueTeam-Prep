// js/app.js

import { ExamEngine } from "./examEngine.js";
import { generateQuestions } from "../data/questionGenerator.js";

class App {
  constructor() {
    this.engine = null;
    this.questions = [];
  }

  async init() {
    console.log("Inicializando CC Simulator...");

    // gera banco de questões
    this.questions = generateQuestions(500);

    console.log("Banco de questões carregado:", this.questions.length);

    // inicializa engine
    this.engine = new ExamEngine(this.questions);

    // conecta com UI
    this.bindUI();

    console.log("Aplicação pronta.");
  }

  bindUI() {
    const startExamBtn = document.getElementById("startExam");
    const startPracticeBtn = document.getElementById("startPractice");

    if (startExamBtn) {
      startExamBtn.addEventListener("click", () => {
        this.startExamMode();
      });
    }

    if (startPracticeBtn) {
      startPracticeBtn.addEventListener("click", () => {
        this.startPracticeMode();
      });
    }
  }

  startExamMode() {
    console.log("Modo EXAM iniciado");

    this.engine.startExam({
      questionCount: 100,
      timeLimit: 5400 // 90 minutos
    });

    document.dispatchEvent(new CustomEvent("examStarted"));
  }

  startPracticeMode() {
    console.log("Modo PRACTICE iniciado");

    this.engine.startPractice({
      questionCount: 20,
      timeLimit: null
    });

    document.dispatchEvent(new CustomEvent("practiceStarted"));
  }

  getEngine() {
    return this.engine;
  }
}

// instância global
const app = new App();

window.CCSimulator = app;

window.addEventListener("DOMContentLoaded", () => {
  app.init();
});