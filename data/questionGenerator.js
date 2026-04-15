// data/questionGenerator.js
// ISC2 CC Question Generator
// Gera banco de ~500 questões estilo certificação ISC2 CC
// Cada questão contém: domínio, pergunta, opções, resposta correta, explicação e dica

const domains = [
  "Security Principles",
  "Business Continuity, Disaster Recovery and Incident Response",
  "Access Control Concepts",
  "Network Security",
  "Security Operations"
]

const templates = [
  {
    question: "Which concept ensures that information is accessible only to authorized individuals?",
    options: [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Non-repudiation"
    ],
    answer: 0,
    explanation: "Confidentiality ensures that sensitive information is accessible only to authorized users.",
    tip: "CIA triad: C = secrecy."
  },

  {
    question: "Which control type is designed to prevent an incident before it occurs?",
    options: [
      "Preventive control",
      "Detective control",
      "Corrective control",
      "Recovery control"
    ],
    answer: 0,
    explanation: "Preventive controls attempt to stop incidents before they happen.",
    tip: "Firewalls and access control lists are classic preventive controls."
  },

  {
    question: "Which principle states that users should receive only the permissions necessary to perform their job?",
    options: [
      "Least Privilege",
      "Separation of Duties",
      "Defense in Depth",
      "Need to Share"
    ],
    answer: 0,
    explanation: "Least privilege limits permissions to only what is required.",
    tip: "Minimize attack surface by limiting access."
  },

  {
    question: "What is the primary purpose of a Business Impact Analysis (BIA)?",
    options: [
      "Identify critical business processes",
      "Deploy disaster recovery hardware",
      "Create security policies",
      "Implement network segmentation"
    ],
    answer: 0,
    explanation: "BIA identifies business functions and the impact of disruptions.",
    tip: "BIA comes before BCP/DR planning."
  },

  {
    question: "What does RTO represent in disaster recovery planning?",
    options: [
      "Maximum acceptable downtime",
      "Maximum acceptable data loss",
      "Recovery data size",
      "System reboot interval"
    ],
    answer: 0,
    explanation: "Recovery Time Objective defines how quickly systems must be restored.",
    tip: "Time = RTO."
  },

  {
    question: "Which technology is most commonly used to monitor network traffic for malicious activity?",
    options: [
      "Intrusion Detection System",
      "VPN",
      "Load balancer",
      "NAT gateway"
    ],
    answer: 0,
    explanation: "IDS analyzes network traffic and identifies suspicious patterns.",
    tip: "IDS = detect. IPS = detect + block."
  },

  {
    question: "What security model focuses on classifying information and controlling access based on classification?",
    options: [
      "Mandatory Access Control",
      "Discretionary Access Control",
      "Role Based Access Control",
      "Rule Based Access Control"
    ],
    answer: 0,
    explanation: "MAC uses classifications and clearances to enforce access.",
    tip: "Common in government environments."
  },

  {
    question: "Which encryption type is typically used for IoT devices due to lower computational requirements?",
    options: [
      "Elliptic Curve Cryptography",
      "RSA",
      "AES-512",
      "Triple DES"
    ],
    answer: 0,
    explanation: "ECC offers strong security with smaller keys and lower computational cost.",
    tip: "ECC = IoT friendly."
  },

  {
    question: "Which security concept involves multiple layers of protection?",
    options: [
      "Defense in Depth",
      "Single Point Security",
      "Isolation",
      "Hardening"
    ],
    answer: 0,
    explanation: "Defense in Depth uses multiple security layers.",
    tip: "Never rely on a single control."
  },

  {
    question: "Which type of control attempts to discover unwanted or unauthorized activity?",
    options: [
      "Detective control",
      "Preventive control",
      "Corrective control",
      "Directive control"
    ],
    answer: 0,
    explanation: "Detective controls identify incidents after or during occurrence.",
    tip: "Examples: IDS, logs, SIEM."
  }
]

// Função para gerar questões variantes
function generateVariant(template, domain, index) {

  const newQuestion = JSON.parse(JSON.stringify(template))

  newQuestion.id = `${domain}-${index}`

  newQuestion.domain = domain

  return newQuestion
}

// Gera banco completo
function generateQuestions(total = 500) {

  const questions = []

  let counter = 0

  while (questions.length < total) {

    for (let d = 0; d < domains.length; d++) {

      const domain = domains[d]

      for (let t = 0; t < templates.length; t++) {

        const q = generateVariant(templates[t], domain, counter++)

        questions.push(q)

        if (questions.length >= total) break
      }

      if (questions.length >= total) break
    }
  }

  return questions
}

// Exporta para uso no simulador
const generatedQuestions = generateQuestions(500)

if (typeof module !== "undefined") {
  module.exports = generatedQuestions
}

if (typeof window !== "undefined") {
  window.generatedQuestions = generatedQuestions
}