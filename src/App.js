import React, { useState } from 'react';

function QuizApp() {
  const questions = [
    {
      questionText: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tech Markup Language"],
      answer: "Hyper Text Markup Language"
    },
    {
      questionText: "Who is making the Web standards?",
      options: ["Mozilla", "Microsoft", "The World Wide Web Consortium", "Google"],
      answer: "The World Wide Web Consortium"
    },
    {
      questionText: "Choose the correct HTML element for the largest heading:",
      options: ["<h6>", "<head>", "<h1>", "<header>"],
      answer: "<h1>"
    },
    {
      questionText: "What is the correct HTML element for inserting a line break?",
      options: ["<br>", "<lb>", "<break>", "<newline>"],
      answer: "<br>"
    },
    {
      questionText: "Which character is used to indicate an end tag?",
      options: ["/", "<", "^", "*"],
      answer: "/"
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(""));
  const [score, setScore] = useState(null);

  const handleOptionChange = (event, questionIndex) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[questionIndex] = event.target.value;
    setSelectedOptions(updatedOptions);
  };

  const handleSubmit = () => {
    let newScore = 0;
    selectedOptions.forEach((option, index) => {
      if (option === questions[index].answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>HTML Quiz</h2>
      {questions.map((question, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h4>{index + 1}. {question.questionText}</h4>
          {question.options.map((option, i) => (
            <label key={i} style={{ display: "block", marginBottom: "5px" }}>
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={selectedOptions[index] === option}
                onChange={(e) => handleOptionChange(e, index)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit} style={{ padding: "10px 20px", marginTop: "20px" }}>
        Submit
      </button>
      {score !== null && (
        <div style={{ marginTop: "20px" }}>
          <h3>Your Score: {score} / {questions.length}</h3>
        </div>
      )}
    </div>
  );
}

export default QuizApp;