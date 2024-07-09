**Registration App README**
 # Project Overview #
  This project is a simple registration form application built with Node.js, Express, Firebase, and HTML/CSS. Users can register by filling out the form, and their data is stored in Firestore.

# Technologies Used
  --Frontend: HTML, CSS
  --Backend: Node.js, Express
  --Database: Firestore (Firebase)
  --Deployment: Firebase Hosting
  
**Steps to Create the Registration App**
# Prerequisites
  --Node.js installed
  --Firebase account and project setup
  --Firebase Admin SDK service account credentials (firebaseServiceAccount.json)


## Steps to Create the Registration App
**1. Project Setup**
--Initialize the Project
    mkdir my-app
    cd my-app
    npm init -y
--Install Dependencies
npm install express firebase-admin dotenv

**2. Firebase Setup**
# Create a Firebase Project
  --Go to the Firebase Console.
  --Create a new project and configure it.
# Generate Service Account Key
  --Navigate to Project Settings > Service accounts.
  --Generate a new private key and download the JSON file.
# Set Up Firebase in Your Project
  --Move the downloaded JSON file to your project directory and rename it to firebaseServiceAccount.json.



## Installation and Setup

# 1. Clone the Repository 
       git clone <repository_url>
       cd registration-app

# 2. Install Dependencies
      npm install

# 3. Set Up Firebase
  --Create a Firebase project on the Firebase Console.
  --Add a web app to your Firebase project and obtain your Firebase config.
  --Download the firebaseServiceAccount.json from Firebase settings and place it in the project root.

## Creating Firebase Database (Firestore)
# 1. Create a Firestore Database
   --Go to the Firebase Console and select your project.
   --Navigate to "Firestore Database" from the left-hand menu.
  --Click on "Create Database" and choose the location closest to your users.

# 2. Set Up Firestore Rules (Optional)
  --Navigate to "Firestore Database" -> "Rules" tab.
   --Update rules as needed. For example :
   
        service cloud.firestore {
           match /databases/{database}/documents {
       match /users/{userId} {
       allow read, write: if request.auth.uid != null;
     }
   }
 }

## 3. Running the App Locally
 1. Configure Environment Variables
     ---Create a .env file with the following variables:
        PORT=3000

2. Start the Development Server
    npm start
The app will run locally on http://localhost:3000.



## Deployment to Firebase Hosting ##
**Prerequisites**
  -- Firebase CLI installed (npm install -g firebase-tools)
  -- Firebase project configured with hosting enabled
  
## Deployment Steps
1. Initialize Firebase
      firebase login
      firebase init
Select Firebase features to set up, including Firestore, Hosting, etc.

2. Set Up Firebase Hosting
Configure Firebase Hosting settings in firebase.json:
   {
  "hosting": {
    "public": "public",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}

3. Deploy to Firebase
   firebase deploy --only hosting
Your app will be deployed to Firebase Hosting, and you'll receive a hosting URL like https://<your-project-id>.web.app.


App Link
Visit Registration Form App to view the deployed app : https://registrationform-be3a7.web.app/

Notes
Ensure Firebase credentials (firebaseServiceAccount.json) are securely managed.
Customize and expand the app features as per your requirements.
This README provides a comprehensive guide to setting up, deploying, and understanding the Registration App project on GitHub.



