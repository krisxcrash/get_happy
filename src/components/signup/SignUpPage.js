import React from 'react';
import Q1Name from './questions/Q1Name';
import Q2Birthday from './questions/Q2Birthday';
import Q3City from './questions/Q3City';
import Q4YouReady from './questions/Q4YouReady';
import Q5Setting from './questions/Q5Setting';
import Q6Length from './questions/Q6Length';
import Q7Email from './questions/Q7Email';

    const components = [Q1Name, Q2Birthday, Q3City, Q4YouReady, Q5Setting, Q6Length, Q7Email];
    const componentsToRender = components.map((Component, i) => (
        <Component key={i} />
    ));

    class SignUpPage extends React.Component {
        constructor(props) {
            super(props);
            
            this.state = {
                i: 0
            }

            this._handleClick = this._handleClick.bind(this);
        }
        _handleClick(event) {
            
            event.preventDefault();
            if(this.state.i < components.length) {
                this.setState({ i : this.state.i + 1});
            } 
            else {
               console.log('stop') ;
            }
            
            
        }
        render() {
            return (
                <div className = "container-fluid signup-page">
                    <div className = "question-box">
                        {componentsToRender[this.state.i]}
                        <button type="submit" className="btn btn-custom btn-lg" onClick={this._handleClick}>Next Question!</button>
                    </div>
                </div>
            );
        }
    }

    export default SignUpPage;