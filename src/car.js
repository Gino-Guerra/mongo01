import { db } from "./connectDb.js"
import { ObjectId } from "mongodb"

const carDb = db.collection('car')

const theCar = {
brand :'jeep',
carColor:'red',
model:'wrangler',
size:'sedan'
}

export async function addCar(){
    const carAdded = await carDb.insertOne(theCar)
    console.log(carAdded)
}

export async function getAllCar(){
    const carList = await carDb.find({}).toArray();
    console.table(carList)
}

export async function deleteCar(){
const myId = new ObjectId('652858f401c1e213068a414e')
    const carDeleted = await carDb.findOneAndDelete({_id: myId })
console.log('car deleted ->', carDeleted)
}

export async function updateCar(){
    const myID = new ObjectId('652858e994bcd669dd3247cf')
const atributetoUpdate = {carColor: 'black'}
const carUpdated = await carDb.findOneAndUpdate({_id:myID}, {$set:atributetoUpdate})
console.log("car updated ->", carUpdated)
}
