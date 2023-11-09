import React from 'react';
import { Link } from 'react-router-dom';

function SideDashboard(){
    return(
        <>
        <div className="list-group">
            <Link to="/CustAccount" className="list-group-item list-group-item-action">Account Details</Link>
            <Link to="/CustSubscription" className="list-group-item list-group-item-action">Subscription</Link>
            <Link to="/CustProfile" className="list-group-item list-group-item-action"aria-disabled="true">Update Profile</Link>
            <Link to="/CustPrevAppointment"className="list-group-item list-group-item-action" >Previous Appointments</Link>
            <Link to="/CustAddress" className="list-group-item list-group-item-action"> Change Address</Link>
            <Link to="/CustPassword" className="list-group-item list-group-item-action">Change Password</Link>
            <Link to="/CustWishlist" className="list-group-item list-group-item-action">Wishlist</Link>
            {/* <Link to="/customer/wishlist" className="list-group-item list-group-item-action">Help</Link> */}
        </div>
        </>
    )
}

export default SideDashboard;