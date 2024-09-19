import './Results.css'

function Results() {
  // TODO: pass submitted state down from parent via props
  const submitted = true;
    
  return (
    <>
      <div style={{display: submitted ? "none" : "block"}} className="results results-empty">
        <img src="../assets/images/illustration-empty.svg" alt="Results empty image" className='results-empty-img'/>
        <h2 className='results-heading'>Results shown here</h2>
        <p className='results-paragraph'>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
      </div>
      <div style={{display: submitted ? "block" : "none"}} className='results results-populated'>
        <h2 className='results-heading'>Your results</h2>
        <p className='results-paragraph results-paragraph-populated'>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>
        <div className="results-display">
          <span className="results-paragraph">Your monthy repayments</span>
          <h3 className='total-display'>$2,197.74</h3>
          <hr className='results-divider'/>
          <span className='results-paragraph'>Total you'll repay over the term</span>
          <h4 className='results-total'>$539,322.94</h4>
        </div>
      </div>
    </>
  )
}

export default Results
