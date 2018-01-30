import React from 'react';

class Q1Name extends React.Component {
    // handleSubmit(event) {
    //     event.preventDefault();
    //     this.props.onNext();
    // }

    render() {
        return (
            <div className="questions q1" style={this.props.style}>
                <h1 id="question-h1">What is your name?</h1>
                <form>
                    <div className="form-group">
                        <input type="name" className="form-control text-form custom-form" id="nameInput" aria-describedby="name" placeholder="" />
                    </div>
                    {/* <button type="submit" className="btn btn-custom btn-lg" onSubmit={this.handleSubmit}>Next Question!</button> */}
                </form>
            </div>
        );
    }
}

export default Q1Name;