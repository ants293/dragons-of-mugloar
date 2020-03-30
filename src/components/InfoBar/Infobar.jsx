import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const statObject = PropTypes.shape({
  value: PropTypes.number || PropTypes.string,
  icon: PropTypes.string,
});

Infobar.propTypes = {
  relevantStats: PropTypes.shape({
    lives: statObject,
    gold: statObject,
    level: statObject,
    score: statObject,
  }),
};

function Infobar({ relevantStats }) {
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
    if (stats.hasOwnProperty(key)) {
      statisticsItems.push(
        <div key={`${stats[key].value}-${stats[key].icon}`} className="ml-2">
          <FontAwesomeIcon
            icon={stats[key].icon}
            className="infobar__icon mr-1"
          />
          {stats[key].value}
        </div>
      );
    }
  }
  return statisticsItems;
};

export default Infobar;
