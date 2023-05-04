import festival from "../assets/festival_cuadrado.png"

function Home(){
    return(
        <>
            <div className="container">
                <div className="data_container">
                    <div className="data">
                        <div className="name">
                            <h2>Yahir García</h2>
                        </div>
                        <div className="anclas">
                            <a href="/about">About</a>
                            <a href="/projects">My projects</a>
                            <a href="/contact">Contact</a>
                        </div>
                    </div>
                </div>
                <div className="festival">
                    <img src={festival} alt="" />
                </div>
            </div>
        </>
    );
}

export default Home;