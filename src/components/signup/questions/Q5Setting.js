import React from 'react';

class Q5Setting extends React.Component {
    render() {
        return (
            <div className="questions">
                <h1 id="question-h1">What is your ideal setting?</h1>
                    <div className="btn-group" data-toggle="buttons">
                        <label className="btn btn-custom-select btn-lg">
                            <input type="checkbox" /> Take me to the beach!
                        </label>
                        <label className="btn btn-custom-select btn-lg">
                            <input type="checkbox" /> Anywhere outdoors!
                        </label>
                        <label className="btn btn-custom-select btn-lg">
                            <input type="checkbox" /> All about the city!
                        </label>
                    </div>
            </div>
        );
    }
}

export default Q5Setting;