import React from 'react';

// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Link } from 'react-router-dom';

import Title from '../Title';
import TextInput from '../TextInput';
import Content from '../Content';
import Button from '../Button';
import Image from '../Image';
import Modal from '../Modal';

const ComponentList = () => {
  const htmlContent = `<div class="abc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod, nunc et volutpat malesuada, enim mi venenatis turpis, nec porta velit ipsum in urna. Vestibulum sed diam dictum, consectetur lorem eu, fermentum felis. Etiam vitae iaculis est, non auctor ipsum. Nunc ante erat, finibus et mollis sit amet, aliquam a nisl. </p>
                        <p><a href="/">Donec gravida</a> lorem condimentum suscipit dapibus. Donec congue pretium imperdiet.</p>
                        <p>Donec pellentesque, dolor ut tristique ultrices, nisl nunc tristique lorem, quis tristique velit magna et neque. Suspendisse potenti. Quisque elit libero, congue vitae viverra eu, faucibus ut nunc.</p>
                      </div>`;

  return (
    <div className="ComponentList">
      <div className="columns">
        <div className="column">
          <Title text="Component List" />
          <Link className="button" to="/">
            Click to go /
          </Link>
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
              labelClass="Input__label-custom"
              label="First name"
              inputClass="Input__custom"
            />
            <TextInput id="orderId" name="orderId" isHidden />
          </section>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <section className="ComponentList__section">
            <Title text="Content Component" tag="h2" />
            <Content content={htmlContent} className="custom-class-here" />
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
              className="is-primary"
              linkRoute="/"
            />

            <Button buttonText="Regular" />

            <Button className="Button--icon Button--icon-play" />

            <Button buttonText="Text button" className="is-text" />

            <Button
              buttonText="Info"
              className="is-info"
              onClick={() => console.log('this is a button')} // eslint-disable-line no-console
            />

            <Button buttonText="success" className="is-success" />

            <Button buttonText="warning" className="is-warning" />

            <Button buttonText="danger" className="is-danger" />
          </section>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <section className="ComponentList__section">
            <Title text="Image Component" tag="h2" />
            <Image
              alt="Picture here"
              url="https://cdn.friendsoftheearth.uk/sites/default/files/styles/media_with_text_image/public/media/images/forest-sky_0.jpg"
            />
          </section>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <section className="ComponentList__section">
            <Title text="ReactModal Component" tag="h2" />
            <Modal buttonClass="Button is-primary" buttonText="Open modal 1">
              <h2>Opened Modal 1</h2>
              <p>
                This is a test. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Mauris a semper orci. Nunc accumsan luctus
                lacus id lacinia. Cras finibus mattis lacus ut blandit. Cras
                fermentum turpis vitae augue vehicula scelerisque. Morbi sed
                rhoncus quam. Morbi a imperdiet sapien. Quisque pulvinar eros
                sit amet pellentesque pretium.
              </p>
            </Modal>
            <Modal buttonClass="Button Button--icon Button--icon-menu">
              <h2>Opened Modal 2</h2>
              <p>This is a test for modal 2</p>
            </Modal>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ComponentList;
