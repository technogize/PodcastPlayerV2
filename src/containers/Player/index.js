import React from 'react';
import { connect } from 'react-redux';
import Player from '../../components/Player';

const PlayerContainer = () => {
  return (
    <div className="PlayerContainer">
      <Player url="https://traffic.libsyn.com/secure/retronauts/442_Retronauts_Episode_302__Star_Trek_The_Motion_Picture__Mega_Man_Battle_Network_1.mp3?dest-id=150094" />
    </div>
  );
};

export default PlayerContainer;
