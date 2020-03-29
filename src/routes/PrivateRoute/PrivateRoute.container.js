import { connect } from "react-redux";
import Component from "./PrivateRoute";

const mapStateToProps = (state) => {
  return {
    game: state.game,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    redirect: (path) => dispatch({ to: path, type: "ROUTE" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
