import TaskboardView from "../views/Taskboard/Taskboard";
import StoreView from "../views/Store/Store";
import MapView from "../views/Map/Map";

const RouteMap = [
  {
    path: "/",
    component: () => MapView(),
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
