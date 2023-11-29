import { DataModel } from "../Helpers/MongooseScheme.js";

export const CategoryFilter = async (req, res) => {
  try {
    const { month } = req.params;
    const items = await DataModel.find({ month: month });
    const categories = items.reduce((acc, curr) => {
      acc[curr.category] = (acc[curr.category] || 0) + 1;
      return acc;
    }, {});
    res.status(200).json({ message: "Success", categories });
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
};
