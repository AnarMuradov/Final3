import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
const { Schema } = mongoose;

const app = express()
const port = 3001

app.use(express.json())
app.use(cors())


const flowerSchema = new Schema({
    img:String,
    name:String, 
    price:Number
});
const flowerModel = mongoose.model('Flower', flowerSchema);

   
app.get('/', async (req, res) => {
    const flowers = await flowerModel.find()
    res.send(flowers)
  })
 
  app.get('/:id', async (req, res) => {
    const {id} = req.params
    const flowers = await flowerModel.findById(id)
    res.send(flowers)
  })
  
  app.post('/', async (req, res) => {
    const {img,name,price} = req.body
    const newFlowers = new flowerModel({img,name,price} )
    await newFlowers.save()
    res.send(newFlowers)
  })
  
  app.put('/:id', async (req, res) => {
    const {id} = req.params
    const {img,name,price} = req.body
    const flowers = await flowerModel.findByIdAndUpdate(id,{img,name,price} )
    res.send(flowers)
    })
  
  app.delete('/:id', async (req, res) => {
    const {id} = req.params
    const flowers = await flowerModel.findByIdAndDelete(id)
    res.send('Got a DELETE request at /user')
  })


  mongoose.connect('mongodb+srv://anar:anar@cluster0.aeurkzy.mongodb.net/')
  .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 