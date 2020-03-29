import React from "react";
import "./style.scss";
import MainViewWrapper from "../../components/Wrapper";

function TaskboardView() {
  return (
    <MainViewWrapper title="Available jobs">
      <div className="col-5">
        <div>some illustration</div>
      </div>
      <div className="col-7 items-list">
        <div>list here</div>
      </div>
    </MainViewWrapper>
  );
}

export default TaskboardView;
