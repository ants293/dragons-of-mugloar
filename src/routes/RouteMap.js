import TaskboardView from "../views/Taskboard/Taskboard.container";
import ShopView from "../views/Shop/Shop.container";
import MapView from "../views/Map/Map.container";
import PlayView from "../views/Play/Play.container";
import LoseView from "../views/Lose/Lose";

const RouteMap = [
  {
    path: "/",
    component: MapView,
    private: true,
  },
  {
    path: "/play",
    component: PlayView,
  },
  {
    path: "/taskboard",
    component: TaskboardView,
    private: true,
  },
  {
    path: "/shop",
    component: ShopView,
    private: true,
  },
  {
    path: "/lose",
    component: LoseView,
  },
];

export default RouteMap;
