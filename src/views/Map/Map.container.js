import { connect } from "react-redux";
import Component from "./Map";
import { actionRequestStartGame } from "../../actions/GameActions";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionRequestStartGame: () => actionRequestStartGame(dispatch),
    redirect: (path) => dispatch({ to: path, type: "ROUTE" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
