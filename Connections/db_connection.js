import mongoose from "mongoose";
import "dotenv/config";

export const db_connection = async () => {
  const { DB_URL } = process.env;
  await mongoose
    .connect(DB_URL)
    .then((res) => {
      console.log("connected");
    })
    .catch((error) => {
      console.log("Error....", error);
    });
};
