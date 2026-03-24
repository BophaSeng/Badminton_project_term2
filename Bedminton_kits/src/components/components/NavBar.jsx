function NavBar() {
    return (
        <header className="header-of-Navbar">
            <h1 className="logo"> BadminKits</h1>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>   
                    <li><a href="/products">Products</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            
            </nav>
        </header>
    );
}

export default NavBar;