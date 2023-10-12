import { db } from "./connectDb"
import { ObjectId } from "mongodb"

const carDb = db.collection('car')

const theCar = {
brand :'toyota',
carColor:'black',
model:'prius',
size:'sedan'
}

export async function addCar(){
    const carAdded = await carDb.collection('car').insertOne(theCar)
    console.log(carAdded)
}

export async function getAllCar(){
    const carList = await carDb.collection('car').find({}).toArray();
    console.table(carList)
}
