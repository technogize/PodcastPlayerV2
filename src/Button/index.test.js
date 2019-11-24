import React from "react";
import { shallow } from "../enzyme";
import Button from ".";

describe("Content component tests", () => {
  it("Renders Content", () => {
    shallow(<Button buttonText="warning" buttonClass="is-warning" />);
  });

  it("Test click event", () => {
    const btnClickCallback = jest.fn();

    const button = shallow(<Button clickHandler={btnClickCallback} />);
    button.find("button").simulate("click");
    expect(btnClickCallback.mock.calls.length).toEqual(1);
  });
});
