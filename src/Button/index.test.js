import React from "react";
import { shallow } from "../enzyme";
import Button from ".";

describe("Content component tests", () => {
  it("Renders Content", () => {
    shallow(<Button buttonText="warning" buttonClass="is-warning" />);
  });
});
