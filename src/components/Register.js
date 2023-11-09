import React from 'react';
import Button from 'react-bootstrap/Button';

function Register(){
    return(
        <div className="d-grid gap-2">
        <a href="/CustRegister">
      <Button variant="outline-primary" size="lg"  className=" col-md-8 col-12 offset-2">
        Register as a Customer
      </Button>
      </a>
      <a href="/VendRegister">
      <Button variant="outline-primary" size="lg" className=" col-md-8 col-12 offset-2">
        Register as a Vendor
      </Button>
      </a>
    </div>
    )
}
export default Register;