import React from "react";

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
    statisticsItems.push(
      <div><span className={stats[key].icon} />{stats[key].value}</div>
    );
  }
  return statisticsItems;
};

export default Infobar;
