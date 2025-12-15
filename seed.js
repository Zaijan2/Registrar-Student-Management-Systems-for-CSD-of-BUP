require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Resident = require('./models/Resident'); // Adjust path if needed

const uri = process.env.MONGO_URI || "mongodb+srv://alvaradozaijan_db_user:Zaijan042605@cluster0.j7xbxji.mongodb.net/baranggayconnect?retryWrites=true&w=majority";

mongoose.connect(uri)
  .then(() => console.log("MongoDB connected for seeding"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// 50 sample residents
const residents = [
  { firstName: "Juan", middleName: "Santos", lastName: "Dela Cruz", age: 35, address: "Zone 1, Street 1, Barangay Connect", contact: "09123450001", email: "resident1@example.com", password: "Password1" },
  { firstName: "Maria", middleName: "Lopez", lastName: "Reyes", age: 28, address: "Zone 2, Street 2, Barangay Connect", contact: "09123450002", email: "resident2@example.com", password: "Password2" },
  { firstName: "Pedro", middleName: "Gonzales", lastName: "Santos", age: 42, address: "Zone 3, Street 3, Barangay Connect", contact: "09123450003", email: "resident3@example.com", password: "Password3" },
  { firstName: "Ana", middleName: "Cruz", lastName: "Morales", age: 30, address: "Zone 4, Street 4, Barangay Connect", contact: "09123450004", email: "resident4@example.com", password: "Password4" },
  { firstName: "Luis", middleName: "Reyes", lastName: "Torres", age: 38, address: "Zone 5, Street 5, Barangay Connect", contact: "09123450005", email: "resident5@example.com", password: "Password5" },
  { firstName: "Cecilia", middleName: "Gomez", lastName: "Santos", age: 27, address: "Zone 6, Street 6, Barangay Connect", contact: "09123450006", email: "resident6@example.com", password: "Password6" },
  { firstName: "Ramon", middleName: "Diaz", lastName: "Reyes", age: 40, address: "Zone 7, Street 7, Barangay Connect", contact: "09123450007", email: "resident7@example.com", password: "Password7" },
  { firstName: "Luz", middleName: "Torres", lastName: "Morales", age: 33, address: "Zone 1, Street 8, Barangay Connect", contact: "09123450008", email: "resident8@example.com", password: "Password8" },
  { firstName: "Carlos", middleName: "Santos", lastName: "Dela Cruz", age: 29, address: "Zone 2, Street 9, Barangay Connect", contact: "09123450009", email: "resident9@example.com", password: "Password9" },
  { firstName: "Isabel", middleName: "Reyes", lastName: "Gonzales", age: 36, address: "Zone 3, Street 10, Barangay Connect", contact: "09123450010", email: "resident10@example.com", password: "Password10" },
  { firstName: "Miguel", middleName: "Morales", lastName: "Torres", age: 41, address: "Zone 4, Street 11, Barangay Connect", contact: "09123450011", email: "resident11@example.com", password: "Password11" },
  { firstName: "Paula", middleName: "Santos", lastName: "Dela Cruz", age: 25, address: "Zone 5, Street 12, Barangay Connect", contact: "09123450012", email: "resident12@example.com", password: "Password12" },
  { firstName: "Jose", middleName: "Lopez", lastName: "Reyes", age: 37, address: "Zone 6, Street 13, Barangay Connect", contact: "09123450013", email: "resident13@example.com", password: "Password13" },
  { firstName: "Gloria", middleName: "Torres", lastName: "Gonzales", age: 32, address: "Zone 7, Street 14, Barangay Connect", contact: "09123450014", email: "resident14@example.com", password: "Password14" },
  { firstName: "Alfredo", middleName: "Santos", lastName: "Morales", age: 39, address: "Zone 1, Street 15, Barangay Connect", contact: "09123450015", email: "resident15@example.com", password: "Password15" },
  { firstName: "Beatriz", middleName: "Reyes", lastName: "Dela Cruz", age: 34, address: "Zone 2, Street 16, Barangay Connect", contact: "09123450016", email: "resident16@example.com", password: "Password16" },
  { firstName: "Hector", middleName: "Morales", lastName: "Torres", age: 28, address: "Zone 3, Street 17, Barangay Connect", contact: "09123450017", email: "resident17@example.com", password: "Password17" },
  { firstName: "Clara", middleName: "Santos", lastName: "Gonzales", age: 31, address: "Zone 4, Street 18, Barangay Connect", contact: "09123450018", email: "resident18@example.com", password: "Password18" },
  { firstName: "Daniel", middleName: "Lopez", lastName: "Reyes", age: 27, address: "Zone 5, Street 19, Barangay Connect", contact: "09123450019", email: "resident19@example.com", password: "Password19" },
  { firstName: "Emilia", middleName: "Torres", lastName: "Morales", age: 36, address: "Zone 6, Street 20, Barangay Connect", contact: "09123450020", email: "resident20@example.com", password: "Password20" },
  { firstName: "Fernando", middleName: "Santos", lastName: "Dela Cruz", age: 40, address: "Zone 7, Street 21, Barangay Connect", contact: "09123450021", email: "resident21@example.com", password: "Password21" },
  { firstName: "Gabriela", middleName: "Reyes", lastName: "Torres", age: 29, address: "Zone 1, Street 22, Barangay Connect", contact: "09123450022", email: "resident22@example.com", password: "Password22" },
  { firstName: "Hugo", middleName: "Morales", lastName: "Gonzales", age: 33, address: "Zone 2, Street 23, Barangay Connect", contact: "09123450023", email: "resident23@example.com", password: "Password23" },
  { firstName: "Irene", middleName: "Santos", lastName: "Dela Cruz", age: 31, address: "Zone 3, Street 24, Barangay Connect", contact: "09123450024", email: "resident24@example.com", password: "Password24" },
  { firstName: "Javier", middleName: "Lopez", lastName: "Reyes", age: 38, address: "Zone 4, Street 25, Barangay Connect", contact: "09123450025", email: "resident25@example.com", password: "Password25" },
  { firstName: "Karina", middleName: "Torres", lastName: "Morales", age: 27, address: "Zone 5, Street 26, Barangay Connect", contact: "09123450026", email: "resident26@example.com", password: "Password26" },
  { firstName: "Leonardo", middleName: "Santos", lastName: "Gonzales", age: 39, address: "Zone 6, Street 27, Barangay Connect", contact: "09123450027", email: "resident27@example.com", password: "Password27" },
  { firstName: "Michaela", middleName: "Reyes", lastName: "Dela Cruz", age: 34, address: "Zone 7, Street 28, Barangay Connect", contact: "09123450028", email: "resident28@example.com", password: "Password28" },
  { firstName: "Nestor", middleName: "Morales", lastName: "Torres", age: 35, address: "Zone 1, Street 29, Barangay Connect", contact: "09123450029", email: "resident29@example.com", password: "Password29" },
  { firstName: "Olivia", middleName: "Santos", lastName: "Gonzales", age: 28, address: "Zone 2, Street 30, Barangay Connect", contact: "09123450030", email: "resident30@example.com", password: "Password30" },
  { firstName: "Patrick", middleName: "Lopez", lastName: "Dela Cruz", age: 37, address: "Zone 3, Street 31, Barangay Connect", contact: "09123450031", email: "resident31@example.com", password: "Password31" },
  { firstName: "Queenie", middleName: "Torres", lastName: "Reyes", age: 33, address: "Zone 4, Street 32, Barangay Connect", contact: "09123450032", email: "resident32@example.com", password: "Password32" },
  { firstName: "Ricardo", middleName: "Santos", lastName: "Morales", age: 41, address: "Zone 5, Street 33, Barangay Connect", contact: "09123450033", email: "resident33@example.com", password: "Password33" },
  { firstName: "Sofia", middleName: "Reyes", lastName: "Gonzales", age: 26, address: "Zone 6, Street 34, Barangay Connect", contact: "09123450034", email: "resident34@example.com", password: "Password34" },
  { firstName: "Tomas", middleName: "Morales", lastName: "Dela Cruz", age: 38, address: "Zone 7, Street 35, Barangay Connect", contact: "09123450035", email: "resident35@example.com", password: "Password35" },
  { firstName: "Una", middleName: "Santos", lastName: "Torres", age: 30, address: "Zone 1, Street 36, Barangay Connect", contact: "09123450036", email: "resident36@example.com", password: "Password36" },
  { firstName: "Victor", middleName: "Lopez", lastName: "Reyes", age: 42, address: "Zone 2, Street 37, Barangay Connect", contact: "09123450037", email: "resident37@example.com", password: "Password37" },
  { firstName: "Wendy", middleName: "Torres", lastName: "Gonzales", age: 29, address: "Zone 3, Street 38, Barangay Connect", contact: "09123450038", email: "resident38@example.com", password: "Password38" },
  { firstName: "Xavier", middleName: "Santos", lastName: "Dela Cruz", age: 36, address: "Zone 4, Street 39, Barangay Connect", contact: "09123450039", email: "resident39@example.com", password: "Password39" },
  { firstName: "Yolanda", middleName: "Reyes", lastName: "Morales", age: 31, address: "Zone 5, Street 40, Barangay Connect", contact: "09123450040", email: "resident40@example.com", password: "Password40" },
  { firstName: "Zane", middleName: "Torres", lastName: "Gonzales", age: 27, address: "Zone 6, Street 41, Barangay Connect", contact: "09123450041", email: "resident41@example.com", password: "Password41" },
  { firstName: "Alyssa", middleName: "Santos", lastName: "Dela Cruz", age: 33, address: "Zone 7, Street 42, Barangay Connect", contact: "09123450042", email: "resident42@example.com", password: "Password42" },
  { firstName: "Benjamin", middleName: "Reyes", lastName: "Torres", age: 35, address: "Zone 1, Street 43, Barangay Connect", contact: "09123450043", email: "resident43@example.com", password: "Password43" },
  { firstName: "Camila", middleName: "Morales", lastName: "Gonzales", age: 28, address: "Zone 2, Street 44, Barangay Connect", contact: "09123450044", email: "resident44@example.com", password: "Password44" },
  { firstName: "Diego", middleName: "Santos", lastName: "Dela Cruz", age: 40, address: "Zone 3, Street 45, Barangay Connect", contact: "09123450045", email: "resident45@example.com", password: "Password45" },
  { firstName: "Elena", middleName: "Reyes", lastName: "Torres", age: 32, address: "Zone 4, Street 46, Barangay Connect", contact: "09123450046", email: "resident46@example.com", password: "Password46" },
  { firstName: "Francisco", middleName: "Morales", lastName: "Gonzales", age: 37, address: "Zone 5, Street 47, Barangay Connect", contact: "09123450047", email: "resident47@example.com", password: "Password47" },
  { firstName: "Gabrielle", middleName: "Santos", lastName: "Dela Cruz", age: 30, address: "Zone 6, Street 48, Barangay Connect", contact: "09123450048", email: "resident48@example.com", password: "Password48" },
  { firstName: "Harrison", middleName: "Reyes", lastName: "Torres", age: 38, address: "Zone 7, Street 49, Barangay Connect", contact: "09123450049", email: "resident49@example.com", password: "Password49" },
  { firstName: "Natalie", middleName: "Torres", lastName: "Santos", age: 32, address: "Zone 1, Street 50, Barangay Connect", contact: "09123450050", email: "resident50@example.com", password: "Password50" }
];


const seedResidents = async () => {
  try {
    await Resident.deleteMany({});
    console.log("Existing residents removed");

    const residentsWithHashedPasswords = await Promise.all(
      residents.map(async r => {
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(r.password, salt);
        return { ...r, passwordHash, password: undefined };
      })
    );

    await Resident.insertMany(residentsWithHashedPasswords);
    console.log("50 residents seeded successfully");
    mongoose.disconnect();
  } catch (err) {
    console.error("Seeding error:", err);
    mongoose.disconnect();
  }
};

seedResidents();
