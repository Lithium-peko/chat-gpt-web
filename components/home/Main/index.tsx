'use client'

import Menu from "@/components/home/Main/Menu"
import ChatInput from "@/components/home/Main/ChatInput"
import MessageList from "@/components/home/Main/MessageList"
import Welcome from "@/components/home/Main/Welcome"
import {useAppContext} from "@/components/AppContext"

export default function Main() {
    const {state: {selectedChat}} = useAppContext()
    return (
        <div className='flex-1 relative'>
            <main
                className='overflow-y-auto w-full h-full bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100'>
                <Menu/>
                {!selectedChat && <Welcome/>}
                <MessageList/>
                <ChatInput/>
            </main>
        </div>
    )
}
