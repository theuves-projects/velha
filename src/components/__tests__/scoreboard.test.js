import React from "react";
import Enzyme, {mount}  from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new Adapter()
});

import Scoreboard from "../Scoreboard.jsx";
import PlayerX from "../Player/PlayerX.jsx";
import PlayerO from "../Player/PlayerO.jsx";

describe("Scoreboard", () => {
  it("deve apresentar o score de x", () => {
    const props = {
      player: "x",
      score: 42
    }

    const wrapper = mount(<Scoreboard {...props} />);

    expect(wrapper.find(PlayerX).exists()).toBeTruthy();
    expect(wrapper.text()).toEqual("42");
  });

  it("deve apresentar o score de o", () => {
    const props = {
      player: "o",
      score: 42
    }

    const wrapper = mount(<Scoreboard {...props} />);

    expect(wrapper.find(PlayerO).exists()).toBeTruthy();
    expect(wrapper.text()).toBe("42");
  });
});
