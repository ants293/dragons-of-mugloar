import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Infobar(props) {
  const { relevantStats } = props;

  return (
    <div className="infobar">
      <div className="container">
        <div className="infobar__icons d-flex justify-content-end">
          {getStatisticsWithIconsHTML(relevantStats)}
        </div>
      </div>
    </div>
  );
}

const getStatisticsWithIconsHTML = (stats) => {
  const statisticsItems = [];

  for (const key in stats) {
    console.log(stats[key].icon);
    statisticsItems.push(
      <div>
        <FontAwesomeIcon icon={stats[key].icon} />
        {stats[key].value}
      </div>
    );
  }
  return statisticsItems;
};

export default Infobar;
