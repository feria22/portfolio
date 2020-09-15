import React from 'react';
function Educations(props) {
    const edu = props.educations;
    return (
        <div>
            <dl>
                <dt>Wyższa szkoła</dt>
                <dd>
                    <p><span>{edu.educations.high.name}</span> <span className="only-for-small-width">{edu.educations.high.date}</span></p>
                    <p><i>{edu.educations.high.profession}</i></p>
                </dd>
                <dt>IT, srednia szkoła</dt>
                <dd>
                    <p><span>{edu.educations.middle.name}</span><span className="only-for-small-width">{edu.educations.middle.date}</span></p>
                    <p ><i>{edu.educations.middle.profession}</i></p>
                </dd>

                <dt>Inne </dt>
                <dd>
                    <p><span>{edu.dyploms.name}</span>
                        <span className="only-for-small-width">{edu.dyploms.date}</span>
                    </p>
                </dd >
                {edu.certifications.map((el, index) =>
                    <dd key={`list-3.2.+${index}`}> <p><span>{el.name}</span>
                        <span className="only-for-small-width">{el.date}</span>
                    </p></dd>
                )}
                <dt>Języki </dt>
                {edu.languages.map((el, index) =>
                    <dd key={`list-4.+${index}`}><p ><span>{el.name}</span>
                        <span className="level"
                            style={{ background: `linear-gradient(90deg, #083431 ${el.level},rgba(28,96,85,1) ${el.level})` }}
                        ></span>
                    </p></dd>
                )}

            </dl>
        </div>
    );
}

export default Educations;