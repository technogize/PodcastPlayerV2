import React from "react";
import { shallow } from "../enzyme";
import Image from ".";

describe("Content component tests", () => {
  it("Renders Content", () => {
    shallow(
      <Image
        alt="Picture here"
        url="https://cdn.friendsoftheearth.uk/sites/default/files/styles/media_with_text_image/public/media/images/forest-sky_0.jpg"
      />
    );
  });
});
