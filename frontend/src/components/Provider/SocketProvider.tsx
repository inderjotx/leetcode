"use client"

import { useContext, createContext, useState, useEffect, useCallback } from 'react'
import { socket } from '@/lib/socket'
import { Diffs, getCodeDiffs, getUpdatedCode } from '@/lib/code'
import { toast } from 'sonner'


const NAME = "pandu"

const SocketContext = createContext<null | { code: string, createRoom: () => void, joinRoom: (roomId: string) => void, setCode: (code: string) => void }>(null)


export function useSocket() {
    const data = useContext(SocketContext)

    if (!data) {
        throw new Error("Error Initialzaing connnection with the server")
    }


    return data

}



export function SocketProvider({ children }: { children: React.ReactNode }) {


    const [code, setCode] = useState<string>("")
    const [prevCode, setPrevCode] = useState<string>("")
    // let prevCode = ""
    const [roomId, setRoomId] = useState<string>("")




    // function setCode(newCode: string) {


    //     // const prev = code

    //     // console.log('prev code')
    //     // console.log(prev)


    //     // console.log(newCode)

    //     // setPrevCode(() => prev)
    //     updateCode(() => newCode)

    // }

    const joinRoom = useCallback((roomId: string) => {
        socket.emit('join:room', { roomId, name: NAME })
    }, [])



    const createRoom = useCallback(() => {
        socket.emit('create:room', { name: NAME })
    }, [])




    useEffect(() => {

        function onConnect() {
            console.log("connected from the socket")
        }

        function onDisconnect() {
            console.log("disconnect from the socket")
        }

        function onCode({ diffs }: { diffs: Diffs }) {

            console.log('some one is senidng cod kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
            const updatedCode = getUpdatedCode({ diffs, initialCode: code })
            console.log(updatedCode + " After applying diffs")
            setCode(updatedCode)

        }


        function onRoomJoin({ success, error, roomId }: { success: boolean, error: any, roomId: string }) {

            if (success) {


                toast.success("Joined Room")
                setRoomId(() => roomId)
                console.log('asking for init code ')
                socket.emit("get-init-code", { roomId: roomId })

            }

            else {
                console.log(error)
                toast.error("Error Joining Room")
            }
        }



        function onRoomCreate({ success, error, roomId }: { success: boolean, error: any, roomId: string | undefined }) {

            if (success && roomId) {
                toast.success(" Room Created")
                setRoomId(roomId)
            }

            else {
                console.log(error)
                toast.error("Error Creating Room")
            }
        }

        function onInitCode(_: string, callback: (code: string) => {}) {

            // sending current 
            console.log('sending current code')
            toast.message('seding code to someone')
            console.log(code)
            callback(code)
        }


        function onInitCodeReturn(diffs: any) {

            console.log("get init code from the server" + diffs)
            toast.message('recevied code from someone')
            const updateCode = getUpdatedCode({ diffs, initialCode: code })
            setCode(updateCode)
        }


        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('client:code', onCode);
        socket.on('join:room:response', onRoomJoin)
        socket.on('create:room:response', onRoomCreate)
        socket.on('init-code', onInitCode)
        socket.on('get-init-code:response', onInitCodeReturn)


        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('client:code', onCode);
            socket.off('join:room:response', onRoomJoin)
            socket.off('create:room:response', onRoomCreate)
            socket.off('init-code', onInitCode)
            socket.off('get-init-code:response', onInitCodeReturn)
        };

    }, []);


    useEffect(() => {

        if (roomId != "") {

            const diffs = getCodeDiffs({ initalCode: prevCode, updatedCode: code })
            setPrevCode(code)
            console.log('sending diffs bye')
            console.log(prevCode)
            socket.emit("server:code", { diffs: diffs, roomId })

        }

    }, [code, roomId])


    return (
        <SocketContext.Provider value={{ code, setCode, joinRoom, createRoom }} >
            {children}
        </SocketContext.Provider>
    )
}