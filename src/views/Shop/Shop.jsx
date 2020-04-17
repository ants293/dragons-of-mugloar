import React, { useEffect } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import MainViewWrapper from "../../components/Wrapper/Wrapper";

import "./style.scss";

ShopView.propTypes = {
  actionRequestShopBuy: PropTypes.func.isRequired,
  actionRequestShopList: PropTypes.func.isRequired,
  shop: PropTypes.shape({ items: PropTypes.array }),
};

function ShopView({
  actionRequestShopBuy,
  actionRequestShopList,
  shop = { items: [] },
}) {

  useEffect(() => {
    actionRequestShopList();
  }, [actionRequestShopList]);

  return (
    <MainViewWrapper title={"Item shop"}>
      <div className="col-5">
        <div className="shopkeeper-illustration"></div>
      </div>
      <div className="col-7 items-list">
        {shop.items.map((item) => (
          <div
            className="items-list__item"
            data-testelement="list item"
            key={item.id}
            onClick={() => buyItem(item.id, actionRequestShopBuy, item.name)}
          >
            <span className="items-list__label">{item.name}</span>
            <span className="items-list__label">{item.cost}</span>
          </div>
        ))}
      </div>
    </MainViewWrapper>
  );
}

const buyItem = async (id, request, name) => {
  request(id).then((purchaseResult) => {
    if (purchaseResult) {
      toast.success(`You just bought a ${name}`);
    } else {
      toast.error(`You do not have money for that!`);
    }
  });
};

export default ShopView;
