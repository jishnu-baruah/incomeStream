import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Activity, Plus, History, ChevronRight } from 'lucide-react';
import PaymentForm from './PaymentForm';
import ActivePayments from './ActivePayments';
import PaymentHistory from './PaymentHistory';
const PaymentTabs = () => {
    const tabVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            y: -10,
            transition: { duration: 0.2 }
        }
    };

    return (
        <div className="w-full mt-8">
            <Tabs defaultValue="create" className="relative space-y-6">
                <div className="relative">
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-blue-500/10 blur-2xl" />

                    <TabsList className="relative flex w-full items-center bg-black/40 backdrop-blur-xl rounded-xl p-1.5 border border-gray-800/50 shadow-xl shadow-black/20">
                        {['create', 'active', 'history'].map((tab) => (
                            <TabsTrigger
                                key={tab}
                                value={tab}
                                className="group relative flex-1 flex items-center justify-center px-4 py-3 text-sm font-medium transition-all duration-300"
                            >
                                {/* Common hover effect for all tabs */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg opacity-0 group-hover:opacity-100"
                                    transition={{ duration: 0.2 }}
                                />

                                {/* Common active state for all tabs */}
                                <motion.div
                                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-data-[state=active]:opacity-100 border border-blue-500/20"
                                    transition={{ duration: 0.2 }}
                                />

                                <span className="relative z-10 flex items-center gap-2 text-gray-400 group-hover:text-white group-data-[state=active]:text-blue-400 transition-colors duration-300">
                                    {tab === 'create' && <Plus className="w-4 h-4" />}
                                    {tab === 'active' && <Activity className="w-4 h-4" />}
                                    {tab === 'history' && <History className="w-4 h-4" />}
                                    {tab === 'create' && 'Create Payment'}
                                    {tab === 'active' && (
                                        <>
                                            Active Payments
                                            <span className="ml-2 flex items-center justify-center min-w-[20px] h-5 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 px-1.5 group-data-[state=active]:bg-blue-500/20 group-data-[state=active]:border-blue-400/30">
                                                3
                                            </span>
                                        </>
                                    )}
                                    {tab === 'history' && 'Payment History'}
                                </span>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                <AnimatePresence mode="wait">
                    <TabsContent value="create" className="relative">
                        <motion.div
                            variants={tabVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="relative rounded-xl border border-gray-800/50 bg-black/40 backdrop-blur-xl p-6 shadow-xl shadow-black/20"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-xl" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-6">
                                    <h2 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                        Create New Payment
                                    </h2>
                                    <ChevronRight className="w-5 h-5 text-gray-600" />
                                </div>
                                <PaymentForm />
                            </div>
                        </motion.div>
                    </TabsContent>
                </AnimatePresence>
            </Tabs>
        </div>
    );
};

export default PaymentTabs;