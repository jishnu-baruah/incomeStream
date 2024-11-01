import React, { useState } from 'react';
import { useAccount, useDisconnect, useBalance } from 'wagmi';
import { useNavigate, Link } from 'react-router-dom';
import { Moon, Sun, User, Home, PieChart, LogOut } from 'lucide-react';
import '../styles/Header.css'
const Header: React.FC = () => {
    const navigate = useNavigate();
    const { address, isConnected } = useAccount();
    const { disconnect } = useDisconnect();
    const { data: balanceData } = useBalance({ address });
    const [isDarkMode, setIsDarkMode] = useState(true);

    const handleLogout = () => {
        disconnect();
        navigate('/');
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        // You would implement the actual dark mode toggle logic here
    };

    return (
        <header className={`header ${isDarkMode ? 'dark' : 'light'}`}>
            <h1 className="header-title">
                <span className="logo-text">Income</span>
                <span className="logo-dot">.</span>
                <span className="logo-text">stream</span>
            </h1>
            <nav className="header-nav">
                <Link to="/" className="nav-link">
                    <Home size={18} />
                    <span>Home</span>
                </Link>
                <Link to="/dashboard" className="nav-link">
                    <PieChart size={18} />
                    <span>Dashboard</span>
                </Link>
                <Link to="/profile" className="nav-link">
                    <User size={18} />
                    <span>Profile</span>
                </Link>
                {balanceData && (
                    <span className="balance">
                        Balance: {parseFloat(balanceData.formatted).toFixed(4)} ETH
                    </span>
                )}
                <button onClick={handleLogout} className="logout-button">
                    <LogOut size={18} />
                    <span>Logout</span>
                </button>
                <button onClick={toggleDarkMode} className="theme-toggle">
                    {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
            </nav>
        </header>
    );
};

export default Header;