import React from 'react';

function Controls(props) {
  return (
    <div id="ui-elements">
      <div className="bottom-menu">
        <button onClick={props.toggleSimulationStatus}>
          {props.simulation_running ? 'Pause' : 'Start'}
        </button>
        <input
          onInput={props.handleInput}
          disabled={props.current_generation > 0}
          name="cols"
          placeholder="columns"
          type="hidden"
        />
        <input
          onInput={props.handleInput}
          disabled={props.current_generation > 0}
          name="rows"
          placeholder="rows"
          type="hidden"
        />
      </div>

      <div className="top-menu">
        <span>Generation: {props.current_generation}</span>
      </div>
    </div>
  );
}

export default Controls;
