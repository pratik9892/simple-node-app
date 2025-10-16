const express = require("express")

const app = express()

app.get("/", (req,res) => {
	return res.json({
		"status" : true,
		"message" : "All data fetched"
	})
}) 

app.listen(3000,() => {
	console.log("Server is listening on PORT 3000")
})
