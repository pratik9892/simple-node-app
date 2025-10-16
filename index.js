const express = require("express")
const dotenv = require("dotenv")
dotenv.config();

const app = express()

app.get("/", (req,res) => {
	return res.json({
		"status" : true,
		"message" : "All data fetched"
	})
}) 

app.get("/home", (req,res) => {
	return res.json({
		"path" : req.path,
		"success" : true
	})
})

app.listen(process.env.PORT,() => {
	console.log(`Server is listening on PORT ${process.env.PORT}`)
})
