// src/components/ActivePayments.tsx
import React from 'react';
import { Card } from './ui/card';

const ActivePayments: React.FC = () => {
    return (
        <Card className="active-payments">
            <h2>Active Payment Streams</h2>
            {/* Add your active payments list here */}
        </Card>
    );
};

export default ActivePayments;
