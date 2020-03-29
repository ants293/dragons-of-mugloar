import React from "react";

function ShopView(props) {
  const { actionRequestShopList } = props;

  actionRequestShopList();

  return (<div className="container"></div>);
}

export default ShopView;
