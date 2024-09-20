import './Calculator.css';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Calculator({submitted, setSubmit}) {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageType, setType] = useState();

  // Handle submission of calculator form
  const handleSubmit = (event) => {    
    event.preventDefault();
    setSubmit();
    
    console.log(`The mortgage amount entered is: ${mortgageAmount}`);
    console.log(`The mortgage term entered is: ${mortgageTerm}`);
    console.log(`The interest rate entered is: ${interestRate}`);
    console.log(`The mortgage type is: ${mortgageType}`);
  }
  
  return (
    <>
      <div className="calculator-container">

        <div className="heading-clear-container">
          <h1 className="heading">Mortgage Calculator</h1>
          <input type="reset" value="Clear All" className='clear-all-btn' />
        </div>

        <form onSubmit={handleSubmit} action="" method="get" className="mortgage-form">
          <div className="form-section">
            <label htmlFor="mortgage-amount" className="form-labels">Mortgage Amount</label>
            <label data-domain="$" className="static-overlay-labels mortgage-amount-label">
            <input type="text" className="text-fields text-field-amount" id="mortgage-amount" value={mortgageAmount} onChange={(e) => setMortgageAmount(e.target.value)} required/>
            </label>
          </div>

          <div className="term-rate-container">
            <div className="form-section">
              <label htmlFor="mortgage-term" className="form-labels">Mortgage Term</label>
              <label data-domain="years" className="static-overlay-labels term-rate-label">
              <input type="text" className="text-fields text-field-term" id="mortgage-term" value={mortgageTerm} onChange={(e) => setMortgageTerm(e.target.value)} required/>
              </label>
            </div>
            <div className="form-section">
              <label htmlFor="mortgage-rate" className="form-labels">Interest Rate</label>
              <label data-domain="%" className="static-overlay-labels term-rate-label">
              <input type="text" className="text-fields text-field-term text-field-rate" id="interest-rate" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} required/>
              </label>
            </div>
          </div>

          <div className="form-section">
            <fieldset className='mortgage-type-radio-btns'>
              <legend className="form-labels">Mortgage Type</legend>
              <div className={mortgageType === "repayment" ? "radio-btns radio-btn-active" : "radio-btns"} onChange={(e) => setType(e.target.value)}>
                <input type="radio" name="mortgage-type" value="repayment" className={mortgageType === "repayment" ? "active-radio" : ""} />
                <label htmlFor='repayment' className="mortgage-type-label"> Repayment</label>
              </div>
              <div className={mortgageType === "interest-only" ? "radio-btns radio-btn-active" : "radio-btns"} onChange={(e) => setType(e.target.value)}>
                <input type="radio" name="mortgage-type" value="interest-only" className={mortgageType === "interest-only" ? "active-radio" : ""} />
                <label htmlFor='interest-only' className='mortgage-type-label'> Interest Only</label>
              </div>
            </fieldset>
          </div>

          <div className="form-section">
            <button className="submit-btn">
              <img className='calculator-icon' src="../assets/images/icon-calculator.svg" alt="calculator icon"/>
              Calculate Repayments
            </button>
          </div>
        </form>

      </div>
    </>
  )
}

export default Calculator
