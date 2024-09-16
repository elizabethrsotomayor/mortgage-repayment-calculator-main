import './Results.css'

function Results() {
  return (
    <>
      <div className="results">
        <img src="../assets/images/illustration-empty.svg" alt="Results empty image" className='results-empty-img'/>
        <h2 className='results-empty-heading'>Results shown here</h2>
        <p className='results-empty-paragraph'>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
      </div>
    </>
  )
}

export default Results
