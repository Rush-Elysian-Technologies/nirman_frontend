import React from 'react';
import { Link } from 'react-router-dom';

function VendSideDashboard(){
    return(
        <>
        <div className="list-group">
            <Link to="/VendServices" className="list-group-item list-group-item-action">Services</Link>
            <Link to="/VendAddService" className="list-group-item list-group-item-action">Add Services</Link>
            <Link to="/VendProfile" className="list-group-item list-group-item-action"aria-disabled="true">Update Profile</Link>
            <Link to="/VendPrevAppointment"className="list-group-item list-group-item-action" >Previous Customers</Link>
            <Link to="/VendAddress" className="list-group-item list-group-item-action"> Change Address</Link>
            <Link to="/VendChangePass" className="list-group-item list-group-item-action">Change Password</Link>
            {/* <Link to="/customer/wishlist" className="list-group-item list-group-item-action">Help</Link> */}
        </div>
        </>
    )
}

export default VendSideDashboard;