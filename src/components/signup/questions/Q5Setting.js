import React from 'react';

class Q5Setting extends React.Component {
    render() {
        return (
            <div className="questions">
                <h1 id="question-h1">What is your ideal setting?</h1>
                    <button type="button" className="btn btn-custom-select btn-lg">Take me to the beach!</button>
                    <button type="button" className="btn btn-custom-select btn-lg">Anywhere outdoors!</button>
                    <button type="button" className="btn btn-custom-select btn-lg">All about the city!</button>
            </div>
        );
    }
}

export default Q5Setting;