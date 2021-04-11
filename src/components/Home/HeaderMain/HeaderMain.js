import React from 'react';
import chair from './../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main>
            <div style={{height:'700px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
            <h1 style={{color:' #3A4256'}}>Your New Smile <br></br>Starts Here</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <button className="btn btn-primary">GET APPOINTMENT</button>
                </div>

                <div className="col-md-6">
               <img src={chair} alt="" className="img-fluid" />
                </div>
            </div>
           
        </main>
    );
};

export default HeaderMain;