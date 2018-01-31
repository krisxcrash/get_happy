import React from 'react';

class Q5Setting extends React.Component {
    render() {
        return (
            <div className="questions">
                <h1 id="question-h1">What is your ideal setting?</h1>
                    <div className="btn-group" data-toggle="buttons">
                        <label className="form-check-label btn btn-custom-select btn-lg">
                            <input className="form-check-input" type="checkbox" /> Take me to the beach!
                        </label>
                        <label className="form-check-label btn btn-custom-select btn-lg">
                            <input lassName="form-check-input" type="checkbox" /> Anywhere outdoors!
                        </label>
                        <label className="form-check-label btn btn-custom-select btn-lg">
                            <input lassName="form-check-input" type="checkbox" /> All about the city!
                        </label>
                    </div>
            </div>
        );
    }
}

export default Q5Setting;