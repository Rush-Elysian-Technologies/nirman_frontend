import React from "react";
import SideDashboard from "./SideDashboard";
import { Link } from 'react-router-dom';

function CustAccount(){
    return(
        <>
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <SideDashboard />
                </div>
                        <div className='col-md-9 col-12 mb-2'>
                        <div className='row'>
                            <div className='card text-muted float-start'>
                                <div className='card-body'>
                                   <h5>Email: tejasrivakkalagadda@gmail.com</h5>
                                   <h5>Password: *******</h5>
                                   <h5>Phone Num: 1029384756</h5>
                                   <h5>Subscription Details: Gold Mmebership</h5>
                                   <h5>Your Payment Details</h5>
                                   <h6>Card Details: xxxx xxxx xx34</h6>
                                   <h6>Last Payment On date</h6>
                                   <h5>Privacy Policy</h5>
                                   <h3></h3>
                                </div>
                            </div>
                        </div>
                     </div>   
            </div>
            </div>
        </>
    )
}

export default CustAccount;