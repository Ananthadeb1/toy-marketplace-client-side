
const Blogs = () => {
    return (
        <div>
            <section className='mx-5 px-5 mt-5'>
                <div><h1>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1></div>
                <hr className='w-75 mx-auto' />
                <div className='row'>
                    <div className='col-lg-6 col-sm-12'>
                        <h4>Access token and refresh token: </h4>
                        <p>An access token and a refresh token are two commonly used concepts in authentication and authorization systems. They play a crucial role in securely accessing and refreshing authorization credentials for a user or an application </p>
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <h4>work and where should we store:  </h4>
                        <p>Client-side refers to the part of the application that runs on the users device (usually a web browser) and is responsible for handling the user interface and interactions. Server-side refers to the part of the application that runs on the server and is responsible for processing requests, performing business logic, and interacting with databases or other external systems.

                            Also we should store it in the local sotorage or in the cookies.But cookies is batter.
                        </p>
                    </div>
                </div>
            </section>
            <section className='mx-5 px-5 mt-5'>
                <div><h1>Compare SQL and NoSQL databases?</h1></div>
                <hr className='w-75 mx-auto' />
                <div className='row'>
                    <div className='col-lg-6 col-sm-12'>
                        <h4>SQL</h4>
                        <p>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).These databases have fixed or static or predefined schema These databases are not suited for hierarchical data storage.These databases are best suited for complex queries Vertically Scalable Follows ACID property</p>
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <h4>NoSQL</h4>
                        <p>Non-relational or distributed database system.They have dynamic schema These databases are best suited for hierarchical data storage. These databases are not so good for complex queries Horizontally scalable Follows CAP(consistency, availability, partition tolerance).</p>
                    </div>
                </div>
            </section>
            <section className='mx-5 px-5 mt-5'>
                <div><h1>What is express js? What is Nest JS?</h1></div>
                <h4>express js</h4>
                <hr className='w-75 mx-auto' />
                <p>Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.</p>
                <h4>Next js </h4>
                <p>Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.</p>
            </section>
            <section className='mx-5 px-5 mt-5'>
                <div><h1>What is MongoDB aggregate and how does it work?</h1></div>
                <h4>MongoDB aggregate</h4>
                <hr className='w-75 mx-auto' />
                <p>What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
                <h4>how does it work? </h4>
                <p>In MongoDB, aggregation operations process the data records/documents and return computed results. It collects values from various documents and groups them together and then performs different types of operations on that grouped data like sum, average, minimum, maximum, etc to return a computed result.</p>
            </section>
        </div>
    );
};

export default Blogs;