import { useState } from 'react';
import './App.css';

function App() {

  const [height,setHeight]=useState(0);
  const [weight,setWeight]=useState(0);
  const [state,setState]=useState("");
  const [bmiValue,setBmiValue]=useState();


  const calculate=()=>{

    const convertedHeight=height/100;
    let bmi = (weight / (convertedHeight * convertedHeight)) ;
    bmi = bmi.toFixed(2);
    setBmiValue(bmi);
   

      if(bmi < 18.5){
        setState("You Are Underweight"); 
      }       
      else if( bmi>=18.5 && bmi<=24.9){
        setState("You Are Healthy Weight");
      }
      else if (bmi>24.9 && bmi<=29.9){
        setState("You Are Overweight");    
      }
      else if(bmi>=30){
      
        setState("You Are Obese"); 
      }     
    
    
  }

  return (
    <div className="App">
      <header className="App-header">
           <h1>BMI Calculator</h1>
      </header>

      <div className='content'>

      <div className='inputs-field'>

        <div className='height-field'>
        <label>100</label>
        <input name='height' type='range' value={height} min='100' max='200' onChange={(e)=>setHeight(Number( e.target.value))} />
        <label>200</label>

        </div>

        <div className='weight-field'>

        <label>25</label>
        <input name='weight' type='range' value={weight} min='25' max='150' onChange={(e)=>setWeight(Number( e.target.value))}/>
        <label>150</label>

        </div>
        
      </div>

      <div className='calculate-field'>
        <p>Height: {height}</p> 
        <p>Weight: {weight}</p>
        <button onClick={()=>calculate()}>Calculate</button>
      </div>

      <div className='result-field'>
        <p>{state}</p>
        <p>{bmiValue}</p>
      </div>
   
      </div>

    </div>
  );
}

export default App;
