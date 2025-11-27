import { useState } from "react";
import "./index.css";

const App = () => {
  const quizData = [
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "CSS", "Python", "Java"],
    answer: "CSS"
  },
  {
    question: "Which of the following is a JavaScript framework?",
    options: ["React", "Laravel", "Django", "Flutter"],
    answer: "React"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "Hyper Text Markdown Language",
      "High Text Markup Level"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which tag is used to insert an image in HTML?",
    options: ["<div>", "<image>", "<img>", "<pic>"],
    answer: "<img>"
  },
  {
    question: "JavaScript is a ___ ?",
    options: ["Programming Language", "Database", "Operating System", "Compiler"],
    answer: "Programming Language"
  },
  {
    question: "React is developed by which company?",
    options: ["Google", "Microsoft", "Apple", "Facebook"],
    answer: "Facebook"
  },
  {
    question: "Which hook is used for state management in React?",
    options: ["useData()", "useStore()", "useState()", "useReact()"],
    answer: "useState()"
  },
  {
    question: "What is the correct extension of a JavaScript file?",
    options: [".java", ".js", ".jsx", ".json"],
    answer: ".js"
  },
  {
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Program Integration",
      "Applied Programming Instruction",
      "Application Protocol Internet"
    ],
    answer: "Application Programming Interface"
  },
  {
    question: "Which of the following is a backend language?",
    options: ["HTML", "CSS", "Java", "Figma"],
    answer: "Java"
  }
];


  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [finished, setFinished] = useState(false);

  const handleNext = () => {
    if (selected === quizData[current].answer) {
      setScore(score + 1);
    }

    if (current < quizData.length - 1) {
      setCurrent(current + 1);
      setSelected("");
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">MCQ Quiz App</h1>

      {finished ? (
        <h2 className="score">Your Score: {score} / {quizData.length}</h2>
      ) : (
        <div className="card">
          <h3>{quizData[current].question}</h3>

          {quizData[current].options.map((opt, index) => (
            <label className="option" key={index}>
              <input
                type="radio"
                value={opt}
                checked={selected === opt}
                onChange={() => setSelected(opt)}
              />
              {opt}
            </label>
          ))}

          <button
            className="btn"
            disabled={!selected}
            onClick={handleNext}
          >
            {current === quizData.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
