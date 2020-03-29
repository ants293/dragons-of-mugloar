import { connect } from "react-redux";
import Component from "./Map";
import { actionStartGame } from "../../actions/GameActions";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionGameStart: () => actionStartGame(dispatch),
    redirect: (path) => dispatch({ to: path, type: "ROUTE" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
