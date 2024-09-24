import './Results.css'
import EmptyImg from '../assets/images/illustration-empty.svg';

function Results({submitted, monthlyTotal, totalRepayment}) {
  
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  return (
    <>
      <div style={{display: submitted ? "none" : "block"}} className="results results-empty">
        <img src={EmptyImg} alt="Results empty image" className='results-empty-img'/>
        <h2 className='results-heading' id="results-empty-heading">Results shown here</h2>
        <p className='results-paragraph' id="results-empty-paragraph">Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
      </div>
      <div style={{display: submitted ? "block" : "none"}} className='results results-populated'>
        <h2 className='results-heading'>Your results</h2>
        <p className='results-paragraph results-paragraph-populated'>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>
        <div className="results-display">
          <span className="results-paragraph">Your monthy repayments</span>
          <h3 className='total-display'>${numberWithCommas((Math.round(monthlyTotal * 100) / 100).toFixed(2))}</h3>
          <hr className='results-divider'/>
          <span className='results-paragraph'>Total you'll repay over the term</span>
          <h4 className='results-total'>${numberWithCommas((Math.round(totalRepayment * 100) / 100).toFixed(2))}</h4>
        </div>
      </div>
    </>
  )
}

export default Results
