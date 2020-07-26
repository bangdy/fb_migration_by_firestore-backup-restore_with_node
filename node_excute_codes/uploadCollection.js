const firestoreService = require("firestore-export-import");
const serviceAccount = require("../configs/serviceAccount.json");
const firebaseConfig = require("../configs/firebase_config");

//args[0] -> json 파일명 (without .json)

const options = {
  dates: [
    "createdAt",
    "phases.ready.createdAt",
    "phases.gathering.createdAt",
    "phases.gathering.room.dateDeadline"
  ],
  geos: [],
  refs: [],
  nested: true
};

const uploadCollection = () => {
  var args = process.argv.slice(2);
  console.log("start");
  firestoreService.initializeApp(serviceAccount, "https://codeduo-s-byr.firebaseio.com");
  firestoreService
    .restore("../jsonData/" + args[0] + ".json", options)
    .then(() => {
      console.log("finished");
    })
    .catch((error) => {
      console.log(error);
    });
};

uploadCollection();
