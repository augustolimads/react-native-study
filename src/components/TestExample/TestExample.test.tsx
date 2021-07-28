import React from "react";
import renderer from "react-test-renderer";

import { addNumber, TestExample } from ".";

describe("<TestExample />", () => {
  it("test", () => {
    const tree = renderer.create(<TestExample />).toJSON();
    console.log(tree);
    expect(tree.children.length).toBe(1);
  });
});
