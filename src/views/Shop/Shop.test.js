import ShopView from "./Shop";
import { shallow } from "enzyme";
import React from "react";
import { getTestSelector } from "../../setupTests";

describe("Shop", () => {
  let playerCash = 80;
  const mockItemList = [
    {
      id: 1,
      name: "sword",
      cost: 50,
    },
    {
      id: 2,
      name: "sword",
      cost: 100,
    },
  ];

  const MockShopApiBuy = (id) =>
    new Promise((resolve, reject) => {
      var selectedItem = mockItemList.find((item) => item.id === id);

      if (playerCash - selectedItem.cost >= 0) {
        playerCash = playerCash - selectedItem.cost;
        resolve(true);
      } else {
        resolve();
      }
    });

  const wrapper = shallow(
    <ShopView
      actionRequestShopBuy={(id) => {
        return MockShopApiBuy(id);
      }}
      actionRequestShopList={() => {}}
      shop={{ items: mockItemList }}
    />
  );

  it("should render shoppinglist items", () => {
    var listItem = wrapper.find(getTestSelector("list item"));
    expect(listItem.length).toBe(2);
    listItem.at(0).simulate("click");
  });
});
