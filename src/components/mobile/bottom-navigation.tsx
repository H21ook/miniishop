"use client";

import { Box, Home, ShoppingBag, User } from 'lucide-react';

interface BottomNavProps {
    activeTab: string;
}

function BottomNav({ activeTab }: BottomNavProps) {
    const tabs = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'inventory', label: 'Inventory', icon: Box },
        { id: 'purchasing', label: 'Purchasing', icon: ShoppingBag },
        { id: 'account', label: 'Account', icon: User },
    ];

    return (
        <div className="w-full bg-background border-t">
            <div className="flex items-center justify-around px-4 py-3">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`flex flex-col items-center gap-1 ${activeTab === tab.id ? 'text-primary' : 'text-muted-foreground'
                            }`}
                    >
                        <tab.icon className="w-6 h-6" strokeWidth={1.5} />
                        <span className="text-xs">{tab.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default BottomNav;