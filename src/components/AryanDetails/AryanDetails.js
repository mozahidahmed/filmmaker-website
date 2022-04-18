import React from 'react';
import { Link, useParams } from 'react-router-dom';

const AryanDetails = () => {
    const {serviceId}=useParams();
    return (
        <div>
           <h1>Welcome to aryan Details : {serviceId}</h1>
           <h1>He is a best Derector in bangladesh</h1>


<Link to="/checkout">
<button className='btn btn-primary'>Contact him</button>
</Link>



        </div>
    );
};

export default AryanDetails;