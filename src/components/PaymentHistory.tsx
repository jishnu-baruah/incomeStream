
// src/components/PaymentHistory.tsx
import React from 'react';
import { Card } from './ui/card';

const PaymentHistory: React.FC = () => {
    return (
        <Card className="payment-history" >
            <h2>Payment History </h2>
            {/* Add your payment history list here */}
        </Card>
    );
};

export default PaymentHistory;