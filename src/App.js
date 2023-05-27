import { useState } from 'react';
import './App.css';
import CountdownComponent from './components/CountdownComponent';

function App() {
  const [questionNumber, setQuestionNumber] = useState(1)

  const handleDone = () => {
    setQuestionNumber((prevQuestionNumber) => prevQuestionNumber + 1)
  }

  return (
    <div className="App">
      <h2>Question {questionNumber}</h2>
      <CountdownComponent nb={questionNumber} onDone={handleDone} />
      <div className='quizzContainer'>
        <h2>Your question is :</h2>
        <div className='quizzButtonContainer'>
          <button onClick={handleDone} className='true'>True</button>
          <button onClick={handleDone} className='false'>False</button>
        </div>
      </div>
    </div>
  );
}

export default App;
