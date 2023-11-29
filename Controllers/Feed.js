import { tableData } from "../Data/data.js";
import { DataModel } from "../Helpers/MongooseScheme.js";

export const FeedData = async (req, res) => {
  try {
    const data = tableData;
    data.map(async (ele) => {
      const {
        id,
        title,
        description,
        category,
        sold,
        image,
        price,
        dateOfSale,
      } = ele;
      const month = dateOfSale.split("-")[1];
      await DataModel({
        id,
        title,
        description,
        category,
        sold,
        image,
        price,
        dateOfSale,
        month,
      }).save();
      console.log("Saved ", id);
    });
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log("Error...", error);
  }
};
