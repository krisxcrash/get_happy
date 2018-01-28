import React from 'react';

class Q2Birthday extends React.Component {
    render() {
        return (
            <div className="question-box">
                <h1 id="question-h1">When is your birthday?</h1>
                <form>
                    <div className="form-group">
                        <input type="date" className="form-control email-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Q2Birthday;