import React, { useState, useEffect } from 'react';
import { useAccount, useConnect } from 'wagmi';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import '../styles/Home.css';
import WalletAdapter from '../components/WalletAdapter';

const Home: React.FC = () => {
    const { address, isConnected } = useAccount();
    const navigate = useNavigate();
    const [showWalletAdapter, setShowWalletAdapter] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [showContent, setShowContent] = useState(true);

    const { connect } = useConnect();

    const handleConnectWallet = async (connector: any) => {
        try {
            await connect({ connector });
            setShowWalletAdapter(false);
            // Delay showing content until wallet adapter is fully hidden
            setTimeout(() => setShowContent(true), 300);
        } catch (error) {
            console.error("Failed to connect:", error);
        }
    };

    const handleOpenWallet = () => {
        setShowContent(false);
        // Wait for content fade out before showing adapter
        setTimeout(() => setShowWalletAdapter(true), 300);
    };

    const handleCloseWallet = () => {
        setShowWalletAdapter(false);
        // Wait for adapter to close before showing content
        setTimeout(() => setShowContent(true), 300);
    };

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <>
            <div className={`home ${animate ? 'animate' : ''}`}>
                <div className={`content ${!showContent ? 'hidden' : ''}`}>
                    <h1 className="title">
                        <span className="animate-text">Income</span>
                        <span className="animate-text dot">.</span>
                        <span className="animate-text">stream</span>
                    </h1>
                    <p className="subtitle">
                        <span className="animate-text">Experience decentralized finance</span>
                        <span className="animate-text">like never before</span>
                    </p>
                    {isConnected ? (
                        <div className="connected-container">
                            <p className="address animate-text">Connected as: {address?.slice(0, 6)}...{address?.slice(-4)}</p>
                            <button className="cta-button animate-text" onClick={() => navigate('/dashboard')}>
                                Go to Dashboard
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    ) : (
                        <div className="connect-container">
                            <button
                                className="cta-button animate-text"
                                onClick={handleOpenWallet}
                            >
                                Connect Wallet
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    )}
                </div>
                <div className="background-animation"></div>
            </div>

            {showWalletAdapter && (
                <WalletAdapter
                    isOpen={true}
                    onClose={handleCloseWallet}
                    onConnect={handleConnectWallet}
                />
            )}
        </>
    );
};

export default Home;