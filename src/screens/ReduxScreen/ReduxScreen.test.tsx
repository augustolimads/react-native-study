import React from "react";
import renderer from "react-test-renderer";

import { ReduxScreen } from ".";

describe("<ReduxScreen />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<ReduxScreen />).toJSON();
    expect(tree.length).toBe(3);
  });
});
