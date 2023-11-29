import { DataModel } from "../Helpers/MongooseScheme.js";

export const MonthData = async (req, res) => {
  try {
    const { month } = req.params;
    const items = await DataModel.find({ month: month });
    res.status(200).json({ message: "Success", items });
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
};
