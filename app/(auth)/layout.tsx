import '@/styles/global.css';
import GlassPane from "@/components/GlassPane";


export default function AuthRootLayout({ children }) {

    return (
        <html lang="en">
            <head />
            <body className="h-screen w-screen rainbow-mesh p-6">
                <GlassPane className="w-full h-full flex item-center justify-center">
                    {children}
                </GlassPane>

            </body>
        </html>
    )
}