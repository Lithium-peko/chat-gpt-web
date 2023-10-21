import '@/styles/globals.css'
import '@/styles/markdown.css'
import type {Metadata} from 'next'
import AppContextProvider from "@/components/AppContext"
import EventBusContextProvider from "@/components/EventBusContext"

export const metadata: Metadata = {
    title: 'react-app',
    description: 'ChatGPT',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <AppContextProvider>
            <EventBusContextProvider>
                {children}
            </EventBusContextProvider>
        </AppContextProvider>
        </body>
        </html>
    )
}
