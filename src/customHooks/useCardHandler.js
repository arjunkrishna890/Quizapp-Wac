import { useState } from 'react';


const useCardHandler = (initialState) => {
  const [state, setState] = useState(initialState);

  const handleCheck = (option, answer, points, key,indexed) => {
    if (option === answer) {
      setState((prevState) => ({
        ...prevState,
        color: 'green',
        selectedOption: key,
        show:false,
        disable: true,
        score: prevState.score + points
      }));
      console.log(state.index);
   

    } else {
      setState((prevState) => ({
        ...prevState,
        selectedOption: key,
        disable: true,
        color: 'red'
      }));
      console.log(state.index);
    }
    
  };

  const next = (add) => {
    setState((prevState) => ({
      ...prevState,
      disable: null,
      selectedOption: null,
      index: prevState.index + 1,
      total: prevState.total + add
    }));
    if (state.index==4){
      setState((prevState)=>({
        ...prevState,
        show:true,
       
      }))

    }
    
  };
  const handleClose = ()=>{
    setState((prevState)=>({
      ...prevState,
      show:false,
    }))
  }
 const successHandle = ()=>{
  setState((prevState)=>({
    ...prevState,
    show:false,
    score:prevState.score+5,
    total:prevState.total+5
  }))
 }

  return [state, handleCheck, next,handleClose,successHandle];
};

export default useCardHandler;
