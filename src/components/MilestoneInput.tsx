// src/components/form/MilestoneInput.tsx
import React from 'react';
import { Input } from './ui/input';

interface MilestoneInputProps {
    milestone: {
        description: string;
        deadline: string;
        amount: string;
    };
    onChange: (milestone: { description: string; deadline: string; amount: string }) => void;
}

const MilestoneInput: React.FC<MilestoneInputProps> = ({ milestone, onChange }) => {
    return (
        <div className="milestone-input">
            <Input
                placeholder="Milestone description"
                value={milestone.description}
                onChange={(e) => onChange({ ...milestone, description: e.target.value })}
            />
            <Input
                type="datetime-local"
                value={milestone.deadline}
                onChange={(e) => onChange({ ...milestone, deadline: e.target.value })}
            />
            <Input
                type="number"
                placeholder="Amount"
                value={milestone.amount}
                onChange={(e) => onChange({ ...milestone, amount: e.target.value })}
            />
        </div>
    );
};

export default MilestoneInput;