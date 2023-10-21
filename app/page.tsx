"use client"

import Main from "@/components/home/Main"
import Navigation from "@/components/home/Navigation"
import {useAppContext} from "@/components/AppContext"

export default function Home() {
    const {
        state: {themeMode}
    } = useAppContext()
    return (
        <div className={`${themeMode} h-full flex`}>
            <Navigation/>
            <Main/>
        </div>
    )
}
