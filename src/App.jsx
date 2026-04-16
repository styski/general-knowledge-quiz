import React, { useMemo, useState } from "react";

export default function App() {
  const quiz = useMemo(
    () => [
      {
        id: 1,
        type: "mcq",
        question: "Which empire was ruled by Mansa Musa, one of the richest individuals in history?",
        options: ["Ottoman Empire", "Mali Empire", "Byzantine Empire"],
        correctIndex: 1,
        explanation:
          "Mansa Musa ruled the Mali Empire in the 14th century. His wealth became legendary, especially after his pilgrimage to Mecca.",
      },
      {
        id: 2,
        type: "mcq",
        question: "What is the SI unit of electrical resistance?",
        options: ["Volt", "Ampere", "Ohm"],
        correctIndex: 2,
        explanation:
          "The ohm is named after Georg Simon Ohm and measures how much a material resists electric current.",
      },
      {
        id: 3,
        type: "mcq",
        question: "Which country has the longest coastline in the world?",
        options: ["Russia", "Australia", "Canada"],
        correctIndex: 2,
        explanation:
          "Canada has by far the world's longest coastline because of its vast mainland and thousands of islands.",
      },
      {
        id: 4,
        type: "mcq",
        question: "Who painted Guernica?",
        options: ["Salvador Dalí", "Pablo Picasso", "Joan Miró"],
        correctIndex: 1,
        explanation:
          "Picasso painted Guernica in 1937 as a powerful response to the bombing of the Spanish town during the civil war.",
      },
      {
        id: 5,
        type: "mcq",
        question: "Which organ produces insulin?",
        options: ["Liver", "Pancreas", "Kidney"],
        correctIndex: 1,
        explanation:
          "The pancreas produces insulin, a hormone that helps regulate blood sugar levels.",
      },
      {
        id: 6,
        type: "mcq",
        question: "What does the acronym AI stand for in technology?",
        options: ["Automated Interface", "Artificial Intelligence", "Advanced Internet"],
        correctIndex: 1,
        explanation:
          "Artificial Intelligence refers to computer systems designed to perform tasks that normally require human intelligence.",
      },
      {
        id: 7,
        type: "mcq",
        question: "Which tennis tournament is played on clay courts?",
        options: ["Wimbledon", "US Open", "French Open"],
        correctIndex: 2,
        explanation:
          "The French Open, also known as Roland-Garros, is famous for its slow clay courts.",
      },
      {
        id: 8,
        type: "mcq",
        question: "What is the smallest prime number greater than 100?",
        options: ["101", "103", "107"],
        correctIndex: 0,
        explanation:
          "101 is prime and is the first prime number that comes after 100.",
      },
      {
        id: 9,
        type: "mcq",
        question: "Which sea separates Europe and Africa?",
        options: ["Black Sea", "Red Sea", "Mediterranean Sea"],
        correctIndex: 2,
        explanation:
          "The Mediterranean Sea lies between southern Europe and northern Africa and has been central to trade and history for millennia.",
      },
      {
        id: 10,
        type: "mcq",
        question: "Which company became the world’s most valuable publicly traded company in 2024 during the AI boom?",
        options: ["Microsoft", "Apple", "NVIDIA"],
        correctIndex: 2,
        explanation:
          "NVIDIA surged in value as demand for AI chips and data-center hardware accelerated.",
      },
      {
        id: 11,
        type: "mcq",
        question: "What is the chemical symbol for silver?",
        options: ["Si", "Ag", "Au"],
        correctIndex: 1,
        explanation:
          "Ag comes from the Latin word argentum, meaning silver.",
      },
      {
        id: 12,
        type: "mcq",
        question: "Who was the first Roman emperor?",
        options: ["Julius Caesar", "Augustus", "Nero"],
        correctIndex: 1,
        explanation:
          "Augustus became the first Roman emperor after the fall of the Roman Republic.",
      },
      {
        id: 13,
        type: "mcq",
        question: "Which planet has the strongest magnetic field?",
        options: ["Earth", "Jupiter", "Saturn"],
        correctIndex: 1,
        explanation:
          "Jupiter has the strongest planetary magnetic field in our solar system.",
      },
      {
        id: 14,
        type: "mcq",
        question: "What is the main ingredient in traditional Japanese miso?",
        options: ["Rice", "Soybeans", "Seaweed"],
        correctIndex: 1,
        explanation:
          "Miso is typically made from fermented soybeans, often with rice or barley and salt.",
      },
      {
        id: 15,
        type: "mcq",
        question: "Which mountain is the highest in Europe by elevation above sea level?",
        options: ["Mont Blanc", "Mount Elbrus", "Matterhorn"],
        correctIndex: 1,
        explanation:
          "Mount Elbrus, in the Caucasus, is usually counted as Europe’s highest mountain.",
      },
      {
        id: 16,
        type: "mcq",
        question: "In which year did the World Wide Web become publicly available?",
        options: ["1989", "1991", "1995"],
        correctIndex: 1,
        explanation:
          "Tim Berners-Lee opened the World Wide Web to the public in 1991.",
      },
      {
        id: 17,
        type: "mcq",
        question: "Which sport awards the Ballon d’Or?",
        options: ["Basketball", "Football (soccer)", "Ice hockey"],
        correctIndex: 1,
        explanation:
          "The Ballon d’Or is one of the most prestigious individual awards in football.",
      },
      {
        id: 18,
        type: "mcq",
        question: "What does DNA stand for?",
        options: ["Deoxyribonucleic Acid", "Dynamic Nuclear Atom", "Double Nitrogen Array"],
        correctIndex: 0,
        explanation:
          "DNA is the molecule that stores genetic information in living organisms.",
      },
      {
        id: 19,
        type: "mcq",
        question: "Which country officially left the European Union in 2020?",
        options: ["Norway", "Switzerland", "United Kingdom"],
        correctIndex: 2,
        explanation:
          "The United Kingdom formally left the European Union on 31 January 2020.",
      },
      {
        id: 20,
        type: "mcq",
        question: "Which instrument measures wind speed?",
        options: ["Barometer", "Hygrometer", "Anemometer"],
        correctIndex: 2,
        explanation:
          "An anemometer is used in meteorology and aviation to measure wind speed.",
      },
      {
        id: 21,
        type: "open",
        question: "What is the largest volcano in the solar system?",
        answer: "Olympus Mons",
        accepted: ["olympus mons"],
        explanation:
          "Olympus Mons is a giant shield volcano on Mars and is much taller than Mount Everest.",
      },
      {
        id: 22,
        type: "open",
        question: "Which physicist is associated with the uncertainty principle?",
        answer: "Werner Heisenberg",
        accepted: ["werner heisenberg", "heisenberg"],
        explanation:
          "Heisenberg's uncertainty principle states that certain pairs of properties, such as position and momentum, cannot both be known precisely at the same time.",
      },
      {
        id: 23,
        type: "open",
        question: "What is the capital of New Zealand?",
        answer: "Wellington",
        accepted: ["wellington"],
        explanation:
          "Wellington is the capital, even though Auckland is the country's largest city.",
      },
      {
        id: 24,
        type: "open",
        question: "Which element has the highest atomic number that occurs naturally on Earth?",
        answer: "Uranium",
        accepted: ["uranium"],
        explanation:
          "Uranium has atomic number 92. Elements above it are generally synthetic or occur only in tiny trace amounts from decay chains.",
      },
      {
        id: 25,
        type: "open",
        question: "What is the longest river in Europe?",
        answer: "Volga",
        accepted: ["volga", "the volga", "volga river"],
        explanation:
          "The Volga flows entirely through Russia and is Europe’s longest river.",
      },
      {
        id: 26,
        type: "open",
        question: "Which novel begins with the line ‘Call me Ishmael’?",
        answer: "Moby-Dick",
        accepted: ["moby-dick", "moby dick"],
        explanation:
          "This famous opening line belongs to Herman Melville’s novel Moby-Dick.",
      },
      {
        id: 27,
        type: "open",
        question: "What is the name of the process by which plants convert sunlight into energy?",
        answer: "Photosynthesis",
        accepted: ["photosynthesis"],
        explanation:
          "Photosynthesis allows plants to convert light energy into chemical energy stored in sugars.",
      },
      {
        id: 28,
        type: "open",
        question: "Which country won the FIFA World Cup in 2014?",
        answer: "Germany",
        accepted: ["germany"],
        explanation:
          "Germany beat Argentina 1–0 in the final thanks to Mario Götze’s extra-time goal.",
      },
      {
        id: 29,
        type: "open",
        question: "What branch of science studies fossils?",
        answer: "Paleontology",
        accepted: ["paleontology", "palaeontology"],
        explanation:
          "Paleontology studies ancient life through fossils and other preserved remains.",
      },
      {
        id: 30,
        type: "open",
        question: "What is the currency of South Korea?",
        answer: "South Korean won",
        accepted: ["won", "south korean won", "korean won"],
        explanation:
          "The official currency of South Korea is the won, written with the symbol ₩.",
      },
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  const currentQuestion = quiz[currentIndex];
  const totalQuestions = quiz.length;
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  const normalize = (value) =>
    String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, " ")
      .trim();

  const handleMcqAnswer = (optionIndex) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionIndex }));
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };

  const handleOpenAnswerChange = (value) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
  };

  const goNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };

  const goBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const restartQuiz = () => {
    setAnswers({});
    setCurrentIndex(0);
    setFinished(false);
  };

  const mcqResults = quiz.filter((q) => q.type === "mcq");
  const openResults = quiz.filter((q) => q.type === "open");

  const mcqScore = mcqResults.reduce((score, q) => {
    return answers[q.id] === q.correctIndex ? score + 1 : score;
  }, 0);

  const answeredMcqCount = mcqResults.filter((q) => answers[q.id] !== undefined).length;
  const answeredOpenCount = openResults.filter((q) => String(answers[q.id] || "").trim() !== "").length;

  const isOpenCorrect = (q) => {
    const userAnswer = normalize(answers[q.id]);
    return q.accepted.some((accepted) => normalize(accepted) === userAnswer);
  };

  if (finished) {
    return (
      <div className="min-h-screen bg-slate-100 p-4 md:p-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-6 shadow-xl md:p-10">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">Quiz Results</h1>
              <p className="mt-2 text-slate-600">
                You completed all 30 questions. The multiple-choice part was scored automatically.
              </p>
            </div>
            <button
              onClick={restartQuiz}
              className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow transition hover:opacity-90"
            >
              Restart quiz
            </button>
          </div>

          <div className="mb-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="text-sm text-slate-500">Multiple-choice score</div>
              <div className="mt-2 text-3xl font-bold text-slate-900">{mcqScore} / 20</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="text-sm text-slate-500">Answered MCQ</div>
              <div className="mt-2 text-3xl font-bold text-slate-900">{answeredMcqCount} / 20</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="text-sm text-slate-500">Answered open questions</div>
              <div className="mt-2 text-3xl font-bold text-slate-900">{answeredOpenCount} / 10</div>
            </div>
          </div>

          <div className="mb-10 rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Multiple-choice review</h2>
            <div className="mt-5 space-y-4">
              {mcqResults.map((q) => {
                const selected = answers[q.id];
                const correct = selected === q.correctIndex;
                return (
                  <div key={q.id} className="rounded-2xl border border-slate-200 p-4">
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div className="pr-4">
                        <div className="text-sm font-semibold text-slate-500">Question {q.id}</div>
                        <div className="mt-1 font-medium text-slate-900">{q.question}</div>
                      </div>
                      <div
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                          correct ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"
                        }`}
                      >
                        {correct ? "Correct" : "Incorrect"}
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-slate-700">
                      <div>
                        <span className="font-semibold">Your answer:</span>{" "}
                        {selected !== undefined ? q.options[selected] : "No answer"}
                      </div>
                      <div>
                        <span className="font-semibold">Correct answer:</span> {q.options[q.correctIndex]}
                      </div>
                      <div className="mt-2 text-slate-600">{q.explanation}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Open questions review</h2>
            <p className="mt-2 text-sm text-slate-600">
              These questions are not scored automatically. Compare your answer with the correct one and the short explanation.
            </p>
            <div className="mt-5 space-y-4">
              {openResults.map((q) => {
                const hasAnswer = String(answers[q.id] || "").trim() !== "";
                const exactMatch = hasAnswer && isOpenCorrect(q);
                return (
                  <div key={q.id} className="rounded-2xl border border-slate-200 p-4">
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div className="pr-4">
                        <div className="text-sm font-semibold text-slate-500">Question {q.id}</div>
                        <div className="mt-1 font-medium text-slate-900">{q.question}</div>
                      </div>
                      <div
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                          !hasAnswer
                            ? "bg-slate-100 text-slate-600"
                            : exactMatch
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {!hasAnswer ? "No answer" : exactMatch ? "Exact match" : "Compare manually"}
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-slate-700">
                      <div>
                        <span className="font-semibold">Your answer:</span> {hasAnswer ? answers[q.id] : "No answer"}
                      </div>
                      <div>
                        <span className="font-semibold">Correct answer:</span> {q.answer}
                      </div>
                      <div className="mt-2 text-slate-600">{q.explanation}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-xl md:p-10">
        <div className="mb-8">
          <div className="mb-3 flex items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">General Knowledge Quiz</h1>
              <p className="mt-2 text-slate-600">
                30 questions in English. One question per page, with automatic scoring for the first 20.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow">
              {currentQuestion.id} / {totalQuestions}
            </div>
          </div>

          <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-slate-900 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6 md:p-8">
          <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
            {currentQuestion.type === "mcq" ? "Multiple choice" : "Open question"}
          </div>
          <h2 className="text-2xl font-semibold leading-snug text-slate-900">
            {currentQuestion.question}
          </h2>

          {currentQuestion.type === "mcq" ? (
            <div className="mt-8 grid gap-4">
              {currentQuestion.options.map((option, index) => {
                const selected = answers[currentQuestion.id] === index;
                return (
                  <button
                    key={option}
                    onClick={() => handleMcqAnswer(index)}
                    className={`rounded-2xl border px-5 py-4 text-left text-base font-medium transition ${
                      selected
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-300 bg-white text-slate-900 hover:border-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-current text-sm font-bold">
                      {String.fromCharCode(97 + index)}
                    </span>
                    {option}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="mt-8">
              <textarea
                value={answers[currentQuestion.id] || ""}
                onChange={(e) => handleOpenAnswerChange(e.target.value)}
                placeholder="Type your answer here..."
                className="min-h-[160px] w-full rounded-2xl border border-slate-300 p-4 text-base text-slate-900 outline-none transition focus:border-slate-900"
              />
              <div className="mt-4 text-sm text-slate-500">
                You can leave it blank and continue, or type your answer and compare it with the correct one at the end.
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <button
            onClick={goBack}
            disabled={currentIndex === 0}
            className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Back
          </button>

          {currentQuestion.type === "open" && (
            <button
              onClick={goNext}
              className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow transition hover:opacity-90"
            >
              {currentIndex === totalQuestions - 1 ? "Finish quiz" : "Next question"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
