// QuizBuilder.jsx
import React, { useState } from "react";
import { Plus, Trash2, Save, Clock } from "lucide-react";

export const QuizBuilder = ({ initialQuiz, onSave }) => {
  const [quiz, setQuiz] = useState(
    initialQuiz || {
      title: "",
      questions: [],
      timeLimit: 30,
      attempts: 1,
      dueDate: new Date().toISOString(),
    }
  );

  const addQuestion = () => {
    setQuiz((prev) => ({
      ...prev,
      questions: [
        ...prev.questions,
        {
          id: Math.random().toString(),
          question: "",
          type: "multiple",
          options: ["", ""],
          correctAnswer: [],
        },
      ],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">Quiz Builder</h2>
        <button
          onClick={() => onSave(quiz)}
          className="flex items-center px-4 py-2 bg-[#4318FF] text-white rounded-lg hover:bg-[#868CFF]"
        >
          <Save className="w-4 h-4 mr-2" />
          Save Quiz
        </button>
      </div>
      <button
        onClick={addQuestion}
        className="flex items-center px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#4318FF] w-full justify-center"
      >
        <Plus className="w-5 h-5 mr-2" />
        Add Question
      </button>
    </div>
  );
};
