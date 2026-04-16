import { useMemo, useState } from 'react';

export default function App() {
  const quiz = useMemo(
    () => [
      {
        id: 1,
        type: 'mcq',
        question: 'Which empire was ruled by Mansa Musa, one of the richest individuals in history?',
        options: ['Ottoman Empire', 'Mali Empire', 'Byzantine Empire'],
        correctIndex: 1,
        explanation:
          'Mansa Musa ruled the Mali Empire in the 14th century. His wealth became legendary, especially after his pilgrimage to Mecca.',
      },
      {
        id: 2,
        type: 'mcq',
        question: 'What is the SI unit of electrical resistance?',
        options: ['Volt', 'Ampere', 'Ohm'],
        correctIndex: 2,
        explanation:
          'The ohm is named after Georg Simon Ohm and measures how much a material resists electric current.',
      },
      {
        id: 3,
        type: 'mcq',
        question: 'Which country has the longest coastline in the world?',
        options: ['Russia', 'Australia', 'Canada'],
        correctIndex: 2,
        explanation:
          'Canada has by far the world\'s longest coastline because of its vast mainland and thousands of islands.',
      },
      {
        id: 4,
        type: 'mcq',
        question: 'Who painted Guernica?',
        options: ['Salvador Dalí', 'Pablo Picasso', 'Joan Miró'],
        correctIndex: 1,
        explanation:
          'Picasso painted Guernica in 1937 as a powerful response to the bombing of the Spanish town during the civil war.',
      },
      {
        id: 5,
        type: 'mcq',
        question: 'Which organ produces insulin?',
        options: ['Liver', 'Pancreas', 'Kidney'],
        correctIndex: 1,
        explanation:
          'The pancreas produces insulin, a hormone that helps regulate blood sugar levels.',
      },
      {
        id: 6,
        type: 'mcq',
        question: 'What does the acronym AI stand for in technology?',
        options: ['Automated Interface', 'Artificial Intelligence', 'Advanced Internet'],
        correctIndex: 1,
        explanation:
          'Artificial Intelligence refers to computer systems designed to perform tasks that normally require human intelligence.',
      },
      {
        id: 7,
        type: 'mcq',
        question: 'Which tennis tournament is played on clay courts?',
        options: ['Wimbledon', 'US Open', 'French Open'],
        correctIndex: 2,
        explanation:
          'The French Open, also known as Roland-Garros, is famous for its slow clay courts.',
      },
      {
        id: 8,
        type: 'mcq',
        question: 'What is the smallest prime number greater than 100?',
        options: ['101', '103', '107'],
        correctIndex: 0,
        explanation:
          '101 is prime and is the first prime number that comes after 100.',
      },
      {
        id: 9,
        type: 'mcq',
        question: 'Which sea separates Europe and Africa?',
        options: ['Black Sea', 'Red Sea', 'Mediterranean Sea'],
        correctIndex: 2,
        explanation:
          'The Mediterranean Sea lies between southern Europe and northern Africa and has been central to trade and history for millennia.',
      },
      {
        id: 10,
        type: 'mcq',
        question: 'Which company became the world’s most valuable publicly traded company in 2024 during the AI boom?',
        options: ['Microsoft', 'Apple', 'NVIDIA'],
        correctIndex: 2,
        explanation:
          'NVIDIA surged in value as demand for AI chips and data-center hardware accelerated.',
      },
      {
        id: 11,
        type: 'mcq',
        question: 'What is the chemical symbol for silver?',
        options: ['Si', 'Ag', 'Au'],
        correctIndex: 1,
        explanation:
          'Ag comes from the Latin word argentum, meaning silver.',
      },
      {
        id: 12,
        type: 'mcq',
        question: 'Who was the first Roman emperor?',
        options: ['Julius Caesar', 'Augustus', 'Nero'],
        correctIndex: 1,
        explanation:
          'Augustus became the first Roman emperor after the fall of the Roman Republic.',
      },
      {
        id: 13,
        type: 'mcq',
        question: 'Which planet has the strongest magnetic field?',
        options: ['Earth', 'Jupiter', 'Saturn'],
        correctIndex: 1,
        explanation:
          'Jupiter has the strongest planetary magnetic field in our solar system.',
      },
      {
        id: 14,
        type: 'mcq',
        question: 'What is the main ingredient in traditional Japanese miso?',
        options: ['Rice', 'Soybeans', 'Seaweed'],
        correctIndex: 1,
        explanation:
          'Miso is typically made from fermented soybeans, often with rice or barley and salt.',
      },
      {
        id: 15,
        type: 'mcq',
        question: 'Which mountain is the highest in Europe by elevation above sea level?',
        options: ['Mont Blanc', 'Mount Elbrus', 'Matterhorn'],
        correctIndex: 1,
        explanation:
          'Mount Elbrus, in the Caucasus, is usually counted as Europe’s highest mountain.',
      },
      {
        id: 16,
        type: 'mcq',
        question: 'In which year did the World Wide Web become publicly available?',
        options: ['1989', '1991', '1995'],
        correctIndex: 1,
        explanation:
          'Tim Berners-Lee opened the World Wide Web to the public in 1991.',
      },
      {
        id: 17,
        type: 'mcq',
        question: 'Which sport awards the Ballon d’Or?',
        options: ['Basketball', 'Football (soccer)', 'Ice hockey'],
        correctIndex: 1,
        explanation:
          'The Ballon d’Or is one of the most prestigious individual awards in football.',
      },
      {
        id: 18,
        type: 'mcq',
        question: 'What does DNA stand for?',
        options: ['Deoxyribonucleic Acid', 'Dynamic Nuclear Atom', 'Double Nitrogen Array'],
        correctIndex: 0,
        explanation:
          'DNA is the molecule that stores genetic information in living organisms.',
      },
      {
        id: 19,
        type: 'mcq',
        question: 'Which country officially left the European Union in 2020?',
        options: ['Norway', 'Switzerland', 'United Kingdom'],
        correctIndex: 2,
        explanation:
          'The United Kingdom formally left the European Union on 31 January 2020.',
      },
      {
        id: 20,
        type: 'mcq',
        question: 'Which instrument measures wind speed?',
        options: ['Barometer', 'Hygrometer', 'Anemometer'],
        correctIndex: 2,
        explanation:
          'An anemometer is used in meteorology and aviation to measure wind speed.',
      },
      {
        id: 21,
        type: 'open',
        question: 'What is the largest volcano in the solar system?',
        answer: 'Olympus Mons',
        accepted: ['olympus mons'],
        explanation:
          'Olympus Mons is a giant shield volcano on Mars and is much taller than Mount Everest.',
      },
      {
        id: 22,
        type: 'open',
        question: 'Which physicist is associated with the uncertainty principle?',
        answer: 'Werner Heisenberg',
        accepted: ['werner heisenberg', 'heisenberg'],
        explanation:
          'Heisenberg\'s uncertainty principle states that certain pairs of properties, such as position and momentum, cannot both be known precisely at the same time.',
      },
      {
        id: 23,
        type: 'open',
        question: 'What is the capital of New Zealand?',
        answer: 'Wellington',
        accepted: ['wellington'],
        explanation:
          'Wellington is the capital, even though Auckland is the country\'s largest city.',
      },
      {
        id: 24,
        type: 'open',
        question: 'Which element has the highest atomic number that occurs naturally on Earth?',
        answer: 'Uranium',
        accepted: ['uranium'],
        explanation:
          'Uranium has atomic number 92. Elements above it are generally synthetic or occur only in tiny trace amounts from decay chains.',
      },
      {
        id: 25,
        type: 'open',
        question: 'What is the longest river in Europe?',
        answer: 'Volga',
        accepted: ['volga', 'the volga', 'volga river'],
        explanation:
          'The Volga flows entirely through Russia and is Europe’s longest river.',
      },
      {
        id: 26,
        type: 'open',
        question: 'Which novel begins with the line “Call me Ishmael”?',
        answer: 'Moby-Dick',
        accepted: ['moby-dick', 'moby dick'],
        explanation:
          'This famous opening line belongs to Herman Melville’s novel Moby-Dick.',
      },
      {
        id: 27,
        type: 'open',
        question: 'What is the name of the process by which plants convert sunlight into energy?',
        answer: 'Photosynthesis',
        accepted: ['photosynthesis'],
        explanation:
          'Photosynthesis allows plants to convert light energy into chemical energy stored in sugars.',
      },
      {
        id: 28,
        type: 'open',
        question: 'Which country won the FIFA World Cup in 2014?',
        answer: 'Germany',
        accepted: ['germany'],
        explanation:
          'Germany beat Argentina 1–0 in the final thanks to Mario Götze’s extra-time goal.',
      },
      {
        id: 29,
        type: 'open',
        question: 'What branch of science studies fossils?',
        answer: 'Paleontology',
        accepted: ['paleontology', 'palaeontology'],
        explanation:
          'Paleontology studies ancient life through fossils and other preserved remains.',
      },
      {
        id: 30,
        type: 'open',
        question: 'What is the currency of South Korea?',
        answer: 'South Korean won',
        accepted: ['won', 'south korean won', 'korean won'],
        explanation:
          'The official currency of South Korea is the won, written with the symbol ₩.',
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
    String(value || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, ' ')
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

  const mcqResults = quiz.filter((q) => q.type === 'mcq');
  const openResults = quiz.filter((q) => q.type === 'open');

  const mcqScore = mcqResults.reduce((score, q) => {
    return answers[q.id] === q.correctIndex ? score + 1 : score;
  }, 0);

  const answeredMcqCount = mcqResults.filter((q) => answers[q.id] !== undefined).length;
  const answeredOpenCount = openResults.filter((q) => String(answers[q.id] || '').trim() !== '').length;

  const isOpenCorrect = (q) => {
    const userAnswer = normalize(answers[q.id]);
    return q.accepted.some((accepted) => normalize(accepted) === userAnswer);
  };

  const pageStyle = {
    minHeight: '100vh',
    padding: '24px',
  };

  const cardStyle = {
    maxWidth: '920px',
    margin: '0 auto',
    background: '#ffffff',
    borderRadius: '24px',
    padding: '32px',
    boxShadow: '0 20px 50px rgba(15, 23, 42, 0.12)',
  };

  const secondaryText = { color: '#475569' };
  const lightText = { color: '#64748b' };

  if (finished) {
    return (
      <div style={pageStyle}>
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', marginBottom: '28px' }}>
            <div>
              <h1 style={{ margin: 0, fontSize: '2rem' }}>Quiz Results</h1>
              <p style={{ ...secondaryText, marginTop: '8px' }}>
                You completed all 30 questions. The multiple-choice part was scored automatically.
              </p>
            </div>
            <button onClick={restartQuiz} style={primaryButtonStyle}>
              Restart quiz
            </button>
          </div>

          <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', marginBottom: '32px' }}>
            <StatCard label="Multiple-choice score" value={`${mcqScore} / 20`} />
            <StatCard label="Answered MCQ" value={`${answeredMcqCount} / 20`} />
            <StatCard label="Answered open questions" value={`${answeredOpenCount} / 10`} />
          </div>

          <section style={sectionStyle}>
            <h2 style={sectionTitleStyle}>Multiple-choice review</h2>
            <div style={{ display: 'grid', gap: '14px', marginTop: '18px' }}>
              {mcqResults.map((q) => {
                const selected = answers[q.id];
                const correct = selected === q.correctIndex;
                return (
                  <div key={q.id} style={reviewCardStyle}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                      <div>
                        <div style={{ ...lightText, fontSize: '0.85rem', fontWeight: 700 }}>Question {q.id}</div>
                        <div style={{ marginTop: '6px', fontWeight: 600 }}>{q.question}</div>
                      </div>
                      <StatusPill kind={correct ? 'correct' : 'wrong'} text={correct ? 'Correct' : 'Incorrect'} />
                    </div>
                    <div style={{ marginTop: '12px', ...secondaryText, fontSize: '0.95rem' }}>
                      <div><strong>Your answer:</strong> {selected !== undefined ? q.options[selected] : 'No answer'}</div>
                      <div><strong>Correct answer:</strong> {q.options[q.correctIndex]}</div>
                      <div style={{ marginTop: '8px' }}>{q.explanation}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section style={{ ...sectionStyle, marginTop: '24px' }}>
            <h2 style={sectionTitleStyle}>Open questions review</h2>
            <p style={{ ...lightText, marginTop: '8px' }}>
              These questions are not scored automatically. Compare your answer with the correct one and the short explanation.
            </p>
            <div style={{ display: 'grid', gap: '14px', marginTop: '18px' }}>
              {openResults.map((q) => {
                const hasAnswer = String(answers[q.id] || '').trim() !== '';
                const exactMatch = hasAnswer && isOpenCorrect(q);
                return (
                  <div key={q.id} style={reviewCardStyle}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                      <div>
                        <div style={{ ...lightText, fontSize: '0.85rem', fontWeight: 700 }}>Question {q.id}</div>
                        <div style={{ marginTop: '6px', fontWeight: 600 }}>{q.question}</div>
                      </div>
                      <StatusPill
                        kind={!hasAnswer ? 'neutral' : exactMatch ? 'correct' : 'manual'}
                        text={!hasAnswer ? 'No answer' : exactMatch ? 'Exact match' : 'Compare manually'}
                      />
                    </div>
                    <div style={{ marginTop: '12px', ...secondaryText, fontSize: '0.95rem' }}>
                      <div><strong>Your answer:</strong> {hasAnswer ? answers[q.id] : 'No answer'}</div>
                      <div><strong>Correct answer:</strong> {q.answer}</div>
                      <div style={{ marginTop: '8px' }}>{q.explanation}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <div style={{ marginBottom: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '12px' }}>
            <div>
              <h1 style={{ margin: 0, fontSize: '2rem' }}>General Knowledge Quiz</h1>
              <p style={{ ...secondaryText, marginTop: '8px' }}>
                30 questions in English. One question per page, with automatic scoring for the first 20.
              </p>
            </div>
            <div style={{ background: '#0f172a', color: 'white', padding: '10px 16px', borderRadius: '16px', fontWeight: 700 }}>
              {currentQuestion.id} / {totalQuestions}
            </div>
          </div>

          <div style={{ height: '12px', width: '100%', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
            <div
              style={{
                height: '100%',
                width: `${progress}%`,
                background: '#0f172a',
                borderRadius: '999px',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
        </div>

        <div style={questionCardStyle}>
          <div style={{ ...lightText, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, fontSize: '0.8rem', marginBottom: '10px' }}>
            {currentQuestion.type === 'mcq' ? 'Multiple choice' : 'Open question'}
          </div>
          <h2 style={{ margin: 0, fontSize: '1.7rem', lineHeight: 1.3 }}>{currentQuestion.question}</h2>

          {currentQuestion.type === 'mcq' ? (
            <div style={{ display: 'grid', gap: '14px', marginTop: '28px' }}>
              {currentQuestion.options.map((option, index) => {
                const selected = answers[currentQuestion.id] === index;
                return (
                  <button
                    key={option}
                    onClick={() => handleMcqAnswer(index)}
                    style={{
                      ...optionButtonStyle,
                      background: selected ? '#0f172a' : '#ffffff',
                      color: selected ? '#ffffff' : '#0f172a',
                      borderColor: selected ? '#0f172a' : '#cbd5e1',
                    }}
                  >
                    <span style={optionBadgeStyle}>{String.fromCharCode(97 + index)}</span>
                    <span>{option}</span>
                  </button>
                );
              })}
            </div>
          ) : (
            <div style={{ marginTop: '28px' }}>
              <textarea
                value={answers[currentQuestion.id] || ''}
                onChange={(e) => handleOpenAnswerChange(e.target.value)}
                placeholder="Type your answer here..."
                style={textareaStyle}
              />
              <div style={{ ...lightText, fontSize: '0.9rem', marginTop: '10px' }}>
                You can leave it blank and continue, or type your answer and compare it with the correct one at the end.
              </div>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', marginTop: '24px', flexWrap: 'wrap' }}>
          <button onClick={goBack} disabled={currentIndex === 0} style={{ ...secondaryButtonStyle, opacity: currentIndex === 0 ? 0.45 : 1 }}>
            Back
          </button>

          {currentQuestion.type === 'open' ? (
            <button onClick={goNext} style={primaryButtonStyle}>
              {currentIndex === totalQuestions - 1 ? 'Finish quiz' : 'Next question'}
            </button>
          ) : (
            <div style={{ ...lightText, alignSelf: 'center', fontSize: '0.9rem' }}>Choose an answer to continue</div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div style={{ border: '1px solid #e2e8f0', background: '#f8fafc', borderRadius: '18px', padding: '18px' }}>
      <div style={{ color: '#64748b', fontSize: '0.9rem' }}>{label}</div>
      <div style={{ marginTop: '8px', fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>{value}</div>
    </div>
  );
}

function StatusPill({ kind, text }) {
  const styles = {
    correct: { background: '#dcfce7', color: '#166534' },
    wrong: { background: '#fee2e2', color: '#b91c1c' },
    manual: { background: '#fef3c7', color: '#92400e' },
    neutral: { background: '#e2e8f0', color: '#475569' },
  };
  return (
    <div style={{ ...styles[kind], padding: '6px 12px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 700, whiteSpace: 'nowrap' }}>
      {text}
    </div>
  );
}

const primaryButtonStyle = {
  background: '#0f172a',
  color: '#ffffff',
  border: 'none',
  borderRadius: '16px',
  padding: '14px 18px',
  fontWeight: 700,
  cursor: 'pointer',
  boxShadow: '0 10px 24px rgba(15, 23, 42, 0.16)',
};

const secondaryButtonStyle = {
  background: '#ffffff',
  color: '#334155',
  border: '1px solid #cbd5e1',
  borderRadius: '16px',
  padding: '14px 18px',
  fontWeight: 700,
  cursor: 'pointer',
};

const questionCardStyle = {
  border: '1px solid #e2e8f0',
  borderRadius: '22px',
  padding: '28px',
  background: '#ffffff',
};

const optionButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  width: '100%',
  textAlign: 'left',
  border: '1px solid #cbd5e1',
  borderRadius: '18px',
  padding: '16px 18px',
  fontWeight: 600,
  cursor: 'pointer',
};

const optionBadgeStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '34px',
  height: '34px',
  borderRadius: '999px',
  border: '1px solid currentColor',
  fontWeight: 800,
  textTransform: 'lowercase',
  flexShrink: 0,
};

const textareaStyle = {
  width: '100%',
  minHeight: '170px',
  borderRadius: '18px',
  border: '1px solid #cbd5e1',
  padding: '16px',
  outline: 'none',
  resize: 'vertical',
  color: '#0f172a',
  background: '#ffffff',
};

const sectionStyle = {
  border: '1px solid #e2e8f0',
  borderRadius: '22px',
  padding: '24px',
};

const sectionTitleStyle = {
  margin: 0,
  fontSize: '1.35rem',
  color: '#0f172a',
};

const reviewCardStyle = {
  border: '1px solid #e2e8f0',
  borderRadius: '18px',
  padding: '16px',
};
