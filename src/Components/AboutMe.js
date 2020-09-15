import React from 'react';
function AboutMe(props) {
    return (
        <div>
            <ul>
                Mam:
                     {props.info.have.map((el, i) => <li key={i}>{el}</li>)}
            </ul>
            <ul>
                Nie mam:
                    {props.info.donthave.map((el, i) => <li key={i}>{el}</li>)}
            </ul>
            <ul>
                Znam:
                    {props.info.know.map((el, i) => <li key={i}>{el}</li>)}
            </ul>
            <ul>
                Potrafię:
                    {props.info.can.map((el, i) => <li key={i}>{el}</li>)}
            </ul>
        </div>
    );
}

export default AboutMe;