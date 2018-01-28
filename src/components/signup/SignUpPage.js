import React from 'react';

class SignUpPage extends React.Component {
    render() {
        return (
            <div className = "container-fluid">
            <div className="question-box">
                <h1 id="question-1">What is your email?</h1>
                <form>
                    <div className="form-group">
                        <input type="email" className="form-control email-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com" />
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

export default SignUpPage;