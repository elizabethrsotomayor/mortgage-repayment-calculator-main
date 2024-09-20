import Calculator from "./Calculator"
import Results from "./Results"
import { useState } from "react"
import "./Card.css"

function Card() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <div role="main" className='card'>
        <Calculator submitted={submitted} setSubmit={() => setSubmitted(true)}/>
        <Results submitted={submitted}/>
      </div>
    </>
  )
}

export default Card
