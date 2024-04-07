import express, { Request, Response } from 'express'
import { createServer } from 'http'
import dotenv from 'dotenv'
import { Server } from "socket.io";
import { v4 as uuid } from 'uuid'
import { createRoom, joinRoom, roomData } from './lib/data';




dotenv.config()
const PORT = process.env.PORT || 5000
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000"


const app = express()
const httpServer = createServer()

const io = new Server(httpServer, {
	cors: {
		origin: CLIENT_URL
	}
})


app.get('/', (req: Request, res: Response) => {
	res.json("Hello world")
})


app.get('/users', (req: Request, res: Response) => {
})


httpServer.listen(PORT, () => {
	console.log(`Server listening on ${PORT} Port`)
})




// to do set up disconect + add room and authentication
io.on("connection", (socket) => {



	socket.on("join:room", (data: { roomId: string, name: string }) => {


		const response = joinRoom({ roomId: data.roomId, data: { name: data.name, socketId: socket.id } })

		console.log(roomData)

		if (response?.success) {
			socket.join(data.roomId)
		}





		socket.emit("join:room:response", response)

	})



	socket.on("get-init-code", (data: { roomId: string }) => {

		// if first candidate no code 

		console.log(typeof data)
		console.log(data)
		console.log(data.roomId)
		console.log(roomData.get(data.roomId))
		console.log(roomData)

		if (roomData.has(data.roomId)) {

			const arr = roomData.get(data.roomId)
			console.log(arr?.length, 'length of array')

			if (arr && arr.length > 1) {



				console.log('asking for init code ')
				// ask first member for the code response 
				const firstMember = arr[0].socketId
				io.to(firstMember).emit('init-code', "", (code: string) => {

					console.log("recevide init code")
					socket.emit("get-init-code:response", code)

				})


			}


		}



	})




	// emit 
	socket.on("create:room", (data: { name: string }) => {

		const roomId = uuid()
		const response = createRoom({ roomId, data: { name: data.name, socketId: socket.id } })

		console.log(roomData)

		if (response.success) {
			socket.join(roomId)
		}

		// listen
		socket.emit("create:room:response", response)

	})


	socket.on("server:code", (data: { diffs: any, roomId: string }) => {


		if (roomData.has(data.roomId)) {

			console.log(data.diffs)
			socket.to(data.roomId).emit("client:code", { diffs: data.diffs })
		}

	})


	socket.on("disconnect", () => {
		console.log("someone disconectted ")
	})


})