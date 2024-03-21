import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addRepayment } from '../Redux/RepaymentsSlice';
import RepaymentTotalAmountCard from './RepaymentTotalAmountCard';

export default function RepaymentForm(props) {

  const [repaymentDetails, setRepaymentDetails] = useState({ amount: "", date: "" });
  const [formErrors, setFormErrors] = useState({});
  const [allRepaymentDetils, setAllRepaymentDetails] = useState([]);
  const dispatch = useDispatch();

  const onChangeRepaymentDeatilsForm = (e) => {
    const { name, value } = e.target;
    setRepaymentDetails({ ...repaymentDetails, [name]: value });
  }

  const onSubmitRepaymentForm = (e) => {
    e.preventDefault();
    var errors = validateForm();
    if (errors && Object.keys(errors).length === 0) {
      dispatch(addRepayment(repaymentDetails))
      // setAllRepaymentDetails([...allRepaymentDetils, repaymentDetails]);
      props.handleClose();
    }
    setRepaymentDetails({ amount: "", date: "" });
  }

  function validateForm() {
    var errors = {};
    if (!repaymentDetails.amount || repaymentDetails.amount.trim().length === 0) {
      errors.amount = "Amount cannot be empty!"
    }

    if (!repaymentDetails.date || repaymentDetails.date.trim().length === 0) {
      errors.date = "Payment date cannot be empty!";
    }
    setFormErrors(errors);
    return errors;
  }
  return (
    <div>
      <div >
        <form onSubmit={onSubmitRepaymentForm}>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">Amount(₹)</label>
            <input type="number" className="form-control" id="amount" name="amount" placeholder='enter amount...'
              onChange={onChangeRepaymentDeatilsForm} value={repaymentDetails.amount} />
            <div style={{ color: "red" }}>{formErrors.amount}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">Payment Date</label>
            <input type="date" className="form-control" id="date" name="date" onChange={onChangeRepaymentDeatilsForm}
              value={repaymentDetails.date} />
            <div style={{ color: "red" }}>{formErrors.date}</div>
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary">Submit</button>
          &nbsp;
          <button type="submit" className="btn btn-secondary">Close</button>
        </form>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {/* <RepaymentTotalAmountCard /> */}
      </div>
    </div>
  )
}
