import React, { useState } from 'react';
import { Trash2, GripVertical } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Card } from '@/components/ui/card';

const PaymentForm = () => {
    const [milestones, setMilestones] = useState([
        { description: "", deadline: "", amount: "" }
    ]);

    const addMilestone = () => {
        setMilestones([...milestones, { description: "", deadline: "", amount: "" }]);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-6">
            <Card className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-lg border border-gray-700 shadow-2xl rounded-xl">
                <form className="p-6 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">
                                Recipient Wallet Address
                            </label>
                            <Input
                                placeholder="0x..."
                                className="bg-gray-900/50 border-gray-700 text-gray-100 placeholder:text-gray-500
                          focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">
                                Total Amount
                            </label>
                            <div className="relative">
                                <Input
                                    type="number"
                                    placeholder="0.00"
                                    className="bg-gray-900/50 border-gray-700 text-gray-100 placeholder:text-gray-500
                            focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200 pr-16"
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    USDC
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-200">
                                Payment Milestones
                            </h3>
                            <Button
                                onClick={addMilestone}
                                className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
                            >
                                Add Milestone
                            </Button>
                        </div>

                        <div className="space-y-4">
                            {milestones.map((milestone, index) => (
                                <Card key={index} className="group bg-gray-900/30 border-gray-700 hover:border-gray-600 
                                          transition-all duration-300 ease-in-out">
                                    <div className="p-4 relative">
                                        <div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 
                                  transition-opacity duration-200">
                                            <GripVertical className="h-5 w-5 text-gray-500" />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 pl-8">
                                            <div className="md:col-span-2">
                                                <label className="text-sm text-gray-400 block mb-1">Description</label>
                                                <Input
                                                    placeholder="Milestone description"
                                                    className="bg-gray-800/50 border-gray-700 text-gray-100 
                                   focus:border-blue-500 focus:ring-blue-500/20"
                                                />
                                            </div>

                                            <div className="md:col-span-1">
                                                <label className="text-sm text-gray-400 block mb-1">Deadline</label>
                                                <Input
                                                    type="datetime-local"
                                                    className="bg-gray-800/50 border-gray-700 text-gray-100 
                                   focus:border-blue-500 focus:ring-blue-500/20"
                                                />
                                            </div>

                                            <div className="md:col-span-1">
                                                <label className="text-sm text-gray-400 block mb-1">Amount</label>
                                                <Input
                                                    type="number"
                                                    placeholder="0.00"
                                                    className="bg-gray-800/50 border-gray-700 text-gray-100 
                                   focus:border-blue-500 focus:ring-blue-500/20"
                                                />
                                            </div>

                                            <div className="md:col-span-1">
                                                <label className="text-sm text-gray-400 block mb-1">Verification</label>
                                                <Select>
                                                    <SelectTrigger className="bg-gray-800/50 border-gray-700 text-gray-100">
                                                        <SelectValue placeholder="Select" />
                                                    </SelectTrigger>
                                                    <SelectContent className="bg-gray-800 border-gray-700">
                                                        <SelectItem value="required">Required</SelectItem>
                                                        <SelectItem value="optional">Optional</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div className="md:col-span-1 flex items-end justify-end">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                                                >
                                                    <Trash2 className="h-5 w-5" />
                                                </Button>
                                            </div>
                                        </div>

                                        <div className="h-1 w-full bg-gray-800 rounded-full mt-4 overflow-hidden">
                                            <div
                                                className="h-full bg-blue-600 transition-all duration-300"
                                                style={{
                                                    width: '30%'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6
                     transform hover:scale-[1.02] transition-all duration-200"
                    >
                        Create Payment Stream
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default PaymentForm;