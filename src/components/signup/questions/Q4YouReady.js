import React from 'react';

class Q4YouReady extends React.Component {
    render() {
        return (
            <div className="questions">
                <h1 id="question-h1"></h1>
                <form>
                    <div className="form-group">
                        <input type="email" className="form-control custom-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Q4YouReady;