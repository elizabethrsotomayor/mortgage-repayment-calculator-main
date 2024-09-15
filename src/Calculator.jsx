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
            {/* <label htmlFor="mortgage-amount" className="form-labels">Mortgage Amount</label>
            <input type="text" name="mortgage-amount" id="mortgage-amount" className="text-fields text-field-amt" required /> */}

            <label htmlFor="mortgage-amount" className="form-labels">Mortgage Amount</label>
            <label data-domain="$" className="static-overlay-labels mortgage-amount-label">
            <input type="text" className="text-fields text-field-amount" id="mortgage-amount" required/>
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
              <div className="radio-btns">
                <input type="radio" name="mortgage-type" value="repayment" />
                <label htmlFor='repayment' className="mortgage-type-label"> Repayment</label>
              </div>
              <div className="radio-btns">
                <input type="radio" name="mortgage-type" value="interest-only" />
                <label htmlFor='interest-only' className='mortgage-type-label'> Interest Only</label>
              </div>
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
