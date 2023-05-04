import { projects } from '../list/ListProjects'
import Header from '../Header';

function Projects(){
    return(
        <>
        <Header/>
        <div className="container-cards">
                {projects.map((project) => (
                    <div className="card">
                        <div className="card-title">
                                <h2>{project.title}</h2>
                        </div>
                                <p>{project.description}</p>
                                <p>Link:<a href=''>{project.repository}</a></p>
                                <p>Link:<a href=''>{project.app}</a></p>
                    </div>
                ))}
        </div>
        </>
    );
}

export default Projects;