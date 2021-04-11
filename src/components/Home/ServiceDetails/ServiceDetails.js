import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4 text-center">
         <img style={{height:'70px'}} src={service.img} alt="" /> 
         <h3 className="mt-4 mb-4">{service.name}</h3> 
         <p className="text-secondary">Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page.</p>
        </div>
    );
};

export default ServiceDetails;