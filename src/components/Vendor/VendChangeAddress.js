import VendSideDashboard from './VendSideDashboard';
import { Link } from 'react-router-dom';

function VendAddress(props){
    return(

        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    < VendSideDashboard/>
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='col-12'>
                            <Link to="/VendAddAddress" className='btn btn-outline-success mb-4 float-end'>
                                <i className='fa fa-plus-circle'></i> Add Address
                            </Link>
                        </div>  
                    </div>
                    <div className='row'>
                        <div className='col-4 mb-4'>
                            <div className='card text-muted'>
                                <div className='card-body'>
                                    <h6>
                                    <i className='fa fa-check-circle text-success mb2'>Default</i><br/>
                                    DR.No:10-10-10,Lakshmipuram,Guntur,Andhrapradesh
                                    phno:1234567890
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 mb-4'>
                            <div className='card'>
                                <div className='card-body text-muted'>
                                    <h6>
                                        <span className='badge bg-secondary mb-2'>Mark Default</span><br/>
                                        DR.No:10-10-10,Lakshmipuram,Guntur,Andhrapradesh
                                    phno:1234567890</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 mb-4'>
                            <div className='card'>
                                <div className='card-body text-muted'>
                                    <h6>
                                        <span className='badge bg-secondary mb-2'>Mark Default</span><br/>
                                        DR.No:10-10-10,Lakshmipuram,Guntur,Andhrapradesh
                                    phno:1234567890</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default VendAddress;