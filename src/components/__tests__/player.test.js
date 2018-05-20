import React from "react";
import Enzyme, {mount}  from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new Adapter()
});

import Player from "../Player/index.jsx";

describe("Player", () => {
  it("deve conter um svg", () => {
    const props = {
      name: "x"
    };

    const wrapper = mount(<Player {...props} />);

    expect(wrapper.find("svg").exists()).toBeTruthy();
  });

  it("deve retornar uma <div> vazia", () => {
    const wrapper = mount(<Player />);

    expect(wrapper.html()).toEqual("<div></div>");
  });
});
