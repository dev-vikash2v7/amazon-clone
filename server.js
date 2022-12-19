import express from 'express'
import Cors from 'cors'
import router  from  "./api/routing.js";
import mongoose from 'mongoose'
import Pusher from 'pusher';

//app config 
const app = express() 
const port = process.env.PORT || 8000

// middlewares
app.use(express.json()) ;
app.use(Cors())
app.use( (req , res , next) => {
    res.setHeader("Access-Control-Allow-Origin" , "*")
    res.setHeader("Access-Control-Allow-Headers"  , "*")
    next();
})

const pwd = '123'
const username = 'vikash'
const connection_url = `mongodb+srv://${username}:${pwd}@cluster0.a193rxb.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery', true);

//DB config
mongoose.connect(connection_url , { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    })

mongoose.connection.once("open" ,  () => {
    console.log('instagram-db connected')
})


    const pusher = new Pusher({
        appId: "1523176",
        key: "5c6cbd3c8e04e0fdbc07",
        secret: "d3210956e1cf4c683869",
        cluster: "ap2",
        useTLS: true
      });
      
      pusher.trigger("my-channel", "my-event", {
        message: "hello world"
      });

// api config
app.use("/", router);


//listen
app.listen(port , () => console.log(`listening  http://127.0.0.1:${port}`))

// Export the Express API
export default app;