"use client"

import { useContext, createContext, useState, useEffect, SetStateAction, Dispatch } from 'react'
import { socket } from '@/lib/socket'


const SocketContext = createContext<null | { code: string, setCode: Dispatch<SetStateAction<string>> }>(null)


export function useSocket() {
    const data = useContext(SocketContext)

    if (!data) {
        throw new Error("Error Initialzaing connnection with the server")
    }


    return data

}



export function SocketProvider({ children }: { children: React.ReactNode }) {


    const [code, setCode] = useState<string>("")

    useEffect(() => {

        function onConnect() {
            console.log("connected from the socket")
        }

        function onDisconnect() {
            console.log("disconnect from the socket")
        }

        function onCode(data: { code: string }) {
            console.log(`Received code from the backend ${data.code}`)
            setCode(data.code)
        }

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('client:code', onCode);

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('client:code', onCode);
        };

    }, []);


    useEffect(() => {

        socket.emit("server:code", { code })

    }, [code])


    return (
        <SocketContext.Provider value={{ code, setCode }} >
            {children}
        </SocketContext.Provider>
    )
}