import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import RepaymentForm from './RepaymentForm';



export default function () {

    const [sum, setSum] = useState(0);
    const allRepaymentDetils = useSelector((state) => state.repayments);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Calculate sum of Amount on when new row is created
    useEffect(() => {
        {
            allRepaymentDetils.map((a) => {
                setSum(sum + Number(a.amount));
            })
        }
    }, [allRepaymentDetils])

    //Calculate sum of Amount on Component load(when navigating across tabs)
    useEffect(() => {
        {
            var count = 0;
            for (let i = 0; i < allRepaymentDetils.length; i++) {
                count = count + Number(allRepaymentDetils[i].amount);
            }
            setSum(count);
        }
    }, []);

    return (
        <div className="container-fluid justify-content-start">
            <nav className="navbar bg-body-tertiary">
                <form className="container-fluid justify-content-start">
                    <button className="btn btn-outline-success me-2" type="button" onClick={handleShow}>Add Repayment</button>
                    <button className="btn btn-outline-success me-2" type="button">Payment Insight</button>
                    <br></br><br></br><br></br>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Repayment</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <RepaymentForm handleClose={handleClose} />
                        </Modal.Body>
                    </Modal>



                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Payment Date</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allRepaymentDetils.map((d, index) => {
                                return <tr key={index}>
                                    <td scope="row">{d.date}</td>
                                    <td>{d.amount}</td>
                                    <td>
                                        <button type="button" name="edit" id="edit" value="edit" className="btn btn-primary">Edit</button>&nbsp;&nbsp;
                                        <button type="button" name="del" id="del" value="del" className="btn btn-danger">Delete</button>&nbsp;&nbsp;
                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                </form>
            </nav>
            Total: {sum}
        </div>
    )
}
