import mongoose from "mongoose";

const configDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });
    console.log(`DataBase Connected at ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
  }
};

export default configDB;
