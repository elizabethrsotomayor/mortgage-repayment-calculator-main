import './Calculator.css';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Calculator() {
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`The amount entered is: ${amount}`);
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
            <input type="text" className="text-fields text-field-amount" id="mortgage-amount" value={amount} onChange={(e) => setAmount(e.target.value)} required/>
            </label>
          </div>

          <div className="term-rate-container">
            <div className="form-section">
              <label htmlFor="mortgage-term" className="form-labels">Mortgage Term</label>
              <label data-domain="years" className="static-overlay-labels term-rate-label">
              <input type="text" className="text-fields text-field-term" id="mortgage-term" required/>
              </label>
            </div>
            <div className="form-section">
              <label htmlFor="mortgage-rate" className="form-labels">Interest Rate</label>
              <label data-domain="%" className="static-overlay-labels term-rate-label">
              <input type="text" className="text-fields text-field-term text-field-rate" id="interest-rate" required/>
              </label>
            </div>
          </div>

          <div className="form-section">
            <fieldset className='mortgage-type-radio-btns'>
              <legend className="form-labels">Mortgage Type</legend>
              <div className="radio-btns radio-btn-active">
                <input type="radio" name="mortgage-type" value="repayment" className='active-radio' />
                <label htmlFor='repayment' className="mortgage-type-label"> Repayment</label>
              </div>
              <div className="radio-btns">
                <input type="radio" name="mortgage-type" value="interest-only" />
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
