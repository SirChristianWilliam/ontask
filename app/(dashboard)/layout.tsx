import '@/styles/global.css';

import GlassPane from "@/components/GlassPane";
import Sidebar from "@/components/Sidebar";
import Greetings from '@/components/Greetings';
import { Suspense } from 'react';
import GreetingsSkeleton from '@/components/GreetingsSkeleton';

export default function DashboardRootLayout({ children }) {

    return (
        <html lang="en">
            <head />
            <body className="h-screen w-screen candy-mesh p-6">
                <GlassPane className="w-full h-full flex item-center">
                    <Suspense fallback={<GreetingsSkeleton />}>
                        <Sidebar />
                    </Suspense>
                    {children}
                </GlassPane>
            </body>
        </html>
    )
}