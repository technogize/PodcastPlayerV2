import React from 'react';

// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Link } from 'react-router-dom';

import Title from '../Title';
import TextInput from '../TextInput';
import Content from '../Content';
import Button from '../Button';

const ComponentList = (props) => {
  const htmlContent = `<div class="abc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod, nunc et volutpat malesuada, enim mi venenatis turpis, nec porta velit ipsum in urna. Vestibulum sed diam dictum, consectetur lorem eu, fermentum felis. Etiam vitae iaculis est, non auctor ipsum. Nunc ante erat, finibus et mollis sit amet, aliquam a nisl. </p>
                        <p><a href="/">Donec gravida</a> lorem condimentum suscipit dapibus. Donec congue pretium imperdiet.</p>
                        <p>Donec pellentesque, dolor ut tristique ultrices, nisl nunc tristique lorem, quis tristique velit magna et neque. Suspendisse potenti. Quisque elit libero, congue vitae viverra eu, faucibus ut nunc.</p>
                      </div>`

  return (
    <div className="ComponentList">
      <div className="columns">
        <div className="column">
          <Title text="Component List" />
          <Link className="button" to="/">Click to go /</Link>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <section className="ComponentList__section">
            <Title text="Title Component h2" tag="h2" />
            <Title text="Title Component h3" tag="h3" />
            <Title text="Title Component h4" tag="h4" />
          </section>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <section className="ComponentList__section">
            <Title text="TextInput" tag="h2" />
            <TextInput 
              name="forename"
              placeholder="Enter here..."
              id="forename-id"
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
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <section className="ComponentList__section">
            <Title text="Content Component" tag="h2" />
            <Content 
              content={htmlContent}
              customClass="custom-class-here"
            />
          </section>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <section className="ComponentList__section">
            <Title text="Button Component" tag="h2" />
            <Button 
              isLink
              buttonText="Go to / (Primary)"
              buttonClass="is-primary"
              linkRoute="/"
            />

            <Button 
              buttonText="Regular"
            />

            <Button 
              buttonText="Text button"
              buttonClass="is-text"
            />

            <Button 
              buttonText="Info"
              buttonClass="is-info"
              clickHandler={(e) => console.log(e)}
            />

            <Button 
              buttonText="success"
              buttonClass="is-success"
            />

            <Button 
              buttonText="warning"
              buttonClass="is-warning"
            />

            <Button 
              buttonText="danger"
              buttonClass="is-danger"
            />
          </section>
        </div>
      </div>
    </div>
  )
};

export default ComponentList;