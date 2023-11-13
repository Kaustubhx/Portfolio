import { Metadata } from 'next'
import '../../globals.css'

export const metadata: Metadata = {
    title: "Kaustubh's Portfolio",
    description: 'Welcome to Next.js',
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
        </div>
    )
}