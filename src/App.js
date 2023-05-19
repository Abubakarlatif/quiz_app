import './App.css';
import {useState, usestate} from "react";

function App() {
  const questions = [
    {
      questionText : 'what is the capital of France ?',
      answerOption :[
        {answerText : 'New York', isCorrect:false},
        {answerText : 'London', isCorrect:false},
        {answerText : 'Paris', isCorrect:true},
        {answerText : 'Lahore', isCorrect:false},
        
      ],
    },
    {
      questionText : 'Who is the ceo of tesla ?',
      answerOption :[
        {answerText : 'Elon musk', isCorrect:true},
        {answerText : 'Jeff bezos', isCorrect:false},
        {answerText : 'Mark zekurberg', isCorrect:false},
        {answerText : 'Bill gates', isCorrect:false},
      ],
    },
    {
      questionText : 'The iphone was created by which company ?',
      answerOption :[
        {answerText : 'Nokia', isCorrect:false},
        {answerText : 'Samsung', isCorrect:false},
        {answerText : 'Google', isCorrect:false},
        {answerText : 'Apple', isCorrect:true},
      ],
    },
    {
      questionText : "How many harry potters books are there ?",
      answerOption :[
        {answerText : 'one ', isCorrect:false},
        {answerText : 'Three', isCorrect:false},
        {answerText : 'Six', isCorrect:true},
        {answerText : 'Eight', isCorrect:false},
      ],
    },
    
  ];
  const [currentQuestion ,setCurrentQuestion] = useState(0);
  const [showCase , setShowCase] = useState(false);
  const [score , setScore] = useState(0);
  const handlequestion =(isCorrect)=>{
    if(isCorrect === true){
      
      setScore(score + 1);
    }
    
    const nextquestion= currentQuestion + 1
    if(nextquestion < questions.length) {
      setCurrentQuestion(nextquestion);
    }
    else {
        setShowCase(true)
    }
  }
  return(
    <div className='app'>
      {showCase ? (<div className='score-action'> Your scored {score} out of {questions.length}</div>)
     :(
      <>
      <div className='question-section'>
        <div className='question-count'>
          <span>Question {currentQuestion + 1}</span>/{questions.length} 
        </div>
        <div className='question-text'>{questions[currentQuestion].questionText}</div>
      </div>
      <div className='answer-section'>
        {questions[currentQuestion].answerOption.map((answerOption)=>(
          <button onClick={()=>handlequestion(answerOption.isCorrect)}>{answerOption.answerText}</button>
        ))}
      </div>
      </>
     ) 
    }
    </div>
  )
}

export default App;
