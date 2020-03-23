import DashboardView from "../views/Dashboard/Dashboard";
import TaskboardView from "../views/Taskboard/Taskboard";
import StoreView from "../views/Store/Store";

const RouteMap = [
  {
    path: "/dashboard",
    component: () => DashboardView(),
  },
  {
    path: "/taskboard",
    component: () => TaskboardView(),
  },
  {
    path: "/store",
    component: () => StoreView(),
  },
];

export default RouteMap;
