import React from "react";
import Enzyme, {mount}  from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new Adapter()
});

import Table from "../Table/index.jsx";
import TableCell from "../Table/TableCell.jsx";
import Player from "../Player/index.jsx";
import PlayerX from "../Player/PlayerX.jsx";
import PlayerO from "../Player/PlayerO.jsx";

describe("Table", () => {
  it("deve criar as células", () => {
    const props = {
      cells: [
        {i: 1},
        {i: 2},
        {i: 3}
      ]
    };

    const wrapper = mount(<Table {...props} />);

    expect(wrapper.find(TableCell).length).toEqual(3);

    wrapper.find(TableCell).forEach(node => {
      expect(node.find(Player).html()).toEqual("<div></div>");
    });
  });

  it("deve criar as células com desenhos", () => {
    const props = {
      cells: [
        {i: 1, name: "x"},
        {i: 2, name: "x"},
        {i: 3, name: "x"}
      ]
    };

    const wrapper = mount(<Table {...props} />);

    wrapper.find(TableCell).forEach(node => {
      expect(node.find(PlayerX).exists()).toBeTruthy();
      expect(node.find(PlayerO).exists()).toBeFalsy();
    });
  });
});
