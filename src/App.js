
import { useState } from 'react';
import './App.css';

function App() {
  const [number1 , setNamber1] = useState()
  const [number2 , setNamber2] = useState()
  const [result , setResult] =useState()
  


  const AddNumber1 =()=>{
    setResult(parseInt(number1)+parseInt(number2))
  }
  const AddNumber2 =()=>{
    setResult(parseInt(number1)-parseInt(number2))
  }
  const AddNumber3 =()=>{
    setResult(parseInt(number1)*parseInt(number2))
  }
  const AddNumber4 =()=>{
    setResult(parseInt(number1)%parseInt(number2))
  }
  const AddNumber5 =()=>{
    setResult(parseInt(number1)/parseInt(number2))
  }
  

  return (
    <div className="App">
      <input onChange={(e)=>{setNamber1(e.target.value)}}/>
      <input onChange={(e)=>{setNamber2(e.target.value)}}/>
      <br></br>
      <button onClick={AddNumber1}>+</button>
      <button onClick={AddNumber2}>-</button>
      <button onClick={AddNumber3}>*</button>
      <button onClick={AddNumber4}>%</button>
      <button onClick={AddNumber5}>/</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
