const express = require('express');
const admin = require('firebase-admin');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');

dotenv.config();

// Initialize Firebase Admin SDK
const serviceAccount = require( './firebaseServiceAccount.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML form)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const db = admin.firestore();

app.post('/register', async (req, res) => {
  const { fullName, username, email, password, message } = req.body;

  try {
    // Store user details in Firestore
    const userRef = db.collection('users').doc();
    await userRef.set({
      fullName,
      username,
      email,
      password,
      message,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(400).send(`Error registering user: ${error.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
