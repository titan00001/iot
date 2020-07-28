const mongoose = require('mongoose');


mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, 
useUnifiedTopology: true,
useFindAndModify: false}).catch(function (reason) {
  console.log('Unable to connect to the mongodb instance. Error: ', reason);
})

// database
// machine post request

const SessionSchema = new mongoose.Schema({

  state: {
    type: String,
    required: true,
  },

  alert: {
    type: String,
    required: true,
  },

  reason: {
    type: String,
    default: "Reason not specified"
  },

  time: {
    type: Date,
    default: Date.now()
  }
});

const sessionModel = mongoose.model("Session", SessionSchema);


module.exports = sessionModel;


// module.exports = 
// [
//     {
//       "_id": "5f1f02a3f9607077b8604b57",
//       "state": "brown",
//       "alert": "Reba",
//       "reason": "Sandoval",
//       "time": 28
//     },
//     {
//       "_id": "5f1f02a356891b0cda8ffb0c",
//       "state": "green",
//       "alert": "Terry",
//       "reason": "Madden",
//       "time": 30
//     },
//     {
//       "_id": "5f1f02a3205a468e209b1fc8",
//       "state": "brown",
//       "alert": "Bowers",
//       "reason": "Daniel",
//       "time": 31
//     },
//     {
//       "_id": "5f1f02a350e22c7320fa33ea",
//       "state": "green",
//       "alert": "Loraine",
//       "reason": "Penny",
//       "time": 37
//     },
//     {
//       "_id": "5f1f02a3a2197bb7a50a80f5",
//       "state": "brown",
//       "alert": "Lessie",
//       "reason": "Blackburn",
//       "time": 31
//     }
//   ];