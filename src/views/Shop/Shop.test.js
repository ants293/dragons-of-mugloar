import ShopView from "./Shop";
import { shallow } from "enzyme";
import React from "react";
import MainViewWrapper from "../../components/Wrapper/Wrapper";

describe("Shop", () => {
  const mockItemList = [
    {
      id: 1,
      name: "sword",
    },
    {
      id: 2,
      name: "sword",
    },
  ];

  it("should shopping list", () => {
    const wrapper = shallow(
      <ShopView
        actionRequestShopBuy={() => {}}
        actionRequestShopList={() => {}}
        shop={{ items: mockItemList }}
      >
      </ShopView>
    );

    expect(wrapper.find(".items-list__item").length).toBe(2);
  });
});
