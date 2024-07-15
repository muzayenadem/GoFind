const serviceAccountPath = process.env.SERVICE_ACCOUNT_KEY;
 const fs = require('fs');
 const path = require('path');

// Check if the path is resolved correctly and the file exists
if (!fs.existsSync(serviceAccountPath)) {
  console.error('Service account key file does not exist at path:', serviceAccountPath);
  process.exit(1);
}

const serviceAccount = require(path.resolve(serviceAccountPath));
//const serviceAccount = JSON.parse(serviceAccountPath)
const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.STORAGEBUCKET
});


module.exports = admin