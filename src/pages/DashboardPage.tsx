// src/pages/DashboardPage.tsx
import React from 'react';
import PaymentForm from '../components/PaymentForm';
import PaymentStats from '../components/PaymentStats';
import PaymentTabs from '../components/PaymentTabs';


const DashboardPage: React.FC = () => {
    return (
        <div className="dashboard-container">
            {/* Header Section */}
            <div className="dashboard-header">
                <div>
                    <h1 className="dashboard-title">Payment Dashboard</h1>
                    <p className="dashboard-subtitle">Manage your automated payment streams</p>
                </div>
                <div className="dashboard-actions">
                    <button className="btn-secondary">
                        <span className="icon-activity"></span>
                        Analytics
                    </button>
                    <button className="btn-primary">
                        <span className="icon-plus"></span>
                        New Payment
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <PaymentStats />

            {/* Payment Management */}
            <PaymentTabs />
        </div>
    );
};

export default DashboardPage;