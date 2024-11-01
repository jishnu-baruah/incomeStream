import React, { useState } from 'react';
import { useContractWrite } from 'wagmi';

const IncomeStreamForm: React.FC = () => {
    const [receiver, setReceiver] = useState('');
    const [amount, setAmount] = useState('');
    const [duration, setDuration] = useState('');

    const { write } = useContractWrite({
        address: 'your-contract-address',
        abi: 'your-contract-abi',
        functionName: 'createIncomeStream',
        args: [receiver, amount, duration],
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        write();
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-6 text-center">Create Income Stream</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="receiver" className="block text-sm font-medium text-gray-700">Receiver Address</label>
                        <input
                            type="text"
                            id="receiver"
                            placeholder="0x..."
                            value={receiver}
                            onChange={(e) => setReceiver(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount (ETH)</label>
                        <input
                            type="text"
                            id="amount"
                            placeholder="0.0"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration (seconds)</label>
                        <input
                            type="text"
                            id="duration"
                            placeholder="3600"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md"
                    >
                        Create Stream
                    </button>
                </form>
            </div>
        </div>
    );
};

export default IncomeStreamForm;
