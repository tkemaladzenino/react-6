import "./css/style.css";
import logo from './images/logo.png';



function Header() {

    const logoStyle = {
        width: '60px',
    };

    return (
        <header>

            <div className="log">
                <img src={logo} style={logoStyle} />
            </div>
            <nav>
                <ul>
                    <li><a href="#">ჩვენს შესახებ</a></li>
                    <li><a href="#">პროდუქტები</a></li>
                    <li><a href="#">კონტაქტი</a></li>
                </ul>
            </nav>

        </header>


    )
}

export default Header;



