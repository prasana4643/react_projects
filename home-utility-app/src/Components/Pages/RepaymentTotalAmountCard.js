import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


export default function RepaymentTotalAmountCard() {
    const [sum, setSum] = useState(0);
    const allRepaymentDetils = useSelector((state) => state.repayments);

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

    useEffect(() => {
        {
            var count = 0;
            for (let i = 0; i < allRepaymentDetils.length; i++) {
                count = count + Number(allRepaymentDetils[i].amount);
            }
            setSum(count);
        }
    }, [allRepaymentDetils]);


    return (
        <div><div className="card" style={{ width: "18rem", backgroundColor: "yellow" }}>
            <div className="card-body">
                <h5 className="card-title">Total Repayment Done</h5>
                <p className="card-text">₹ {sum}</p>
            </div>
        </div></div>
    )
}
