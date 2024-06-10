import { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
    title: "Kaustubh's Portfolio",
    description: 'Welcome to Next.js',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}