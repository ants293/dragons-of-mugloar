import ShopView from "./Shop";
import { shallow } from "enzyme";
import React from "react";
import { getTestSelector } from "../../shared/TestUtilities";

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

  var listItem = wrapper.find(getTestSelector("list item"));

  it("should render shoppinglist items", () => {
    expect(listItem.length).toBe(2);
  });

  it("should trigger success toast on successful purchase", () => {
    listItem.at(0).simulate("click");
  });

  it("should trigger error toast on a failed purchase", () => {
    listItem.at(0).simulate("click");
  });
});
