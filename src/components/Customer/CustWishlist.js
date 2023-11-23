import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
//  import logo from 'concreate_visions\src\logo.svg'; 
import Card from 'react-bootstrap/Card';
import SideDashboard from './SideDashboard';

function CustWishlist() {
  return (
    // <div
    //   className="modal show"
    //   style={{ display: 'block', position: 'initial' }}
    // >
    //   <Modal.Dialog>
    //     <Modal.Header closeButton>
    //       <Modal.Title>Service Title</Modal.Title>
    //     </Modal.Header>

    //     <Modal.Body>
    //       <p>About the particular service</p>
    //     </Modal.Body>

    //     <Modal.Footer>
    //       <Button variant="primary">Schedule Appointment</Button>
    //     </Modal.Footer>
    //   </Modal.Dialog>
    // </div>
    <div className='row'>
    <div className='col-md-3 col-12 mb-2'>
                    <SideDashboard />
                </div>
    <div className='col-12 col-md-3 mb-4'>
            <div className="card">
                <Link to="/Architect">
                    {/* <img src={logo} class="card-img-top" alt="..."/> */}
                    <img/>
                </Link>
                <div>
                    </div>
                <div className="card-body">
                    <h4 className="card-title"> 
                        <Link to="/Architect">
                        <Card.Subtitle className="mb-2 text-muted">Services</Card.Subtitle>
                        </Link>
                    </h4>
                    {/* <h5 className="card-title text-muted">Price: Rs {props.product.price}</h5> */}
                </div>
                <div className="card-footer">
                    <button title="Add to Cart" className='btn btn-danger btn-sm'><i class="fa-solid fa-cart-plus">Remove</i></button>
                    <button title="Add to Wishlist" className='btn btn-success btn-sm ms-1'><i class="fa fa-heart"></i>Schedule an Appointment</button>
                </div>
             </div>
        </div>
        </div>
  );
}

export default CustWishlist;