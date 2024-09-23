import Calculator from "./Calculator"
import Results from "./Results"
import { useState } from "react"
import "./Card.css"

function Card() {
  const [submitted, setSubmitted] = useState(false);
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageType, setType] = useState();
  const [monthlyTotal, setMonthlyTotal] = useState();
  const [totalRepayment, setTotalRepayment] = useState();

  return (
    <>
      <div role="main" className='card'>
        <Calculator 
          submitted={submitted} 
          setSubmit={setSubmitted} 
          mortgageAmt={mortgageAmount} 
          setMortgageAmt={(e) => setMortgageAmount(e.target.value)}
          term={mortgageTerm}
          setTerm={(e) => setMortgageTerm(e.target.value)}
          rate={interestRate}
          setRate={(e) => setInterestRate(e.target.value)}
          type={mortgageType}
          setMortgageType={(e) => setType(e.target.value)}
          monthlyTotal={monthlyTotal}
          setMonthlyTotal={setMonthlyTotal}
          totalRepayment={totalRepayment}
          setTotalRepayment={setTotalRepayment} />
        <Results submitted={submitted} monthlyTotal={monthlyTotal} totalRepayment={totalRepayment}/>
      </div>
    </>
  )
}

export default Card
