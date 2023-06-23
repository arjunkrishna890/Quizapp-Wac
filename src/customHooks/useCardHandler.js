import { useState } from 'react';


const useCardHandler = (initialState) => {
  const [state, setState] = useState(initialState);

  const handleCheck = (option, answer, points, key) => {
    if (option === answer) {
      setState((prevState) => ({
        ...prevState,
        color: 'green',
        selectedOption: key,
        disable: true,
        score: prevState.score + points
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        selectedOption: key,
        disable: true,
        color: 'red'
      }));
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
  };

  return [state, handleCheck, next];
};

export default useCardHandler;
