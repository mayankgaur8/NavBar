
import  './Navbar.css';
import avantika_logo from '../../assets/Avantika-Technologies17032024.png';
import 'bootstrap/dist/css/bootstrap.min.css';
//import logo_light from '../../assets/logo-black.png';
//import logo_dark from '../../assets/logo-white.png';
import search_icon_dark from '../../assets/search-b.png';
import search_icon_light from '../../assets/search-w.png';
import toggle_light from '../../assets/night.png';
import toggle_dark from '../../assets/day.png';

// eslint-disable-next-line react/prop-types
const Navbar = ({ theme, setTheme }) => {
    const toggle_mode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
            <a className="navbar-brand" href="#">
                <img src={avantika_logo} alt="Logo" className='logo' />
            </a>
            <button className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Resume Writing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">International Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Career Growth</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Screening Services</a>
                    </li>
                </ul>

                <div className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search here" aria-label="Search" />
                    <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt="Search Icon" className="search-icon" />
                </div>

                <img 
                onClick={toggle_mode} 
                src={theme === 'light' ? toggle_light : toggle_dark}
                 alt="Toggle Icon" 
                 className='toggle-icon' 
                 />
            </div>
        </nav>
    );
};

export default Navbar;
