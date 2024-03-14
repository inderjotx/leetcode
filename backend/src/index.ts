import express from 'express'
const app = express()
app.use(express.json())


app.post('/code', (req, res) => {
	const data = req.body
	console.log(data.code)

	// start kuberetnes pod and send code to it 
	res.send('data ')

})


app.listen(5000, () => {
	console.log("App is liseting on port 5000")
})
