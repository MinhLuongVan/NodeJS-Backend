const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const userRouter = require("./router/user.router.js")

//  Middleware
app.use(cors())
app.use(express.json())

const connectDB = async () => {
   try{
    await mongoose.connect("mongodb://localhost:27017/Hung-project")
    console.log("Ket noi Database thanh cong !!!!")

   } catch(error) {
    console.log(error)
   }
}

connectDB()

app.use("/user", userRouter)

const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`)
})