import SideDashboard from "./SideDashboard";

function CustAddAddress(props){
    return(

        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <SideDashboard />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='card'>
                        <h4 className='card-header'>Add Address</h4>
                        <div className='card-body'>
                        <form>
                            <div className="mb-3">
                                <label for="address" className="form-label">Address</label>
                                <textarea className="form-control" id="address" placeholder="Dr.no:10-10-10,Area,Street name,Building/Apartment name,locality near by, Pincode"></textarea>
                            </div>
                            <div className="mb-3">
                                <label for="address" className="form-label">Phone Number</label>
                                <input type="phnum" className="form-control" id="address"></input>
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

export default CustAddAddress;