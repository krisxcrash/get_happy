import React from 'react';

class Q7Email extends React.Component {
    render() {
        return (
            <div className="question-box">
                <h1 id="question-1">What is your email?</h1>
                <form>
                    <div className="form-group">
                        <input type="email" className="form-control email-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Q7Email;