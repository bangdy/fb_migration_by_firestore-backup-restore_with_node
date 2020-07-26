const firestoreService = require("firestore-export-import");
const serviceAccount = require("../configs/serviceAccount.json");
const firebaseConfig = require("../configs/firebase_config");

//args[0] -> firestore collection 이름 // matching 되지 않으면 error 출력
//args[1] -> json 파일명 (.json  없이 입력)
const downloadCollection = () => {
  var args = process.argv.slice(2);
  console.log("start");

  firestoreService.initializeApp(serviceAccount, firebaseConfig.databaseURL);
  firestoreService
    .backup(args[0])
    .then((data) => {
      console.log(data);
      const jsonString = JSON.stringify(data);
      var fs = require("fs");
      fs.writeFile("../jsonData/" + args[1] + ".json", jsonString, (err) => {
        if (err) throw err;
      });
      console.log("finished");
    })
    .catch((error) => {
      console.log("probably, no matched collection name");
      console.log(error);
    });
};

downloadCollection();
