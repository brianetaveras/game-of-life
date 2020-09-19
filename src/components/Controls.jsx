import React from 'react';

function Controls(props) {
  return (
    <div id="ui-elements">
      <div className="bottom-menu">
        <div className="buttons-container">
          <button onClick={props.toggleSimulationStatus}>
            {props.simulation_running ? 'Pause' : 'Start'}
          </button>
          <button>Clear</button>
          <button>Random</button>
        </div>
      </div>

      <div className="top-menu">
  <span>Generation: {props.current_generation}</span>
      </div>
    </div>
  );
}

export default Controls;
