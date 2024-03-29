import { Link } from 'react-router-dom';
import VendSideDashboard from './VendSideDashboard';

function VendServices(props){
    return(

        <div className='container mt-4'>
            <div className='row'>
                    <div className='col-md-3 col-12 mb-2'>
                        <VendSideDashboard/>
                    </div>
                    <div className='col-md-9 col-12 mb-2'>
                        <div className='table-responsive table-bordered'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <td colSpan={5} align='left'>
                                            <Link to="/VendAddService" className='btn btn-primary'>
                                                <i className='fa fa-plus-circle'></i>
                                                Add Service
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>#</th>
                                        <th>Service</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Service Title</td>
                                        <td>5000</td>
                                        <td>Available</td>
                                        <td>
                                            <a href='#' className='btn btn-info'>View</a>
                                            <a href='#' className='btn btn-primary ms-1'>Edit</a>
                                            <a href='#' className='btn btn-danger ms-1'>Delete</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

            </div>
            
        </div>

    )
}

export default VendServices;