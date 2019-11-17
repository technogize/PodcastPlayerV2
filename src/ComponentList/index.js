import React from 'react';

import Title from '../Title';
import TextInput from '../TextInput';
import Content from '../Content';

const ComponentList = (props) => {
  const htmlContent = `<div class="abc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod, nunc et volutpat malesuada, enim mi venenatis turpis, nec porta velit ipsum in urna. Vestibulum sed diam dictum, consectetur lorem eu, fermentum felis. Etiam vitae iaculis est, non auctor ipsum. Nunc ante erat, finibus et mollis sit amet, aliquam a nisl. </p>
                        <p>Donec gravida lorem condimentum suscipit dapibus. Donec congue pretium imperdiet.</p>
                        <p>Donec pellentesque, dolor ut tristique ultrices, nisl nunc tristique lorem, quis tristique velit magna et neque. Suspendisse potenti. Quisque elit libero, congue vitae viverra eu, faucibus ut nunc.</p>
                      </div>`

  return (
    <div className="ComponentList">
      <Title text="Component List" />
      <section className="ComponentList__section">
        <Title text="Title Component h2" tag="h2" />
        <Title text="Title Component h3" tag="h3" />
        <Title text="Title Component h4" tag="h4" />
      </section>
      <section className="ComponentList__section">
        <Title text="TextInput" tag="h2" />
        <TextInput 
          name="forename"
          placeholder="Enter here..."
          id="forename-id"
          inputCustomClass="Input__custom" 
          labelCustomClass="Input__label-custom" 
          label="First name" 
          inputCustomClass="Input__custom" 
        />
        <TextInput 
          id="orderId"
          name="orderId"
          isHidden
        />
      </section>
      <section className="ComponentList__section">
        <Title text="Content Component" tag="h2" />
        <Content 
          content={htmlContent}
          customClass="custom-class-here"
        />
      </section>
    </div>
  )
};

export default ComponentList;