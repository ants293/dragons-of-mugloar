import React, { useEffect } from "react";

function ShopView({
  actionRequestShopBuy = () => {},
  actionRequestShopList = () => {},
  shop = { items: [] },
}) {
  useEffect(() => {
    actionRequestShopList();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-5">Image of a guy</div>
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
  );
}

const buyItem = async (id, request) => {
  request(id).then((purchaseResult) => {
    console.log(purchaseResult);
  });
};

export default ShopView;
