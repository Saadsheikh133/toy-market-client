import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blogs')
    return (
        <div className='text-xl my-10'>
            <h3 className='text-3xl font-bold my-5'>Question-1:What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
            <p> <span className='font-bold'>Answer: Access token:</span> An access token is an object encapsulating the security identity of a process or thread. A token is used to make security decisions and to store tamper-proof information about some system entity.</p>
            <p className='my-5'> <span className='font-bold'>Refresh token:</span>Access tokens may be valid for a short amount of time. Once they expire, client applications can use a refresh token to (refresh) the access token.</p>
            <p className='my-5'> <span className='font-bold'>Access token and Refresh token work:</span>When the user logging in to an API service. This could be done by sending an HTTP request with a username and password. Then, on successful authentication, the API returns an access token.When the access token will expire.Then user using refresh token to re-generate access token.Then user use private information again.</p>
            <p>We usually 2 ways to stored them on client site.i. local storage.But this system do not properly secure. <br /> ii. http only cookie</p>

            <h3 className='text-3xl font-bold my-5'>Question-2: Compare SQL and NoSQL databases?</h3>
            <p> <span className='font-bold'>Answer:</span>Here, we break down the most important distinctions and discuss the best SQL and NoSQL database systems available.</p>
            <br />
            <li>SQL databases are relational, and NoSQL databases are non-relational.</li>
            <br />
            <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
            <br />
            <li>SQL are uses normalized data structure, while NoSQL database uses denormalized data structure</li>
            <br />
            <li>SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
            <br />
            <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
            <br />
            <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
            

            <h3 className='text-3xl font-bold my-5'>Question-3:What is express js? What is Nest JS?</h3>
            <p> <span className='font-bold'>Answer:Express.js:</span> Express.js is a free and open-source web application framework for Node.js. It is used for designing and building web applications quickly and easily.Web applications are web apps that you can run on a web browser.Since Express.js only requires javascript, it becomes easier for programmers and developers  to build web applications and API without any effort.</p>
            <br />
            <p> <span className='font-bold'>Nest.js:</span> Nest.JS is a framework that helps build Node.JS server-side applications. The Nest framework is built using TypeScript which allows developers to build highly scalable and testable applications. </p>

            <h3 className='text-3xl font-bold my-5'>Question-4:What is MongoDB aggregate and how does it work ?</h3>
            <p> <span className='font-bold'>Answer: </span> Aggregation is a way of processing a large number of the documents in a collection by means of passing them through different stages. The stages make up what is the known as a pipeline. The stages in a pipeline can filter, sort, group and modify documents that pass through the pipeline.</p>
            <br />
            <p> <span className='font-bold'>Aggregation work:</span> There is no better method than MongoDB Aggregations when we need to collect the metrics from MongoDB for any graphical illustration or maybe other operations. Aggregation in MongoDB is responsible for processing the data, which results in the calculated outputs, generally by assembling the data from several documents and then executes in various ways on those assembled data in order to yield one collective result.Aggregation in MongoDB was progressed when limitations were viewed because of having millions of embedded documents, taking much time in processing, and server’s random memory which may terminate the operations.</p>
        </div>
    );
};

export default Blog;