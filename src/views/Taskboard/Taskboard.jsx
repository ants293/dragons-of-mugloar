import React, { useEffect } from "react";
import "./style.scss";
import MainViewWrapper from "../../components/Wrapper";

function TaskboardView({ actionRequestTaskList = () => {}, tasks = [] }) {
  useEffect(() => {
    actionRequestTaskList();
  }, []);

  console.log(tasks);

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
