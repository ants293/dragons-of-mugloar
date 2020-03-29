import {
  faArrowLeft,
  faCoins,
  faHeart,
  faSignal,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

export const setSiteIcons = () => {
  library.add(faHeart, faSignal, faCoins, faStar, faArrowLeft);
};
