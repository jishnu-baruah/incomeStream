// src/components/form/NetworkSelect.tsx
import React from 'react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../ui/select';

const NetworkSelect: React.FC = () => {
    return (
        <div className="form-group">
            <label>Blockchain Network</label>
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Select network" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="ethereum">Ethereum</SelectItem>
                    <SelectItem value="polygon">Polygon</SelectItem>
                    <SelectItem value="arbitrum">Arbitrum</SelectItem>
                    <SelectItem value="optimism">Optimism</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default NetworkSelect;