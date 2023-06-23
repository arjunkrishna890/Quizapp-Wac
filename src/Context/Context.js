import React, { createContext, useContext, useState } from "react";
import { questions } from "../data";

const QuestionContext = createContext();

const ContextProvider = ({ children }) => {
  const [state, setState] = useState({
    color: null,
    disable: null,
    index: 0,
    total: 0,
    score: 0,
    selectedOption: null
  });

  const QuestionArray = questions;

  return (
    <QuestionContext.Provider value={{ QuestionArray, state, setState }}>
      {children}
    </QuestionContext.Provider>
  );
};

export default ContextProvider;
export const QuestionState = () => {
  return useContext(QuestionContext);
};
