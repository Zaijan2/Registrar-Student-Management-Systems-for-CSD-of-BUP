require('dotenv').config();
const mongoose = require('mongoose');
const Resident = require('./models/Resident'); // adjust path if needed

const uri = process.env.MONGO_URI;

const clearResidents = async () => {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');

    const result = await Resident.deleteMany({});
    console.log(`Deleted ${result.deletedCount} residents`);

    await mongoose.disconnect();
    console.log('MongoDB disconnected');
    process.exit(0);
  } catch (err) {
    console.error('Error clearing residents:', err);
    process.exit(1);
  }
};

clearResidents();
