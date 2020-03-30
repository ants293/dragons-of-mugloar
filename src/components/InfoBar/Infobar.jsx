import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import ButtonBack from "../Buttons/ButtonBack/ButtonBack";

import "./styles.scss";

const statObject = PropTypes.shape({
  value: PropTypes.number || PropTypes.string,
  icon: PropTypes.string,
});

Infobar.propTypes = {
  redirect: PropTypes.func.isRequired,
  relevantStats: PropTypes.shape({
    lives: statObject,
    gold: statObject,
    level: statObject,
    score: statObject,
  }),
};

function Infobar({ relevantStats, redirect }) {
  return (
    <div className="infobar">
      <div className="container d-flex justify-content-between align-items-center">
        <ButtonBack
          onButtonPress={() => redirect("/play")}
          title={"Back to menu"}
        />
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
