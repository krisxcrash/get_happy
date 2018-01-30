import React from 'react';
import Q1Name from './questions/Q1Name';
import Q2Birthday from './questions/Q2Birthday';
import Q3City from './questions/Q3City';
import Q4YouReady from './questions/Q4YouReady';
import Q5Setting from './questions/Q5Setting';
import Q6Length from './questions/Q6Length';
import Q7Email from './questions/Q7Email';

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSlide: 0
        };
    }
    nextSlide() {
        this.setState({
            currentSlide: this.state.currentSlide + 1
        });
    }
    render() {
        const components = [Q1Name, Q2Birthday, Q3City, Q4YouReady, Q5Setting, Q6Length, Q7Email];
        const componentsToRender = components.map((Component, i) => (
            <Component key={i} />
        ));

        let i=0;

        function handleClick() {
            i++;
            return componentsToRender[i];
        }

        return (
            <div className = "container-fluid signup-page">
                <div className = "question-box">
                    {componentsToRender[i]}
                    <button type="submit" className="btn btn-custom btn-lg" onClick={handleClick => { i++; console.log(i); return componentsToRender[i];}}>Next Question!</button>
                </div>
            </div>
        );
    }
}

export default SignUpPage;