import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Plus, Loader2 } from 'lucide-react';

interface Milestone {
    description: string;
    deadline: string;
    amount: string;
}

const NetworkSelect = () => (
    <select className="bg-gray-900 border border-gray-700 rounded-lg p-2 w-full text-gray-300 focus:ring-2 focus:ring-blue-500 transition-all">
        <option value="ethereum">Ethereum</option>
        <option value="polygon">Polygon</option>
        <option value="arbitrum">Arbitrum</option>
    </select>
);

const TokenSelect = () => (
    <select className="bg-gray-900 border border-gray-700 rounded-lg p-2 w-full text-gray-300 focus:ring-2 focus:ring-blue-500 transition-all">
        <option value="eth">ETH</option>
        <option value="usdc">USDC</option>
        <option value="usdt">USDT</option>
    </select>
);

const MilestoneInput = ({ milestone, onChange }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-3 gap-4 p-4 bg-gray-800/50 rounded-lg mt-4"
    >
        <Input
            placeholder="Description"
            value={milestone.description}
            onChange={(e) => onChange({ ...milestone, description: e.target.value })}
            className="bg-gray-900 border-gray-700 text-gray-300"
        />
        <Input
            type="date"
            value={milestone.deadline}
            onChange={(e) => onChange({ ...milestone, deadline: e.target.value })}
            className="bg-gray-900 border-gray-700 text-gray-300"
        />
        <Input
            type="number"
            placeholder="Amount"
            value={milestone.amount}
            onChange={(e) => onChange({ ...milestone, amount: e.target.value })}
            className="bg-gray-900 border-gray-700 text-gray-300"
        />
    </motion.div>
);

const PaymentForm: React.FC = () => {
    const [milestones, setMilestones] = useState<Milestone[]>([
        { description: "", deadline: "", amount: "" }
    ]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const addMilestone = () => {
        setMilestones([...milestones, { description: "", deadline: "", amount: "" }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate transaction
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8 text-gray-100">
            <Card className="max-w-2xl mx-auto bg-gray-900/50 backdrop-blur-lg border-gray-700">
                <form onSubmit={handleSubmit} className="p-6 space-y-8">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Recipient Wallet Address</label>
                            <Input
                                placeholder="0x..."
                                className="bg-gray-800 border-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Network</label>
                            <NetworkSelect />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Token</label>
                            <TokenSelect />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Total Amount</label>
                            <Input
                                type="number"
                                placeholder="0.00"
                                className="bg-gray-800 border-gray-700 text-gray-300"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-gray-300">Payment Milestones (Optional)</label>
                            <Button
                                type="button"
                                onClick={addMilestone}
                                variant="outline"
                                className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border-blue-500/50"
                            >
                                <Plus className="w-4 h-4 mr-2" />
                                Add Milestone
                            </Button>
                        </div>

                        <motion.div layout className="space-y-4">
                            {milestones.map((milestone, index) => (
                                <MilestoneInput
                                    key={index}
                                    milestone={milestone}
                                    onChange={(updatedMilestone) => {
                                        const newMilestones = [...milestones];
                                        newMilestones[index] = updatedMilestone;
                                        setMilestones(newMilestones);
                                    }}
                                />
                            ))}
                        </motion.div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200 flex items-center justify-center space-x-2"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                <span>Processing...</span>
                            </>
                        ) : (
                            <span>Create Payment Stream</span>
                        )}
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default PaymentForm;