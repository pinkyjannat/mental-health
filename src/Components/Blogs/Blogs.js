import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1>1.Difference between authorization and authentication?</h1>
            <p>
                Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.

                In the digital world, authentication and authorization accomplish these same goals. Authentication is used to verify that users really are who they represent themselves to be. Once this has been confirmed, authorization is then used to grant the user permission to access different levels of information and perform specific functions, depending on the rules established for different types of users.</p>
            <h1>2.Why are you using firebase? What other options do you have to implement authentication?</h1>
            <p>
                Firebase provided Google can be used for the following:

                In the initial years, Firebase was successful over many of its other alternatives. But, it started losing popularity when it was compared with other database .The previous one is a database management system and the latter one is a model to sync, real-time data on the cloud and manages the user engagement for the clients mobile app.

                Firebase is a popular, easy to use authentication systems for developers who just strated! its very easy to do lots of authenticate system using firebase and custom firebase hooks! its also a quic an easy option for deploying a web site rather than GCP or AWS!

                For web applications that leverage server-side templating, session-based auth via username and password is often the most appropriate. You can add OAuth and OpenID as well. For RESTful APIs, token-based authentication is the recommended approach since it's stateless.
            </p>
            <h1>
                What other services does firebase provide other than authentication
            </h1>
            <p>
                firebase provided wide range of options now a days!like 
                Cloud Firestore,Cloud Functions,  Hosting,Cloud Storage,Google Analytics,Predictions and
                Cloud Messaging.
            </p>
        </div>
    );
};

export default Blogs;