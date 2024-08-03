const { MongoClient } = require('mongodb');

const uri ="mongodb+srv://2100030338:1234@cluster0.zksgb1v.mongodb.net/ecommercemern?retryWrites=true&w=majority&appName=Cluster0" 

async function mongoDB() {
  const client = new MongoClient(uri , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 20000, // Increase timeout to 20 seconds
    socketTimeoutMS: 45000, // Increase socket timeout
  });

  try {
    await client.connect();
    console.log('Connected to database!');
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

module.exports = mongoDB;


// // const { MongoClient } = require('mongodb');
// const mongoose=require('mongoose')
// const mongoURI ="mongodb://2100030338:1234@ac-drdhbt5-shard-00-00.zksgb1v.mongodb.net:27017,ac-drdhbt5-shard-00-01.zksgb1v.mongodb.net:27017,ac-drdhbt5-shard-00-02.zksgb1v.mongodb.net:27017/2100030338?ssl=true&replicaSet=atlas-tq9nr4-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0" 
// const mongoDB=async()=>{
// await mongoose.connect(mongoURI,{userNewUrlParser:true},async(err,result)=>{

//   if(err) console.log("---",err)
//     else{
//   console.log("connected");
// const fetched_data=await mongoose.connection.db.collection("product_items");
// fetched_data.find({}).toArray(function(err,data){
//   if(err) console.log(err);
//   else console.log();
// })
// }
// })
// }


// async function mongoDB() {
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();
//     console.log('Connected to database!');
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// }

// module.exports = mongoDB;

