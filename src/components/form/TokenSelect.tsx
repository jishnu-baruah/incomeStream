// src/components/form/TokenSelect.tsx
import React from 'react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../ui/select';

const TokenSelect: React.FC = () => {
    return (
        <div className="form-group">
            <label>Payment Token</label>
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Select token" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="aia">AIA</SelectItem>
                    <SelectItem value="usdc">USDC</SelectItem>
                    <SelectItem value="usdt">USDT</SelectItem>
                    <SelectItem value="dai">DAI</SelectItem>
                    <SelectItem value="eth">ETH</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default TokenSelect;