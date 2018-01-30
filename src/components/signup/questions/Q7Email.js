import React from 'react';

class Q7Email extends React.Component {
    render() {
        return (
            <div className="questions">
                <h1 id="question-h1">What is your email?</h1>
                <form>
                    <div className="form-group">
                        <input type="email" className="form-control custom-form" id="InputEmail" aria-describedby="emailHelp" placeholder="" />
                    </div>
                    {/* <button type="submit" className="btn btn-custom btn-lg">Get My Results!</button> */}
                </form>
            </div>
        );
    }
}

export default Q7Email;