import { connect } from "react-redux";
import Component from "./Shop";
import { actionStartGame } from "../../actions/GameActions";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionGameStart: () => actionStartGame(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
