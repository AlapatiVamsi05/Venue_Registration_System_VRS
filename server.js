const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 5500;
const MONGO_URI = "mongodb://localhost:27017/";

app.use(cors());
app.use(express.json());

let client;

async function connectDB() {
    client = new MongoClient(MONGO_URI);
    await client.connect();
    console.log("Connected to MongoDB.");
}
connectDB();
const usersCollection = () => client.db("users").collection("users");

app.post("/storeUser", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ error: "Missing user details" });
        }

        await usersCollection().updateOne(
            { email },
            { $set: { username, email, password } },
            { upsert: true }
        );

        res.json({ message: "User info stored successfully." });
    } catch (err) {
        console.error("Error storing user info:", err);
        res.status(500).json({ error: "Database error" });
    }
});

const DATABASES = {
    tenali: { db: "vTenali1", collection: "vTenali1" },
    guntur: { db: "vGuntur1", collection: "vGuntur1" },
    vijayawada: { db: "vVijaya1", collection: "vVijaya1" }
};

function getDBAndCollection(event_location) {
    const key = event_location.toLowerCase();
    if (!DATABASES[key]) {
        throw new Error(`Invalid event location: ${event_location}`);
    }
    return client.db(DATABASES[key].db).collection(DATABASES[key].collection);
}

app.post("/findVenues", async (req, res) => {
    console.log("Received request:", req.body);

    const { user_name, user_email, event_type, event_location, expected_guests } = req.body;

    if (!event_type || !event_location || !expected_guests) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        const venuesCollection = getDBAndCollection(event_location);
        const filteredVenues = await venuesCollection.find({
            place: { $regex: new RegExp(`^${event_location}$`, "i") },
            capacity: { $gte: expected_guests },
            event_type: { $in: [event_type] }
        }).toArray();

        console.log("Filtered venues:", filteredVenues);
        res.json({ user: req.body, venues: filteredVenues });

    } catch (err) {
        console.error("Error fetching venues:", err);
        res.status(500).json({ error: "Database error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
