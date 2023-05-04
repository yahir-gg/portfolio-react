import Uam from '../assets/uam.jpeg'
import Phrase from '../assets/phrase.jpg'
import Header from '../Header';

function About(){
    return(
        <>
            <Header/>
            <section className="about">
                <div className="about-images">
                    <div className="yahir-avatar">

                    </div>
                    <div className="phrase-avatar">

                    </div>
                </div>
                <div className="about-text">
                    <p>
                        Hello! My name is Yahir García. 
                        I'm studying a bachelor's degree in Information Technologies at UAM Cuajimalpa since 2019.
                        2023 is my last year at college.
                    </p>
                    <p>
                        <b><i>"Never stop learing"</i></b> is a phrase that marked me a lot. I like to learn new 
                        things through courses and that is the way I've learning to code. Python is my favourite
                        programming language, however, JavaScript it isn't bad for me.
                    </p>
                    
                    <p>
                        I had the oportunity to be a Database intern for three months where I learned a lot 
                        and was my first professional approach.
                        Also I did my social service in Mexico City Government.
                    </p>
                    <p><b>
                        I'm looking for a oportunity in Software Engineering where I could show my skills 
                        as iniciative, workteam, critical analysis, etc.
                        </b>
                        <br /><br />
                        You can see my projects <a href="/projects">here</a>
                    </p>
                </div>
                
            </section>
        </>
    );
}

export default About;