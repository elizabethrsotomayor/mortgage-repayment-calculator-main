import './Calculator.css';
import Icon from '../assets/images/icon-calculator.svg'
import Results from './Results';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

function Calculator() {

  const [inputs, setInputs] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm();  

  const selectedValue = watch('mortgageType');

  // Handle submission of calculator form  
  const submitForm = (data) => {
    // console.log(data);
    setInputs(data);
  }
    
  useEffect(() => {
    console.log(inputs);
  }, [inputs]);
    
  const resetForm = () => {
    setInputs({});
    reset({
      amount: '',
      term: '',
      interest: '',
      mortgageType: ''
    })
  }

    return (
      <>
      <div className="calculator-container">

        <div className="heading-clear-container">
          <h1 className="heading">Mortgage Calculator</h1>
          <input type="reset" value="Clear All" onClick={resetForm} className='clear-all-btn'/>
        </div>

        <form onSubmit={handleSubmit(data => submitForm(data))} action={void(0)} method="get" className="mortgage-form">

          <div className="form-section">
            <label htmlFor="mortgage-amount" className="form-labels">Mortgage Amount</label>
            <label data-domain="$" className={errors.amount ? "static-overlay-labels mortgage-amount-label error-label" : "static-overlay-labels mortgage-amount-label"}>
            <input 
              type="number" 
              className={errors.amount ? 'text-fields text-field-amount error-input' : "text-fields text-field-amount"} 
              id="mortgage-amount"  
              {...register('amount', { required: true, min: 1000, max: 2000000 })} />
            </label>            
            {
              errors.amount?.type === 'required' && <p className='error-p'>This field is required</p>
            }
            {
              errors.amount?.type === 'max' && <p className='error-p'>max: 2000000</p>
            }
            {
              errors.amount?.type === 'min' && <p className='error-p'>min: 1000</p>
            }
          </div>

          <div className="term-rate-container">
            <div className="form-section">
              <label htmlFor="mortgage-term" className="form-labels">Mortgage Term</label>
              <label data-domain="years" className={errors.term ? "static-overlay-labels term-rate-label error-label" : "static-overlay-labels term-rate-label"}>
              <input 
                type="number" 
                className={errors.term ? "text-fields text-field-term error-input" : "text-fields text-field-term"} 
                id="mortgage-term"
                {...register('term', { required: true, min: 5, max: 40 })} />
              </label>
              {
                errors.term && <p className='error-p'>This field is required</p>
              }
            </div>

            <div className="form-section">
              <label htmlFor="interest-rate" className="form-labels">Interest Rate</label>
              <label data-domain="%" className={errors.term ? "static-overlay-labels term-rate-label rate-label error-label" : "static-overlay-labels term-rate-label rate-label"}>
              <input 
                type="number" 
                className={errors.interest ? "text-fields text-field-term text-field-rate error-input" : "text-fields text-field-term text-field-rate"} 
                id="interest-rate" 
                step='0.01'
                {...register('interest', { required: true, min: 1, max: 11 })} />
              </label>
              {
                errors.interest && <p className='error-p'>This field is required</p>
              }
            </div>
          </div>

          <div className="form-section">
            <fieldset className='mortgage-type-radio-btns'>
              <legend className="form-labels">Mortgage Type</legend>
              <div className={selectedValue === "repayment" ? "radio-btns radio-btn-active" : "radio-btns"}>
                <input 
                  type="radio" 
                  name="mortgage-type" 
                  value="repayment" 
                  className={selectedValue === "repayment" ? "active-radio" : ""}
                  id="repayment"
                  {...register('mortgageType', { required: true })} />
                <label htmlFor='repayment' className="mortgage-type-label"> Repayment</label>
              </div>
              <div className={selectedValue === "interest-only" ? "radio-btns radio-btn-active" : "radio-btns"}>
                <input 
                  type="radio" 
                  name="mortgage-type" 
                  value="interest-only" 
                  className={selectedValue === "interest-only" ? "active-radio" : ""}
                  id="interest-only"
                  {...register('mortgageType', { required: true })} />
                <label htmlFor='interest-only' className='mortgage-type-label'> Interest Only</label>
              </div>
            </fieldset>
            {
              errors.mortgageType && <p className="error-p">This field is required</p>
            }
          </div>

          <div className="form-section">
            <button className="submit-btn">
              <img className='calculator-icon' src={Icon} alt="calculator icon"/>
              Calculate Repayments
            </button>
          </div>
        </form>

      </div>
      <div className="right-container">
        <Results inputs={inputs}/>
      </div>
    </>
  )
}

export default Calculator
