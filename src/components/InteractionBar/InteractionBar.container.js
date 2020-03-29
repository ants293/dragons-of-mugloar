import { connect } from "react-redux";
import Component from "./InteractionBar";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    redirect: (path) => dispatch({ to: path, type: "ROUTE" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
