import React, { useEffect } from "react";
import "./style.scss";
import InteractionBar from "../../components/InteractionBar/InteractionBar.container";
import MainViewWrapper from "../../components/Wrapper/Wrapper";
import {toast} from "react-toastify";

function ShopView({
  actionRequestShopBuy = () => {},
  actionRequestShopList = () => {},
  shop = { items: [] },
}) {
  useEffect(() => {
    actionRequestShopList();
  }, []);

  return (
    <MainViewWrapper title={"Item shop"}>
      <div className="col-5">
        <div className="shopkeeper-illustration"></div>
      </div>
      <div className="col-7 items-list">
        {shop.items.map((item) => (
          <div
            className="items-list__item"
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
