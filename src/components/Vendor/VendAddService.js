import { Link } from 'react-router-dom';
import logo from '../../logo.svg'; 
import VendSideDashboard from './VendSideDashboard'; 

function VendAddService(){
    return(

        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <VendSideDashboard/>
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='card'>
                        <h4 className='card-header'>Add Service</h4>
                        <div className='card-body'>
                        <form>
                            <div className="mb-3">
                                <label for="Title" className="form-label">Category</label>
                                <select className='form-control'>
                                    <option>Select a Category</option>
                                    <option>Architect</option>
                                    <option>Carpenter</option>
                                    <option>Electrician</option>
                                    <option>Painter</option>
                                    <option>Plumber</option>
                                    <option>Interior Designer</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="Price" className="form-label">Price</label>
                                <input type="text" className="form-control" id="Price" />
                            </div>
                            <div className="mb-3">
                                <label for="Description" className="form-label">Description</label>
                                <textarea className="form-control" rows={8} id="Description"></textarea>
                            </div>
                            <div className="mb-3">
                                <label for="ProductImg" className="form-label">Service Images</label>
                                <input type="file" className="form-control" id="ProductImg" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default VendAddService;