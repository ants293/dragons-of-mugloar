import { connect } from "react-redux";
import Component from "./Shop";
import {
  actionRequestShopBuy,
  actionRequestShopList,
} from "../../actions/ShopActions";

const mapStateToProps = (state) => {
  return {
    shop: state.shop,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionRequestShopList: () => actionRequestShopList(dispatch),
    actionRequestShopBuy: (id) => actionRequestShopBuy(dispatch, id),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
