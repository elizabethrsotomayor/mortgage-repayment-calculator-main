import Calculator from "./Calculator"
import "./Card.css"

function Card() {
  return (
    <>
      <div role="main" className='card'>
        <Calculator />
      </div>
      <footer role="contentinfo">
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/elizabethrsotomayor">Elizabeth Sotomayor</a>.
      </div>
    </footer>
    </>
  )
}

export default Card
