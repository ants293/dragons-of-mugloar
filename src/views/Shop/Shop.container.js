import { connect } from "react-redux";
import Component from "./Shop";
import { actionRequestStartGame } from "../../actions/GameActions";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionRequestStartGame: () => actionRequestStartGame(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
