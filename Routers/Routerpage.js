import express from "express";
import { FeedData } from "../Controllers/Feed.js";
import { Check } from "../Controllers/Check.js";
import { MonthData } from "../Controllers/Month.js";
import { CategoryFilter } from "../Controllers/CategoryFilter.js";
import { BarChartData } from "../Controllers/BarChartFilter.js";
import { AllCombined } from "../Controllers/AllCombined.js";

const route = express.Router();

//For Backend Check And Database Purpose
route.get("/", Check);
route.get("/feed", FeedData);
//For Table
route.get("/month/:month", MonthData);
//For Pie chart
route.get("/category/:month", CategoryFilter);
//For Bar chart
route.get("/barchart/:month", BarChartData);
//For all 3 combined
route.get("/allcombined/:month", AllCombined);

export const Routers = route;
