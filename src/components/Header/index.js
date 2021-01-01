import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
import OnlineStatus from '../OnlineStatus';

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
        <div>
          <OnlineStatus />
        </div>
      </div>
    </div>
  );
};

export default Header;
