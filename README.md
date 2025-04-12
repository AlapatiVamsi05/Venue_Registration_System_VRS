# Venue Registration System (VRS)

Welcome to the Venue Registration System!  
The Venue Registration System (VRS) is a platform where you can find the perfect venues for your events based on your preferences.

## 🎉 What is the Venue Registration System?

**Venue Registration System** is a field project designed to help you find the most suitable venues for your events with just a simple form submission!

No more wasting time on manual searches — we’ve already done the hard work for you.  
No need to sign in to suspicious websites or subscribe to access venue details.  

Just fill in your preferences, and we’ll instantly show you the venues that match your needs.

---

## 🛠️ Software Requirements

To use VRS on your system, make sure you have the following:

1. **MongoDB Compass**
2. **Node.js**
3. A web browser (preferably **Google Chrome**)

---

## 📂 Setting Up VRS on Your System

1. Create a folder to store the VRS project.
2. Inside this folder, save:
   - `assets/` folder
   - `frontend/` folder
   - `backend/server.js` (create a `backend` folder and place `server.js` inside it)
3. In MongoDB Compass:
   - Create a **connection** named `venues`.
   - Under this connection, create **three databases**:
     - `vTenali1`
     - `vGuntur1`
     - `vVijaya1`
   - For each database, create a **collection** with the same name.
4. Import the relevant JSON files (from the `mongodbcollections` folder) into their respective collections.

---

## ▶️ Running VRS

1. Install the following Node.js packages (run this command inside your project folder):

   ```bash
   npm install express mongodb cors

2. After installation, a node_modules folder will be created automatically. Make sure this folder is in the same directory as your server.js file (typically the backend folder).
3. Open a terminal or command prompt in the project folder.
4. Run the server with:

   ```bash
   node backend/server.js
   ```

5. Ensure MongoDB is running in the background. You can start it with:

   ```bash
   net start mongodb
   ```
   Execute in cmd while running it as a administrator.

6. Navigate to the `frontend/homepage.html` in your browser to start using the system.
7. Confirm that the MongoDB connection string in **server.js** matches your Compass connection string.  
   By default, it should be:

   ```
   mongodb://localhost:27017/
   ```
      
---

## 💡 How to Use VRS

1. Click the **"Get Venues Now!"** option in the navigation bar.
2. Fill out the event details in the form to see suitable venues.
3. Login to save your venue preferences.
4. You can view the saved data in your browser’s `localStorage`.
5. You can also view user login credentials in the **`venues.users`** collection in MongoDB.

We’ve deployed a mini version of the Venue Registration System!  
Just click the link below to start using it:

🔗 [Mini Version](https://alapativamsi05.github.io/VenueRegistrationSystem1/)

There's also a live version of this project, but currently it only works when one of the development team is running the server:

🔗 [Live Version](https://alapativamsi05.github.io/Venue_Registration_System_VRS/)

The server's dev tunnel link is:

🔗 [Dev Tunnel link](https://spsmkpn4-5500.inc1.devtunnels.ms/)

---

## 👥 Project Contributors

This project was proudly created and maintained by:

- [AlapatiVamsi05](https://github.com/AlapatiVamsi05) 
- [LakshmiSatvikaSuggula](https://github.com/LakshmiSatvikaSuggula)
- [RenukaDevi](https://github.com/renukadevikota23)
- [NamrathaKrishna](https://github.com/username) 

We worked together to build a simple, effective, and user-friendly venue registration system.  
Feel free to explore, use, and contribute!
Enjoy using the VRS and host your events at the perfect venues.
Enjoy using VRS and host your events at the perfect venue!


