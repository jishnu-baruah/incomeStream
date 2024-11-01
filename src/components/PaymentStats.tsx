import React from 'react';
import { Card } from '@/components/ui/card';
import { Activity, Lock, Clock } from 'lucide-react';

const PaymentStats = () => {
    const stats = [
        {
            title: "Active Streams",
            value: "12",
            description: "Current payment streams",
            icon: <Activity className="w-4 h-4" />,
            trend: "+2.5%"
        },
        {
            title: "Total Value Locked",
            value: "$45,230",
            description: "Across all chains",
            icon: <Lock className="w-4 h-4" />,
            trend: "+5.2%"
        },
        {
            title: "Pending Milestones",
            value: "8",
            description: "Awaiting completion",
            icon: <Clock className="w-4 h-4" />,
            trend: "-1.3%"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
                <Card
                    key={stat.title}
                    className="relative overflow-hidden bg-black/40 border border-gray-800 backdrop-blur-sm p-6 transition-all duration-300 hover:border-blue-500/30 group"
                    style={{
                        animationDelay: `${index * 150}ms`
                    }}
                >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Glow effect */}
                    <div className="absolute -inset-px bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                    <div className="relative">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-400 text-sm font-medium flex items-center gap-2">
                                {stat.icon}
                                {stat.title}
                            </span>
                            <span className={`text-xs font-medium ${stat.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'
                                }`}>
                                {stat.trend}
                            </span>
                        </div>

                        {/* Value */}
                        <div className="mb-2">
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                {stat.value}
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-500">
                            {stat.description}
                        </p>
                    </div>

                    {/* Bottom border gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
                </Card>
            ))}
        </div>
    );
};

export default PaymentStats;