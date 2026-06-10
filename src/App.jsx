import { useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState("");
  const[weight,setWeight] = useState("");
  const [bmi,setBmi] = useState(null);
  const [bmiStatus,setbmiStatus] = useState("");
  const [error,setError]=useState("")
  const handleclear=()=>{
        setBmi(null);
        setbmiStatus("");
        setHeight("");
        setWeight("");
        setError("");
}
  const calculatebmi=()=>{
    const isHeightValid = /^\d+(\.\d+)?$/.test(height);
const isWeightValid = /^\d+(\.\d+)?$/.test(weight);
    if(isHeightValid && isWeightValid){

       if (Number(height) <= 0 || Number(weight) <= 0) {
      setError("Height and Weight must be greater than 0.");
      setBmi(null);
      setbmiStatus("");
      return;
    }


      const heightInMeter = height /100;
      const bmivalue = weight/ (heightInMeter * heightInMeter);
      setBmi(bmivalue.toFixed(2));
      if (bmivalue < 18.5) {
  setbmiStatus("Underweight");
} else if (bmivalue < 25) {
  setbmiStatus("Normal Weight");
} else if (bmivalue < 30) {
  setbmiStatus("Overweight");
} else {
  setbmiStatus("Obese");
}
      setError("")
    }
    else{
      setBmi(null);
      setbmiStatus("");
      setError("Error! plaese enter validate height and Weight")
    }
    
  }
  return (
    <>
      <div className="bmi-calculator">
        <div className="data">
          <h1>BMI Calculator</h1>
          {error && <p className='err'>{error}</p>}
        <div className="box"></div>
          <div className="input-container">
            <label htmlFor='height'>Height (cm):</label>
            <input type='text' id='height'  value={height} onChange={(e)=>setHeight(e.target.value)}/>
          </div>
          <div className="input-conatiner">
            <label htmlFor='weight'>Weight (kg):</label>
            <input type='text' id='weight' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
          </div>
          <button onClick={calculatebmi}>Calculate BMI</button>
          <button  className='clr' onClick={handleclear}>clear</button>
          {bmi !== null && (
            <div className="result">
            <p>Your BMI is : {bmi}</p>
            <p>status : {bmiStatus}</p>
          </div>
          )}
           <div className="footer">
    <p>
      © {new Date().getFullYear()} Designed with  by <span>MK</span>
    </p>
  </div>
        </div>
        
      </div>
    </>
  )
}

export default App
