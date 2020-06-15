import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button';

const Header = () => {
  const history = useHistory();

  const backBtnHandler = () => {
    history.goBack();
  };

  return (
    <div className="Header">
      <div className="Header__left">
        <Button onClick={backBtnHandler} buttonText="Back" />
      </div>
      <div className="Header__center">
        <h4>Podcasts</h4>
      </div>
      <div className="Header__right">
        <span className="">v0.1.0</span>
      </div>
    </div>
  );
}

export default Header;
