import React from 'react';
import Button from 'react-bootstrap/Button';

function Login() {
  return (
    <div className="d-grid gap-2">
        <a href="/CustLogin">
      <Button variant="outline-primary" size="lg"  className=" col-md-8 col-12 offset-2">
        LogIn as a Customer
      </Button>
      </a>
      <a href="/VendLogin">
      <Button variant="outline-primary" size="lg" className=" col-md-8 col-12 offset-2">
        LogIn as a Vendor
      </Button>
      </a>
    </div>
  );
}

export default Login;