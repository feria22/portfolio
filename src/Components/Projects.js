import React from 'react';

function Projects(props) {
    const projects = props.projects
    return (
        <div className="projects">
            {projects.map((el, i) => {
                return (
                    <div key={i} className="projects--box">
                        <img src={require(`../img/${el.img}-min.JPG`)} alt={el.img} />
                        <div className="projects--box_overlay">
                            <div >Technologie:<br/> {el.info}</div>
                            <button className="button">
                                <a href={el.link}>Ogłądać stronę</a>
                            </button>
                        </div>
                    </div>
                     )})}
            </div >
       

    );
}
export default Projects;