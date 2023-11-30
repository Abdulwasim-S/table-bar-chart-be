import { DataModel } from "../Helpers/MongooseScheme.js";

export const AllCombined = async (req, res) => {
  try {
    const { month } = req.params;
    const items = await DataModel.find({ month: month });
    let data = {
      "0-100": 0,
      "101-200": 0,
      "201-300": 0,
      "301-400": 0,
      "401-500": 0,
      "501-600": 0,
      "601-700": 0,
      "701-800": 0,
      "900 above": 0,
    };
    const barchart_items = {};
    items.map((ele) => {
      const { price } = ele;
      if (price >= 0 && price <= 100) {
        barchart_items["0-100"] = barchart_items["0-100"] + 1;
      } else if (price >= 0 && price <= 100) {
        barchart_items["201-300"] = barchart_items["201-300"] + 1;
      } else if (price >= 0 && price <= 100) {
        barchart_items["301-400"] = barchart_items["301-400"] + 1;
      } else if (price >= 0 && price <= 100) {
        barchart_items["401-500"] = barchart_items["401-500"] + 1;
      } else if (price >= 0 && price <= 100) {
        barchart_items["501-600"] = barchart_items["501-600"] + 1;
      } else if (price >= 0 && price <= 100) {
        barchart_items["601-700"] = barchart_items["601-700"] + 1;
      } else if (price >= 0 && price <= 100) {
        barchart_items["701-800"] = barchart_items["701-800"] + 1;
      } else {
        barchart_items["900 above"] = barchart_items["900 above"] + 1;
      }
    });
    const categories = items.reduce((acc, curr) => {
      acc[curr.category] = (acc[curr.category] || 0) + 1;
      return acc;
    }, {});
    res
      .status(200)
      .json({ message: "Success", items, barchart_items, categories });
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
};
