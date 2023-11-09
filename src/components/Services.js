import React from 'react';
import {Link} from 'react-router-dom';
import SingleService from './SingleService';

function Services(){
    return(
        <>
        <section className='container mt-4'>
        <h3 className='mb-4'>All Services</h3>
            <div className='row mb-4'>
                <SingleService title="Service-1" />
                <SingleService title="Service-1" />
                <SingleService title="Service-1" />
                <SingleService title="Service-1" />
                <SingleService title="Service-1" />
                <SingleService title="Service-1" />
                <SingleService title="Service-1" />
                <SingleService title="Service-1" />
                <SingleService title="Service-1" />
                <SingleService title="Service-1" />
                <SingleService title="Service-1" />
                <SingleService title="Service-1" />
            </div>

        </section>
        </>
    )
}

export default Services;