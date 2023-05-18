import { Link } from 'react-router-dom';
import './header.css';

export const Header = () => {
	return (
		<header className="header-container">
			<Link to="/" className="link">
				Home
			</Link>
			<Link to="/about" className="link">
				About
			</Link>
		</header>
	);
};
