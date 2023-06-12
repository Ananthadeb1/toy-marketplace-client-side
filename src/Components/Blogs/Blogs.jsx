
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
                <div><h1>Difference between SQL and NoSQL</h1></div>
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
                <div><h1>What is JWT ??</h1></div>
                <hr className='w-75 mx-auto' />
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                <h4>How it works ?? </h4>
                <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
            </section>
        </div>
    );
};

export default Blogs;