import React from 'react';

class Q1Name extends React.Component {
    render() {
        return (
            <div className="question-box">
                <h1 id="question-1">What is your name?</h1>
                <form>
                    <div className="form-group">
                        <input type="email" className="form-control email-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Kasey" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Q1Name;