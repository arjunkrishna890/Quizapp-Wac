import React from "react";
import { createContext } from "react";
import { useContext } from "react";
import { questions } from "../data";

const Question = createContext()

const Contextprovider = ({children})=>{
    
    const QuestionArray = questions;

    return <Question.Provider value={{QuestionArray}}>{children}</Question.Provider>
  
}
export default Contextprovider;

export const QuestionState = () =>{
    return useContext(Question)
}

