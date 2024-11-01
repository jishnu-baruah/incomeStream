import React, { useState } from 'react';
import { useConnect } from 'wagmi';
import { Wallet } from 'lucide-react';
import '../styles/WalletAdapter.css';

interface WalletAdapterProps {
    isOpen: boolean;
    onClose: () => void;
    onConnect: (connector: any) => void; // Add this line
}

const WalletAdapter: React.FC<WalletAdapterProps> = ({ isOpen, onClose, onConnect }) => { // Add onConnect to props
    const { connectors, isLoading, pendingConnector } = useConnect();
    const [hoveredConnector, setHoveredConnector] = useState<string | null>(null);

    if (!isOpen) return null;

    return (
        <div className="wallet-adapter-overlay">
            <div className="wallet-adapter-modal">
                <div className="wallet-adapter">
                    <h2 className="wallet-adapter-title">Connect Your Wallet</h2>
                    <div className="wallet-adapter-list">
                        {connectors.map((connector) => (
                            <button
                                key={connector.id}
                                onClick={() => onConnect(connector)} // Use onConnect prop
                                className={`wallet-adapter-button ${isLoading && pendingConnector?.id === connector.id ? 'loading' : ''} ${hoveredConnector === connector.id ? 'hovered' : ''}`}
                                disabled={isLoading && pendingConnector?.id === connector.id}
                                onMouseEnter={() => setHoveredConnector(connector.id)}
                                onMouseLeave={() => setHoveredConnector(null)}
                            >
                                <Wallet className="wallet-icon" />
                                <span className="wallet-name">{connector.name}</span>
                                {isLoading && pendingConnector?.id === connector.id && (
                                    <div className="loading-indicator"></div>
                                )}
                                <div className="hover-background"></div>
                            </button>
                        ))}
                    </div>
                    <button className="close-button" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default WalletAdapter;
