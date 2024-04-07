// name  , socketId 

type userData = { socketId: string, name: string }

export const roomData: Map<string, userData[]> = new Map()

// create decorator
export function createRoom({ roomId, data }: { roomId: string, data: userData }) {

    try {
        roomData.set(roomId, [data])

        return {
            success: true,
            roomId: roomId
        }
    }

    catch (e) {
        if (e instanceof Error) {
            return {
                success: false,
                error: e.message
            }
        }
        return {
            success: false,
            error: "Error Creating Room"
        }
    }

}


export function joinRoom({ roomId, data }: { roomId: string, data: userData }) {

    try {

        if (roomData.has(roomId)) {

            const arr = roomData.get(roomId)


            if (arr && !arr.find((val) => val.socketId === data.socketId)) {

                arr?.push(data)
                roomData.set(roomId, arr!)

                return {
                    success: true,
                    error: null,
                    roomId: roomId

                }


            }

        }

        else {
            return {
                success: false,
                error: "No such room exist"
            }

        }

    }

    catch (e) {
        if (e instanceof Error) {
            return {
                success: false,
                error: e.message
            }
        }
        return {
            success: false,
            error: "Error Creating Room"
        }
    }
}


