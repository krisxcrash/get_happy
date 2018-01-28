import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className = "jumbotron">
                <h1>Get Happy</h1>
                <p>A sign-up flow to onboard potential customers</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
                <Link to="signup" className="btn btn-success btn-lg">SignUp</Link>
            </div>
        );
    }
}

export default HomePage;