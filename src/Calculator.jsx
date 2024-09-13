import './Calculator.css';

function Calculator() {
  return (
    <>
      <div className="calculator-container">

        <div className="heading-clear-container">
          <h1 className="heading">Mortgage Calculator</h1>
          <input type="reset" value="Clear All" className='clear-all-btn' />
        </div>

        <form action="" method="get" className="mortgage-form">
          <div className="form-section">
            <label htmlFor="mortgage-amount" className="form-labels">Mortgage Amount</label>
            <input type="text" name="mortgage-amount" id="mortgage-amount" className="text-fields text-field-amt" required />
          </div>

          <div className="term-rate-container">
            <div className="form-section">
              <label htmlFor="mortgage-term" className="form-labels">Mortgage Term</label>
              <input type="text" name="mortgage-term" id="mortgage-term" className="text-fields" required />
            </div>
            <div className="form-section">
              <label htmlFor="interest-rate" className="form-labels">Interest Rate</label>
              <input type="text" name="interest-rate" id="interest-rate" className="text-fields" required />
            </div>
          </div>

          <div className="form-section">
            <fieldset className='mortgage-type-radio-btns'>
              <legend className="form-labels">Mortgage Type</legend>
              <label><input type="radio" name="radio" value="yes" /> Repayment</label>
              <label><input type="radio" name="radio" value="no" /> Interest Only</label>
            </fieldset>
          </div>

          <div className="form-section">
            <input type="submit" value="Calculate Repayments" />
          </div>
      </form>

      </div>
    </>
  )
}

export default Calculator
