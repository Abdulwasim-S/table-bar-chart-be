import { DataModel } from "../Helpers/MongooseScheme.js";

export const BarChartData = async (req, res) => {
  try {
    const { month } = req.params;
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
    const items = await DataModel.find({ month: month });
    items.map((ele) => {
      const { price } = ele;
      if (price >= 0 && price <= 100) {
        data["0-100"] = data["0-100"] + 1;
      } else if (price >= 101 && price <= 200) {
        data["101-200"] = data["101-200"] + 1;
      } else if (price >= 201 && price <= 300) {
        data["201-300"] = data["201-300"] + 1;
      } else if (price >= 301 && price <= 400) {
        data["301-400"] = data["301-400"] + 1;
      } else if (price >= 401 && price <= 500) {
        data["401-500"] = data["401-500"] + 1;
      } else if (price >= 501 && price <= 600) {
        data["501-600"] = data["501-600"] + 1;
      } else if (price >= 601 && price <= 700) {
        data["601-700"] = data["601-700"] + 1;
      } else if (price >= 701 && price <= 800) {
        data["701-800"] = data["701-800"] + 1;
      } else {
        data["900 above"] = data["900 above"] + 1;
      }
    });
    res.status(200).json({ message: "Success", data });
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
};
