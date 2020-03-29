import { connect } from "react-redux";
import Component from "./Shop";
import { actionRequestShopList } from "../../actions/ShopActions";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionRequestShopList: () => actionRequestShopList(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
