import express, { Request, Response } from 'express'
import { createServer } from 'http'
import dotenv from 'dotenv'
import { Server } from "socket.io";


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

	socket.on("server:code", (data) => {
		console.log(data)
		io.emit("client:code", { data })
	})


	socket.on("disconnect", () => {
		console.log("someone disconectted ")
	})

})
