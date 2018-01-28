import React from 'react';

class Q1Name extends React.Component {
    render() {
        return (
            <div className="question-box">
                <h1 id="question-h1">What is your name?</h1>
                <form>
                    <div className="form-group">
                        <input type="email" className="form-control email-form" id="yourNameHere" aria-describedby="name" placeholder="" />
                    </div>
                    <button type="submit" className="btn btn-custom btn-lg">Next Question!</button>
                </form>
            </div>
        );
    }
}

export default Q1Name;