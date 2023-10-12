import { db } from "./connectDb.js";
import { ObjectId } from "mongodb";
const dishDb = db.collection('fish')

const theFish = {
    species: 'catfish',
    origin: 'louisanna',
    color: 'black',
    size: '35"',
    familiy: {
    dad: "🐠", 
    sister:"🍣", 
    mom:{cool:true, special: undefined},
    broters: ['🐢', '🐶'] 
}
}

//add a fish
export async function addAFish(){
 const fishAdded = await db.collection('fish').insertOne(theFish)
console.log(fishAdded)
}

export async function getAllFish(){
   const fishList = await db.collection('fish').find({}).toArray();
   console.table(fishList)
}

export async function deleteAFish(){
    
   const myID = new ObjectId('65281dce9f379c02d4fe57f5')
    const fishDeleted = await db.collection('fish').findOneAndDelete({_id: myID })
    console.log('fishDeleted ->', fishDeleted)

}



export async function updateFish(){
const cleanId = new ObjectId('65283e4a5256a55b4940dbdb')
    const dataToUpdate = {color: 'green' }

const fishUpdated = await db.collection('fish').findOneAndUpdate({_id: cleanId}, {$set:dataToUpdate})
console.log('fish updated ->',fishUpdated )
}