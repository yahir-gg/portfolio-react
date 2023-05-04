function Header(){
    return(
        <header className="header-container">
            <div className="header-content">
                <div className="name">
                    <a href="/">Yahir García</a>
                </div>
                <nav className="menu">
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/projects">My projects</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;