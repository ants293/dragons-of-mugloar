import React, { useEffect } from "react";
import "./style.scss";
import InteractionBar from "../../components/InteractionBar/InteractionBar.container";

function ShopView({
  actionRequestShopBuy = () => {},
  actionRequestShopList = () => {},
  shop = { items: [] },
}) {
  useEffect(() => {
    actionRequestShopList();
  }, []);

  return (
    <div className="container h-full">
      <div className="d-flex align-items-center justify-content-center h-full">
        <div className="row w-full">
          <div className="col-12">
            <InteractionBar
              title={'Item shop'}
            />
          </div>
          <div className="col-5">
            <div className="shopkeeper-illustration"></div>
          </div>
          <div className="col-7 items-list">
            {shop.items.map((item) => (
              <div
                className="items-list__item"
                key={item.id}
                onClick={() => buyItem(item.id, actionRequestShopBuy)}
              >
                <span>{item.name}</span>
                <span>{item.cost}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const buyItem = async (id, request) => {
  request(id).then((purchaseResult) => {
    console.log(purchaseResult);
  });
};

export default ShopView;
