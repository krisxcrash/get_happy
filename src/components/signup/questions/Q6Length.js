import React from 'react';

class Q6Length extends React.Component {
    render() {
        return (
            <div className="questions">
                <h1 id="question-h1">How long would you like your trip to be?</h1>
                    <button type="button" className="btn btn-custom-select btn-lg">Just a weekend!</button>
                    <button type="button" className="btn btn-custom-select btn-lg">A full week!</button>
                    <button type="button" className="btn btn-custom-select btn-lg">I'm flexible!</button>
            </div>
        );
    }
}

export default Q6Length;