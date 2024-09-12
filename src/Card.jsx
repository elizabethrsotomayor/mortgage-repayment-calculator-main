import Calculator from "./Calculator"
import Results from "./Results"
import "./Card.css"

function Card() {
  return (
    <>
      <div role="main" className='card'>
        <Calculator/>
        <Results/>
      </div>
    </>
  )
}

export default Card
