import TaskboardView from "../views/Taskboard/Taskboard.container";
import ShopView from "../views/Shop/Shop.container";
import MapView from "../views/Map/Map.container";

const RouteMap = [
  {
    path: "/",
    component: MapView,
  },
  {
    path: "/taskboard",
    component: TaskboardView,
  },
  {
    path: "/shop",
    component: ShopView,
  },
];

export default RouteMap;
