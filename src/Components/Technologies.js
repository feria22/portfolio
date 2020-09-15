import React from 'react';

function Technologies(props) {
    const tech = props.tech
    return (

        <div className="flex-container align-start">
            <ul>
                {tech.csshtml.map((el, i) => <li key={i}>{el}</li>)}
            </ul>
            <ul>
                {tech.js.map((el, i) => <li key={i}>{el}</li>)}
            </ul>
            <ul>
                {tech.other.map((el, i) => <li key={i}>{el}</li>)}
            </ul>
        </div>

    );
}

export default Technologies;