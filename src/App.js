
import { useContext } from 'react';
import './App.css';
import { QuestionState } from './Context/Context';
import Catcard from './Component/Card';
import Card2 from './Component/Card2';

function App() {
  const {QuestionArray} = QuestionState()
  console.log(QuestionArray)
  return (
    <div className="App">
      {/* <Card2/> */}
      <Catcard/>
    </div>
  );
}

export default App;
