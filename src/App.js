
import { useContext } from 'react';
import './App.css';
import { QuestionState } from './Context/Context';
import Catcard from './Component/Card';


function App() {
  const {QuestionArray} = QuestionState()

  return (
    <div className="App">
      <Catcard/>
    </div>
  );
}

export default App;
