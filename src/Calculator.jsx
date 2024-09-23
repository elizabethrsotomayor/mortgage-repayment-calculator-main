import './Calculator.css';

function Calculator({submitted, setSubmit, mortgageAmt, setMortgageAmt, term, setTerm, rate, setRate, type, setMortgageType, monthlyTotal, setMonthlyTotal, totalRepayment, setTotalRepayment}) {

  // Handle submission of calculator form
  const handleSubmit = (event) => {    
    event.preventDefault();
    setSubmit(true);

    let monthlyPayment;
    const interestRatePercent = rate / 100;
    
    if (type === "repayment"){
      monthlyPayment = (mortgageAmt * (interestRatePercent / 12)) / (1 - Math.pow((1 + (interestRatePercent / 12)), -12*term));
    } else if (type === "interest-only") {
      monthlyPayment = (mortgageAmt * interestRatePercent) / 12
    }

    let repayTotal = (monthlyPayment * 12) * term;
    
    monthlyTotal = setMonthlyTotal(monthlyPayment);
    totalRepayment = setTotalRepayment(repayTotal);
  }

  const resetForm = () => {
    setSubmit(false);
  }
  
  return (
    <>
      <div className="calculator-container">

        <div className="heading-clear-container">
          <h1 className="heading">Mortgage Calculator</h1>
          <input type="reset" value="Clear All" onClick={resetForm} className='clear-all-btn'/>
        </div>

        <form onSubmit={handleSubmit} action="" method="get" className="mortgage-form">

          <div className="form-section">
            <label htmlFor="mortgage-amount" className="form-labels">Mortgage Amount</label>
            <label data-domain="$" className="static-overlay-labels mortgage-amount-label">
            <input type="number" className="text-fields text-field-amount" id="mortgage-amount" value={mortgageAmt} onChange={setMortgageAmt} required/>
            </label>
          </div>

          <div className="term-rate-container">
            <div className="form-section">
              <label htmlFor="mortgage-term" className="form-labels">Mortgage Term</label>
              <label data-domain="years" className="static-overlay-labels term-rate-label">
              <input type="number" className="text-fields text-field-term" id="mortgage-term" value={term} onChange={setTerm} required/>
              </label>
            </div>
            <div className="form-section">
              <label htmlFor="mortgage-rate" className="form-labels">Interest Rate</label>
              <label data-domain="%" className="static-overlay-labels term-rate-label">
              <input type="number" className="text-fields text-field-term text-field-rate" id="interest-rate" value={rate} onChange={setRate} required/>
              </label>
            </div>
          </div>

          <div className="form-section">
            <fieldset className='mortgage-type-radio-btns'>
              <legend className="form-labels">Mortgage Type</legend>
              <div className={type === "repayment" ? "radio-btns radio-btn-active" : "radio-btns"} onChange={setMortgageType}>
                <input type="radio" name="mortgage-type" value="repayment" className={type === "repayment" ? "active-radio" : ""} />
                <label htmlFor='repayment' className="mortgage-type-label"> Repayment</label>
              </div>
              <div className={type === "interest-only" ? "radio-btns radio-btn-active" : "radio-btns"} onChange={setMortgageType}>
                <input type="radio" name="mortgage-type" value="interest-only" className={type === "interest-only" ? "active-radio" : ""} />
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
