import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='row  row-design m-5'>
            <div className='col-lg-4 col-md-6 col-design'>
                    <h5>Deference between Authorization and authentication</h5>
                    <p className='text-justify'>It's Simply put, authentication is the process of verifying who someone
                    is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to
                        
                    </p>

            </div>
                    <div className='col-lg-4 col-md-6 col-design'>
                    <h5>Why are you using firebase</h5>
                    <p className='text-justify'>Firebase helps you build and run successful apps. Backed by Google, loved by developers. Easily integrate Firebase into your team's favorite tools. Trusted by the largest apps. Boost App Engagement.
                    Customize Your App. Monitor App Performance. Cross-Platform Solutions.
                    </p>
                    </div>
            <div className='col-lg-4 col-md-6 col-design'>
                   <h5>What Others services Firebase</h5>
                   <p className='text-justify'>When testing locally, Firebase serves your web app at a locally hosted URL. Hosting is part of the Firebase Local Emulator Suite, which enables your app to interact with your emulated Hosting content and config, as well as 
                    optionally your emulated project resources (functions, databases, and rules).</p>


            </div>
        </div>
    );
};

export default Question;